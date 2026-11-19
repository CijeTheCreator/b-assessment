import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  type SharedValue,
} from 'react-native-reanimated';
import Svg, { Circle, G, Path } from 'react-native-svg';

import {
  BASELINE_HEIGHT,
  BASELINE_WIDTH,
  Palette,
  ThemeColors,
  scale,
} from '@/theme';

import { MAP_PATHS } from './mapPaths';

export interface MockMapProps {
  /**
   * Normalized sheet expansion progress: 0 = collapsed, 1 = swiped up.
   */
  expandProgress: SharedValue<number>;
}

const ROUTE_PATH_D =
  'M49 543L76 561C84 566 95 562 97 552C98 545 101 540 107 535L139 506C146 500 146 490 139 484C130 476 130 464 139 456L171 426C176 421 184 421 190 426L218 450C224 455 232 456 239 456C249 456 254 452 258 444C261 438 267 436 274 437C283 438 291 437 297 432L312 420';

const COLLAPSED_MAP_OFFSET_Y = scale(-63);
const EXPANDED_MAP_OFFSET_Y = scale(-278);

/**
 * Mock vector map rendering the unclipped Figma map (Group 1721.svg) inside a
 * clipped viewport, shifting vertically as the bottom sheet expands so the
 * route and pins match both Figma states.
 */
export function MockMap({ expandProgress }: MockMapProps) {
  const animatedMapStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      expandProgress.get(),
      [0, 1],
      [COLLAPSED_MAP_OFFSET_Y, EXPANDED_MAP_OFFSET_Y],
      Extrapolation.CLAMP,
    );
    return {
      transform: [{ translateY }],
    };
  });

  return (
    <View style={styles.container} pointerEvents="none">
      <Animated.View style={[styles.mapCanvas, animatedMapStyle]}>
        <Svg
          width={scale(BASELINE_WIDTH)}
          height={scale(BASELINE_HEIGHT)}
          viewBox={`0 0 ${BASELINE_WIDTH} ${BASELINE_HEIGHT}`}
          fill="none">
          <G>
            {MAP_PATHS.map((vector, index) => (
              <Path key={index} d={vector.d} fill={vector.fill} />
            ))}
          </G>

          {/* Yellow delivery route (Vector 16) */}
          <Path
            d={ROUTE_PATH_D}
            stroke={Palette.yellowPrimary}
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Origin pin (Group 1722) */}
          <Circle cx={49} cy={543} r={8} fill={Palette.yellowPrimary} />
          <Circle cx={49} cy={543} r={4} fill={Palette.white} />

          {/* Current / destination pin (Group 1723) */}
          <Circle cx={312} cy={420} r={24} fill={Palette.navyBorder} opacity={0.15} />
          <Circle cx={312} cy={420} r={8} fill={Palette.navyBorder} />
          <Circle cx={312} cy={420} r={4} fill={Palette.white} />
        </Svg>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: ThemeColors.surfaceCard,
    overflow: 'hidden',
  },
  mapCanvas: {
    width: '100%',
    alignItems: 'center',
  },
});
