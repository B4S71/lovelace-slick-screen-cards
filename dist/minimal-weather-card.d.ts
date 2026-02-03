/**
 * Mini Weather Card
 * @version 0.1.0
 */
declare global {
    interface Window {
        customCards: Array<{
            type: string;
            name: string;
            preview?: boolean;
            description?: string;
        }>;
    }
}
export {};
//# sourceMappingURL=minimal-weather-card.d.ts.map