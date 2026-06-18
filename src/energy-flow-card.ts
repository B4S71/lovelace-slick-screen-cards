/**
 * Energy Flow Card
 * @version 0.2.0
 */

import { LitElement, html, css } from 'lit';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  type Plugin,
} from 'chart.js';
import type { HomeAssistant, EnergyFlowCardConfig, HistoryState } from './types';

declare module 'chart.js' {
  interface PluginOptionsByType {
    zeroLine?: {
      enabled?: boolean;
    };
  }
}

const CARD_VERSION = "0.2.0";

const zeroLinePlugin: Plugin<'line'> = {
  id: 'zeroLine',
  afterDraw(chart) {
    const enabled = Boolean((chart.options as any)?.plugins?.zeroLine?.enabled);
    if (!enabled) return;

    const yScale = chart.scales.y;
    const chartArea = chart.chartArea;
    if (!yScale || !chartArea) return;

    const y = yScale.getPixelForValue(0);
    if (!Number.isFinite(y)) return;
    if (y < chartArea.top || y > chartArea.bottom) return;

    const ctx = chart.ctx;
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.24)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(chartArea.left, y);
    ctx.lineTo(chartArea.right, y);
    ctx.stroke();
    ctx.restore();
  },
};

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, zeroLinePlugin);

interface GraphSource {
  entityId: string;
  centered?: boolean;
  invert?: boolean;
  absolute?: boolean;
  zeroMin?: boolean;
}

interface GraphHistory {
  points: number[];
  fetchedAt: number;
}

type FlowMode = 'deficit_grid' | 'deficit_battery' | 'surplus_battery' | 'surplus_grid' | 'balanced';

console.info(
  `%c ENERGY-FLOW-CARD %c ${CARD_VERSION} `,
  'color: white; background: #4caf50; font-weight: 700;',
  'color: #4caf50; background: white; font-weight: 700;'
);

export class EnergyFlowCard extends LitElement {
  hass!: HomeAssistant;
  config!: EnergyFlowCardConfig;
  private _graphHistory: Record<string, GraphHistory> = {};
  private _graphFetchInFlight = new Set<string>();
  private _graphCacheMs = 5 * 60 * 1000;
  private _charts = new Map<string, Chart>();
  private _solarTodayFromTotalCache: Record<string, { value: number; fetchedAt: number }> = {};
  private _solarTodayFromTotalFetchInFlight = new Set<string>();
  private _solarTodayFromTotalCacheMs = 5 * 60 * 1000;

  static get properties() {
    return {
      hass: { attribute: false },
      config: { state: true },
    };
  }

  static getConfigElement() {
    return document.createElement("slick-energy-flow-card-editor");
  }

  static getStubConfig() {
    return {
      type: "custom:slick-energy-flow-card",
      title: "Energiefluss",
      solar_entity: "",
      grid_import_entity: "",
      grid_export_entity: "",
      battery_entity: "",
      battery_soc_entity: "",
      home_entity: ""
    };
  }

  setConfig(config: EnergyFlowCardConfig) {
    if (!config) throw new Error("Invalid configuration");

    const newConfig = {
      title: "Energiefluss",
      inverted_grid: false,
      inverted_battery: false,
      ...config
    };
    
    // Type validation
    if (newConfig.inverted_grid && typeof newConfig.inverted_grid !== 'boolean') throw new Error("inverted_grid must be a boolean");
    if (newConfig.inverted_battery && typeof newConfig.inverted_battery !== 'boolean') throw new Error("inverted_battery must be a boolean");

    this.config = newConfig as EnergyFlowCardConfig;
  }

  // --- STATE ---
  private _cachedGradients: string[] = ['', ''];
  private _activeIndex: number = 0;
  private _displayedGradientKey: string | null = null;
  private _lastValidStates: Map<string, number> = new Map();
  
  // Responsive State
  private _resizeObserver?: ResizeObserver;
  private _width: number = 0;
  private _height: number = 0;

  public connectedCallback() {
      super.connectedCallback();
      this._resizeObserver = new ResizeObserver(entries => {
          for (const entry of entries) {
              const r = entry.contentRect;
              this._width = r.width;
              this._height = r.height;
              this.requestUpdate();
          }
      });
      this._resizeObserver.observe(this);
  }
  
  public disconnectedCallback() {
      if (this._resizeObserver) {
          this._resizeObserver.disconnect();
      }
      for (const chart of this._charts.values()) {
        chart.destroy();
      }
      this._charts.clear();
      super.disconnectedCallback();
  }

    protected updated(): void {
    this._syncPowerCharts();
    }

  // --- HELPER ---
  private _getState(entity?: string): number {
    if (!entity) return 0;

    const cachedValue = this._lastValidStates.get(entity);

    if (!this.hass || !this.hass.states[entity]) {
      return cachedValue ?? 0;
    }

    const rawState = this.hass.states[entity].state;
    const parsedValue = parseFloat(rawState);

    if (Number.isFinite(parsedValue)) {
      this._lastValidStates.set(entity, parsedValue);
      return parsedValue;
    }

    return cachedValue ?? 0;
  }

  private _formatEnergy(value: number): string {
    if (!Number.isFinite(value)) {
      return '--';
    }

    const rounded = Math.abs(value) >= 10 ? Math.round(value) : Math.round(value * 10) / 10;
    return `${rounded} kWh`;
  }

  private _convertEnergyToKwh(value: number, unit?: string): number {
    if (!Number.isFinite(value)) return value;

    const normalizedUnit = String(unit || '').toLowerCase();
    if (normalizedUnit.includes('mwh')) return value * 1000;
    if (normalizedUnit.includes('wh') && !normalizedUnit.includes('kwh')) return value / 1000;
    return value;
  }

  private _getEntityEnergyInKwh(entityId?: string): number | undefined {
    if (!entityId || !this.hass?.states?.[entityId]) {
      return undefined;
    }

    const stateObj = this.hass.states[entityId];
    const raw = parseFloat(String(stateObj.state));
    if (!Number.isFinite(raw)) {
      return undefined;
    }

    return this._convertEnergyToKwh(raw, stateObj.attributes?.unit_of_measurement);
  }

  private _isSolarTodayFromTotalFresh(entityId: string): boolean {
    const cache = this._solarTodayFromTotalCache[entityId];
    if (!cache) return false;
    return Date.now() - cache.fetchedAt < this._solarTodayFromTotalCacheMs;
  }

  private async _ensureSolarTodayFromTotal(entityId: string): Promise<void> {
    if (!entityId || !this.hass || this._isSolarTodayFromTotalFresh(entityId) || this._solarTodayFromTotalFetchInFlight.has(entityId)) {
      return;
    }

    this._solarTodayFromTotalFetchInFlight.add(entityId);

    const now = new Date();
    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);

    try {
      const history = await this.hass.callApi<HistoryState[][]>(
        'GET',
        `history/period/${startOfDay.toISOString()}?filter_entity_id=${encodeURIComponent(entityId)}&end_time=${now.toISOString()}`
      );

      const series = history?.[0] || [];
      const sourceState = this.hass.states[entityId];
      const unit = sourceState?.attributes?.unit_of_measurement;
      const values = series
        .map((entry) => parseFloat(String(entry.state)))
        .filter((value) => Number.isFinite(value))
        .map((value) => this._convertEnergyToKwh(value, unit));

      if (!values.length) {
        return;
      }

      // Robust daily delta for total_increasing counters with occasional resets.
      let produced = 0;
      let prev = values[0];
      for (let i = 1; i < values.length; i++) {
        const curr = values[i];
        if (curr >= prev) {
          produced += curr - prev;
        } else if (curr >= 0) {
          produced += curr;
        }
        prev = curr;
      }

      this._solarTodayFromTotalCache[entityId] = {
        value: Math.max(0, produced),
        fetchedAt: Date.now(),
      };
    } catch (err) {
      console.error('EnergyFlow: Solar today-from-total fetch failed', entityId, err);
    } finally {
      this._solarTodayFromTotalFetchInFlight.delete(entityId);
      this.requestUpdate();
    }
  }

  private _getSolarEnergySummary(solarEntity?: any): string | undefined {
    const solarTodayFromEntity = this._getEntityEnergyInKwh(this.config.solar_today_energy_entity);
    const solarTodayFromTotal = this.config.solar_total_energy_entity
      ? this._solarTodayFromTotalCache[this.config.solar_total_energy_entity]?.value
      : undefined;

    if (this.config.solar_total_energy_entity && !this._isSolarTodayFromTotalFresh(this.config.solar_total_energy_entity)) {
      void this._ensureSolarTodayFromTotal(this.config.solar_total_energy_entity);
    }

    const today = solarTodayFromEntity
      ?? solarTodayFromTotal
      ?? this._getNumericAttribute(solarEntity, ['today_energy', 'energy_today', 'total_energy_today', 'yield_today', 'energy_produced_today']);

    const expectedDirect = this._getEntityEnergyInKwh(this.config.solar_expected_energy_entity)
      ?? this._getNumericAttribute(solarEntity, ['forecast_today', 'energy_forecast_today', 'prognose_heute', 'predicted_energy_today', 'estimated_energy_today']);
    const remaining = this._getEntityEnergyInKwh(this.config.solar_remaining_energy_entity)
      ?? this._getNumericAttribute(solarEntity, ['remaining_today', 'forecast_remaining', 'prognose_verbleibende_leistung_heute', 'remaining_energy_today', 'remaining_energy']);
    const expected = expectedDirect ?? ((today !== undefined && remaining !== undefined) ? today + remaining : undefined);

    if (today === undefined && expected === undefined) {
      return undefined;
    }

    if (today !== undefined && expected !== undefined) {
      return `${this._formatEnergy(today)} / ${this._formatEnergy(expected)}`;
    }

    return this._formatEnergy(today ?? expected ?? 0);
  }

  private _getNumericAttribute(entity: any, attributeNames: string[]): number | undefined {
    if (!entity?.attributes) return undefined;

    for (const attributeName of attributeNames) {
      const parsedValue = parseFloat(String(entity.attributes[attributeName]));
      if (Number.isFinite(parsedValue)) {
        return parsedValue;
      }
    }

    return undefined;
  }

  private _getGraphCacheKey(source: GraphSource): string {
    return `${source.entityId}${source.centered ? '::centered' : ''}${source.invert ? '::invert' : ''}${source.absolute ? '::abs' : ''}${source.zeroMin ? '::zmin' : ''}`;
  }

  private _isGraphFresh(source: GraphSource): boolean {
    const entry = this._graphHistory[this._getGraphCacheKey(source)];
    if (!entry) return false;
    return Date.now() - entry.fetchedAt < this._graphCacheMs;
  }

  private _downsamplePoints(values: number[], targetCount: number): number[] {
    if (values.length <= targetCount) return values;
    const result: number[] = [];
    const step = (values.length - 1) / (targetCount - 1);
    for (let i = 0; i < targetCount; i++) {
      const idx = Math.round(i * step);
      result.push(values[idx]);
    }
    return result;
  }

  private _smoothSeries(values: number[], windowSize = 5): number[] {
    if (values.length < 3 || windowSize <= 1) return values;

    const radius = Math.floor(windowSize / 2);
    return values.map((_, idx) => {
      const start = Math.max(0, idx - radius);
      const end = Math.min(values.length - 1, idx + radius);
      let sum = 0;
      let count = 0;

      for (let i = start; i <= end; i++) {
        sum += values[i];
        count += 1;
      }

      return count ? sum / count : values[idx];
    });
  }

  private _getChartPalette(colorClass: string): { line: string; fill: string } {
    if (colorClass.includes('home-chart')) {
      return { line: '#63c774', fill: 'rgba(99, 199, 116, 0.18)' };
    }
    if (colorClass.includes('grid-import-chart')) {
      return { line: '#8e66ff', fill: 'rgba(142, 102, 255, 0.18)' };
    }
    if (colorClass.includes('grid-export-chart')) {
      return { line: '#5ea1ff', fill: 'rgba(94, 161, 255, 0.18)' };
    }
    return { line: '#f6c945', fill: 'rgba(246, 201, 69, 0.20)' };
  }

  private _syncPowerCharts(): void {
    const canvases = this.renderRoot.querySelectorAll<HTMLCanvasElement>('canvas.stat-chart-canvas[data-chart-key]');
    const activeKeys = new Set<string>();

    canvases.forEach((canvas) => {
      const chartKey = canvas.dataset.chartKey;
      const sourceKey = canvas.dataset.sourceKey;
      const colorClass = canvas.dataset.colorClass || 'solar-chart';
      const centered = canvas.dataset.centered === '1';
      const forceZeroMin = canvas.dataset.zeroMin === '1';
      if (!chartKey || !sourceKey) return;

      activeKeys.add(chartKey);
      const graph = this._graphHistory[sourceKey];
      if (!graph?.points?.length) return;

      const values = graph.points;
      const labels = values.map((_, index) => index);
      const palette = this._getChartPalette(colorClass);
      const lastIndex = values.length - 1;
      const isGridSplit = centered && colorClass.includes('grid-centered-chart');

      let yMin: number | undefined;
      let yMax: number | undefined;
      if (centered) {
        const maxAbs = Math.max(...values.map((value) => Math.abs(value)), 0.1);
        yMin = -maxAbs;
        yMax = maxAbs;
      } else {
        const sorted = [...values].sort((a, b) => a - b);
        const p10 = sorted[Math.floor((sorted.length - 1) * 0.1)];
        const p90 = sorted[Math.floor((sorted.length - 1) * 0.9)];
        const rawMin = Math.min(...values);
        const rawMax = Math.max(...values);
        yMin = forceZeroMin ? 0 : Math.min(rawMin, p10);
        yMax = Math.max(rawMax, p90);
        if (yMax - yMin < 0.1) {
          const center = (yMax + yMin) / 2;
          yMin = center - 0.05;
          yMax = center + 0.05;
        }
      }

      const existing = this._charts.get(chartKey);
      const positiveGrid = values.map((value) => (value > 0 ? value : null));
      const negativeGrid = values.map((value) => (value < 0 ? value : null));
      if (existing && existing.canvas === canvas) {
        existing.data.labels = labels;
        if (isGridSplit && existing.data.datasets.length === 2) {
          const positiveDataset = existing.data.datasets[0] as any;
          const negativeDataset = existing.data.datasets[1] as any;
          positiveDataset.data = positiveGrid;
          negativeDataset.data = negativeGrid;
        } else {
          const dataset = existing.data.datasets[0] as any;
          dataset.data = values;
          dataset.borderColor = palette.line;
          dataset.backgroundColor = centered ? 'rgba(0,0,0,0)' : palette.fill;
          dataset.tension = 0.58;
          dataset.cubicInterpolationMode = 'monotone';
        }
        (existing.options.plugins as any).zeroLine = { enabled: centered };
        existing.options.scales = {
          x: { display: false, grid: { display: false }, border: { display: false } },
          y: { display: false, grid: { display: false }, border: { display: false }, min: yMin, max: yMax },
        };
        existing.update('none');
        return;
      }

      if (existing) {
        existing.destroy();
      }

      const context = canvas.getContext('2d');
      if (!context) return;

      const chart = new Chart(context, {
        type: 'line',
        data: {
          labels,
          datasets: isGridSplit
            ? [
                {
                  data: positiveGrid,
                  borderColor: '#8e66ff',
                  backgroundColor: 'rgba(142, 102, 255, 0.18)',
                  fill: true,
                  tension: 0.58,
                  cubicInterpolationMode: 'monotone',
                  borderWidth: 1.8,
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  pointBackgroundColor: '#8e66ff',
                  pointBorderColor: 'rgba(0, 0, 0, 0.28)',
                  pointBorderWidth: 0.6,
                },
                {
                  data: negativeGrid,
                  borderColor: '#5ea1ff',
                  backgroundColor: 'rgba(94, 161, 255, 0.18)',
                  fill: true,
                  tension: 0.58,
                  cubicInterpolationMode: 'monotone',
                  borderWidth: 1.8,
                  pointRadius: (ctx) => (ctx.dataIndex === lastIndex ? 1.4 : 0),
                  pointHoverRadius: 0,
                  pointBackgroundColor: '#5ea1ff',
                  pointBorderColor: 'rgba(0, 0, 0, 0.28)',
                  pointBorderWidth: 0.6,
                },
              ]
            : [
                {
                  data: values,
                  borderColor: palette.line,
                  backgroundColor: centered ? 'rgba(0,0,0,0)' : palette.fill,
                  fill: !centered,
                  tension: 0.58,
                  cubicInterpolationMode: 'monotone',
                  borderWidth: 1.8,
                  pointRadius: (ctx) => (ctx.dataIndex === lastIndex ? 1.4 : 0),
                  pointHoverRadius: 0,
                  pointBackgroundColor: palette.line,
                  pointBorderColor: 'rgba(0, 0, 0, 0.28)',
                  pointBorderWidth: 0.6,
                },
              ],
        },
        options: {
          animation: false,
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
            zeroLine: { enabled: centered },
          },
          scales: {
            x: { display: false, grid: { display: false }, border: { display: false } },
            y: { display: false, grid: { display: false }, border: { display: false }, min: yMin, max: yMax },
          },
          elements: {
            line: { capBezierPoints: true },
          },
          layout: {
            padding: { top: 3, right: 0, bottom: 3, left: 0 },
          },
        },
      });

      this._charts.set(chartKey, chart);
    });

    for (const [key, chart] of this._charts.entries()) {
      if (!activeKeys.has(key)) {
        chart.destroy();
        this._charts.delete(key);
      }
    }
  }

  private async _ensureGraphHistory(source: GraphSource): Promise<void> {
    const key = this._getGraphCacheKey(source);
    if (this._isGraphFresh(source) || this._graphFetchInFlight.has(key) || !this.hass) {
      return;
    }

    this._graphFetchInFlight.add(key);

    const endTime = new Date();
    const startTime = new Date(endTime.getTime() - 24 * 60 * 60 * 1000);

    try {
      const history = await this.hass.callApi<HistoryState[][]>(
        'GET',
        `history/period/${startTime.toISOString()}?filter_entity_id=${encodeURIComponent(source.entityId)}&end_time=${endTime.toISOString()}`
      );

      const series = history?.[0] || [];
      const rawValues = series
        .map((entry) => parseFloat(String(entry.state)))
        .filter((value) => Number.isFinite(value))
        .map((value) => source.invert ? -value : value)
        .map((value) => source.absolute ? Math.abs(value) : value);

      const targetCount = Math.max(28, Math.min(64, Math.round((this._width || 320) / 8)));
      const downsampled = this._downsamplePoints(rawValues, targetCount);
      const points = this._smoothSeries(downsampled, 7);

      this._graphHistory[key] = {
        points,
        fetchedAt: Date.now(),
      };
    } catch (err) {
      console.error('EnergyFlow: Graph history fetch failed', source, err);
    } finally {
      this._graphFetchInFlight.delete(key);
      this.requestUpdate();
    }
  }

  private _renderPowerChart(source?: GraphSource, colorClass = 'solar-chart') {
    if (!source) return html``;

    const key = this._getGraphCacheKey(source);
    const graph = this._graphHistory[key];

    if (!graph || !this._isGraphFresh(source)) {
      void this._ensureGraphHistory(source);
    }

    const values = graph?.points || [];
    if (!values.length) return html``;

    const chartKey = `${key}::${colorClass}`;

    return html`
      <div class="stat-chart ${colorClass}">
        <canvas
          class="stat-chart-canvas"
          data-chart-key="${chartKey}"
          data-source-key="${key}"
          data-color-class="${colorClass}"
          data-centered="${source.centered ? '1' : '0'}"
          data-zero-min="${source.zeroMin ? '1' : '0'}"
          aria-hidden="true"
        ></canvas>
      </div>
    `;
  }

  private _openEntityMoreInfo(entityId?: string, event?: Event): void {
    event?.stopPropagation();

    if (!entityId) {
      return;
    }

    this.dispatchEvent(new CustomEvent('hass-more-info', {
      bubbles: true,
      composed: true,
      detail: { entityId }
    }));
  }

  private _handleEntityKeyDown(event: KeyboardEvent, entityId?: string): void {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    this._openEntityMoreInfo(entityId, event);
  }

  private _getGridDetailEntity(grid: number): string | undefined {
    if (this.config.grid_entity) {
      return this.config.grid_entity;
    }

    if (grid > 10 && this.config.grid_import_entity) {
      return this.config.grid_import_entity;
    }

    if (grid < -10 && this.config.grid_export_entity) {
      return this.config.grid_export_entity;
    }

    return this.config.grid_import_entity || this.config.grid_export_entity;
  }

  private _getBatteryDetailEntity(): string | undefined {
    return this.config.battery_entity || this.config.battery_soc_entity;
  }

  private _formatPower(watts: number): string {
    const w = Math.abs(watts);
    if (w >= 1000) return `${(w / 1000).toFixed(1)} kW`;
    return `${Math.round(w)} W`;
  }

  private _clamp(value: number, min = 0, max = 1): number {
    return Math.min(max, Math.max(min, value));
  }

  private _mixHexColors(start: string, end: string, ratio: number): string {
    const normalizedRatio = this._clamp(ratio);
    const normalizeHex = (hex: string): string => {
      const trimmedHex = hex.replace('#', '');
      return trimmedHex.length === 3
        ? trimmedHex.split('').map((char) => `${char}${char}`).join('')
        : trimmedHex;
    };

    const startHex = normalizeHex(start);
    const endHex = normalizeHex(end);
    const startRed = parseInt(startHex.slice(0, 2), 16);
    const startGreen = parseInt(startHex.slice(2, 4), 16);
    const startBlue = parseInt(startHex.slice(4, 6), 16);
    const endRed = parseInt(endHex.slice(0, 2), 16);
    const endGreen = parseInt(endHex.slice(2, 4), 16);
    const endBlue = parseInt(endHex.slice(4, 6), 16);

    const mixedRed = Math.round(startRed + ((endRed - startRed) * normalizedRatio));
    const mixedGreen = Math.round(startGreen + ((endGreen - startGreen) * normalizedRatio));
    const mixedBlue = Math.round(startBlue + ((endBlue - startBlue) * normalizedRatio));

    return `#${[mixedRed, mixedGreen, mixedBlue]
      .map((channel) => channel.toString(16).padStart(2, '0'))
      .join('')}`;
  }

  private _withAlpha(hex: string, alpha: number): string {
    const normalizedHex = hex.replace('#', '');
    const expandedHex = normalizedHex.length === 3
      ? normalizedHex.split('').map((char) => `${char}${char}`).join('')
      : normalizedHex;

    const red = parseInt(expandedHex.slice(0, 2), 16);
    const green = parseInt(expandedHex.slice(2, 4), 16);
    const blue = parseInt(expandedHex.slice(4, 6), 16);

    return `rgba(${red}, ${green}, ${blue}, ${this._clamp(alpha)})`;
  }

  private _getLogarithmicPowerRatio(power: number, maxPower = 10000, pivotPower = 250): number {
    const absolutePower = Math.abs(power);

    if (absolutePower <= 0 || maxPower <= 0 || pivotPower <= 0) {
      return 0;
    }

    const clampedPower = Math.min(absolutePower, maxPower);
    const numerator = Math.log1p(clampedPower / pivotPower);
    const denominator = Math.log1p(maxPower / pivotPower);

    if (denominator <= 0) {
      return 0;
    }

    return this._clamp(numerator / denominator);
  }

  private _getSolarPowerRatio(power: number): number {
    return this._getLogarithmicPowerRatio(power, 10000, 120);
  }

  private _getNeutralEnergyColor(): string {
    return '#273844';
  }

  private _buildBackgroundGradient(
    solar: number,
    dominantAccent: string
  ): string {
    const neutral = this._getNeutralEnergyColor();
    const solarRatio = this._getSolarPowerRatio(solar);

    const topBase = this._mixHexColors(neutral, dominantAccent, 0.28);
    const midBase = this._mixHexColors('#314652', dominantAccent, 0.42);
    const bottomBase = this._mixHexColors(neutral, dominantAccent, 0.62);

    const pvTopGlow = solar > 10
      ? `radial-gradient(circle at 50% -8%, ${this._withAlpha('#ffffff', 0.26 + (solarRatio * 0.26))} 0%, ${this._withAlpha(dominantAccent, 0.18 + (solarRatio * 0.20))} 34%, rgba(0, 0, 0, 0) 66%)`
      : 'radial-gradient(circle at 50% -8%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 66%)';
    const pvTopWash = solar > 10
      ? `linear-gradient(180deg, ${this._withAlpha(dominantAccent, 0.24 + (solarRatio * 0.14))} 0%, ${this._withAlpha(dominantAccent, 0.08)} 42%, rgba(0, 0, 0, 0) 68%)`
      : 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 68%)';
    const ambientLift = `linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 32%, rgba(0, 0, 0, 0) 100%)`;
    const lowerVignette = `linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(4, 10, 14, 0.18) 100%)`;
    const baseGradient = `linear-gradient(180deg, ${topBase} 0%, ${midBase} 48%, ${bottomBase} 100%)`;
    return `${pvTopGlow}, ${pvTopWash}, ${ambientLift}, ${lowerVignette}, ${baseGradient}`;
  }


  private _getFlowMode(solar: number, home: number, grid: number, battery: number): FlowMode {
    const threshold = Math.max(120, solar * 0.06);
    const deficit = home > solar + threshold;
    const surplus = solar > home + threshold;

    if (deficit) {
      const gridImport = Math.max(grid, 0);
      const batteryDischarge = Math.max(battery, 0);
      return gridImport >= batteryDischarge ? 'deficit_grid' : 'deficit_battery';
    }

    if (surplus) {
      const batteryCharge = Math.max(-battery, 0);
      const gridExport = Math.max(-grid, 0);
      return batteryCharge >= gridExport ? 'surplus_battery' : 'surplus_grid';
    }

    return 'balanced';
  }

  private _getFlowModeColor(mode: FlowMode): string {
    switch (mode) {
      case 'deficit_grid':
        return '#8f6dff';
      case 'deficit_battery':
        return '#ff9e4a';
      case 'surplus_battery':
        return '#35cfc5';
      case 'surplus_grid':
        return '#4f90ff';
      case 'balanced':
      default:
        return '#63c774';
    }
  }

  private _getFlowModeLabel(mode: FlowMode): string {
    switch (mode) {
      case 'deficit_grid':
        return 'Bezug';
      case 'deficit_battery':
        return 'Entladung';
      case 'surplus_battery':
        return 'Ladung';
      case 'surplus_grid':
        return 'Einspeisung';
      case 'balanced':
      default:
        return 'Balance';
    }
  }

  render() {
    if (!this.config) return html``;
    // Allow render if hass is missing, just to show structure (values will be 0)

    // --- FETCH DATA ---
    const _hass = this.hass; // Use local ref to avoid repeated check issues if type allows or just use directly
    const solar = _hass ? this._getState(this.config.solar_entity) : 0;
    
    // Grid Logic: Combined or Split
    let grid = 0;
    if (this.config.grid_entity) {
        grid = _hass ? this._getState(this.config.grid_entity) : 0;
        if (this.config.inverted_grid) grid = -grid; 
    } else {
        // SolarNet Logic: 
        // Import is usually positive counter. Export is usually positive counter.
        // We want Net Grid Flow: Import (Pos) - Export (Pos).
        // Result: + = Import, - = Export.
        const imp = this._getState(this.config.grid_import_entity); 
        const exp = this._getState(this.config.grid_export_entity); 
        grid = imp - exp; 
    }

    let battery = this._getState(this.config.battery_entity);
    const soc = this._getState(this.config.battery_soc_entity);
    
    // Optional Stats
    const autarky = this.config.autarky_entity ? this._getState(this.config.autarky_entity) : null;
    const selfCons = this.config.self_consumption_entity ? this._getState(this.config.self_consumption_entity) : null;

    if (this.config.inverted_battery) battery = -battery; // Standard: Positiv = Entladen, Negativ = Laden

    let home = 0;
    if (this.config.home_entity) {
        home = this._getState(this.config.home_entity);
    } else {
       // Calc Home
       // Basic Formula: Solar + Grid (Net) + Battery (Discharging positive)
       // Example: Solar 5000 + Grid -2000 (Exporting) + Battery 0 = 3000 Home
       // Example: Solar 0 + Grid 500 (Importing) + Battery 0 = 500 Home
       home = solar + grid + battery; 
    }
    home = Math.abs(home);

    // --- VISUAL LOGIC ---
    const hasBattery = (!!this.config.battery_entity && this.config.battery_entity !== '') || (!!this.config.battery_soc_entity && this.config.battery_soc_entity !== '');
    const isCharging = battery < -10;
    const isDischarging = battery > 10;

    const flowMode = this._getFlowMode(solar, home, grid, battery);
    const flowModeColor = this._getFlowModeColor(flowMode);
    const pvActive = solar > 10;
    const gradient = this._buildBackgroundGradient(solar, flowModeColor);
    const solarStateObj = this.config.solar_entity ? this.hass.states[this.config.solar_entity] : undefined;
    const solarDetailText = this._getSolarEnergySummary(solarStateObj);
    const solarChartSource = this.config.solar_entity ? { entityId: this.config.solar_entity } : undefined;
    const gridChartSource = this.config.grid_entity ? { entityId: this.config.grid_entity, centered: true, invert: Boolean(this.config.inverted_grid) } : undefined;
    const homeChartSource = this.config.home_entity ? { entityId: this.config.home_entity, absolute: true, zeroMin: true } : undefined;
    const solarDetailEntity = this.config.solar_entity;
    const homeDetailEntity = this.config.home_entity;
    const gridDetailEntity = this._getGridDetailEntity(grid);
    const batteryDetailEntity = this._getBatteryDetailEntity();
    const flowAccent = flowModeColor;
    const frameAccent = flowAccent;

    const gradientKey = `${flowModeColor}:${pvActive ? 'pv' : 'no-pv'}`;
    if (gradientKey !== this._displayedGradientKey) {
        const nextIndex = (this._activeIndex + 1) % 2;
        this._cachedGradients[nextIndex] = gradient;
        this._activeIndex = nextIndex;
      this._displayedGradientKey = gradientKey;
    }

    // Icons
    const iconSolar = html`<ha-icon icon="mdi:solar-power-variant"></ha-icon>`;
    const iconGrid = html`<ha-icon icon="mdi:transmission-tower"></ha-icon>`;
    const iconHome = html`<ha-icon icon="mdi:home"></ha-icon>`;
    
    // --- RESPONSIVE MODES ---
    // Tiny: H < 120 OR W < 200 (Minimal content)
    // Small: H < 200 (Compressed layout)
    const isTiny = this._height > 0 && (this._height < 120 || this._width < 200);
    const isSmall = this._height > 0 && !isTiny && this._height < 210;

    // Battery Icon Logic
    let iconBattName = "mdi:battery"; // Default
    
    // Calculate 10% steps for default state
    const socRound = Math.round(soc / 10) * 10;
    if (socRound <= 0) iconBattName = "mdi:battery-outline";
    else if (socRound >= 100) iconBattName = "mdi:battery";
    else iconBattName = `mdi:battery-${socRound}`;

    if (isCharging) {
        iconBattName = "mdi:battery-arrow-up";
    } else if (isDischarging) {
        iconBattName = "mdi:battery-arrow-down";
    }
    
    const iconBatt = html`<ha-icon icon="${iconBattName}"></ha-icon>`;

    return html`
      <ha-card class="${isTiny ? 'tiny' : ''} ${isSmall ? 'small' : ''}" style="--flow-accent: ${flowAccent}; --flow-accent-soft: ${this._mixHexColors(flowAccent, '#ffffff', 0.28)}; box-shadow: inset 0 0 0 1px ${this._withAlpha(frameAccent, 0.28)};">
        <div class="bg-layer" style="background: ${this._cachedGradients[0]}; opacity: ${this._activeIndex === 0 ? 1 : 0}"></div>
        <div class="bg-layer" style="background: ${this._cachedGradients[1]}; opacity: ${this._activeIndex === 1 ? 1 : 0}"></div>
        
        <!-- Tiny Mode Battery Indicator (Top Right) -->
        ${isTiny && hasBattery ? html`
            <div class="status-badge" style="position: absolute; top: 6px; right: 8px; z-index: 2; display: flex; align-items: center; gap: 4px;">
                <span style="color: ${soc < 20 ? '#ff3b30' : 'inherit'}; display: flex; width: 14px;">${iconBatt}</span>
                <span>${Math.round(soc)}%</span>
            </div>
        ` : ''}

        <div class="content">
          ${!isTiny ? html`
              <div class="header">
                <span class="title">${this.config.title}</span>
                <div class="badges">
                     ${autarky !== null ? html`<span class="status-badge" title="Autarkie"><span class="badge-label">AUT</span> ${Math.round(autarky)}%</span>` : ''}
                     ${selfCons !== null ? html`<span class="status-badge" title="Eigenverbrauch"><span class="badge-label">EIG</span> ${Math.round(selfCons)}%</span>` : ''}
                     <span class="status-badge flow-badge" style="background: ${this._withAlpha(flowAccent, 0.28)}; border-color: ${this._withAlpha(flowAccent, 0.55)}; color: white;">${this._getFlowModeLabel(flowMode)}</span>
                     
                     <!-- Small Mode Battery Badge (Inline) -->
                     ${isSmall && hasBattery ? html`
                        <span class="status-badge" style="display: inline-flex; align-items: center; gap: 4px; padding-left: 6px;">
                            <span style="color: ${soc < 20 ? '#ff3b30' : 'inherit'}; display: flex; width: 14px;">${iconBatt}</span>
                            ${Math.round(soc)}%
                        </span>
                     ` : ''}
                </div>
              </div>
          ` : ''}

          <div class="main-stats">
            <!-- SOLAR (Left) -->
            <div class="stat-block solar ${solar > 10 ? 'active' : ''}">
              <div class="stat-chip">
                <div class="stat-top">
                  <div
                    class="icon-circle mini solar-icon ${solarDetailEntity ? 'interactive-target' : ''}"
                    role="${solarDetailEntity ? 'button' : 'img'}"
                    tabindex="${solarDetailEntity ? '0' : '-1'}"
                    aria-label="${solarDetailEntity ? 'Solarverlauf anzeigen' : 'Solar'}"
                    @click=${(event: Event) => this._openEntityMoreInfo(solarDetailEntity, event)}
                    @keydown=${(event: KeyboardEvent) => this._handleEntityKeyDown(event, solarDetailEntity)}
                  >${iconSolar}</div>
                  ${!isTiny ? html`<div class="stat-label chip-label">Solar</div>` : ''}
                </div>
                ${!isTiny && !isSmall ? this._renderPowerChart(solarChartSource, 'solar-chart') : ''}
                <div class="stat-value">${this._formatPower(solar)}</div>
                ${solarDetailText ? html`<div class="stat-detail solar-detail">${solarDetailText}</div>` : ''}
              </div>
            </div>

            <!-- HOME (Center) -->
            <div class="stat-block home">
              <div class="stat-chip">
                <div class="stat-top">
                  <div
                    class="icon-circle mini home-icon ${homeDetailEntity ? 'interactive-target' : ''}"
                    role="${homeDetailEntity ? 'button' : 'img'}"
                    tabindex="${homeDetailEntity ? '0' : '-1'}"
                    aria-label="${homeDetailEntity ? 'Hausverbrauchsverlauf anzeigen' : 'Haus'}"
                    @click=${(event: Event) => this._openEntityMoreInfo(homeDetailEntity, event)}
                    @keydown=${(event: KeyboardEvent) => this._handleEntityKeyDown(event, homeDetailEntity)}
                  >${iconHome}</div>
                  ${!isTiny ? html`<div class="stat-label chip-label">Haus</div>` : ''}
                </div>
                ${!isTiny && !isSmall ? this._renderPowerChart(homeChartSource, 'home-chart') : ''}
                <div class="stat-value big">${this._formatPower(home)}</div>
              </div>
            </div>

            <!-- GRID (Right) -->
            <div class="stat-block grid ${Math.abs(grid) > 10 ? 'active' : ''}">
              <div class="stat-chip">
                <div class="stat-top">
                  <div
                    class="icon-circle mini grid-icon ${gridDetailEntity ? 'interactive-target' : ''}"
                    role="${gridDetailEntity ? 'button' : 'img'}"
                    tabindex="${gridDetailEntity ? '0' : '-1'}"
                    aria-label="${gridDetailEntity ? 'Netzverlauf anzeigen' : 'Netz'}"
                    @click=${(event: Event) => this._openEntityMoreInfo(gridDetailEntity, event)}
                    @keydown=${(event: KeyboardEvent) => this._handleEntityKeyDown(event, gridDetailEntity)}
                  >${iconGrid}</div>
                  ${!isTiny ? html`<span class="stat-label chip-label">${grid > 0 ? 'Netz (Bezug)' : 'Netz (Einsp.)'}</span>` : ''}
                </div>
                ${!isTiny && !isSmall ? this._renderPowerChart(gridChartSource, 'grid-centered-chart') : ''}
                <div class="stat-value">${this._formatPower(Math.abs(grid))}</div>
              </div>
            </div>
          </div>

          <!-- BATTERY (Bottom - Only Large Mode) -->
          ${hasBattery && !isTiny && !isSmall ? html`
            <div
                class="battery-section ${batteryDetailEntity ? 'interactive-target' : ''}"
                role="${batteryDetailEntity ? 'button' : 'group'}"
                tabindex="${batteryDetailEntity ? '0' : '-1'}"
                aria-label="${batteryDetailEntity ? 'Batterieverlauf anzeigen' : 'Batterie'}"
                @click=${(event: Event) => this._openEntityMoreInfo(batteryDetailEntity, event)}
                @keydown=${(event: KeyboardEvent) => this._handleEntityKeyDown(event, batteryDetailEntity)}
            >
                <div class="batt-info">
                   <span class="batt-icon" style="color: ${soc < 20 ? '#ff3b30' : 'inherit'}">${iconBatt}</span>
                   <span class="batt-pct">${Math.round(soc)}%</span>
                   <span class="batt-power">${Math.abs(battery) > 0 ? this._formatPower(battery) : 'Standby'}</span>
                   <span class="batt-state">${isCharging ? 'Laden' : isDischarging ? 'Entladen' : ''}</span>
                </div>
                <div class="batt-bar-bg">
                    <div class="batt-bar-fill" style="width: ${soc}%; background: ${soc < 20 ? 'linear-gradient(90deg, #ff453a 0%, #ff8a80 100%)' : 'linear-gradient(90deg, #4f95ff 0%, #8fbfff 100%)'}"></div>
                </div>
            </div>
          ` : ''}

        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        height: 100%;
        isolation: isolate;
      }
      ha-card {
        height: 100%;
        border-radius: var(--ha-card-border-radius, 12px);
        box-shadow: var(--ha-card-box-shadow, none);
        border: none;
        color: white;
        overflow: hidden;
        position: relative;
        background: #5e7682;
        container-type: size;
      }
      
      .bg-layer {
          position: absolute;
          top: 0; 
          left: 0; 
          width: 100%; 
          height: 100%;
          transition: opacity 2s ease;
          z-index: 0;
      }
      
      .content {
        padding: clamp(12px, 4cqi, 20px);
        display: flex;
        flex-direction: column;
        height: 100%;
        box-sizing: border-box;
        position: relative;
        z-index: 1;
        min-height: 0;
        overflow: hidden;
      }
      
      /* Header */
      .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: clamp(4px, 2cqi, 16px);
        flex: 0 0 auto;
        gap: 10px;
      }
      .title {
        font-size: clamp(0.8rem, 3.5cqi, 1.1rem);
        font-weight: 500;
        opacity: 0.95;
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .badges {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: 6px;
        justify-content: flex-end;
      }
      .status-badge {
        font-size: clamp(0.6rem, 2cqi, 0.8rem);
        font-weight: 500;
        text-transform: uppercase;
        padding: 4px 10px;
        background: rgba(255,255,255,0.2);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 999px;
        backdrop-filter: blur(4px);
        white-space: nowrap;
      }

      /* Main Stats Row */
      .main-stats {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        gap: clamp(8px, 2.5cqi, 14px);
        flex-grow: 1;
        margin-bottom: clamp(4px, 2cqi, 16px);
        min-height: 0;
      }

      .stat-block {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        flex: 1;
        opacity: 1;
        transition: none;
        min-width: 0;
      }
      .stat-block.active, .stat-block.home {
        opacity: 1;
      }
      .stat-block.home {
        flex: 1;
      }

      .stat-chip {
        width: 100%;
        border-radius: 12px;
        padding: 8px 10px;
        background: rgba(0, 0, 0, 0.2);
        border: none;
        box-shadow: none;
        backdrop-filter: blur(4px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .stat-top {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .icon-circle {
        width: clamp(24px, 8cqi, 36px);
        height: clamp(24px, 8cqi, 36px);
        border-radius: 0;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0;
        box-shadow: none;
      }
      .interactive-target {
        cursor: pointer;
        transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
      }
      .interactive-target:hover {
        transform: translateY(-1px);
        filter: brightness(1.06);
      }
      .interactive-target:focus-visible {
        outline: 2px solid rgba(255,255,255,0.8);
        outline-offset: 2px;
      }
      .icon-circle svg {
        width: 20px;
        height: 20px;
      }

      .icon-circle.mini {
        width: clamp(20px, 4.5cqi, 26px);
        height: clamp(20px, 4.5cqi, 26px);
        margin-bottom: 0;
      }
      .icon-circle.mini svg {
        width: 14px;
        height: 14px;
      }
      
      .home-icon {
        width: clamp(32px, 10cqi, 48px);
        height: clamp(32px, 10cqi, 48px);
        background: transparent;
      }
      .home-icon svg { width: 28px; height: 28px; }
      .home-icon.mini {
        width: clamp(20px, 4.5cqi, 26px);
        height: clamp(20px, 4.5cqi, 26px);
      }
      .home-icon.mini svg {
        width: 14px;
        height: 14px;
      }

      .stat-value {
        font-size: clamp(0.7rem, 2.1cqi, 0.9rem);
        font-weight: 450;
        line-height: 1.1;
        text-shadow: 0 1px 3px rgba(0,0,0,0.3);
        white-space: nowrap;
      }
      .stat-value.big {
        font-size: clamp(0.7rem, 2.1cqi, 0.9rem);
        font-weight: 450;
        margin-bottom: 0;
        letter-spacing: 0;
      }

      .stat-detail {
        font-size: clamp(0.58rem, 1.8cqi, 0.75rem);
        opacity: 0.82;
        white-space: nowrap;
        line-height: 1;
        margin-top: 2px;
      }

      .stat-chart {
        width: 100%;
        height: 30px;
        margin-top: 5px;
        margin-bottom: 5px;
      }
      .stat-chart .stat-chart-canvas {
        width: 100%;
        height: 100%;
        display: block;
      }
      
      .stat-label {
        font-size: clamp(0.56rem, 1.8cqi, 0.7rem);
        font-weight: 400;
        opacity: 0.72;
        margin-top: 4px;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .chip-label {
        margin-top: 0;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        font-weight: 400;
        opacity: 0.72;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Battery Section */
      .battery-section {
        background: rgba(0, 0, 0, 0.2);
        border: none;
        border-radius: 12px;
        padding: 8px 10px;
        margin-top: auto;
        flex: 0 0 auto;
        backdrop-filter: blur(4px);
      }
      .batt-info {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 6px;
        font-size: 0.9rem;
        font-weight: 400;
      }
      .batt-icon svg { width: 16px; height: 16px; opacity: 0.8; }
      .batt-power {
        margin-left: auto;
        font-weight: 300;
        opacity: 0.8;
        font-size: 0.85rem;
      }
      .batt-state {
        font-size: clamp(0.6rem, 2cqi, 0.75rem);
        opacity: 0.6;
        text-transform: uppercase;
        font-weight: 500;
      }

      .batt-bar-bg {
        width: 100%;
        height: 6px;
        background: rgba(255,255,255,0.1);
        border-radius: 3px;
        overflow: hidden;
      }
      .batt-bar-fill {
        height: 100%;
        background-color: white;
        border-radius: 3px;
        transition: width 0.5s ease;
      }

      /* Tiny Mode */
      ha-card.tiny .content {
        padding: 8px;
        justify-content: center;
        align-items: center;
        position: relative;
      }
      
      ha-card.tiny .main-stats {
        margin: 0;
        width: 100%;
        display: flex; 
        align-items: center;
        justify-content: space-evenly;
        flex-direction: row;
        gap: 4px;
      }
      
      ha-card.tiny .stat-block {
          flex: 0 1 auto;
          margin: 0;
          opacity: 0.9;
          transform: none;
          display: flex;
          flex-direction: row;
          align-items: center;
      }

      ha-card.tiny .stat-chip {
        padding: 6px 8px;
        border-radius: 10px;
      }
      
      /* Specific override for Tiny Home to not be special */
      ha-card.tiny .stat-block.home {
        transform: none;
        flex: 0 1 auto;
      }

      ha-card.tiny .icon-circle {
        width: 22px; height: 22px;
        margin-bottom: 2px;
        background: transparent;
      }
      ha-card.tiny .icon-circle svg { width: 14px; height: 14px; }
      
      ha-card.tiny .stat-value {
        font-size: 0.85rem; 
        font-weight: 600;
        line-height: 1;
      }
      ha-card.tiny .stat-value.big {
        font-size: 0.9rem;
        margin: 0;
      }

      /* Small Mode */
      ha-card.small .content { 
        padding: 8px 12px; 
      }
      ha-card.small .header { margin-bottom: 4px; }
      ha-card.small .title { font-size: 0.95rem; }
      
      ha-card.small .main-stats {
        justify-content: space-between;
        align-items: stretch;
        margin-bottom: 0;
        flex-grow: 1;
        gap: 8px;
      }
      
      ha-card.small .stat-block {
         transform: none !important;
         opacity: 0.9;
         display: flex;
        flex-direction: row;
        align-items: stretch;
      }
      
      ha-card.small .stat-block.home {
         flex: 1;
         transform: none; /* Flatten hierarchy */
      }
      
      /* Equalize icons in Small Mode */
      ha-card.small .icon-circle { width: 32px; height: 32px; margin-bottom: 4px; }
      ha-card.small .home-icon { width: 32px; height: 32px; } 
      ha-card.small .icon-circle svg { width: 18px; height: 18px; }
      ha-card.small .icon-circle.mini { width: 20px; height: 20px; margin-bottom: 0; }
      ha-card.small .icon-circle.mini svg { width: 13px; height: 13px; }
      ha-card.small .home-icon.mini { width: 20px; height: 20px; }
      ha-card.small .home-icon.mini svg { width: 13px; height: 13px; }
      
      ha-card.small .stat-value { font-size: 0.9rem; }
      ha-card.small .stat-value.big { font-size: 0.9rem; margin-bottom: 0; }
      ha-card.small .stat-label { font-size: 0.75rem; margin-top: 2px; }
      ha-card.small .stat-chart { display: none; }
      ha-card.small .stat-detail { font-size: 0.65rem; }
      ha-card.small .stat-chip { border-radius: 12px; padding: 8px; }
    `;
  }
}

if (!customElements.get("slick-energy-flow-card")) {
  customElements.define("slick-energy-flow-card", EnergyFlowCard);
}

// Editor Class
export class EnergyFlowCardEditor extends LitElement {
  hass!: HomeAssistant;
  _config!: EnergyFlowCardConfig;

  static get properties() {
    return {
      hass: { attribute: false },
      _config: { state: true },
    };
  }

  setConfig(config: EnergyFlowCardConfig) { this._config = config; }
  _valueChanged(ev: CustomEvent) { 
      this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: { ...this._config, ...ev.detail.value } }, bubbles: true, composed: true })); 
  }
  render() {
    if (!this.hass || !this._config) return html``;
    const schema = [
      { name: "title", label: "Titel", selector: { text: {} } },
      { name: "solar_entity", label: "Solar Leistung", selector: { entity: { domain: "sensor" } } },
      { name: "solar_today_energy_entity", label: "Solar Erzeugt heute (kWh, Opt)", selector: { entity: { domain: "sensor" } } },
      { name: "solar_total_energy_entity", label: "Solar Gesamtzähler (Opt, seit 0 Uhr berechnen)", selector: { entity: { domain: "sensor" } } },
      { name: "solar_expected_energy_entity", label: "Solar Erwartet heute (kWh, Opt)", selector: { entity: { domain: "sensor" } } },
      { name: "solar_remaining_energy_entity", label: "Solar Rest heute (kWh, Opt)", selector: { entity: { domain: "sensor" } } },
      { name: "grid_entity", label: "Netz Leistung", selector: { entity: { domain: "sensor" } } },
      { name: "battery_entity", label: "Batterie Leistung (Opt)", selector: { entity: { domain: "sensor" } } },
      { name: "battery_soc_entity", label: "Batterie Stand % (Opt)", selector: { entity: { domain: "sensor" } } },
      { name: "home_entity", label: "Haus Verbrauch (Opt)", selector: { entity: { domain: "sensor" } } },
      { name: "inverted_grid", label: "Invertiere Grid (+ ist Export)", selector: { boolean: {} } },
      { name: "inverted_battery", label: "Invertiere Batt (+ ist Laden)", selector: { boolean: {} } }
    ];
    return html`<ha-form .hass=${this.hass} .data=${this._config} .schema=${schema} .computeLabel=${(s: any)=>s.label} @value-changed=${this._valueChanged}></ha-form>`;
  }
}
if (!customElements.get("slick-energy-flow-card-editor")) {
  customElements.define("slick-energy-flow-card-editor", EnergyFlowCardEditor);
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: "slick-energy-flow-card",
  name: "Slick Energy Flow",
  preview: true,
  description: "Modern energy flow visualization."
});
