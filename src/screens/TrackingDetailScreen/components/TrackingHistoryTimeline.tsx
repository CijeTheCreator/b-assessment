import { Image, type ImageSource } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  ThemeColors,
  Typography,
  moderateScale,
  scale,
} from '@/theme';

export interface TrackingTimelineEvent {
  id: string;
  title: string;
  location: string;
  time: string;
  icon: ImageSource;
  isActive?: boolean;
}

export interface TrackingHistoryTimelineProps {
  events: TrackingTimelineEvent[];
}

/**
 * Vertical shipment history timeline (Group 1716) with circular emoji badges
 * connected by a vertical line.
 */
export function TrackingHistoryTimeline({ events }: TrackingHistoryTimelineProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>History</Text>

      <View style={styles.list}>
        {events.length > 1 ? <View style={styles.connectorLine} /> : null}

        {events.map((event) => (
          <View key={event.id} style={styles.row}>
            <View
              style={[
                styles.iconCircle,
                event.isActive ? styles.iconCircleActive : styles.iconCircleInactive,
              ]}>
              <Image
                source={event.icon}
                style={styles.iconImage}
                contentFit="contain"
                accessibilityIgnoresInvertColors
              />
            </View>

            <View style={styles.textColumn}>
              <Text style={styles.itemTitle} numberOfLines={1}>
                {event.title}
              </Text>
              <Text style={styles.itemLocation} numberOfLines={1}>
                {event.location}
              </Text>
            </View>

            <Text style={styles.itemTime}>{event.time}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: scale(24),
  },
  sectionTitle: {
    fontFamily: Typography.sectionTitle.fontFamily,
    fontSize: moderateScale(Typography.sectionTitle.fontSize),
    lineHeight: moderateScale(Typography.sectionTitle.lineHeight),
    letterSpacing: Typography.sectionTitle.letterSpacing,
    color: ThemeColors.iconHeader,
  },
  list: {
    marginTop: scale(24),
    gap: scale(32),
    position: 'relative',
  },
  connectorLine: {
    position: 'absolute',
    left: scale(27.25),
    top: scale(28),
    bottom: scale(28),
    width: 1.5,
    backgroundColor: ThemeColors.timelineLine,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: scale(56),
  },
  iconCircle: {
    width: scale(56),
    height: scale(56),
    borderRadius: scale(28),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircleActive: {
    backgroundColor: ThemeColors.backgroundPrimary,
  },
  iconCircleInactive: {
    backgroundColor: ThemeColors.surfaceCard,
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
  itemTitle: {
    fontFamily: Typography.timelineTitle.fontFamily,
    fontSize: moderateScale(Typography.timelineTitle.fontSize),
    lineHeight: moderateScale(Typography.timelineTitle.lineHeight),
    letterSpacing: Typography.timelineTitle.letterSpacing,
    color: ThemeColors.textItemTitle,
  },
  itemLocation: {
    marginTop: scale(8),
    fontFamily: Typography.itemSubtitle.fontFamily,
    fontSize: moderateScale(Typography.itemSubtitle.fontSize),
    lineHeight: moderateScale(Typography.itemSubtitle.lineHeight),
    letterSpacing: Typography.itemSubtitle.letterSpacing,
    color: ThemeColors.textSubtitle,
  },
  itemTime: {
    marginLeft: scale(12),
    fontFamily: Typography.timelineTime.fontFamily,
    fontSize: moderateScale(Typography.timelineTime.fontSize),
    lineHeight: moderateScale(Typography.timelineTime.lineHeight),
    letterSpacing: Typography.timelineTime.letterSpacing,
    color: ThemeColors.textSubtitle,
  },
});
