import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { ThemeColors, scale } from '@/theme';

const ELLIPSE_SIZE = scale(556);

/**
 * Renders the background decorative circle (#FFCE23) and the three
 * white wavy corner lines (Vector 13, 14, 15) from the Figma export.
 */
export function DecorativeBackground() {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {/* Ellipse 4: 556x556 circle at left: -250, top: -33 */}
      <View style={styles.ellipse} />

      {/* Vector 13 (outermost white wave, anchored top-right) */}
      <Svg
        width={scale(151)}
        height={scale(158)}
        viewBox="0 0 151 158"
        fill="none"
        style={styles.waveCorner}>
        <Path
          d="M0.944397 -25L15.3218 16.2969C21.0231 32.673 34.5122 45.1297 51.2895 49.5118L63.347 52.6611C80.8094 57.2222 94.6578 70.5117 99.9341 87.7713L109.695 119.702C116.379 141.566 136.56 156.5 159.424 156.5H187.944"
          stroke={ThemeColors.decorativeStroke}
          strokeWidth={2}
        />
      </Svg>

      {/* Vector 14 (middle white wave, anchored top-right) */}
      <Svg
        width={scale(135)}
        height={scale(158)}
        viewBox="0 0 135 158"
        fill="none"
        style={styles.waveCorner}>
        <Path
          d="M0.944397 -25L15.3218 16.2969C21.0231 32.673 34.5122 45.1297 51.2895 49.5118L63.347 52.6611C80.8094 57.2222 94.6578 70.5117 99.9341 87.7713L109.695 119.702C116.379 141.566 136.56 156.5 159.424 156.5H187.944"
          stroke={ThemeColors.decorativeStroke}
          strokeWidth={2}
        />
      </Svg>

      {/* Vector 15 (innermost white wave, anchored top-right) */}
      <Svg
        width={scale(117)}
        height={scale(158)}
        viewBox="0 0 117 158"
        fill="none"
        style={styles.waveCorner}>
        <Path
          d="M0.944397 -25L15.3218 16.2969C21.0231 32.673 34.5122 45.1297 51.2895 49.5118L63.347 52.6611C80.8094 57.2222 94.6578 70.5117 99.9341 87.7713L109.695 119.702C116.379 141.566 136.56 156.5 159.424 156.5H187.944"
          stroke={ThemeColors.decorativeStroke}
          strokeWidth={2}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  ellipse: {
    position: 'absolute',
    width: ELLIPSE_SIZE,
    height: ELLIPSE_SIZE,
    borderRadius: ELLIPSE_SIZE / 2,
    left: scale(-250),
    top: scale(-33),
    backgroundColor: ThemeColors.backgroundShape,
  },
  waveCorner: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
