import { Image, type ImageSource } from 'expo-image';
import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  View,
  type ListRenderItemInfo,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';

import { PaginationDots } from '@/components/ui/PaginationDots';
import { ThemeColors, ThemeRadii, ThemeSpacing, scale } from '@/theme';

export interface BikeSlide {
  id: string;
  image: ImageSource;
  accessibilityLabel: string;
}

const DEFAULT_SLIDES: BikeSlide[] = Array.from({ length: 6 }, (_, index) => ({
  id: `bike-${index + 1}`,
  image: require('../../../assets/images/ebike-crossray.png'),
  accessibilityLabel: `CrossRay E-Bike ${index + 1}`,
}));

const CARD_WIDTH = scale(255);
const CARD_HEIGHT = scale(265);
const CARD_GAP = scale(10);
const SNAP_INTERVAL = CARD_WIDTH + CARD_GAP;
const BIKE_IMAGE_WIDTH = scale(199);
const BIKE_IMAGE_HEIGHT = scale(229);

export interface BikeCarouselProps {
  slides?: BikeSlide[];
  onBikePress?: (slide: BikeSlide, index: number) => void;
}

/**
 * Horizontally scrollable E-Bike card carousel with snap alignment,
 * dimmed inactive peek cards, and synchronized pagination dots.
 */
export function BikeCarousel({ slides = DEFAULT_SLIDES, onBikePress }: BikeCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const nextIndex = Math.max(0, Math.min(slides.length - 1, Math.round(offsetX / SNAP_INTERVAL)));
      if (nextIndex !== activeIndex) {
        setActiveIndex(nextIndex);
      }
    },
    [activeIndex, slides.length]
  );

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<BikeSlide>) => {
      const isActive = index === activeIndex;
      return (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={item.accessibilityLabel}
          onPress={() => onBikePress?.(item, index)}
          style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
          <Image
            source={item.image}
            style={styles.bikeImage}
            contentFit="contain"
            accessibilityIgnoresInvertColors
          />
          {!isActive ? <View pointerEvents="none" style={styles.inactiveOverlay} /> : null}
        </Pressable>
      );
    },
    [activeIndex, onBikePress]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SNAP_INTERVAL}
        snapToAlignment="start"
        decelerationRate="fast"
        scrollEventThrottle={16}
        onScroll={handleScroll}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <PaginationDots
        count={slides.length}
        activeIndex={activeIndex}
        dotSize={6}
        gap={7}
        activeColor={ThemeColors.dotActive}
        inactiveColor={ThemeColors.carouselDotInactive}
        style={styles.dots}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  listContent: {
    paddingHorizontal: scale(ThemeSpacing.screenHorizontal),
  },
  separator: {
    width: CARD_GAP,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: scale(ThemeRadii.card),
    backgroundColor: ThemeColors.surfaceCard,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  cardPressed: {
    opacity: 0.92,
  },
  bikeImage: {
    width: BIKE_IMAGE_WIDTH,
    height: BIKE_IMAGE_HEIGHT,
  },
  inactiveOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: ThemeColors.surfaceCardOverlay,
    borderRadius: scale(ThemeRadii.card),
  },
  dots: {
    marginTop: scale(30),
  },
});
