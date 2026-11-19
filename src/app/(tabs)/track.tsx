import { useRouter } from 'expo-router';
import React from 'react';

import { TrackingDetailScreen } from '@/screens/TrackingDetailScreen';

export default function TrackTabRoute() {
  const router = useRouter();

  return (
    <TrackingDetailScreen
      onBackPress={() => {
        if (router.canGoBack()) {
          router.back();
        } else {
          router.navigate('/(tabs)/bookmarks');
        }
      }}
    />
  );
}
