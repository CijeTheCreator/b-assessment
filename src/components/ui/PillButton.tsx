import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { ThemeColors, ThemeRadii, Typography, moderateScale, scale } from '@/theme';

export interface PillButtonProps extends Omit<PressableProps, 'style'> {
  label: string;
  /** Optional icon rendered inside the left circular badge. */
  leftIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

/**
 * Full-width pill-shaped action button with an optional left circular icon badge.
 */
export function PillButton({ label, leftIcon, style, ...pressableProps }: PillButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
        style,
      ]}
      {...pressableProps}>
      {leftIcon ? <View style={styles.iconBadge}>{leftIcon}</View> : null}
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  );
}

const BUTTON_HEIGHT = scale(56);
const BADGE_SIZE = scale(32);

const styles = StyleSheet.create({
  button: {
    height: BUTTON_HEIGHT,
    borderRadius: ThemeRadii.pill,
    backgroundColor: ThemeColors.buttonPrimaryBg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(12),
    position: 'relative',
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  iconBadge: {
    position: 'absolute',
    left: scale(12),
    width: BADGE_SIZE,
    height: BADGE_SIZE,
    borderRadius: BADGE_SIZE / 2,
    backgroundColor: ThemeColors.iconBadgeBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: Typography.buttonLabel.fontFamily,
    fontSize: moderateScale(Typography.buttonLabel.fontSize),
    lineHeight: moderateScale(Typography.buttonLabel.lineHeight),
    letterSpacing: Typography.buttonLabel.letterSpacing,
    color: ThemeColors.buttonPrimaryText,
    textAlign: 'center',
  },
});
