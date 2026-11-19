import { StyleSheet } from 'react-native';

import {
  ThemeColors,
  ThemeSpacing,
  Typography,
  moderateScale,
  scale,
} from '@/theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: ThemeColors.surfaceCard,
  },
  header: {
    marginHorizontal: scale(ThemeSpacing.screenHorizontal),
    height: scale(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: scale(40),
    height: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonPressed: {
    opacity: 0.6,
  },
  headerTitle: {
    fontFamily: Typography.screenHeaderTitle.fontFamily,
    fontSize: moderateScale(Typography.screenHeaderTitle.fontSize),
    lineHeight: moderateScale(Typography.screenHeaderTitle.lineHeight),
    letterSpacing: Typography.screenHeaderTitle.letterSpacing,
    color: ThemeColors.textTitle,
    textAlign: 'center',
  },
  headerSpacer: {
    width: scale(40),
    height: scale(40),
  },
  receiptOuterPill: {
    marginTop: scale(40),
    marginHorizontal: scale(ThemeSpacing.screenHorizontal),
    height: scale(88),
    borderRadius: scale(46),
    backgroundColor: ThemeColors.backgroundPrimary,
    padding: scale(16),
    justifyContent: 'center',
  },
  receiptInnerPill: {
    height: scale(56),
    borderRadius: scale(28),
    borderWidth: 0.5,
    borderColor: ThemeColors.navyBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  receiptText: {
    fontFamily: Typography.buttonLabel.fontFamily,
    fontSize: moderateScale(Typography.buttonLabel.fontSize),
    lineHeight: moderateScale(Typography.buttonLabel.lineHeight),
    letterSpacing: Typography.buttonLabel.letterSpacing,
    color: ThemeColors.navyBorder,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: ThemeColors.backdropOverlay,
  },
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: ThemeColors.backgroundScreen,
    borderTopLeftRadius: scale(32),
    borderTopRightRadius: scale(32),
    overflow: 'hidden',
  },
  sheetGrabArea: {
    paddingTop: scale(16),
    paddingHorizontal: scale(ThemeSpacing.screenHorizontal),
  },
  handle: {
    alignSelf: 'center',
    width: scale(48),
    height: scale(5),
    borderRadius: scale(4),
    backgroundColor: ThemeColors.sheetHandle,
  },
  estimateRow: {
    marginTop: scale(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  estimateLabel: {
    fontFamily: Typography.bodyMd.fontFamily,
    fontSize: moderateScale(Typography.bodyMd.fontSize),
    lineHeight: moderateScale(Typography.bodyMd.lineHeight),
    letterSpacing: Typography.bodyMd.letterSpacing,
    color: ThemeColors.textSubtitle,
  },
  estimateValue: {
    marginTop: scale(3),
    fontFamily: Typography.estimateValue.fontFamily,
    fontSize: moderateScale(Typography.estimateValue.fontSize),
    lineHeight: moderateScale(Typography.estimateValue.lineHeight),
    letterSpacing: Typography.estimateValue.letterSpacing,
    color: ThemeColors.iconHeader,
  },
  dotsButton: {
    width: scale(24),
    height: scale(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotsButtonPressed: {
    opacity: 0.6,
  },
  sheetScroll: {
    flex: 1,
  },
  sheetScrollContent: {
    paddingHorizontal: scale(ThemeSpacing.screenHorizontal),
  },
});
