import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ArrowButton } from '@/components/ui/ArrowButton';
import { GreetingTitle } from '@/components/ui/GreetingTitle';
import { TopBar } from '@/components/ui/TopBar';
import { ThemeColors } from '@/theme';

import { CardWaveDecoration } from './components/CardWaveDecoration';
import {
  TrackingHistoryRow,
  type TrackingHistoryItem,
} from './components/TrackingHistoryRow';
import { styles } from './styles';

const DEFAULT_TRACKING_HISTORY: TrackingHistoryItem[] = [
  {
    id: 'scp-9374826473',
    trackingNumber: 'SCP9374826473',
    status: 'In the process',
    icon: require('../../assets/icons/package-emoji.png'),
  },
  {
    id: 'scp-6653728497',
    trackingNumber: 'SCP6653728497',
    status: 'In delivery',
    icon: require('../../assets/icons/truck-emoji.png'),
  },
];

export interface OrdersScreenProps {
  onNotificationPress?: () => void;
  onTrackPress?: (receiptNumber: string) => void;
  onHistoryItemPress?: (item: TrackingHistoryItem) => void;
  historyItems?: TrackingHistoryItem[];
}

/**
 * Orders / Track Package screen matching the Figma "Track" design with
 * a receipt number lookup card and tracking history list.
 */
export function OrdersScreen({
  onNotificationPress,
  onTrackPress,
  onHistoryItemPress,
  historyItems = DEFAULT_TRACKING_HISTORY,
}: OrdersScreenProps) {
  const [receiptNumber, setReceiptNumber] = useState('');

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <KeyboardAvoidingView
          style={styles.safeArea}
          behavior={Platform.select({ ios: 'padding', default: undefined })}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            bounces={false}>
            <TopBar onNotificationPress={onNotificationPress} />

            <GreetingTitle />

            <View style={styles.heroCard}>
              <View style={styles.waveDecoration}>
                <CardWaveDecoration />
              </View>

              <Text style={styles.cardTitle}>Track Your Package</Text>
              <Text style={styles.cardSubtitle}>
                Enter the receipt number that has been given by the officer
              </Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  value={receiptNumber}
                  onChangeText={setReceiptNumber}
                  placeholder="Enter the receipt number"
                  placeholderTextColor={ThemeColors.inputPlaceholder}
                  returnKeyType="search"
                  onSubmitEditing={() => onTrackPress?.(receiptNumber)}
                  accessibilityLabel="Enter the receipt number"
                />
              </View>

              <ArrowButton
                label="Track Now"
                variant="spread"
                style={styles.trackButton}
                onPress={() => onTrackPress?.(receiptNumber)}
              />
            </View>

            <View style={styles.historySection}>
              <Text style={styles.historyTitle}>Tracking history</Text>

              <View style={styles.historyList}>
                {historyItems.map((item) => (
                  <TrackingHistoryRow
                    key={item.id}
                    item={item}
                    onPress={onHistoryItemPress}
                  />
                ))}
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

export default OrdersScreen;
