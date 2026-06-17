/**
 * Mini Weather Card
 * @version 0.2.0
 */
import { LitElement } from 'lit';
import type { HomeAssistant, MiniWeatherCardConfig, ForecastData } from './types';
interface Gradients {
    bright: string;
    dark: string;
}
export declare class MiniWeatherCard extends LitElement {
    hass: HomeAssistant;
    config: MiniWeatherCardConfig;
    _forecast: ForecastData[] | null;
    _cardHeight: number;
    _cardWidth: number;
    _resizeObserver: ResizeObserver;
    _forecastInterval?: number;
    _forecastRequestToken: number;
    _getCurrentTemperatureValue(): number | undefined;
    _getForecastBounds(entries: ForecastData[]): {
        min: number;
        max: number;
    };
    _getBarScaleStyles(low: number, high: number, globalMin: number, globalMax: number): {
        windowStyle: string;
        scaleStyle: string;
    };
    _getMeasuredHeaderHeight(): number;
    static get properties(): {
        hass: {
            attribute: boolean;
        };
        config: {
            state: boolean;
        };
        _forecast: {
            state: boolean;
        };
        _cardWidth: {
            state: boolean;
        };
        _cardHeight: {
            state: boolean;
        };
    };
    static getConfigElement(): HTMLElement;
    static getStubConfig(hass: HomeAssistant): {
        type: string;
        entity: string;
        title: string;
        mode: string;
    };
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    setConfig(config: MiniWeatherCardConfig): void;
    updated(changedProps: Map<string, any>): void;
    shouldUpdate(changedProps: Map<string, any>): boolean;
    _toOptionalNumber(value: unknown): number | undefined;
    _normalizeForecast(entries: unknown): ForecastData[];
    _extractForecastResponse(response: any, entityId: string): unknown;
    _updateForecast(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    _renderRow(day: ForecastData, globalMin?: number, globalMax?: number): import("lit-html").TemplateResult<1>;
    _getIcon(condition: string): string;
    _openMoreInfo(): void;
    _getCurrentGradients(): Gradients;
    static get styles(): import("lit").CSSResult;
}
export {};
//# sourceMappingURL=minimal-weather-card.d.ts.map