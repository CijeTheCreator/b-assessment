import { Image, type ImageSource } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ChevronRightIcon } from '@/components/ui/Icons';
import { ThemeColors, Typography, moderateScale, scale } from '@/theme';

export interface TrackingHistoryItem {
  id: string;
  trackingNumber: string;
  status: string;
  icon: ImageSource;
}

export interface TrackingHistoryRowProps {
  item: TrackingHistoryItem;
  onPress?: (item: TrackingHistoryItem) => void;
}

/**
 * Single tracking history row with a circular soft-surface icon badge,
 * tracking number, status label, and right chevron.
 */
export function TrackingHistoryRow({ item, onPress }: TrackingHistoryRowProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${item.trackingNumber}, ${item.status}`}
      onPress={() => onPress?.(item)}
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}>
      <View style={styles.iconCircle}>
        <Image
          source={item.icon}
          style={styles.iconImage}
          contentFit="contain"
          accessibilityIgnoresInvertColors
        />
      </View>

      <View style={styles.textColumn}>
        <Text style={styles.trackingNumber} numberOfLines={1}>
          {item.trackingNumber}
        </Text>
        <Text style={styles.status} numberOfLines={1}>
          {item.status}
        </Text>
      </View>

      <View style={styles.chevronWrapper}>
        <ChevronRightIcon />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: scale(56),
  },
  rowPressed: {
    opacity: 0.7,
  },
  iconCircle: {
    width: scale(56),
    height: scale(56),
    borderRadius: scale(28),
    backgroundColor: ThemeColors.surfaceCard,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: scale(24),
    height: scale(24),
  },
  textColumn: {
    flex: 1,
    marginLeft: scale(16),
    justifyContent: 'center',
  },
  trackingNumber: {
    fontFamily: Typography.itemTitle.fontFamily,
    fontSize: moderateScale(Typography.itemTitle.fontSize),
    lineHeight: moderateScale(Typography.itemTitle.lineHeight),
    letterSpacing: Typography.itemTitle.letterSpacing,
    color: ThemeColors.textItemTitle,
  },
  status: {
    marginTop: scale(6),
    fontFamily: Typography.itemSubtitle.fontFamily,
    fontSize: moderateScale(Typography.itemSubtitle.fontSize),
    lineHeight: moderateScale(Typography.itemSubtitle.lineHeight),
    letterSpacing: Typography.itemSubtitle.letterSpacing,
    color: ThemeColors.textSubtitle,
  },
  chevronWrapper: {
    marginLeft: scale(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
