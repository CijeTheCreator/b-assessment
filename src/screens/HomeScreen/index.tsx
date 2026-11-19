import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ArrowButton } from '@/components/ui/ArrowButton';
import { GreetingTitle } from '@/components/ui/GreetingTitle';
import { TopBar } from '@/components/ui/TopBar';

import { BikeCarousel, type BikeSlide } from './components/BikeCarousel';
import { styles } from './styles';

export interface HomeScreenProps {
  onNotificationPress?: () => void;
  onYourOrdersPress?: () => void;
  onBikePress?: (slide: BikeSlide, index: number) => void;
}

/**
 * Home screen matching the Figma "Home Screen" design with a scrollable
 * E-Bike carousel, orders CTA banner, and animated biker promo section.
 */
export function HomeScreen({
  onNotificationPress,
  onYourOrdersPress,
  onBikePress,
}: HomeScreenProps) {
  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <TopBar onNotificationPress={onNotificationPress} />

          <GreetingTitle />

          <View style={styles.carouselWrapper}>
            <BikeCarousel onBikePress={onBikePress} />
          </View>

          <View style={styles.banner}>
            <Text style={styles.bannerPrompt}>{'Gotten your\nE-Bike yet?'}</Text>

            <ArrowButton
              label="Your Orders"
              variant="compact"
              onPress={onYourOrdersPress}
            />
          </View>

          <View style={styles.promoSection}>
            <LottieView
              source={require('../../assets/animations/lottie-bike.json')}
              autoPlay
              loop
              style={styles.promoLottie}
            />
            <Text style={styles.promoText}>
              {'You too can join our\nElite squad of E-bikers'}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default HomeScreen;
