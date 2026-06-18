/**
 * Simple Climate Card
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
} from 'chart.js';
import type {
  HomeAssistant,
  SimpleClimateCardConfig,
  HistoryState,
} from './types';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip);

const CARD_VERSION = "0.2.0";

console.info(
  `%c SIMPLE-CLIMATE-CARD %c ${CARD_VERSION} `,
  'color: white; background: #ff9800; font-weight: 700;',
  'color: #ff9800; background: white; font-weight: 700;'
);

interface GraphSource {
  entityId: string;
  attributeKey?: string;
}

interface GraphHistory {
  points: number[];
  unit?: string;
  fetchedAt: number;
}

export class SimpleClimateCard extends LitElement {
  hass!: HomeAssistant;
  config!: SimpleClimateCardConfig;
  private _graphHistory: Record<string, GraphHistory> = {};
  private _graphFetchInFlight = new Set<string>();
  private _graphCacheMs = 5 * 60 * 1000;
  private _charts = new Map<string, Chart>();

  static get properties() {
    return {
      hass: { attribute: false },
      config: { state: true },
    };
  }

  static getConfigElement() {
    return document.createElement("slick-simple-climate-card-editor");
  }

  static getStubConfig() {
    return {
      type: "custom:slick-simple-climate-card",
      entity: "",
      name: "Climate",
    };
  }

  getCardSize() {
    return 2;
  }

  getLayoutOptions() {
    return {
      grid_rows: 2,
      grid_columns: 2,
      grid_min_rows: 1,
      grid_min_columns: 1,
    };
  }

  setConfig(config: SimpleClimateCardConfig) {
    if (!config) throw new Error("Invalid configuration");
    this.config = { name: "Climate", ...config };

    if (this.config.name && typeof this.config.name !== 'string') throw new Error("name must be a string");
    if (this.config.hot_water_entity && typeof this.config.hot_water_entity !== 'string') throw new Error("hot_water_entity must be a string");
    if (this.config.hot_water_active_entity && typeof this.config.hot_water_active_entity !== 'string') throw new Error("hot_water_active_entity must be a string");
    if (this.config.sensors && typeof this.config.sensors !== 'object') throw new Error("sensors must be an object");
  }

  disconnectedCallback(): void {
    for (const chart of this._charts.values()) {
      chart.destroy();
    }
    this._charts.clear();
    super.disconnectedCallback();
  }

  protected updated(): void {
    this._syncCharts();
  }

  private _getChartPalette(colorClass: string): { line: string; fill: string } {
    if (colorClass === 'tank-graph') {
      return {
        line: '#9ad9ff',
        fill: 'rgba(79, 195, 247, 0.2)',
      };
    }

    return {
      line: '#ffd59a',
      fill: 'rgba(255, 183, 77, 0.2)',
    };
  }

  private _syncCharts(): void {
    const canvases = this.renderRoot.querySelectorAll<HTMLCanvasElement>('canvas.graph-canvas[data-key]');
    const activeKeys = new Set<string>();

    canvases.forEach((canvas) => {
      const key = canvas.dataset.key;
      const colorClass = canvas.dataset.colorClass || 'heating-graph';
      if (!key) return;

      activeKeys.add(key);
      const graph = this._graphHistory[key];
      if (!graph?.points?.length) return;

      const palette = this._getChartPalette(colorClass);
      const labels = graph.points.map((_, index) => index);
      const pointCount = graph.points.length;
      const existing = this._charts.get(key);

      if (existing && existing.canvas === canvas) {
        existing.data.labels = labels;
        const dataset = existing.data.datasets[0] as any;
        dataset.data = graph.points;
        dataset.borderColor = palette.line;
        dataset.backgroundColor = palette.fill;
        dataset.tension = 0.58;
        dataset.cubicInterpolationMode = 'monotone';
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
          datasets: [
            {
              data: graph.points,
              borderColor: palette.line,
              backgroundColor: palette.fill,
              fill: true,
              tension: 0.58,
              cubicInterpolationMode: 'monotone',
              borderWidth: 1.7,
              pointRadius: (ctx) => (ctx.dataIndex === pointCount - 1 ? 1.8 : 0),
              pointHoverRadius: 0,
              pointBackgroundColor: palette.line,
              pointBorderColor: 'rgba(0, 0, 0, 0.35)',
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
          },
          scales: {
            x: { display: false, grid: { display: false }, border: { display: false } },
            y: { display: false, grid: { display: false }, border: { display: false } },
          },
          elements: {
            line: { capBezierPoints: true },
          },
          layout: {
            padding: { top: 2, right: 0, bottom: 1, left: 0 },
          },
        },
      });

      this._charts.set(key, chart);
    });

    for (const [key, chart] of this._charts.entries()) {
      if (!activeKeys.has(key)) {
        chart.destroy();
        this._charts.delete(key);
      }
    }
  }

  private _formatTemperature(value: unknown): string {
    const numericValue = typeof value === 'number' ? value : parseFloat(String(value));
    return Number.isFinite(numericValue) ? `${numericValue}°` : '--';
  }

  private _getClimateModeIcon(stateObj: any): string {
    const mode = String(stateObj?.state || stateObj?.attributes?.hvac_action || '').toLowerCase();

    if (mode === 'heat' || mode === 'heating') return 'mdi:fire';
    if (mode === 'cool' || mode === 'cooling') return 'mdi:snowflake';
    if (mode === 'heat_cool' || mode === 'auto') return 'mdi:autorenew';
    if (mode === 'off') return 'mdi:power-off';

    return 'mdi:thermostat';
  }

  private _getHotWaterModeIcon(stateObj?: any): string {
    const rawMode = stateObj?.attributes?.operation_mode || stateObj?.attributes?.preset_mode || stateObj?.state || '';
    const mode = String(rawMode).toLowerCase();

    if (mode.includes('eco')) return 'mdi:leaf';
    if (mode.includes('high') || mode.includes('boost') || mode.includes('performance') || mode.includes('power') || mode.includes('hoch')) {
      return 'mdi:fire';
    }
    if (mode === 'off') return 'mdi:power-off';

    return 'mdi:water-thermometer';
  }

  private _isHotWaterActive(hotWaterStateObj?: any): boolean {
    if (!hotWaterStateObj) return false;

    // Check config for explicit hot_water_active_entity
    if (this.config.hot_water_active_entity && this.hass) {
      const activeEntity = this.hass.states[this.config.hot_water_active_entity];
      if (activeEntity) {
        const state = activeEntity.state?.toLowerCase();
        return state === 'on' || state === 'true' || state === 'heat' || state === 'heating' || state === 'active' || state === 'running';
      }
    }

    // Auto-detect based on operation_mode or preset_mode
    const mode = String(hotWaterStateObj?.attributes?.operation_mode || hotWaterStateObj?.attributes?.preset_mode || '').toLowerCase();
    return mode.includes('high') || mode.includes('boost') || mode.includes('performance') || mode.includes('power') || mode.includes('hoch');
  }

  private _getClimateActivityIndicator(stateObj?: any): { icon: string; tone: 'heating' | 'cooling' } | undefined {
    const action = String(stateObj?.attributes?.hvac_action || stateObj?.state || '').toLowerCase();

    if (action === 'heating' || action === 'heat') {
      return { icon: 'mdi:fire', tone: 'heating' };
    }

    if (action === 'cooling' || action === 'cool') {
      return { icon: 'mdi:snowflake', tone: 'cooling' };
    }

    return undefined;
  }

  private _renderModeIcon(icon: string, indicator?: { icon: string; tone: 'heating' | 'cooling' }) {
    const displayIcon = indicator?.icon || icon;
    const iconClass = indicator ? `bubble-icon active-mode-icon ${indicator.tone}` : 'bubble-icon';

    return html`
      <div class="target-icon-wrap">
        <ha-icon icon="${displayIcon}" class="${iconClass}"></ha-icon>
      </div>
    `;
  }

  private _interpolateColor(c1: string, c2: string, factor: number): string {
    const hex = (c: string) => {
        const h = c.replace('#', '');
        return parseInt(h, 16);
    };
    const r1 = (hex(c1) >> 16) & 255;
    const g1 = (hex(c1) >> 8) & 255;
    const b1 = (hex(c1)) & 255;
    
    const r2 = (hex(c2) >> 16) & 255;
    const g2 = (hex(c2) >> 8) & 255;
    const b2 = (hex(c2)) & 255;

    const r = Math.round(r1 + (r2 - r1) * factor);
    const g = Math.round(g1 + (g2 - g1) * factor);
    const b = Math.round(b1 + (b2 - b1) * factor);
    
    return `rgb(${r}, ${g}, ${b})`;
  }

  private _getGradient(stateObj: any, currentTemp: number, targetLow: number, targetHigh: number): string {
    const hvacAction = stateObj.attributes.hvac_action || stateObj.state;
    // Common colors
    const cGrey = '#607d8b';
    const cDarkGrey = '#455a64';
    const cOrange = '#ff9800';
    const cOrangeDark = '#e65100'; // Darker orange for full heat depth
    const cGreen = '#4caf50';
    const cBlue = '#2196f3';
    const cBlueDark = '#0d47a1';   // Darker blue for full cool depth
    
    // Safety check
    if (isNaN(currentTemp)) return `linear-gradient(180deg, ${cGrey}, ${cDarkGrey})`;

    // Difference required for full color intensity
    const maxDelta = 3;

    // heating, but below target temperature: bottom orange, top grey
    if (hvacAction === 'heating') {
      // If we only have single target, targetLow is the target
      if (currentTemp < targetLow) {
        const delta = targetLow - currentTemp;
        const intensity = delta / maxDelta >= 1 ? 1 : delta / maxDelta;
        
        // INTERPOLATE TOP COLOR: Grey -> Orange
        // Ensures no "Grey Bar" at the top when intensity is high (near 3deg).
        // Modulate from Grey to Orange starting at 40% intensity to keep contrast for small deltas.
        let topFactor = 0;
        if (intensity > 0.4) {
           topFactor = (intensity - 0.4) / 0.6; // 0..1
        }
        const topColor = this._interpolateColor(cGrey, cOrange, topFactor);
        
        // INTERPOLATE BOTTOM COLOR: Orange -> OrangeDark
        // Adds depth at high intensity so it's not flat
        const bottomColor = this._interpolateColor(cOrange, cOrangeDark, intensity);
        
        // HINT POSITION: Controls the "weight" of the gradient.
        // Intensity 0 (0deg) -> 90% (Transition happens at bottom, mostly Top Color/Grey)
        // Intensity 1 (3deg) -> 20% (Transition happens at top, mostly Bottom Color/Orange)
        const hint = 90 - (intensity * 70); 

        return `linear-gradient(180deg, ${topColor} 0%, ${hint}%, ${bottomColor} 100%)`;
      }
      
      // heating, but already >= target OR in range
      // Just a pleasant green-orange mix
      return `linear-gradient(180deg, ${cGreen}, 80%, ${cOrange})`;
    }

    // cooling
    if (hvacAction === 'cooling') {
      // cooling, but over target temperature: top blue, bottom grey
      if (currentTemp > targetHigh) {
        const delta = currentTemp - targetHigh;
        const intensity = delta / maxDelta >= 1 ? 1 : delta / maxDelta;

        // INTERPOLATE TARGET BLUE: Blue -> BlueDark
        // As intensity rises, the "Blue" end becomes darker for depth.
        const targetBlue = this._interpolateColor(cBlue, cBlueDark, intensity);

        // INTERPOLATE BOTTOM COLOR: Grey -> TargetBlue
        // Ensures no "Grey Bar" at the bottom when intensity is high.
        let botFactor = 0;
        if (intensity > 0.4) {
           botFactor = (intensity - 0.4) / 0.6;
        }
        const botColor = this._interpolateColor(cGrey, targetBlue, botFactor);

        // HINT POSITION:
        // Intensity 0 (0deg) -> 10% (Transition happens at top, mostly Bottom Color/Grey)
        // Intensity 1 (3deg) -> 80% (Transition happens at bottom, mostly Top Color/Blue)
        const hint = 10 + (intensity * 70);

        return `linear-gradient(180deg, ${cBlue} 0%, ${hint}%, ${botColor} 100%)`;
      }
      
      // cooling, and already <= target
      return `linear-gradient(180deg, ${cBlue}, 20%, ${cGreen})`;
    }

    // idle
    if (hvacAction === 'idle') {
      // idle, and in optimal temperature range: greenish gradient
      return `linear-gradient(180deg, ${cGreen} 0%, ${'#81c784'} 100%)`;
    }

    // off
    if (stateObj.state === 'off') {
        return `linear-gradient(180deg, ${cGrey} 0%, ${cDarkGrey} 100%)`;
    }

    // Fallback (maybe fan_only or dry) - Neutral
    return `linear-gradient(180deg, ${cGrey} 0%, ${cDarkGrey} 100%)`;
  }

  private _getGraphCacheKey(source: GraphSource): string {
    return source.attributeKey ? `${source.entityId}::${source.attributeKey}` : source.entityId;
  }

  private _resolveHeatingGraphSource(entityId: string): GraphSource {
    if (this.config.heating_graph_entity) {
      return { entityId: this.config.heating_graph_entity };
    }
    if (this.config.sensors?.temp) {
      return { entityId: this.config.sensors.temp };
    }
    return { entityId, attributeKey: 'current_temperature' };
  }

  private _resolveHotWaterGraphSource(hotWaterEntityId?: string): GraphSource | undefined {
    if (this.config.hot_water_graph_entity) {
      return { entityId: this.config.hot_water_graph_entity };
    }
    if (!hotWaterEntityId) {
      return undefined;
    }
    return { entityId: hotWaterEntityId, attributeKey: 'current_temperature' };
  }

  private _isGraphFresh(source: GraphSource): boolean {
    const key = this._getGraphCacheKey(source);
    const entry = this._graphHistory[key];
    if (!entry) return false;
    return Date.now() - entry.fetchedAt < this._graphCacheMs;
  }

  private async _ensureGraphHistory(source: GraphSource): Promise<void> {
    const key = this._getGraphCacheKey(source);
    if (this._isGraphFresh(source) || this._graphFetchInFlight.has(key)) {
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
        .map((entry) => {
          if (source.attributeKey) {
            return parseFloat(String(entry.attributes?.[source.attributeKey]));
          }
          return parseFloat(String(entry.state));
        })
        .filter((value) => Number.isFinite(value));

      const targetCount = Math.max(72, Math.min(180, Math.round((this.getBoundingClientRect().width || 300) / 2.5)));
      const points = this._downsamplePoints(rawValues, targetCount);
      const unit = this.hass.states[source.entityId]?.attributes?.unit_of_measurement || '°C';

      this._graphHistory[key] = {
        points,
        unit,
        fetchedAt: Date.now(),
      };
    } catch (err) {
      console.error('SimpleClimate: Graph history fetch failed', source, err);
    } finally {
      this._graphFetchInFlight.delete(key);
      this.requestUpdate();
    }
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

  private _renderGraphTile(label: string, source: GraphSource, colorClass: string) {
    const cacheKey = this._getGraphCacheKey(source);
    const graph = this._graphHistory[cacheKey];

    if (!graph || !this._isGraphFresh(source)) {
      void this._ensureGraphHistory(source);
    }

    const values = graph?.points || [];
    const latest = values.length ? values[values.length - 1] : undefined;
    const min = values.length ? Math.min(...values) : undefined;
    const max = values.length ? Math.max(...values) : undefined;

    return html`
      <div class="graph-tile ${colorClass}">
        <div class="graph-head">
          <div class="graph-title">${label}</div>
          <div class="graph-value">${latest !== undefined ? `${latest.toFixed(1)}${graph?.unit || '°C'}` : '--'}</div>
        </div>
        <div class="graph-body">
          ${values.length
            ? html`
                <canvas class="graph-canvas" data-key="${cacheKey}" data-color-class="${colorClass}" aria-hidden="true"></canvas>
                <div class="graph-scale">
                  <span>${max !== undefined ? `${max.toFixed(1)}${graph?.unit || '°C'}` : '--'}</span>
                  <span>${min !== undefined ? `${min.toFixed(1)}${graph?.unit || '°C'}` : '--'}</span>
                </div>
              `
            : html`<div class="graph-empty">No 24h data</div>`}
        </div>
      </div>
    `;
  }

  render() {
    // If config is missing, we can't do anything
    if (!this.config) return html``;
    
    // If hass is missing, we render a placeholder explicitly or return
    // But typically user wants to see the card structure.
    if (!this.hass) {
        return html`<ha-card style="padding:16px;">Loading...</ha-card>`;
    }

    const entityId = this.config.entity;
    let stateObj = this.hass.states[entityId];

    if (!stateObj) {
      stateObj = {
        entity_id: entityId,
        state: 'unavailable',
        attributes: { friendly_name: this.config.name || entityId },
      } as any;
    }

    // 1. Determine Temperatures
    let currentTemp = stateObj.attributes.current_temperature;
    
    // Config override
    if (this.config.sensors?.temp && this.hass.states[this.config.sensors.temp]) {
       const s = this.hass.states[this.config.sensors.temp];
       if (!isNaN(parseFloat(s.state))) currentTemp = parseFloat(s.state);
    }

    // Targets
    // Try to find High/Low. If single point 'temperature', assign to both or logic depends on mode?
    // If mode is 'heat', target is low. If mode is 'cool', target is high.
    // If 'heat_cool', we have both.
    let targetLow = stateObj.attributes.target_temp_low;
    let targetHigh = stateObj.attributes.target_temp_high;
    const singleTarget = stateObj.attributes.temperature;

    if (targetLow === undefined && singleTarget !== undefined) targetLow = singleTarget;
    if (targetHigh === undefined && singleTarget !== undefined) targetHigh = singleTarget;

    // Defaults if completely missing
    if (targetLow === undefined) targetLow = 20;
    if (targetHigh === undefined) targetHigh = 24;

    // Sensor overrides
    if (this.config.sensors?.target_low && this.hass.states[this.config.sensors.target_low]) {
        targetLow = parseFloat(this.hass.states[this.config.sensors.target_low].state);
    }
    if (this.config.sensors?.target_high && this.hass.states[this.config.sensors.target_high]) {
        targetHigh = parseFloat(this.hass.states[this.config.sensors.target_high].state);
    }

    const hotWaterEntityId = this.config.hot_water_entity;
    const hotWaterStateObj = hotWaterEntityId ? this.hass.states[hotWaterEntityId] : undefined;
    const showHeatingGraph = Boolean(this.config.show_heating_graph);
    const showHotWaterGraph = Boolean(this.config.show_hot_water_graph && hotWaterEntityId);
    const heatingGraphSource = showHeatingGraph ? this._resolveHeatingGraphSource(entityId) : undefined;
    const hotWaterGraphSource = showHotWaterGraph ? this._resolveHotWaterGraphSource(hotWaterEntityId) : undefined;

    const gradient = this._getGradient(stateObj, currentTemp, targetLow, targetHigh);

    // Labels
    const name = this.config.name || stateObj.attributes.friendly_name || 'Climate';
    const stateLabel = stateObj.attributes.hvac_action 
        ? this.hass.localize(`state_attributes.climate.hvac_action.${stateObj.attributes.hvac_action}`) 
        : this.hass.localize(`component.climate.state._.${stateObj.state}`) || stateObj.state;

    // Main Icon Logic
    let icon = 'mdi:thermostat';
    const action = stateObj.attributes.hvac_action || stateObj.state;
    if (action === 'heating') icon = 'mdi:fire';
    else if (action === 'cooling') icon = 'mdi:snowflake';
    else if (action === 'idle') icon = 'mdi:check-circle-outline';
    else if (action === 'off') icon = 'mdi:power-off';

    const graphTiles = [];
    if (heatingGraphSource) {
      graphTiles.push(this._renderGraphTile('Inside 24h', heatingGraphSource, 'heating-graph'));
    }
    if (hotWaterGraphSource) {
      graphTiles.push(this._renderGraphTile('Tank 24h', hotWaterGraphSource, 'tank-graph'));
    }
    const graphColumnsClass = graphTiles.length === 2 ? 'two-cols' : 'one-col';

    return html`
      <ha-card @click="${this._openMoreInfo}">
        <div class="bg-layer" style="background: ${gradient};"></div>
        
        <div class="container">
          <div class="header">
           <div class="header-left">
             <div class="name">${name}</div>
             <div class="temp-big">
              ${currentTemp !== undefined ? html`${currentTemp}<span class="unit">°</span>` : '--'}
             </div>
           </div>
             <div class="header-right">
                <ha-icon icon="${icon}" class="main-icon"></ha-icon>
                <div class="state-label">${stateLabel}</div>
             </div>
          </div>

          <div class="spacer"></div>

         <div class="metrics-row">
           <div class="footer-metrics">
               <div class="targets">
                 ${this._renderTargets(stateObj, targetLow, targetHigh)}
               </div>
               ${this._renderHotWater(hotWaterStateObj)}
             </div>
         </div>

          ${graphTiles.length
            ? html`
                <div class="graph-row ${graphColumnsClass}">
                  ${graphTiles}
                </div>
              `
            : html``}
        </div>
      </ha-card>
    `;
  }

    _renderTargets(stateObj: any, low: number, high: number) {
      const mode = stateObj.state;
      const modeIcon = this._getClimateModeIcon(stateObj);
      const activityIndicator = this._getClimateActivityIndicator(stateObj);
      const segments = [];
      segments.push(this._renderModeIcon(modeIcon, activityIndicator));
       // If off, show state chip but still allow hot water details.
       if (mode === 'off') {
          segments.push(html`<div class="divider"></div>`);
          segments.push(html`<div class="target-chip">OFF</div>`);
       } else {
          segments.push(html`<div class="divider"></div>`);

          // heat_cool -> show both
          // heat -> show low
          // cool -> show high
          // But hvac_modes might allow more.
        
          // Simplification: If we have distinct low/high, show range. If same, show one.
          if (low !== undefined && high !== undefined && low !== high) {
            segments.push(html`
              <div class="target-group">
                <div class="target-label">Min</div>
                <div class="target-val">${this._formatTemperature(low)}</div>
              </div>
              <div class="divider"></div>
              <div class="target-group">
                <div class="target-label">Max</div>
                <div class="target-val">${this._formatTemperature(high)}</div>
              </div>
            `);
          } else {
            segments.push(html`
              <div class="target-group">
                <div class="target-label">Target</div>
                <div class="target-val">${this._formatTemperature(low ?? high)}</div>
              </div>
            `);
          }
        }

      return html`${segments}`;
    }

    _renderHotWater(hotWaterStateObj?: any) {
      if (!hotWaterStateObj) {
        return html``;
      }

      const hotWaterEntityId = hotWaterStateObj.entity_id;
      const setTemperature = hotWaterStateObj.attributes.temperature;
      const tankTemperature = hotWaterStateObj.attributes.current_temperature;
      const modeIcon = this._getHotWaterModeIcon(hotWaterStateObj);
      const isHotWaterActive = this._isHotWaterActive(hotWaterStateObj);
      const activityIndicator = isHotWaterActive ? { icon: 'mdi:fire', tone: 'heating' as const } : undefined;

      return html`
        <div
          class="targets hot-water-bubble"
          @click=${(ev: Event) => this._openEntityMoreInfo(hotWaterEntityId, ev)}
        >
          ${this._renderModeIcon(modeIcon, activityIndicator)}
          <div class="divider"></div>
          <div class="target-group">
            <div class="target-label">Set</div>
            <div class="target-val">${this._formatTemperature(setTemperature)}</div>
          </div>
          <div class="divider"></div>
          <div class="target-group">
            <div class="target-label">Temp</div>
            <div class="target-val">${this._formatTemperature(tankTemperature)}</div>
          </div>
        </div>
      `;
    }

  _openMoreInfo() {
    this._openEntityMoreInfo(this.config.entity);
  }

  _openEntityMoreInfo(entityId?: string, ev?: Event) {
    ev?.stopPropagation();

    if (entityId) {
      const event = new CustomEvent("hass-more-info", {
        detail: { entityId },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        height: 100%;
      }
      ha-card {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        border-radius: var(--ha-card-border-radius, 12px);
        box-shadow: var(--ha-card-box-shadow, none);
        cursor: pointer;
        color: white;
        container-type: inline-size; /* Enable container query units (cqi) */
      }
      .bg-layer {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        z-index: 0;
        transition: background 0.5s ease;
      }
      .container {
        position: relative;
        z-index: 1;
        padding: clamp(12px, 4%, 20px);
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 0;
        overflow: hidden;
      }
      
      .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex: 0 0 auto;
        min-height: 0;
      }

      .header-left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        min-width: 0;
      }
      
      .temp-big {
        font-size: clamp(2rem, 10cqi, 4rem);
        font-weight: 100;
        line-height: 1;
        text-shadow: 0 1px 4px rgba(0,0,0,0.3);
        white-space: nowrap;
        letter-spacing: -1px;
        margin-top: 2px;
      }
      .temp-big .unit {
        font-size: clamp(1rem, 4cqi, 2.2rem);
        vertical-align: top;
        opacity: 0.8;
        font-weight: 200;
      }
      
      .header-right {
        text-align: right;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        flex: 0 0 auto;
      }
      .main-icon {
        --mdc-icon-size: clamp(22px, 7cqi, 36px);
        width: clamp(22px, 7cqi, 36px);
        height: clamp(22px, 7cqi, 36px);
        filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
        margin-bottom: 4px;
      }
      .state-label {
        font-size: clamp(0.7rem, 3cqi, 1rem);
        font-weight: 300;
        opacity: 0.9;
        text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .spacer {
        flex: 1;
        min-height: 0;
      }

      .metrics-row {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 0 0 auto;
        min-height: 0;
        margin-bottom: 6px;
      }
      .footer-metrics {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
        flex-wrap: wrap;
      }
      
      .name {
        font-size: clamp(0.8rem, 3.5cqi, 1.1rem);
        font-weight: 500;
        text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        opacity: 0.9;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
      }

      .targets {
        display: flex;
        align-items: center;
        background: rgba(0,0,0,0.2);
        border-radius: 20px;
        padding: 8px clamp(10px, 3%, 14px);
        backdrop-filter: blur(4px);
        flex: 0 0 auto;
        max-width: 100%;
        overflow: hidden;
      }
      .target-group {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        min-width: 0;
      }
      .target-icon-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        width: clamp(18px, 3.4cqi, 28px);
        height: clamp(18px, 3.4cqi, 28px);
        min-width: clamp(14px, 2.5cqi, 18px);
        flex: 0 0 auto;
        align-self: center;
      }
      .target-label {
        font-size: clamp(0.55rem, 2cqi, 0.7rem);
        text-transform: uppercase;
        opacity: 0.7;
      }
      .target-val {
        font-size: clamp(0.75rem, 2.4cqi, 0.95rem);
        font-weight: 400;
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .divider {
        width: 1px;
        height: 28px;
        background: rgba(255,255,255,0.3);
        margin: 0 12px;
      }
      .bubble-icon {
        --mdc-icon-size: clamp(14px, 2.6cqi, 18px);
        width: clamp(14px, 2.6cqi, 18px);
        height: clamp(14px, 2.6cqi, 18px);
        display: block;
        line-height: 1;
        opacity: 0.95;
      }
      .bubble-icon.active-mode-icon {
        animation: pulse-glow 1.5s ease-in-out infinite;
      }
      .bubble-icon.active-mode-icon.heating {
        color: #ff9800;
        filter: drop-shadow(0 0 3px rgba(255, 152, 0, 0.6));
      }
      .bubble-icon.active-mode-icon.cooling {
        color: #81d4fa;
        filter: drop-shadow(0 0 3px rgba(33, 150, 243, 0.6));
        animation-name: pulse-glow-cool;
      }
      .hot-water-bubble {
        flex-shrink: 0;
        cursor: pointer;
      }
      @keyframes pulse-glow {
        0%, 100% {
          opacity: 1;
          filter: drop-shadow(0 0 3px rgba(255, 152, 0, 0.6));
        }
        50% {
          opacity: 0.7;
          filter: drop-shadow(0 0 6px rgba(255, 152, 0, 0.8));
        }
      }
      @keyframes pulse-glow-cool {
        0%, 100% {
          opacity: 1;
          filter: drop-shadow(0 0 3px rgba(33, 150, 243, 0.6));
        }
        50% {
          opacity: 0.7;
          filter: drop-shadow(0 0 6px rgba(129, 212, 250, 0.85));
        }
      }
      .target-chip {
        font-weight: 400;
        font-size: clamp(0.75rem, 2.4cqi, 0.95rem);
      }

      .graph-row {
        display: grid;
        gap: 8px;
        margin-top: 0;
      }
      .graph-row.one-col {
        grid-template-columns: 1fr;
      }
      .graph-row.two-cols {
        grid-template-columns: 1fr 1fr;
      }
      .graph-tile {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        padding: 9px 11px;
        backdrop-filter: blur(4px);
        min-width: 0;
      }
      .graph-head {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 8px;
      }
      .graph-title {
        font-size: clamp(0.56rem, 1.8cqi, 0.7rem);
        text-transform: uppercase;
        letter-spacing: 0.04em;
        opacity: 0.72;
      }
      .graph-value {
        font-size: clamp(0.7rem, 2.1cqi, 0.9rem);
        font-weight: 450;
        white-space: nowrap;
      }
      .graph-body {
        margin-top: 5px;
        height: 60px;
        position: relative;
        display: grid;
        grid-template-rows: minmax(0, 1fr) auto;
        row-gap: 4px;
        min-height: 0;
      }
      .graph-body .graph-canvas {
        width: 100%;
        height: 100%;
        min-height: 28px;
        display: block;
      }
      .graph-grid {
        stroke: rgba(255, 255, 255, 0.14);
        stroke-width: 0.6;
        shape-rendering: crispEdges;
      }
      .sparkline {
        fill: none;
        stroke-width: 1.7;
        stroke-linecap: round;
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
      }
      .sparkline-fill {
        stroke: none;
      }
      .sparkline-dot {
        stroke: rgba(0, 0, 0, 0.35);
        stroke-width: 0.6;
      }
      .heating-graph .sparkline {
        stroke: #ffd59a;
      }
      .heating-graph .sparkline-fill {
        fill: rgba(255, 183, 77, 0.2);
      }
      .heating-graph .sparkline-dot {
        fill: #ffd59a;
      }
      .tank-graph .sparkline {
        stroke: #9ad9ff;
      }
      .tank-graph .sparkline-fill {
        fill: rgba(79, 195, 247, 0.2);
      }
      .tank-graph .sparkline-dot {
        fill: #9ad9ff;
      }
      .graph-scale {
        margin-top: 2px;
        display: flex;
        justify-content: space-between;
        font-size: clamp(0.64rem, 1.92cqi, 0.78rem);
        font-weight: 520;
        opacity: 0.76;
        line-height: 1.1;
      }
      .graph-scale span {
        white-space: nowrap;
      }
      .graph-empty {
        font-size: clamp(0.6rem, 1.8cqi, 0.72rem);
        opacity: 0.75;
        line-height: 50px;
        text-align: center;
      }

      @container (max-width: 280px) {
        .graph-row.two-cols {
          grid-template-columns: 1fr;
        }
      }
    `;
  }
}

// Register Custom Element
if (!customElements.get("slick-simple-climate-card")) {
  customElements.define("slick-simple-climate-card", SimpleClimateCard);
}

class SimpleClimateCardEditor extends LitElement {
  hass!: HomeAssistant;
  _config!: SimpleClimateCardConfig;
  
  static get properties() { return { hass: {}, _config: {} }; }
  setConfig(config: SimpleClimateCardConfig) { this._config = config; }
  
  _valueChanged(ev: CustomEvent) { 
    const newConfig = { ...this._config, ...ev.detail.value };
    const event = new CustomEvent("config-changed", {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  render() { 
      // Minimal editor
      if (!this.hass || !this._config) return html``;
      
      const schema = [
        { name: "entity", label: "Entity", selector: { entity: { domain: "climate" } } },
         { name: "name", label: "Name", selector: { text: {} } },
        { name: "hot_water_entity", label: "Hot Water Entity", selector: { entity: { domain: "water_heater" } } },
        { name: "hot_water_active_entity", label: "Hot Water Active Entity", selector: { entity: {} } },
        { name: "show_heating_graph", label: "Show Heating 24h Graph", selector: { boolean: {} } },
        { name: "heating_graph_entity", label: "Heating Graph Entity (optional)", selector: { entity: {} } },
        { name: "show_hot_water_graph", label: "Show Hot Water 24h Graph", selector: { boolean: {} } },
        { name: "hot_water_graph_entity", label: "Hot Water Graph Entity (optional)", selector: { entity: {} } }
      ];

      return html`
        <ha-form
          .hass=${this.hass}
          .data=${this._config}
          .schema=${schema}
          .computeLabel=${(s: any) => s.label}
          @value-changed=${this._valueChanged}
        ></ha-form>
      `; 
  } 
}

if (!customElements.get("slick-simple-climate-card-editor")) {
  customElements.define("slick-simple-climate-card-editor", SimpleClimateCardEditor);
}

// Register
window.customCards = window.customCards || [];
window.customCards.push({ 
    type: "slick-simple-climate-card", 
    name: "Slick Simple Climate", 
    preview: true,
    description: "A clean climate card with dynamic gradients." 
});
