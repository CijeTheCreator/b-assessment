import { StyleSheet } from 'react-native';

import {
  ThemeColors,
  ThemeRadii,
  ThemeSpacing,
  Typography,
  moderateScale,
  scale,
} from '@/theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: ThemeColors.backgroundScreen,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: scale(24),
  },
  heroCard: {
    marginTop: scale(37),
    marginHorizontal: scale(ThemeSpacing.screenHorizontal),
    borderRadius: scale(ThemeRadii.card),
    backgroundColor: ThemeColors.backgroundPrimary,
    overflow: 'hidden',
    paddingHorizontal: scale(24),
    paddingTop: scale(53),
    paddingBottom: scale(32),
  },
  waveDecoration: {
    position: 'absolute',
    top: scale(-37),
    right: scale(-89),
    pointerEvents: 'none',
  },
  cardTitle: {
    fontFamily: Typography.cardTitle.fontFamily,
    fontSize: moderateScale(Typography.cardTitle.fontSize),
    lineHeight: moderateScale(Typography.cardTitle.lineHeight),
    letterSpacing: Typography.cardTitle.letterSpacing,
    color: ThemeColors.textCardTitle,
  },
  cardSubtitle: {
    marginTop: scale(8),
    maxWidth: scale(251),
    fontFamily: Typography.cardSubtitle.fontFamily,
    fontSize: moderateScale(Typography.cardSubtitle.fontSize),
    lineHeight: moderateScale(Typography.cardSubtitle.lineHeight),
    letterSpacing: Typography.cardSubtitle.letterSpacing,
    color: ThemeColors.textMuted,
  },
  inputContainer: {
    marginTop: scale(29),
    width: '100%',
    height: scale(56),
    borderRadius: scale(28),
    borderWidth: 0.5,
    borderColor: ThemeColors.inputBorder,
    paddingHorizontal: scale(34),
    justifyContent: 'center',
  },
  input: {
    fontFamily: Typography.bodyMd.fontFamily,
    fontSize: moderateScale(Typography.bodyMd.fontSize),
    letterSpacing: Typography.bodyMd.letterSpacing,
    color: ThemeColors.inputPlaceholder,
    paddingVertical: 0,
  },
  trackButton: {
    marginTop: scale(10),
  },
  historySection: {
    marginTop: scale(40),
    paddingHorizontal: scale(ThemeSpacing.screenHorizontal),
  },
  historyTitle: {
    fontFamily: Typography.sectionTitle.fontFamily,
    fontSize: moderateScale(Typography.sectionTitle.fontSize),
    lineHeight: moderateScale(Typography.sectionTitle.lineHeight),
    letterSpacing: Typography.sectionTitle.letterSpacing,
    color: ThemeColors.iconHeader,
  },
  historyList: {
    marginTop: scale(16),
    gap: scale(24),
  },
});
