import { useRouter } from 'expo-router';
import React from 'react';

import { OrdersScreen } from '@/screens/OrdersScreen';

export default function OrdersTabRoute() {
  const router = useRouter();

  return (
    <OrdersScreen
      onTrackPress={() => {
        router.navigate('/(tabs)/track');
      }}
      onHistoryItemPress={() => {
        router.navigate('/(tabs)/track');
      }}
    />
  );
}
