/**
 * Simple Climate Card
 * @version 0.2.0
 */
import { LitElement } from 'lit';
import type { HomeAssistant, SimpleClimateCardConfig } from './types';
export declare class SimpleClimateCard extends LitElement {
    hass: HomeAssistant;
    config: SimpleClimateCardConfig;
    private _graphHistory;
    private _graphFetchInFlight;
    private _graphCacheMs;
    private _charts;
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
        entity: string;
        name: string;
    };
    getCardSize(): number;
    getLayoutOptions(): {
        grid_rows: number;
        grid_columns: number;
        grid_min_rows: number;
        grid_min_columns: number;
    };
    setConfig(config: SimpleClimateCardConfig): void;
    disconnectedCallback(): void;
    protected updated(): void;
    private _getChartPalette;
    private _syncCharts;
    private _formatTemperature;
    private _getClimateModeIcon;
    private _getHotWaterModeIcon;
    private _isHotWaterActive;
    private _getClimateActivityIndicator;
    private _renderModeIcon;
    private _interpolateColor;
    private _getGradient;
    private _getGraphCacheKey;
    private _resolveHeatingGraphSource;
    private _resolveHotWaterGraphSource;
    private _isGraphFresh;
    private _ensureGraphHistory;
    private _downsamplePoints;
    private _renderGraphTile;
    render(): import("lit-html").TemplateResult<1>;
    _renderTargets(stateObj: any, low: number, high: number): import("lit-html").TemplateResult<1>;
    _renderHotWater(hotWaterStateObj?: any): import("lit-html").TemplateResult<1>;
    _openMoreInfo(): void;
    _openEntityMoreInfo(entityId?: string, ev?: Event): void;
    static get styles(): import("lit").CSSResult;
}
//# sourceMappingURL=simple-climate-card.d.ts.map