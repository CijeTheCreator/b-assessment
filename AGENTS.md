# AGENTS.md

This document defines the architecture, coding standards, and workflows for AI agents contributing to this React Native repository.

## 1. Tech Stack & Architecture

- **Framework:** Expo (managed workflow with Expo Router for file-based navigation).
- **Language:** TypeScript (`strict: true`). Do not use `any` unless strictly unavoidable; prefer explicit interfaces or `unknown` with type narrowing.
- **Runtime:** React Native New Architecture (Hermes, Fabric, TurboModules).
- **Native Configuration:** Never modify `/ios` or `/android` directories manually. Use `app.json` / `app.config.ts` and Expo Config Plugins for native changes.

## 2. Project Structure & Code Organization

- `app/`: Expo Router screens and layouts only. Keep route files thin—delegate UI to components and logic to hooks.
- `components/`: Reusable UI components. Group complex components into folders with an `index.ts` barrel export if needed.
- `hooks/`: Custom hooks encapsulating business logic, side effects, and state derivations.
- `services/` or `api/`: API client configurations and data-fetching functions.
- `store/`: Global client state stores.
- `utils/`: Pure helper functions with zero React dependencies.
- **Platform-Specific Code:** Use `Platform.select()` for minor style adjustments. For divergent behavior or layouts, split files using `.ios.tsx` and `.android.tsx` extensions.

## 3. UI, Styling & Performance Rules

- **Lists:** Never use `.map()` inside a `ScrollView` for dynamic or long datasets. Use `@shopify/flash-list` (`FlashList`) for large lists and provide accurate `estimatedItemSize` values.
- **Touchables:** Always use `Pressable` instead of legacy `TouchableOpacity` or `TouchableHighlight`.
- **Animations & Gestures:** Use `react-native-reanimated` and `react-native-gesture-handler` so animations execute on the UI thread. Avoid React Native's built-in `Animated` API for complex transitions.
- **Images:** Use `expo-image` instead of React Native's core `Image` component for better caching, performance, and WebP/AVIF support.
- **Memoization:** Only apply `useMemo`, `useCallback`, and `React.memo` when passing props to memoized children, stabilizing hook dependencies, or optimizing verified render bottlenecks.

## 4. State Management & Data Fetching

- **Server State:** Use `@tanstack/react-query` for all API requests, caching, pagination, and background synchronization. Do not duplicate server responses into global client stores.
- **Client State:** Use `zustand` (or React Context for static dependency injection) for lightweight global UI state such as theme, modals, or local user preferences.

## 5. Security & Error Handling

- **Secrets & Storage:** Never hardcode API keys, tokens, or secrets. Never store sensitive user credentials in `AsyncStorage`—use `expo-secure-store`. Only prefix environment variables with `EXPO_PUBLIC_` if they are safe to expose in the client bundle.
- **Resilience:** Wrap major navigation boundaries and async data views in React Error Boundaries. Provide explicit loading, empty, and error states for every network-dependent screen.

## 6. Agent Workflow & Verification

- **Typecheck & Lint:** Before completing any task, run the project's typechecker (`npx tsc --noEmit`) and linter (`npm run lint`) to ensure zero errors or warnings.
- **Testing:** Write unit tests for pure utilities and custom hooks using Jest. Update component tests via `@testing-library/react-native` when modifying UI behavior.
- **Dependencies:** Prefer Expo-compatible libraries (`npx expo install <package>`) to ensure native SDK version compatibility.
