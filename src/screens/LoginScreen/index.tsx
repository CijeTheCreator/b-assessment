import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PaginationDots } from '@/components/ui/PaginationDots';
import { PillButton } from '@/components/ui/PillButton';

import { DecorativeBackground } from './components/DecorativeBackground';
import { DeliveryIllustration } from './components/DeliveryIllustration';
import { styles } from './styles';

export interface LoginScreenProps {
  onGoogleLoginPress?: () => void;
  onSignUpPress?: () => void;
}

/**
 * Onboarding / Login entry screen matching the Figma "Login Screen" design.
 */
export function LoginScreen({ onGoogleLoginPress, onSignUpPress }: LoginScreenProps) {
  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <DecorativeBackground />

      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          bounces={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.topSpacer} />

          <View style={styles.illustrationWrapper}>
            <DeliveryIllustration />
          </View>

          <View style={styles.middleSpacer} />

          <View style={styles.textBlock}>
            <Text style={styles.title}>Welcome to E-Bikes</Text>
            <Text style={styles.subtitle}>
              Buying Electric bikes just got a lot easier, Try us today.
            </Text>
          </View>

          <PaginationDots count={3} activeIndex={0} style={styles.dots} />

          <PillButton
            label="Login with Google"
            onPress={onGoogleLoginPress}
            style={styles.ctaButton}
            leftIcon={
              <Image
                source={require('../../assets/icons/icon-google.png')}
                style={styles.googleIcon}
                contentFit="contain"
                accessibilityIgnoresInvertColors
              />
            }
          />

          <View style={styles.footer}>
            <Text style={styles.footerPrompt}>Don’t have any account?</Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Sign Up"
              hitSlop={8}
              onPress={onSignUpPress}
              style={({ pressed }) => pressed && styles.footerActionPressed}>
              <Text style={styles.footerAction}>Sign Up</Text>
            </Pressable>
          </View>

          <View style={styles.bottomSpacer} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default LoginScreen;
