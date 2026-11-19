export const FontFamilies = {
  interRegular: 'Inter_400Regular',
  interMedium: 'Inter_500Medium',
  interSemiBold: 'Inter_600SemiBold',
  interBold: 'Inter_700Bold',
} as const;

export const Typography = {
  headingLg: {
    fontFamily: FontFamilies.interSemiBold,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 24 * 0.02, // 0.02em from Figma
  },
  greetingTitle: {
    fontFamily: FontFamilies.interBold,
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 0,
  },
  bodyMd: {
    fontFamily: FontFamilies.interRegular,
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  bannerBody: {
    fontFamily: FontFamilies.interRegular,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.5,
  },
  buttonLabel: {
    fontFamily: FontFamilies.interMedium,
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  bannerButtonLabel: {
    fontFamily: FontFamilies.interSemiBold,
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
  cardTitle: {
    fontFamily: FontFamilies.interSemiBold,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  cardSubtitle: {
    fontFamily: FontFamilies.interRegular,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  sectionTitle: {
    fontFamily: FontFamilies.interSemiBold,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  itemTitle: {
    fontFamily: FontFamilies.interMedium,
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 14 * 0.02, // 0.02em from Figma
  },
  itemSubtitle: {
    fontFamily: FontFamilies.interRegular,
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  screenHeaderTitle: {
    fontFamily: FontFamilies.interSemiBold,
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 18 * 0.02, // 0.02em from Figma
  },
  estimateValue: {
    fontFamily: FontFamilies.interSemiBold,
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  summaryCardValue: {
    fontFamily: FontFamilies.interSemiBold,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.5,
  },
  summaryCardLabel: {
    fontFamily: FontFamilies.interRegular,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.5,
  },
  timelineTitle: {
    fontFamily: FontFamilies.interSemiBold,
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 14 * 0.02, // 0.02em from Figma
  },
  timelineTime: {
    fontFamily: FontFamilies.interRegular,
    fontSize: 12,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
} as const;
