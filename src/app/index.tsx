import { useRouter } from 'expo-router';

import { LoginScreen } from '@/screens/LoginScreen';

export default function StartRoute() {
  const router = useRouter();

  const handleEnterHome = () => {
    router.replace('/(tabs)/home');
  };

  return (
    <LoginScreen
      onGoogleLoginPress={handleEnterHome}
      onSignUpPress={handleEnterHome}
    />
  );
}
