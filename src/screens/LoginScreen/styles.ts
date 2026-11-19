import { StyleSheet } from 'react-native';

import { ThemeColors, ThemeSpacing, Typography, moderateScale, scale } from '@/theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: ThemeColors.backgroundPrimary,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: scale(ThemeSpacing.screenHorizontal),
  },
  topSpacer: {
    flex: 88,
    minHeight: scale(16),
  },
  illustrationWrapper: {
    alignItems: 'center',
  },
  middleSpacer: {
    flex: 96,
    minHeight: scale(24),
  },
  textBlock: {
    alignItems: 'center',
    paddingHorizontal: scale(11),
  },
  title: {
    fontFamily: Typography.headingLg.fontFamily,
    fontSize: moderateScale(Typography.headingLg.fontSize),
    lineHeight: moderateScale(Typography.headingLg.lineHeight),
    letterSpacing: Typography.headingLg.letterSpacing,
    color: ThemeColors.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: scale(ThemeSpacing.sm),
    maxWidth: scale(304),
    fontFamily: Typography.bodyMd.fontFamily,
    fontSize: moderateScale(Typography.bodyMd.fontSize),
    lineHeight: moderateScale(Typography.bodyMd.lineHeight),
    letterSpacing: Typography.bodyMd.letterSpacing,
    color: ThemeColors.textMuted,
    textAlign: 'center',
  },
  dots: {
    marginTop: scale(ThemeSpacing.xl),
  },
  ctaButton: {
    marginTop: scale(ThemeSpacing.sectionGap),
    width: '100%',
    maxWidth: scale(400),
    alignSelf: 'center',
  },
  googleIcon: {
    width: scale(24),
    height: scale(24),
  },
  footer: {
    marginTop: scale(ThemeSpacing.sectionGap),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(ThemeSpacing.sm),
  },
  footerPrompt: {
    fontFamily: Typography.captionLink.fontFamily,
    fontSize: moderateScale(Typography.captionLink.fontSize),
    lineHeight: moderateScale(Typography.captionLink.lineHeight),
    letterSpacing: Typography.captionLink.letterSpacing,
    color: ThemeColors.textMuted,
  },
  footerAction: {
    fontFamily: Typography.captionLinkBold.fontFamily,
    fontSize: moderateScale(Typography.captionLinkBold.fontSize),
    lineHeight: moderateScale(Typography.captionLinkBold.lineHeight),
    letterSpacing: Typography.captionLinkBold.letterSpacing,
    color: ThemeColors.textEmphasis,
  },
  footerActionPressed: {
    opacity: 0.7,
  },
  bottomSpacer: {
    flex: 14,
    minHeight: scale(16),
  },
});
