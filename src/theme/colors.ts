export const Palette = {
  yellowPrimary: '#FFD337',
  yellowAccent: '#FFCE23',
  navyDark: '#041C2E',
  navyDeep: '#031522',
  navyDot: '#02131E',
  ochreMuted: '#96823D',
  black: '#000000',
  white: '#FFFFFF',
  whiteTranslucent93: 'rgba(255, 255, 255, 0.93)',
} as const;

export const ThemeColors = {
  backgroundPrimary: Palette.yellowPrimary,
  backgroundShape: Palette.yellowAccent,
  textPrimary: Palette.navyDark,
  textEmphasis: Palette.navyDeep,
  textMuted: Palette.ochreMuted,
  buttonPrimaryBg: Palette.black,
  buttonPrimaryText: Palette.white,
  iconBadgeBg: Palette.whiteTranslucent93,
  dotActive: Palette.navyDot,
  dotInactive: Palette.white,
  decorativeStroke: Palette.white,
} as const;
