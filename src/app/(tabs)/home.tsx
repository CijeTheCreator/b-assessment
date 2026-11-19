import { useRouter } from 'expo-router';

import { HomeScreen } from '@/screens/HomeScreen';

export default function HomeTabRoute() {
  const router = useRouter();

  return (
    <HomeScreen
      onYourOrdersPress={() => {
        router.navigate('/(tabs)/bookmarks');
      }}
    />
  );
}
