import type { PropertyValues } from 'lit';
import type { HomeAssistant } from './types';

const ENTITY_ID_PATTERN = /^[a-z_]+\.[a-z0-9_]+$/;

/** Collect every entity ID referenced anywhere in a card config (nested objects and arrays included). */
export function collectConfigEntityIds(value: unknown, out: Set<string> = new Set()): Set<string> {
  if (typeof value === 'string') {
    if (ENTITY_ID_PATTERN.test(value)) out.add(value);
  } else if (Array.isArray(value)) {
    value.forEach((item) => collectConfigEntityIds(item, out));
  } else if (value && typeof value === 'object') {
    Object.values(value).forEach((item) => collectConfigEntityIds(item, out));
  }
  return out;
}

/**
 * Home Assistant pushes a new `hass` object for every state change in the whole
 * instance. Returns false only when that is the sole change and none of the
 * given entities (nor language/theme) changed, so the card can skip rendering.
 */
export function hasRelevantChange(changedProps: PropertyValues, hass: HomeAssistant | undefined, entityIds: Iterable<string>): boolean {
  if (changedProps.size !== 1 || !changedProps.has('hass')) return true;

  const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
  if (!oldHass || !hass) return true;
  if (oldHass.localize !== hass.localize || oldHass.themes !== hass.themes) return true;

  for (const entityId of entityIds) {
    if (oldHass.states[entityId] !== hass.states[entityId]) return true;
  }
  return false;
}
