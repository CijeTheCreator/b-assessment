import React from 'react';
import { StyleSheet, Text, type StyleProp, type TextStyle } from 'react-native';

import { ThemeColors, ThemeSpacing, Typography, moderateScale, scale } from '@/theme';

export interface GreetingTitleProps {
  text?: string;
  style?: StyleProp<TextStyle>;
}

/**
 * Reusable screen greeting heading ("Hello good Morning!").
 */
export function GreetingTitle({ text = 'Hello good Morning!', style }: GreetingTitleProps) {
  return <Text style={[styles.greeting, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  greeting: {
    marginTop: scale(ThemeSpacing.xl),
    paddingHorizontal: scale(ThemeSpacing.screenHorizontal),
    fontFamily: Typography.greetingTitle.fontFamily,
    fontSize: moderateScale(Typography.greetingTitle.fontSize),
    lineHeight: moderateScale(Typography.greetingTitle.lineHeight),
    letterSpacing: Typography.greetingTitle.letterSpacing,
    color: ThemeColors.textTitle,
  },
});
