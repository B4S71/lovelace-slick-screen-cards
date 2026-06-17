/**
 * Energy Flow Card
 * @version 0.2.0
 */
import { LitElement } from 'lit';
import { type ChartType } from 'chart.js';
import type { HomeAssistant, EnergyFlowCardConfig } from './types';
declare module 'chart.js' {
    interface PluginOptionsByType<TType extends ChartType> {
        zeroLine?: {
            enabled?: boolean;
        };
    }
}
export declare class EnergyFlowCard extends LitElement {
    hass: HomeAssistant;
    config: EnergyFlowCardConfig;
    private _graphHistory;
    private _graphFetchInFlight;
    private _graphCacheMs;
    private _charts;
    private _solarTodayFromTotalCache;
    private _solarTodayFromTotalFetchInFlight;
    private _solarTodayFromTotalCacheMs;
    static get properties(): {
        hass: {
            attribute: boolean;
        };
        config: {
            state: boolean;
        };
    };
    static getConfigElement(): HTMLElement;
    static getStubConfig(): {
        type: string;
        title: string;
        solar_entity: string;
        grid_import_entity: string;
        grid_export_entity: string;
        battery_entity: string;
        battery_soc_entity: string;
        home_entity: string;
    };
    setConfig(config: EnergyFlowCardConfig): void;
    private _cachedGradients;
    private _activeIndex;
    private _displayedGradientKey;
    private _lastValidStates;
    private _resizeObserver?;
    private _width;
    private _height;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(): void;
    private _getState;
    private _formatEnergy;
    private _convertEnergyToKwh;
    private _getEntityEnergyInKwh;
    private _isSolarTodayFromTotalFresh;
    private _ensureSolarTodayFromTotal;
    private _getSolarEnergySummary;
    private _getNumericAttribute;
    private _getGraphCacheKey;
    private _isGraphFresh;
    private _downsamplePoints;
    private _smoothSeries;
    private _getChartPalette;
    private _syncPowerCharts;
    private _ensureGraphHistory;
    private _renderPowerChart;
    private _openEntityMoreInfo;
    private _handleEntityKeyDown;
    private _getGridDetailEntity;
    private _getBatteryDetailEntity;
    private _formatPower;
    private _clamp;
    private _mixHexColors;
    private _withAlpha;
    private _getLogarithmicPowerRatio;
    private _getSolarPowerRatio;
    private _getNeutralEnergyColor;
    private _buildBackgroundGradient;
    private _getFlowMode;
    private _getFlowModeColor;
    private _getFlowModeLabel;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
export declare class EnergyFlowCardEditor extends LitElement {
    hass: HomeAssistant;
    _config: EnergyFlowCardConfig;
    static get properties(): {
        hass: {
            attribute: boolean;
        };
        _config: {
            state: boolean;
        };
    };
    setConfig(config: EnergyFlowCardConfig): void;
    _valueChanged(ev: CustomEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=energy-flow-card.d.ts.map