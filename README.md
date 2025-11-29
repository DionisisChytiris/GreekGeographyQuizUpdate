# Γεωγραφία της Ελλάδας (Greek Geography Quiz App)

A comprehensive, interactive quiz application for learning and testing knowledge about Greek geography, culture, traditions, and cuisine. Built with React Native and Expo.

[![iOS App Store](https://img.shields.io/badge/iOS-App%20Store-blue.svg)](https://apps.apple.com/us/app/%CE%B3%CE%B5%CF%89%CE%B3%CF%81%CE%B1%CF%86%CE%AF%CE%B1-%CF%84%CE%B7%CF%82-%CE%B5%CE%BB%CE%BB%CE%AC%CE%B4%CE%B1%CF%82/id6504780092?platform=iphone)

## 📱 Overview

This educational quiz app helps users explore and learn about Greece's geography through interactive quizzes covering:
- **General Geography Questions** - Comprehensive knowledge about Greek geography
- **Lakes & Rivers** - Explore Greek water bodies and their characteristics
- **Mountains** - Learn about Greece's mountainous regions and peaks
- **Cities & Regions (Νομοί)** - Discover Greek administrative regions and cities
- **Greek Traditions** - Explore Greek customs and cultural practices
- **Traditional Food by Region** - Learn about regional Greek cuisine

## ✨ Features

### Quiz Categories
- 🗺️ **General Questions** - Broad geography knowledge
- 🌊 **Lakes & Rivers** - Water bodies and hydrology
- ⛰️ **Mountains** - Mountain ranges and peaks
- 🏛️ **Cities & Regions** - Administrative divisions and urban geography
- 🎭 **Greek Traditions** - Cultural customs and practices
- 🍽️ **Traditional Food** - Regional culinary specialties

### Game Features
- 🎮 **Battle Mode** - Competitive quiz challenges with coin rewards
- 💰 **Coins System** - Earn coins by completing quizzes (5 coins regular, 50 coins bonus)
- ❤️ **Lives System** - Heart-based lives that can be replenished
- 📊 **Progress Tracking** - Save your progress across quiz sessions
- 📅 **Daily Bonus** - Collect daily coin bonuses
- 🔓 **Unlockable Categories** - Unlock premium categories with earned coins
- 📈 **Results & Analytics** - Detailed quiz results with statistics
- 🎯 **Timer Mode** - Optional timed quiz challenges
- 🔊 **Sound Effects** - Immersive audio feedback
- 🌙 **Modern UI** - Beautiful, responsive design with animations

### Technical Features
- 📱 **Cross-Platform** - iOS and Android support via Expo
- 💾 **Offline Support** - Local data storage with AsyncStorage
- 🔐 **Secure Storage** - Analytics consent stored securely
- 🔄 **Auto-Updates** - Over-the-air updates via Expo Updates
- 📊 **Analytics** - Optional Google Analytics integration with user consent
- 🎨 **Custom Animations** - Smooth transitions using Reanimated
- 📝 **TypeScript** - Full type safety throughout the codebase

## 🛠️ Tech Stack

### Core
- **React Native** - `0.81.4`
- **Expo SDK** - `^54.0.12`
- **TypeScript** - `~5.9.2`
- **React** - `19.1.0`

### State Management
- **Redux Toolkit** - `^2.2.7` - Centralized state management
- **React Redux** - `^9.1.2` - React bindings for Redux

### Navigation
- **React Navigation** - `^6.1.9` - Navigation library
- **React Navigation Native Stack** - `^6.9.15` - Native stack navigator

### UI/UX Libraries
- **Expo Vector Icons** - Icon library
- **React Native Reanimated** - `~4.1.1` - Animations
- **Lottie React Native** - `~7.3.1` - Animation library
- **React Native Gifted Charts** - `^1.4.58` - Chart components
- **React Native Calendars** - `^1.1313.0` - Calendar component
- **@gorhom/bottom-sheet** - `^4.6.0` - Bottom sheet modals

### Storage & Data
- **AsyncStorage** - `2.2.0` - Local data persistence
- **Expo Secure Store** - `~15.0.7` - Secure data storage
- **Axios** - `^1.8.4` - HTTP client for API calls

### Audio & Media
- **Expo AV** - `~16.0.7` - Audio/video playback
- **Expo Audio** - `~1.0.13` - Audio utilities

### Fonts
- **Expo Google Fonts - Poppins** - Primary font family
- **Expo Google Fonts - Quicksand** - Secondary font family

## 📁 Project Structure

```
GreekGeographyQuizApp/
├── App.tsx                      # Main application entry point
├── StackNavigator.tsx           # Navigation configuration
├── ReduxToolkit/                # Redux state management
│   ├── store.tsx               # Redux store configuration
│   ├── constants.ts            # Game constants (coin rewards, lives, etc.)
│   ├── coinsSlice.ts           # Coins state management
│   ├── livesSlice.ts           # Lives/hearts state management
│   ├── timerSlice.ts           # Timer state management
│   ├── soundSlice.ts           # Sound settings state
│   ├── progressSlice.ts        # Quiz progress tracking
│   ├── setUserNameSlice.ts     # User name management
│   └── lockCategorySlice.ts    # Category unlock state
├── screens/                     # Screen components
│   ├── Home.tsx                # Home screen
│   ├── QuizScreen1.tsx         # Main quiz selection screen
│   ├── GeneralQuestionsQuizzes/
│   ├── LakeRiverQuizzes/
│   ├── MountainQuizzes/
│   ├── NomoiQuizzes/
│   ├── GreekTraditionsQuizzes/
│   ├── TraditionalFoodQuizzes/
│   ├── MainTemplateFiles/      # Reusable quiz templates
│   ├── components/             # Shared components
│   ├── Modals/                 # Modal components
│   └── Utilities/              # Utility hooks and functions
├── data/                       # Quiz questions data
├── assets/                     # Images, sounds, animations
├── GoogleAnalytics/            # Analytics implementation
├── Types/                      # TypeScript type definitions
└── utils/                      # Utility functions
    └── logger.ts              # Centralized logging utility
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (Mac) or Android Emulator
- Expo Go app on your mobile device (for testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd GreekGeographyQuizApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   # or
   expo start
   ```

4. **Run on your platform**
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Scan QR code with Expo Go app on your device

### Available Scripts

```bash
npm start          # Start Expo development server
npm run android    # Run on Android
npm run ios        # Run on iOS
npm run web        # Run on web (limited functionality)
```

## 🏗️ Architecture

### State Management

The app uses **Redux Toolkit** for state management with the following slices:

- **coinsSlice** - Manages user coins (earnings, spending, persistence)
- **livesSlice** - Manages hearts/lives system
- **timerSlice** - Timer enable/disable settings
- **soundSlice** - Sound effects enable/disable
- **progressSlice** - Quiz progress tracking per category
- **setUserNameSlice** - User profile name
- **lockCategorySlice** - Category unlock/lock state

### Navigation

Uses **React Navigation Native Stack** with a centralized configuration in `StackNavigator.tsx`. All screens share common navigation options for consistency.

### Logging

A custom logging utility (`utils/logger.ts`) provides structured logging with levels (DEBUG, INFO, WARN, ERROR) that automatically respects development/production modes.

## 🎮 Game Mechanics

### Coins System
- Earn **5 coins** per regular quiz completion
- Earn **50 coins** for battle mode victories
- Spend coins to unlock premium categories (200-500 coins)

### Lives System
- Start with **3 hearts** (lives)
- Lose a heart on incorrect answers
- Replenish hearts using coins or daily bonuses

### Progress Tracking
- Progress automatically saved per quiz category
- Resume from last completed question
- Track completion percentage

## 🔒 Privacy & Analytics

- **User Consent** - GDPR-compliant analytics consent modal on first launch
- **Secure Storage** - Sensitive data stored using Expo Secure Store
- **Optional Analytics** - Users can opt-out of analytics tracking
- **Data Deletion** - Users can request deletion of their analytics data

## 📱 Platform Support

- ✅ **iOS** - Available on App Store
- ✅ **Android** - Supported via Expo
- ⚠️ **Web** - Limited support (navigation may not work perfectly)

## 🧪 Development

### Code Quality

The codebase follows best practices:
- **TypeScript** - Full type safety
- **Clean Code** - Removed commented code, unused imports
- **Centralized Constants** - Magic numbers extracted to constants
- **Professional Logging** - Production-ready logging utility
- **Consistent Patterns** - Standardized Redux patterns

### Building for Production

```bash
# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android

# Build for both
eas build --platform all
```

## 📄 License

This project is private and proprietary.

## 👥 Support

For issues, questions, or contributions, please contact the development team or open an issue in the repository.

## 🔗 Links

- [iOS App Store](https://apps.apple.com/us/app/%CE%B3%CE%B5%CF%89%CE%B3%CF%81%CE%B1%CF%86%CE%AF%CE%B1-%CF%84%CE%B7%CF%82-%CE%B5%CE%BB%CE%BB%CE%AC%CE%B4%CE%B1%CF%82/id6504780092?platform=iphone)

## 📝 Version History

- **v1.0.0** - Initial release
  - Multiple quiz categories
  - Coins and lives system
  - Progress tracking
  - Battle mode
  - Daily bonuses
  - Analytics integration

---

Made with ❤️ for learning Greek geography
