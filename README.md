# Breet Assessment

An [Expo](https://expo.dev) + React Native (TypeScript) mobile app built with [Expo Router](https://docs.expo.dev/router/introduction) file-based navigation, `react-native-reanimated`, `react-native-gesture-handler`, `react-native-svg`, and `expo-image`.

## Screens

- **Login (`src/app/index.tsx` → `src/screens/LoginScreen`)**: Onboarding / sign-in screen with decorative vector shapes and delivery illustration.
- **Home (`src/app/(tabs)/home.tsx` → `src/screens/HomeScreen`)**: Greeting header, horizontal snapping E-Bike carousel (`BikeCarousel`), orders CTA banner, and Lottie promo section.
- **Orders (`src/app/(tabs)/bookmarks.tsx` → `src/screens/OrdersScreen`)**: Package receipt lookup card (`Track Now`) and tracking history list.
- **Track / Tracking Details (`src/app/(tabs)/track.tsx` → `src/screens/TrackingDetailScreen`)**: Interactive mock vector map (`MockMap`) with route and pins, receipt pill, and a swipeable/tappable bottom sheet revealing the shipment summary card and delivery history timeline.
- **Settings (`src/app/(tabs)/settings.tsx`)**: Settings tab placeholder.

## Project Structure

```text
src/
├── app/                # Expo Router routes & tab layout
├── assets/             # Extracted icons, images, and Lottie animations
├── components/         # Shared UI components and custom BottomTabBar
├── hooks/              # Theme & color scheme hooks
├── screens/            # Self-contained screen modules (index.tsx, styles.ts, components/)
├── theme/              # Design tokens (colors, spacing, typography, 375x812 scaling)
└── __tests__/          # Jest unit tests
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the Expo dev server:

   ```bash
   npm start
   ```

   From there you can open the app in an iOS simulator, Android emulator, development build, or Expo Go.

## Verification Scripts

- **Typecheck**: `npx tsc --noEmit`
- **Lint**: `npm run lint`
- **Test**: `npm test`
