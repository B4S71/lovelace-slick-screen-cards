import type { PropertyValues } from 'lit';
import type { HomeAssistant } from './types';
/** Collect every entity ID referenced anywhere in a card config (nested objects and arrays included). */
export declare function collectConfigEntityIds(value: unknown, out?: Set<string>): Set<string>;
/**
 * Home Assistant pushes a new `hass` object for every state change in the whole
 * instance. Returns false only when that is the sole change and none of the
 * given entities (nor language/theme) changed, so the card can skip rendering.
 */
export declare function hasRelevantChange(changedProps: PropertyValues, hass: HomeAssistant | undefined, entityIds: Iterable<string>): boolean;
//# sourceMappingURL=hass-utils.d.ts.map