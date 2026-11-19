import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  ThemeColors,
  Typography,
  moderateScale,
  scale,
} from '@/theme';

export interface TrackingSummaryCardProps {
  originLocation: string;
  receiptNumber: string;
  postalFee: string;
  destinationLocation: string;
  parcelSummary: string;
}

interface SummaryRowProps {
  value: string;
  label: string;
}

function SummaryRow({ value, label }: SummaryRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.value} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

/**
 * Yellow shipment summary card (Group 1717) displayed inside the expanded
 * tracking detail bottom sheet.
 */
export function TrackingSummaryCard({
  originLocation,
  receiptNumber,
  postalFee,
  destinationLocation,
  parcelSummary,
}: TrackingSummaryCardProps) {
  return (
    <View style={styles.card}>
      <SummaryRow
        value={originLocation}
        label={`No receipt : ${receiptNumber}`}
      />
      <View style={styles.divider} />
      <SummaryRow value={postalFee} label="Postal fee" />
      <View style={styles.divider} />
      <SummaryRow value={destinationLocation} label={parcelSummary} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: scale(30),
    backgroundColor: ThemeColors.backgroundPrimary,
    borderRadius: scale(24),
    padding: scale(24),
  },
  row: {
    justifyContent: 'center',
  },
  value: {
    fontFamily: Typography.summaryCardValue.fontFamily,
    fontSize: moderateScale(Typography.summaryCardValue.fontSize),
    lineHeight: moderateScale(Typography.summaryCardValue.lineHeight),
    letterSpacing: Typography.summaryCardValue.letterSpacing,
    color: ThemeColors.iconHeader,
  },
  label: {
    marginTop: scale(8),
    fontFamily: Typography.summaryCardLabel.fontFamily,
    fontSize: moderateScale(Typography.summaryCardLabel.fontSize),
    lineHeight: moderateScale(Typography.summaryCardLabel.lineHeight),
    letterSpacing: Typography.summaryCardLabel.letterSpacing,
    color: ThemeColors.textMuted,
  },
  divider: {
    height: 1,
    backgroundColor: ThemeColors.yellowDivider,
    marginVertical: scale(15.5),
  },
});
