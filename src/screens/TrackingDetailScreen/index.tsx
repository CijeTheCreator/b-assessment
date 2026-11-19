import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import {
  Dimensions,
  type LayoutChangeEvent,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ChevronLeftIcon, TwoDotsIcon } from '@/components/ui/Icons';
import { BASELINE_HEIGHT, scale } from '@/theme';

import { MockMap } from './components/MockMap';
import {
  TrackingHistoryTimeline,
  type TrackingTimelineEvent,
} from './components/TrackingHistoryTimeline';
import { TrackingSummaryCard } from './components/TrackingSummaryCard';
import { styles } from './styles';

const DEFAULT_TIMELINE_EVENTS: TrackingTimelineEvent[] = [
  {
    id: 'in-delivery',
    title: 'In Delivery',
    location: 'Bali, Indonesia',
    time: '00.00 PM',
    icon: require('../../assets/icons/truck-emoji.png'),
    isActive: true,
  },
  {
    id: 'transit',
    title: 'Transit - Sending City',
    location: 'Jakarta, Indonesia',
    time: '21.00 PM',
    icon: require('../../assets/icons/mailbox-emoji.png'),
  },
  {
    id: 'send-origin',
    title: 'Send Form Sukabumi',
    location: 'Sukabumi, Indonesia',
    time: '19.00 PM',
    icon: require('../../assets/icons/package-emoji.png'),
  },
];

const SPRING_CONFIG = {
  damping: 22,
  stiffness: 210,
  mass: 0.9,
};

export interface TrackingDetailScreenProps {
  receiptNumber?: string;
  estimateTime?: string;
  originLocation?: string;
  postalFee?: string;
  destinationLocation?: string;
  parcelSummary?: string;
  timelineEvents?: TrackingTimelineEvent[];
  onBackPress?: () => void;
}

/**
 * Tracking Details screen matching the Figma "Tracking Detail Screen" and
 * "Tracking Detail Screen (Swipe up)" states with an interactive bottom sheet.
 */
export function TrackingDetailScreen({
  receiptNumber = 'SCP6653728497',
  estimateTime = '2h 40m',
  originLocation = 'Sukabumi, Indonesia',
  postalFee = '2,50 USD',
  destinationLocation = 'Bali, Indonesia',
  parcelSummary = 'Parcel, 24kg',
  timelineEvents = DEFAULT_TIMELINE_EVENTS,
  onBackPress,
}: TrackingDetailScreenProps) {
  const insets = useSafeAreaInsets();
  const [containerHeight, setContainerHeight] = useState(
    Dimensions.get('window').height || BASELINE_HEIGHT,
  );
  const [isExpanded, setIsExpanded] = useState(false);

  const expandProgress = useSharedValue(0);
  const gestureStartProgress = useSharedValue(0);

  const collapsedHeight = scale(120);
  const expandedTop = Math.max(insets.top + scale(60), scale(104));
  const sheetMaxHeight = Math.max(containerHeight - expandedTop, scale(320));
  const collapsedTranslateY = Math.max(sheetMaxHeight - collapsedHeight, 0);

  const animateTo = useCallback(
    (expanded: boolean) => {
      setIsExpanded(expanded);
      expandProgress.set(withSpring(expanded ? 1 : 0, SPRING_CONFIG));
    },
    [expandProgress],
  );

  const toggleSheet = useCallback(() => {
    animateTo(!isExpanded);
  }, [animateTo, isExpanded]);

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    if (height > 0) {
      setContainerHeight(height);
    }
  }, []);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      gestureStartProgress.set(expandProgress.get());
    })
    .onUpdate((event) => {
      if (collapsedTranslateY <= 0) return;
      const deltaProgress = -event.translationY / collapsedTranslateY;
      const next = Math.min(Math.max(gestureStartProgress.get() + deltaProgress, 0), 1);
      expandProgress.set(next);
    })
    .onEnd((event) => {
      const shouldExpand =
        event.velocityY < -300 ||
        (event.velocityY <= 300 && expandProgress.get() >= 0.45);
      expandProgress.set(withSpring(shouldExpand ? 1 : 0, SPRING_CONFIG));
      runOnJS(setIsExpanded)(shouldExpand);
    });

  const animatedSheetStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      expandProgress.get(),
      [0, 1],
      [collapsedTranslateY, 0],
      Extrapolation.CLAMP,
    );
    return {
      transform: [{ translateY }],
    };
  });

  const animatedBackdropStyle = useAnimatedStyle(() => ({
    opacity: expandProgress.get(),
  }));

  const headerTopPadding = Math.max(insets.top + scale(8), scale(40));

  return (
    <View style={styles.root} onLayout={handleLayout}>
      <StatusBar style="dark" />

      <MockMap expandProgress={expandProgress} />

      <View style={[styles.header, { marginTop: headerTopPadding }]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Go back"
          hitSlop={12}
          onPress={onBackPress}
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.backButtonPressed,
          ]}>
          <ChevronLeftIcon />
        </Pressable>

        <Text style={styles.headerTitle}>Tracking Details</Text>

        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.receiptOuterPill}>
        <View style={styles.receiptInnerPill}>
          <Text style={styles.receiptText}>{receiptNumber}</Text>
        </View>
      </View>

      <Animated.View
        pointerEvents={isExpanded ? 'auto' : 'none'}
        style={[styles.backdrop, animatedBackdropStyle]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Collapse tracking details"
          style={styles.backdrop}
          onPress={() => animateTo(false)}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.sheet,
          { height: sheetMaxHeight },
          animatedSheetStyle,
        ]}>
        <GestureDetector gesture={panGesture}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={
              isExpanded ? 'Collapse tracking details' : 'Expand tracking details'
            }
            onPress={toggleSheet}
            style={styles.sheetGrabArea}>
            <View style={styles.handle} />

            <View style={styles.estimateRow}>
              <View>
                <Text style={styles.estimateLabel}>Estimate arrives in</Text>
                <Text style={styles.estimateValue}>{estimateTime}</Text>
              </View>

              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Toggle tracking details"
                hitSlop={12}
                onPress={toggleSheet}
                style={({ pressed }) => [
                  styles.dotsButton,
                  pressed && styles.dotsButtonPressed,
                ]}>
                <TwoDotsIcon />
              </Pressable>
            </View>
          </Pressable>
        </GestureDetector>

        <ScrollView
          style={styles.sheetScroll}
          contentContainerStyle={[
            styles.sheetScrollContent,
            { paddingBottom: Math.max(insets.bottom, scale(24)) },
          ]}
          scrollEnabled={isExpanded}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <TrackingSummaryCard
            originLocation={originLocation}
            receiptNumber={receiptNumber}
            postalFee={postalFee}
            destinationLocation={destinationLocation}
            parcelSummary={parcelSummary}
          />

          <TrackingHistoryTimeline events={timelineEvents} />
        </ScrollView>
      </Animated.View>
    </View>
  );
}

export default TrackingDetailScreen;
