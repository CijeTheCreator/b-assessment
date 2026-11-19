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
    backgroundColor: ThemeColors.backgroundScreen,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  carouselWrapper: {
    marginTop: scale(40),
  },
  banner: {
    marginTop: scale(25),
    width: '100%',
    minHeight: scale(109),
    backgroundColor: ThemeColors.backgroundPrimary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: scale(ThemeSpacing.xxl),
    paddingRight: scale(27),
    paddingVertical: scale(26),
    zIndex: 1,
  },
  bannerPrompt: {
    maxWidth: scale(110),
    fontFamily: Typography.bannerBody.fontFamily,
    fontSize: moderateScale(Typography.bannerBody.fontSize),
    lineHeight: moderateScale(Typography.bannerBody.lineHeight),
    letterSpacing: Typography.bannerBody.letterSpacing,
    color: ThemeColors.textMuted,
  },
  promoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(-7),
    zIndex: 0,
  },
  promoLottie: {
    width: scale(161),
    height: scale(161),
  },
  promoText: {
    flex: 1,
    paddingRight: scale(ThemeSpacing.screenHorizontal),
    fontFamily: Typography.bannerBody.fontFamily,
    fontSize: moderateScale(Typography.bannerBody.fontSize),
    lineHeight: moderateScale(Typography.bannerBody.lineHeight),
    letterSpacing: Typography.bannerBody.letterSpacing,
    color: ThemeColors.textSecondary,
  },
});
