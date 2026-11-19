import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { ThemeColors, ThemeRadii, Typography, moderateScale, scale } from '@/theme';

import { ArrowRightIcon } from './Icons';

export interface ArrowButtonProps extends Omit<PressableProps, 'style'> {
  label: string;
  /**
   * 'compact': centered label + arrow with fixed gap (e.g. "Your Orders" banner CTA).
   * 'spread': full-width row with label on the left and arrow on the right (e.g. "Track Now").
   */
  variant?: 'compact' | 'spread';
  style?: StyleProp<ViewStyle>;
}

/**
 * Reusable black pill CTA button with a white right-pointing arrow icon.
 */
export function ArrowButton({
  label,
  variant = 'compact',
  style,
  ...pressableProps
}: ArrowButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [
        styles.base,
        variant === 'compact' ? styles.compact : styles.spread,
        pressed && styles.pressed,
        style,
      ]}
      {...pressableProps}>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
      <ArrowRightIcon />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: scale(56),
    borderRadius: ThemeRadii.pill,
    backgroundColor: ThemeColors.buttonPrimaryBg,
    flexDirection: 'row',
    alignItems: 'center',
  },
  compact: {
    minWidth: scale(183),
    justifyContent: 'center',
    paddingHorizontal: scale(24),
    gap: scale(20),
  },
  spread: {
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: scale(34),
    paddingRight: scale(28),
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  label: {
    fontFamily: Typography.bannerButtonLabel.fontFamily,
    fontSize: moderateScale(Typography.bannerButtonLabel.fontSize),
    lineHeight: moderateScale(Typography.bannerButtonLabel.lineHeight),
    letterSpacing: Typography.bannerButtonLabel.letterSpacing,
    color: ThemeColors.buttonPrimaryText,
    textAlign: 'center',
  },
});
