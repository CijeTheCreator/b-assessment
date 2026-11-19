import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { ThemeColors, scale } from '@/theme';

interface CardWaveDecorationProps {
  color?: string;
}

/**
 * Verbatim decorative curved white lines (Group 1712.svg) in the top-right
 * corner of the "Track Your Package" card.
 */
export function CardWaveDecoration({
  color = ThemeColors.decorativeStroke,
}: CardWaveDecorationProps) {
  return (
    <Svg width={scale(222)} height={scale(183)} viewBox="0 0 222 183" fill="none">
      <Path
        d="M0.944458 0.328796L15.3219 41.6257C21.0232 58.0018 34.5123 70.4584 51.2896 74.8406L63.3471 77.9899C80.8094 82.551 94.6579 95.8405 99.9341 113.1L109.695 145.031C116.379 166.895 136.56 181.829 159.424 181.829H187.944"
        strokeWidth={2}
        stroke={color}
      />
      <Path
        d="M16.9445 0.328796L31.3219 41.6257C37.0232 58.0018 50.5123 70.4584 67.2896 74.8406L79.3471 77.9899C96.8094 82.551 110.658 95.8405 115.934 113.1L125.695 145.031C132.379 166.895 152.56 181.829 175.424 181.829H203.944"
        strokeWidth={2}
        stroke={color}
      />
      <Path
        d="M34.9445 0.328796L49.3219 41.6257C55.0232 58.0018 68.5123 70.4584 85.2896 74.8406L97.3471 77.9899C114.809 82.551 128.658 95.8405 133.934 113.1L143.695 145.031C150.379 166.895 170.56 181.829 193.424 181.829H221.944"
        strokeWidth={2}
        stroke={color}
      />
    </Svg>
  );
}
