/**
 * Mini Weather Card
 * @version 0.2.0
 */

import { LitElement, html, css } from 'lit';
import type {
  HomeAssistant,
  MiniWeatherCardConfig,
  ForecastData,
} from './types';

const CARD_VERSION = "0.2.0";
const BAR_COLOR_MIN_TEMP = -20;
const BAR_COLOR_MAX_TEMP = 35;

console.info(
  `%c MINI-WEATHER-CARD %c ${CARD_VERSION} `,
  'color: white; background: #2980b9; font-weight: 700;',
  'color: #2980b9; background: white; font-weight: 700;'
);

// ----------------------------------------------------------------------
// TAGESZEIT & FARBVERLÄUFE (basierend auf Sonnenstand)
// ----------------------------------------------------------------------
type TimeOfDay = 'night' | 'early-dawn' | 'late-dawn' | 'morning' | 'noon' | 'early-afternoon' | 'late-afternoon' | 'early-dusk' | 'late-dusk';

function getTimeOfDayFromSun(elevation: number, rising: boolean): TimeOfDay {
  // Nacht: Sonne tief unter Horizont
  if (elevation < -18) return 'night';
  
  // Dämmerungsphasen
  if (elevation >= -18 && elevation < -6) {
    return rising ? 'early-dawn' : 'late-dusk';
  }
  
  if (elevation >= -6 && elevation < 0) {
    return rising ? 'late-dawn' : 'early-dusk';
  }
  
  // Tag: Sonne über Horizont
  if (elevation >= 0 && elevation < 15) {
    return rising ? 'morning' : 'late-afternoon';
  }
  
  if (elevation >= 15 && elevation < 35) {
    return rising ? 'morning' : 'early-afternoon';
  }
  
  if (elevation >= 35) {
    return 'noon';
  }
  
  return 'noon';
}

function isBadWeather(condition: string): boolean {
  const badConditions = ['rainy', 'pouring', 'lightning', 'snowy', 'hail', 'fog'];
  return badConditions.includes(condition);
}

interface Gradients {
  bright: string;
  dark: string;
}

function getGradients(timeOfDay: TimeOfDay, isBad: boolean): Gradients {
  const gradients: Record<string, Gradients> = {
    // SCHÖNWETTER
    'night-good': {
      bright: 'linear-gradient(180deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
      dark: 'linear-gradient(180deg, #000000 0%, #0a1929 50%, #1a2f42 100%)'
    },
    'early-dawn-good': {
      bright: 'linear-gradient(180deg, #2c3e50 0%, #3a5169 50%, #526c87 100%)',
      dark: 'linear-gradient(180deg, #1a1f2e 0%, #2b3a4d 50%, #3d5167 100%)'
    },
    'late-dawn-good': {
      bright: 'linear-gradient(180deg, #f3904f 0%, #f7b267 50%, #ffd89b 100%)',
      dark: 'linear-gradient(180deg, #d76d47 0%, #e89a5f 50%, #f5c98c 100%)'
    },
    'morning-good': {
      bright: 'linear-gradient(180deg, #56ccf2 0%, #87ceeb 50%, #a8daff 100%)',
      dark: 'linear-gradient(180deg, #3ba5d1 0%, #6bb8e0 50%, #8dc9f2 100%)'
    },
    'noon-good': {
      bright: 'linear-gradient(180deg, #1e88e5 0%, #42a5f5 50%, #64b5f6 100%)',
      dark: 'linear-gradient(180deg, #1565c0 0%, #1e88e5 50%, #42a5f5 100%)'
    },
    'early-afternoon-good': {
      bright: 'linear-gradient(180deg, #42a5f5 0%, #64b5f6 50%, #90caf9 100%)',
      dark: 'linear-gradient(180deg, #2196f3 0%, #42a5f5 50%, #64b5f6 100%)'
    },
    'late-afternoon-good': {
      bright: 'linear-gradient(180deg, #ff9a56 0%, #ffb07c 50%, #ffcda3 100%)',
      dark: 'linear-gradient(180deg, #f57c42 0%, #ff9656 50%, #ffb486 100%)'
    },
    'early-dusk-good': {
      bright: 'linear-gradient(180deg, #fa709a 0%, #fc8ba8 50%, #ffa7bd 100%)',
      dark: 'linear-gradient(180deg, #e85285 0%, #f56a94 50%, #fc8ba8 100%)'
    },
    'late-dusk-good': {
      bright: 'linear-gradient(180deg, #434343 0%, #5a5a5a 50%, #717171 100%)',
      dark: 'linear-gradient(180deg, #1a1a1a 0%, #2f2f2f 50%, #454545 100%)'
    },

    // SCHLECHTWETTER
    'night-bad': {
      bright: 'linear-gradient(180deg, #263238 0%, #37474f 50%, #455a64 100%)',
      dark: 'linear-gradient(180deg, #0d1117 0%, #1a1f2e 50%, #263238 100%)'
    },
    'early-dawn-bad': {
      bright: 'linear-gradient(180deg, #455a64 0%, #546e7a 50%, #607d8b 100%)',
      dark: 'linear-gradient(180deg, #2c3e50 0%, #34495e 50%, #455a64 100%)'
    },
    'late-dawn-bad': {
      bright: 'linear-gradient(180deg, #78909c 0%, #90a4ae 50%, #b0bec5 100%)',
      dark: 'linear-gradient(180deg, #546e7a 0%, #607d8b 50%, #78909c 100%)'
    },
    'morning-bad': {
      bright: 'linear-gradient(180deg, #607d8b 0%, #78909c 50%, #90a4ae 100%)',
      dark: 'linear-gradient(180deg, #455a64 0%, #546e7a 50%, #607d8b 100%)'
    },
    'noon-bad': {
      bright: 'linear-gradient(180deg, #546e7a 0%, #607d8b 50%, #78909c 100%)',
      dark: 'linear-gradient(180deg, #37474f 0%, #455a64 50%, #546e7a 100%)'
    },
    'early-afternoon-bad': {
      bright: 'linear-gradient(180deg, #607d8b 0%, #78909c 50%, #90a4ae 100%)',
      dark: 'linear-gradient(180deg, #455a64 0%, #546e7a 50%, #607d8b 100%)'
    },
    'late-afternoon-bad': {
      bright: 'linear-gradient(180deg, #78909c 0%, #8d9da6 50%, #a3b1ba 100%)',
      dark: 'linear-gradient(180deg, #546e7a 0%, #607d8b 50%, #78909c 100%)'
    },
    'early-dusk-bad': {
      bright: 'linear-gradient(180deg, #546e7a 0%, #607d8b 50%, #78909c 100%)',
      dark: 'linear-gradient(180deg, #37474f 0%, #455a64 50%, #546e7a 100%)'
    },
    'late-dusk-bad': {
      bright: 'linear-gradient(180deg, #37474f 0%, #455a64 50%, #546e7a 100%)',
      dark: 'linear-gradient(180deg, #1c2329 0%, #263238 50%, #37474f 100%)'
    }
  };

  const key = `${timeOfDay}-${isBad ? 'bad' : 'good'}`;
  return gradients[key] || gradients['noon-good'];
}

// ----------------------------------------------------------------------
// HAUPT KARTE
// ----------------------------------------------------------------------
export class MiniWeatherCard extends LitElement {
  hass!: HomeAssistant;
  config!: MiniWeatherCardConfig;
  _forecast: ForecastData[] | null = null;
  _cardHeight: number = 200;
  _cardWidth: number = 300;
  _resizeObserver!: ResizeObserver;
  _forecastInterval?: number;
  _forecastRequestToken: number = 0;

  _getCurrentTemperatureValue(): number | undefined {
    const entityId = this.config?.entity;
    if (!this.hass || !entityId) return undefined;

    const stateObj = this.hass.states[entityId];
    let currentTemp: unknown = stateObj?.attributes?.temperature;

    if (this.config.temp_sensor) {
      const sensorState = this.hass.states[this.config.temp_sensor];
      if (sensorState) currentTemp = sensorState.state;
    }

    return this._toOptionalNumber(currentTemp);
  }

  _getForecastBounds(entries: ForecastData[]): { min: number; max: number } {
    let min = Infinity;
    let max = -Infinity;

    for (const entry of entries) {
      const high = entry.temperature ?? entry.temp_max;
      const low = entry.templow ?? entry.temp_min;

      if (low !== undefined && low < min) min = low;
      if (high !== undefined && high > max) max = high;
      if (low === undefined && high !== undefined && high < min) min = high;
    }

    if (!isFinite(min)) min = 0;
    if (!isFinite(max)) max = min + 1;
    if (max === min) max = min + 1;

    return { min, max };
  }

  _getBarScaleStyles(low: number, high: number, globalMin: number, globalMax: number): { windowStyle: string; scaleStyle: string } {
    const safeRange = Math.max(globalMax - globalMin, 0.1);
    const colorRange = BAR_COLOR_MAX_TEMP - BAR_COLOR_MIN_TEMP;
    const start = Math.min(low, high);
    const end = Math.max(low, high);
    const startPct = Math.min(Math.max(((start - globalMin) / safeRange) * 100, 0), 100);
    const endPct = Math.min(Math.max(((end - globalMin) / safeRange) * 100, 0), 100);
    const colorStartPct = Math.min(Math.max(((start - BAR_COLOR_MIN_TEMP) / colorRange) * 100, 0), 100);
    const colorEndPct = Math.min(Math.max(((end - BAR_COLOR_MIN_TEMP) / colorRange) * 100, 0), 100);
    const colorWidthPct = Math.max(colorEndPct - colorStartPct, 0.5);
    const scaleWidthPct = 10000 / colorWidthPct;
    const scaleOffsetPct = (colorStartPct / colorWidthPct) * 100;

    return {
      windowStyle: `left:${startPct}%;right:${100 - endPct}%`,
      scaleStyle: `width:${scaleWidthPct}%;left:-${scaleOffsetPct}%`,
    };
  }

  _getMeasuredHeaderHeight(): number {
    return Math.min(Math.max(this._cardWidth * 0.11, 64), 88);
  }
  
  static get properties() {
    return {
      hass: { attribute: false },
      config: { state: true },
      _forecast: { state: true },
      _cardWidth: { state: true },
      _cardHeight: { state: true }
    };
  }

  static getConfigElement() { return document.createElement("slick-minimal-weather-card-editor"); }
  
  static getStubConfig(hass: HomeAssistant) {
    let entity = "";
    if (hass && hass.states) {
       const weatherEntities = Object.keys(hass.states).filter(id => id.startsWith("weather."));
       if (weatherEntities.length > 0) entity = weatherEntities[0];
    }
    return { 
        type: 'custom:slick-minimal-weather-card', 
        entity: entity, 
        title: "Wetter", 
      mode: "daily"
    }; 
  }

  constructor() {
    super();
    this._forecast = null;
    this._cardHeight = 200;
    this._cardWidth = 300;
    
    this._resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
            this._cardWidth = entry.contentRect.width;
            this._cardHeight = entry.contentRect.height;
            this.requestUpdate();
        }
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this._resizeObserver.observe(this as unknown as Element);
    if (this.hass && this.config) {
      this._updateForecast();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._resizeObserver.disconnect();
    if (this._forecastInterval) { clearInterval(this._forecastInterval); this._forecastInterval = undefined; }
  }

  setConfig(config: MiniWeatherCardConfig) {
    if (!config) throw new Error("Invalid configuration");

    const newConfig = {
      title: "Wetter",
      mode: "daily",
      temp_sensor: undefined,
      sun_entity: "sun.sun",
      ...config
    };

    if (newConfig.mode && !['daily', 'hourly'].includes(newConfig.mode)) {
        throw new Error(`Invalid mode: ${newConfig.mode}. Expected 'daily' or 'hourly'.`);
    }

    this.config = newConfig as MiniWeatherCardConfig;
  }

  updated(changedProps: Map<string, any>) {
    super.updated(changedProps);
    const isFirstHass = changedProps.has('hass') && !changedProps.get('hass');
    if (changedProps.has('config') || isFirstHass) {
      this._updateForecast();
      if (this._forecastInterval) clearInterval(this._forecastInterval);
      this._forecastInterval = window.setInterval(() => this._updateForecast(), 900000);
    }
  }

  shouldUpdate(changedProps: Map<string, any>) {
    if (
      changedProps.has('config') ||
      changedProps.has('_forecast') ||
      changedProps.has('_cardWidth') ||
      changedProps.has('_cardHeight')
    ) {
      return true;
    }

    if (changedProps.has('hass')) {
      const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
      if (!oldHass || !this.hass || !this.config) return true;

      const weatherEntity = this.config.entity;
      const tempEntity = this.config.temp_sensor;
      const sunEntity = this.config.sun_entity || 'sun.sun';

      return (
        (weatherEntity ? oldHass.states[weatherEntity] !== this.hass.states[weatherEntity] : false) ||
        (tempEntity ? oldHass.states[tempEntity] !== this.hass.states[tempEntity] : false) ||
        (sunEntity ? oldHass.states[sunEntity] !== this.hass.states[sunEntity] : false)
      );
    }

    return true;
  }

  _toOptionalNumber(value: unknown): number | undefined {
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    if (typeof value === 'string' && value.trim() !== '') {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) return parsed;
    }
    return undefined;
  }

  _normalizeForecast(entries: unknown): ForecastData[] {
    if (!Array.isArray(entries)) return [];

    const normalizedEntries: Array<ForecastData | null> = entries.map((entry) => {
        if (!entry || typeof entry !== 'object') return null;

        const forecastEntry = entry as Record<string, unknown>;
        const datetime = typeof forecastEntry.datetime === 'string' ? forecastEntry.datetime : null;
        if (!datetime) return null;

        const normalizedEntry: ForecastData = {
          datetime,
          condition: typeof forecastEntry.condition === 'string' ? forecastEntry.condition : '',
        };

        const temperature = this._toOptionalNumber(forecastEntry.temperature);
        const tempMax = this._toOptionalNumber(forecastEntry.temp_max);
        const tempLow = this._toOptionalNumber(forecastEntry.templow);
        const tempMin = this._toOptionalNumber(forecastEntry.temp_min);

        if (temperature !== undefined) normalizedEntry.temperature = temperature;
        if (tempMax !== undefined) normalizedEntry.temp_max = tempMax;
        if (tempLow !== undefined) normalizedEntry.templow = tempLow;
        if (tempMin !== undefined) normalizedEntry.temp_min = tempMin;

        return normalizedEntry;
      });

    return normalizedEntries.filter((entry): entry is ForecastData => entry !== null);
  }

  _extractForecastResponse(response: any, entityId: string): unknown {
    if (response?.service_response?.[entityId]?.forecast) {
      return response.service_response[entityId].forecast;
    }

    if (response?.[entityId]?.forecast) {
      return response[entityId].forecast;
    }

    if (Array.isArray(response)) {
      for (const item of response) {
        if (item?.service_response?.[entityId]?.forecast) {
          return item.service_response[entityId].forecast;
        }
        if (item?.[entityId]?.forecast) {
          return item[entityId].forecast;
        }
      }
    }

    return [];
  }

  async _updateForecast() {
    if (!this.hass || !this.config?.entity) {
      this._forecast = [];
      return;
    }

    const entityId = this.config.entity;
    const stateObj = this.hass.states[entityId];
    if (!stateObj) {
      this._forecast = [];
      return;
    }

    const fallbackForecast = this._normalizeForecast(stateObj.attributes?.forecast);
    if (fallbackForecast.length > 0 && this.config.mode === 'daily') {
      this._forecast = fallbackForecast;
      return;
    }

    const requestToken = ++this._forecastRequestToken;

    try {
      const response = await this.hass.callApi<any>(
        'POST',
        'services/weather/get_forecasts?return_response',
        { entity_id: entityId, type: this.config.mode || 'daily' }
      );

      if (requestToken !== this._forecastRequestToken) return;

      const forecast = this._normalizeForecast(this._extractForecastResponse(response, entityId));
      this._forecast = forecast.length > 0 ? forecast : fallbackForecast;
    } catch (err) {
      console.error('MiniWeatherCard: Forecast fetch failed', err);
      if (requestToken === this._forecastRequestToken) {
        this._forecast = fallbackForecast;
      }
    }
  }

  render() {
    if (!this.config) return html``;
    if (!this.hass) return html``;

    const stateObj = this.config.entity ? this.hass.states[this.config.entity] : undefined;

    const currentTemp = this._getCurrentTemperatureValue();

    const ROW_HEIGHT = 24;
    const headerHeight = this._getMeasuredHeaderHeight();
    const contentPadding = Math.min(Math.max(this._cardWidth * 0.04, 12), 20);
    const verticalPadding = contentPadding * 2;
    const forecastTopGap = 4;
    const bodyHeight = Math.max(this._cardHeight - verticalPadding - headerHeight - forecastTopGap, 0);
    const showForecast = this._cardHeight > 140;
    const fullForecast = this._forecast || [];
    const maxRows = showForecast ? Math.max(Math.floor(bodyHeight / ROW_HEIGHT), 0) : 0;
    const forecastRows = showForecast ? Math.min(fullForecast.length, maxRows) : 0;
    const forecast = showForecast ? fullForecast.slice(0, forecastRows) : [];
    const isHourly = this.config.mode === 'hourly';
    let headerLabel: any = html`&nbsp;`;
    if (fullForecast.length > 0) {
        const today = fullForecast[0];
        const h = today.temperature ?? today.temp_max;
        const l = today.templow ?? today.temp_min;
        const hVal = h !== undefined ? Math.round(h) : '--';
        const lVal = l !== undefined ? Math.round(l) : '--';
        if (isHourly) headerLabel = html`${hVal}°`;
        else headerLabel = lVal === '--' ? html`H:${hVal}°` : html`H:${hVal}° L:${lVal}°`;
    }

    const gradients = this._getCurrentGradients();
    const currentTempLabel = currentTemp !== undefined ? `${Math.round(currentTemp)}°` : '--';
    const forecastBounds = this._getForecastBounds(fullForecast);

    return html`
      <ha-card @click="${this._openMoreInfo}" style="cursor: pointer;">
        <div class="bg-container">
            <div class="bg-layer bright" style="background: ${gradients.bright};"></div>
            <div class="bg-layer dark" style="background: ${gradients.dark};"></div>
            
        </div>

        <div class="container content-layer">
            <div class="header">
        <div class="temp-big">${currentTempLabel}</div>
                <div class="header-right">
                    <ha-icon icon="${this._getIcon(stateObj ? stateObj.state : '')}" class="main-icon"></ha-icon>
                    <div class="hl-label">${headerLabel}</div>
                </div>
            </div>

            ${showForecast ? html`
                <div class="forecast-list">
                    ${forecast.map((day: ForecastData) => this._renderRow(day, forecastBounds.min, forecastBounds.max))}
                    ${fullForecast.length === 0 ? html`<div class="loading">Lade...</div>` : ''}
                </div>
            ` : html`<div style="flex:1;"></div>`} 

        </div>
      </ha-card>
    `;
  }

  _renderRow(day: ForecastData, globalMin: number = 0, globalMax: number = 1) {
    const date = new Date(day.datetime);
    const isHourly = this.config.mode === 'hourly';
    const label = Number.isNaN(date.getTime())
      ? ''
      : isHourly
        ? date.toLocaleTimeString(this.hass.language, { hour: '2-digit', minute: '2-digit' })
        : date.toLocaleDateString(this.hass.language, { weekday: 'short' });
    const temp = day.temperature ?? day.temp_max;
    const low = day.templow ?? day.temp_min;

    if (isHourly && temp !== undefined) return html`<div class="row hourly"><div class="day-name">${label}</div><div class="icon-small"><ha-icon icon="${this._getIcon(day.condition)}"></ha-icon></div><div class="temp-single">${Math.round(temp)}°</div></div>`;
    else if (low !== undefined && temp !== undefined) {
      const barStyles = this._getBarScaleStyles(low, temp, globalMin, globalMax);
      return html`<div class="row"><div class="day-name">${label}</div><div class="icon-small"><ha-icon icon="${this._getIcon(day.condition)}"></ha-icon></div><div class="bars"><span class="val-low">${Math.round(low)}°</span><div class="bar-track"><div class="bar-fill-window" style="${barStyles.windowStyle}"><div class="bar-fill-scale" style="${barStyles.scaleStyle}"></div></div></div><span class="val-high">${Math.round(temp)}°</span></div></div>`;
    }
    return html``;
  }

  _getIcon(condition: string): string {
    const map: Record<string, string> = { 'sunny': 'mdi:weather-sunny', 'clear-night': 'mdi:weather-night', 'partlycloudy': 'mdi:weather-partly-cloudy', 'cloudy': 'mdi:cloud', 'rainy': 'mdi:weather-rainy', 'pouring': 'mdi:weather-pouring', 'fog': 'mdi:weather-fog', 'hail': 'mdi:weather-hail', 'snowy': 'mdi:weather-snowy', 'lightning': 'mdi:weather-lightning' };
    return map[condition] || 'mdi:weather-cloudy';
  }

  _openMoreInfo() {
    if (this.config.entity) {
      this.dispatchEvent(new CustomEvent('hass-more-info', { 
        composed: true,
        detail: { entityId: this.config.entity }
      }));
    }
  }

  _getCurrentGradients(): Gradients {
    if (!this.hass || !this.config || !this.config.entity) {
      return { bright: 'linear-gradient(180deg, #2c3e50 0%, #151a1e 100%)', dark: 'linear-gradient(180deg, #243342 0%, #0a0a0a 100%)' };
    }

    const stateObj = this.hass.states[this.config.entity];
    if (!stateObj) {
      return { bright: 'linear-gradient(180deg, #2c3e50 0%, #151a1e 100%)', dark: 'linear-gradient(180deg, #243342 0%, #0a0a0a 100%)' };
    }

    const sunEntityId = this.config.sun_entity || 'sun.sun';
    const sunEntity = this.hass.states[sunEntityId];
    let timeOfDay: TimeOfDay = 'noon';
    
    if (sunEntity && sunEntity.attributes) {
      const elevation = sunEntity.attributes.elevation || 0;
      const rising = sunEntity.attributes.rising || false;
      timeOfDay = getTimeOfDayFromSun(elevation, rising);
    }

    const condition = stateObj.state;
    const isBad = isBadWeather(condition);

    return getGradients(timeOfDay, isBad);
  }

  static get styles() {
    return css`
      :host { display: block; height: 100%; isolation: isolate; }
      ha-card {
        background: transparent; color: white;
        border-radius: var(--ha-card-border-radius, 12px);
        height: 100%; box-sizing: border-box; overflow: hidden; display: flex; flex-direction: column;
        box-shadow: var(--ha-card-box-shadow, none); position: relative;
      }
      .bg-container { position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 0; overflow: hidden; border-radius: var(--ha-card-border-radius, 12px); }
      .bg-layer { position: absolute; top: 0; left: 0; right: 0; bottom: 0; transition: background 1s ease; }
      .bg-layer.bright { z-index: 1; }
      .bg-layer.dark { z-index: 2; }
      .content-layer { position: relative; z-index: 4; }
      .container { padding: clamp(12px, 4vw, 20px); height: 100%; display: flex; flex-direction: column; box-sizing: border-box; min-height: 0; overflow: hidden; }
      .header { display: flex; justify-content: space-between; align-items: flex-start; flex: 0 0 auto; margin-bottom: clamp(2px, 1vw, 6px); }
      .temp-big { font-size: clamp(2rem, 9vw, 4rem); font-weight: 100; line-height: 1; text-shadow: 0 1px 5px rgba(0,0,0,0.5); white-space: nowrap; letter-spacing: -1px; overflow: hidden; }
      .header-right { display: flex; flex-direction: column; align-items: flex-end; text-shadow: 0 1px 5px rgba(0,0,0,0.5); }
      .main-icon { --mdc-icon-size: clamp(22px, 6vw, 36px); margin-bottom: 4px; filter: drop-shadow(0 1px 5px rgba(0,0,0,0.5)); }
      .hl-label { font-size: clamp(0.75rem, 2.5vw, 1rem); font-weight: 300; opacity: 0.9; white-space: nowrap; }
      .forecast-list { display: flex; flex-direction: column; gap: 0; flex: 0 0 auto; overflow: hidden; justify-content: flex-start; text-shadow: 0 1px 3px rgba(0,0,0,0.8); }
      .row { display: grid; grid-template-columns: minmax(30px, 50px) 30px 1fr; align-items: center; font-size: clamp(0.72rem, 2.3vw, 0.95rem); height: 24px; }
      .day-name { font-weight: 400; opacity: 0.9; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .icon-small { text-align: center; }
      .icon-small ha-icon { --mdc-icon-size: 20px; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.8)); }
      .bars { display: flex; align-items: center; gap: 8px; justify-content: flex-end; }
      .val-low { opacity: 0.6; width: 25px; text-align: right; }
      .val-high { font-weight: 500; width: 25px; text-align: right; }
      .bar-track { flex-grow: 1; height: 5px; background: rgba(255,255,255,0.15); border-radius: 3px; position: relative; min-width: 50px; max-width: 100px; overflow: hidden; box-shadow: inset 0 1px 2px rgba(0,0,0,0.2); }
      .bar-fill-window { position: absolute; top: 0; bottom: 0; border-radius: 3px; overflow: hidden; transition: left 0.4s ease, right 0.4s ease; }
      .bar-fill-scale { position: absolute; top: 0; bottom: 0; background: linear-gradient(90deg, #4facfe 0%, #00f2fe 50%, #f5af19 100%); border-radius: 3px; opacity: 0.85; transition: width 0.4s ease, left 0.4s ease; }
      .hourly .temp-single { text-align: right; font-weight: 500; padding-right: 5px; }
      .loading { text-align: center; font-size: 0.8rem; opacity: 0.5; padding: 10px; }
    `;
  }
}
if (!customElements.get("slick-minimal-weather-card")) {
  customElements.define("slick-minimal-weather-card", MiniWeatherCard);
}

class MiniWeatherCardEditor extends LitElement {
  hass!: HomeAssistant;
  _config!: MiniWeatherCardConfig;
  
  static get properties() { return { hass: {}, _config: {} }; }
  setConfig(config: MiniWeatherCardConfig) { this._config = config; }
  _valueChanged(ev: CustomEvent) { const newConfig = ev.detail.value; const event = new CustomEvent("config-changed", { detail: { config: newConfig }, bubbles: true, composed: true, }); this.dispatchEvent(event); }
  render() { 
    if (!this.hass || !this._config) return html``;
    const schema = [
      { name: "entity", label: "Wetter Entität", selector: { entity: { domain: "weather" } } },
      { name: "title", label: "Titel", selector: { text: {} } },
      { name: "temp_sensor", label: "Temp. Override (Sensor)", selector: { entity: { domain: "sensor" } } },
      { name: "sun_entity", label: "Sonnen-Sensor", selector: { entity: { domain: "sun" } } },
      { name: "mode", label: "Modus", selector: { select: { options: [ { value: "daily", label: "Täglich" }, { value: "hourly", label: "Stündlich" } ] } } }
    ];
    return html`<ha-form .hass=${this.hass} .data=${this._config} .schema=${schema} .computeLabel=${(s: any) => s.label} @value-changed=${this._valueChanged}></ha-form>`; 
  }
}
if (!customElements.get("slick-minimal-weather-card-editor")) {
  customElements.define("slick-minimal-weather-card-editor", MiniWeatherCardEditor);
}

window.customCards = window.customCards || [];
window.customCards.push({ 
  type: "slick-minimal-weather-card", 
  name: "Slick Minimal Weather", 
  preview: true,
  description: "Minimalist weather card." 
});
