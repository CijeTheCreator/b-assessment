import React from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';

import { ThemeColors, scale } from '@/theme';

export interface PaginationDotsProps {
  /** Total number of dots to render. */
  count: number;
  /** Zero-based index of the active dot. */
  activeIndex: number;
  /** Diameter of each dot in logical pixels before scaling. */
  dotSize?: number;
  /** Horizontal gap between dots in logical pixels before scaling. */
  gap?: number;
  activeColor?: string;
  inactiveColor?: string;
  style?: ViewStyle;
}

/**
 * Horizontal pagination indicator dots for onboarding and carousel flows.
 */
export function PaginationDots({
  count,
  activeIndex,
  dotSize = 6,
  gap = 16,
  activeColor = ThemeColors.dotActive,
  inactiveColor = ThemeColors.dotInactive,
  style,
}: PaginationDotsProps) {
  const scaledSize = scale(dotSize);
  const scaledGap = scale(gap);

  return (
    <View
      style={[styles.container, { gap: scaledGap }, style]}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 1, max: count, now: activeIndex + 1 }}>
      {Array.from({ length: count }, (_, index) => {
        const isActive = index === activeIndex;
        return (
          <View
            key={index}
            style={{
              width: scaledSize,
              height: scaledSize,
              borderRadius: scaledSize / 2,
              backgroundColor: isActive ? activeColor : inactiveColor,
            }}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
