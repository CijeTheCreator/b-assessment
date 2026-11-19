export const FontFamilies = {
  interRegular: 'Inter_400Regular',
  interMedium: 'Inter_500Medium',
  interSemiBold: 'Inter_600SemiBold',
} as const;

export const Typography = {
  headingLg: {
    fontFamily: FontFamilies.interSemiBold,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 24 * 0.02, // 0.02em from Figma
  },
  bodyMd: {
    fontFamily: FontFamilies.interRegular,
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  buttonLabel: {
    fontFamily: FontFamilies.interMedium,
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  captionLink: {
    fontFamily: FontFamilies.interMedium,
    fontSize: 14,
    lineHeight: 25,
    letterSpacing: 0.5,
  },
  captionLinkBold: {
    fontFamily: FontFamilies.interSemiBold,
    fontSize: 14,
    lineHeight: 25,
    letterSpacing: 0.5,
  },
} as const;
