import { Image, type ImageSource } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { ThemeColors, ThemeRadii, ThemeSpacing, scale } from '@/theme';

import { BellIcon } from './Icons';

const DEFAULT_AVATAR = require('../../assets/images/avatar-preview.jpg');

export interface TopBarProps {
  onNotificationPress?: () => void;
  avatarSource?: ImageSource;
  style?: StyleProp<ViewStyle>;
}

/**
 * Reusable screen top bar with circular user avatar and notification bell button.
 */
export function TopBar({
  onNotificationPress,
  avatarSource = DEFAULT_AVATAR,
  style,
}: TopBarProps) {
  return (
    <View style={[styles.header, style]}>
      <View style={styles.avatarContainer} accessibilityLabel="User profile avatar">
        <Image
          source={avatarSource}
          style={styles.avatarImage}
          contentFit="cover"
          accessibilityIgnoresInvertColors
        />
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Notifications"
        hitSlop={8}
        onPress={onNotificationPress}
        style={({ pressed }) => [
          styles.notificationButton,
          pressed && styles.iconButtonPressed,
        ]}>
        <BellIcon />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(ThemeSpacing.screenHorizontal),
    paddingTop: scale(12),
  },
  avatarContainer: {
    width: scale(48),
    height: scale(48),
    borderRadius: scale(24),
    backgroundColor: ThemeColors.surfaceCard,
    overflow: 'hidden',
  },
  avatarImage: {
    position: 'absolute',
    width: scale(144),
    height: scale(96),
    left: scale(-41),
    top: scale(-11),
  },
  notificationButton: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(ThemeRadii.iconButton),
    backgroundColor: ThemeColors.surfaceCard,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.96 }],
  },
});
