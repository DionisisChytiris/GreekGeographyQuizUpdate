# Greek Geography Quiz App

React Native / Expo quiz app about Greek geography. Provides single-player quiz screens, a "battle" mode with AI, coins/lives economy, analytics consent, and persistent progress via Redux + AsyncStorage / SecureStore.


## Download

Replace the placeholders below with your app's actual store links.

- App Store (iOS)
  - URL: https://apps.apple.com/app/id6504780092

- Google Play (Android)
  - URL: https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME](https://play.google.com/store/apps/details?id=com.greekgeographyquizapp.dion)

## Key features
- Multiple quiz types and question generation (MainQuizAiGen, BattleQuiz).
- Coins for help options (50%, phone, 100%).
- Lives (hearts) system persisted with Redux and AsyncStorage.
- Sounds (Expo Audio) and simple animations (react-native-reanimated).
- Analytics with user consent stored securely (expo-secure-store).
- Progress saving and resume (Redux + AsyncStorage).
- Update check (expo-updates) and in-app review (expo-store-review).

## Tech stack
- Expo
- React Native
- TypeScript / TSX (mixed JS/TS)
- Redux Toolkit
- expo-secure-store, @react-native-async-storage/async-storage
- react-native-reanimated
- axios (for analytics endpoint)
- expo-av (audio), expo-updates, expo-store-review

## Prerequisites
- Node.js (LTS)
- Yarn or npm
- Expo CLI (global): npm install -g expo-cli
- Android Studio / Xcode (optional for emulators / device builds)
- Windows: tested development on Windows 10/11

## Setup (development)
1. Clone the repo:
   ```
   git clone <repo-url>
   cd GreekGeographyQuizApp
   ```
2. Install dependencies:
   ```
   npm install
   # or
   yarn
   ```
3. Start Expo:
   ```
   expo start
   ```
4. Open on device / emulator via QR or emulator link.

## Useful scripts
- expo start
- expo build / eas build (if configured)
- yarn test (if tests are present)

## Important implementation notes
- Analytics consent:
  - Consent is stored using SecureStore with key `analytics_consent`.
  - Functions: `setAnalyticsConsent(boolean)` and `hasAnalyticsConsent()` in `GoogleAnalytics/analyticsConsent.ts`.
  - `trackEvent` checks consent before sending any event to the backend.
- Persistent data:
  - Coins, progress and hearts are managed via Redux Toolkit slices and persisted with AsyncStorage (or SecureStore where appropriate).
  - Lives slice includes actions such as `decrementHeart`, `saveHeartAsync`, `loadHeart`.
- Sounds:
  - Audio loaded with `expo-av`. Ensure proper unload in useEffect cleanup to avoid memory leaks.
- Animations:
  - Uses `react-native-reanimated` for scale/press animations; remember to configure the Reanimated Babel plugin if not already done.

## Folder overview (important files)
- /screens
  - MainTemplateFiles/MainQuizAiGen.tsx — main quiz flow (questions, timer, coins)
  - MainTemplateFiles/BattleQuiz.tsx — battle mode vs AI
  - Settings.tsx — toggles for timer, sound, analytics consent
  - /Modals — various modal components (help, broken heart, update)
- /ReduxToolkit — slices (coinsSlice, livesSlice, progressSlice, timer, sound)
- /GoogleAnalytics — analyticsConsent.ts, trackEvent.ts, trackEventsOrganized.ts
- /assets — sounds, images

## Debugging tips
- Consent appearing false in Settings:
  - Confirm `hasAnalyticsConsent()` logs the stored value.
  - Ensure the hook `useAnalyticsConsent` fetches value in a useEffect and sets local state only after fetch completes.
- Max update depth errors:
  - Check useEffect dependency arrays and avoid setting state that is included in the same dependencies without guards.
- Sound issues:
  - Make sure to unload audio on component unmount: call `sound.unloadAsync()` or `soundRef.current.unloadAsync()` in cleanup.

## Testing consent persistence (quick)
Inside Settings component or a test helper use:
```ts
await setAnalyticsConsent(true);
const stored = await SecureStore.getItemAsync('analytics_consent');
console.log('Stored consent:', stored); // "true"
```


