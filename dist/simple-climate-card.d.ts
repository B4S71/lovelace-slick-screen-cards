/**
 * Simple Climate Card
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
//# sourceMappingURL=simple-climate-card.d.ts.map