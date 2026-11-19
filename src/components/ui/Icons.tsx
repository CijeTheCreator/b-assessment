import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { ThemeColors, scale } from '@/theme';

interface IconProps {
  color?: string;
}

/**
 * Verbatim notification bell icon (Group 1029.svg).
 */
export function BellIcon({ color = ThemeColors.iconHeader }: IconProps) {
  return (
    <Svg width={scale(19)} height={scale(22)} viewBox="0 0 19 22" fill="none">
      <Path
        d="M0.750825 12.5371V12.3181C0.782951 11.6702 0.990599 11.0425 1.35236 10.4996C1.9545 9.84746 2.3667 9.04831 2.54571 8.18598C2.54571 7.5195 2.54571 6.8435 2.60393 6.17703C2.90469 2.96842 6.07728 0.75 9.21106 0.75H9.28867C12.4225 0.75 15.595 2.96842 15.9055 6.17703C15.9637 6.8435 15.9055 7.5195 15.954 8.18598C16.1354 9.0503 16.5472 9.85194 17.1474 10.5091C17.5118 11.0472 17.7198 11.6727 17.7489 12.3181V12.5276C17.7706 13.398 17.4708 14.2468 16.9048 14.9174C16.157 15.7015 15.1421 16.1893 14.0524 16.2884C10.857 16.6312 7.63303 16.6312 4.43762 16.2884C3.34914 16.185 2.33576 15.6979 1.58521 14.9174C1.028 14.2463 0.732241 13.4026 0.750825 12.5371Z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
      <Path
        d="M6.80493 19.6018C7.30421 20.2284 8.03739 20.634 8.84222 20.7287C9.64706 20.8234 10.4572 20.5995 11.0933 20.1064C11.2889 19.9606 11.4649 19.791 11.6172 19.6018"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
    </Svg>
  );
}

/**
 * Verbatim right arrow icon (Group 1049.svg) used inside primary action pill buttons.
 */
export function ArrowRightIcon({ color = ThemeColors.buttonPrimaryText }: IconProps) {
  return (
    <Svg width={scale(19)} height={scale(12)} viewBox="0 0 19 12" fill="none">
      <Path
        d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM0.75 5.52295V6.27295H17.55V5.52295V4.77295H0.75V5.52295ZM18.0803 6.05328C18.3732 5.76039 18.3732 5.28551 18.0803 4.99262L13.3074 0.219648C13.0145 -0.073245 12.5396 -0.073245 12.2467 0.219648C11.9538 0.512542 11.9538 0.987415 12.2467 1.28031L16.4893 5.52295L12.2467 9.76559C11.9538 10.0585 11.9538 10.5334 12.2467 10.8263C12.5396 11.1191 13.0145 11.1191 13.3074 10.8263L18.0803 6.05328Z"
        fill={color}
      />
    </Svg>
  );
}

/**
 * Verbatim right chevron icon (Group 1489.svg) used in list rows.
 */
export function ChevronRightIcon({ color = ThemeColors.textItemTitle }: IconProps) {
  return (
    <Svg width={scale(13)} height={scale(14)} viewBox="0 0 13 14" fill="none">
      <Path
        d="M6.07098 12.8921L12.142 6.82105L6.07098 0.750023"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
    </Svg>
  );
}

/**
 * Verbatim left chevron icon (Group 1489.svg in tracking-detail) used for back navigation.
 */
export function ChevronLeftIcon({ color = ThemeColors.backIcon }: IconProps) {
  return (
    <Svg width={scale(13)} height={scale(14)} viewBox="0 0 13 14" fill="none">
      <Path
        d="M6.82107 0.75L0.750046 6.82102L6.82107 12.892"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
    </Svg>
  );
}

/**
 * Verbatim two-dot horizontal menu icon (Group 1564.svg).
 */
export function TwoDotsIcon({ color = ThemeColors.dotsIcon }: IconProps) {
  return (
    <Svg width={scale(13)} height={scale(3)} viewBox="0 0 13 3" fill="none">
      <Path
        d="M1.5 3C0.672371 3 0 2.32735 0 1.50063C0 0.673904 0.672371 0 1.5 0C2.32763 0 3 0.673904 3 1.50063C3 2.32735 2.32763 3 1.5 3"
        fill={color}
      />
      <Path
        d="M11.5 3C10.6724 3 10 2.32735 10 1.50063C10 0.673904 10.6724 0 11.5 0C12.3276 0 13 0.673904 13 1.50063C13 2.32735 12.3276 3 11.5 3"
        fill={color}
      />
    </Svg>
  );
}
