import { Dimensions } from 'react-native';

export const BASELINE_WIDTH = 375;
export const BASELINE_HEIGHT = 812;

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

/**
 * Clamped width ratio so tablet/desktop viewports don't over-scale UI elements,
 * while remaining 1:1 at the 375px Figma baseline.
 */
const effectiveWidth = Math.min(WINDOW_WIDTH, 480);

export function scale(size: number): number {
  return (effectiveWidth / BASELINE_WIDTH) * size;
}

export function verticalScale(size: number): number {
  return (WINDOW_HEIGHT / BASELINE_HEIGHT) * size;
}

/**
 * Moderated scaling for typography and fixed UI controls so smaller screens
 * remain legible and larger screens don't inflate text excessively.
 * Equals `size` exactly at the 375px baseline.
 */
export function moderateScale(size: number, factor = 0.5): number {
  return size + (scale(size) - size) * factor;
}
