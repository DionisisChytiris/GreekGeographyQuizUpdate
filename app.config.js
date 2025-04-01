import "dotenv/config";

export default {
  expo: {
    name: "Γεωγραφία της Ελλάδας",
    slug: "GreekGeographyQuizApp",
    newArchEnabled: true,
    platforms: ["ios", "android"],
    version: "1.0.7",
    icon: "./assets/adaptive-icon-test.png",
    orientation: "portrait",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/adaptive-icon-test.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      requireFullScreen: true,
      bundleIdentifier: "com.greekgeographyquizapp.dion",
      buildNumber: "2",
      newArchEnabled: true,
    },
    android: {
      package: "com.greekgeographyquizapp.dion",
      versionCode: 39,
      newArchEnabled: true,
      permissions: ["INTERNET", "ACCESS_NETWORK_STATE", "VIBRATE"],
      config: {
        firebaseKeys: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
          measurementId: process.env.FIREBASE_MEASUREMENT_ID,
        },
      },
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon-test.png",
        backgroundColor: "#ffffff",
      },
      statusBar: {
        barStyle: "dark-content",
        backgroundColor: "#ffffff",
      },
    },
    plugins: [
      [
        "expo-screen-orientation",
        {
          initialOrientation: "PORTRAIT_UP",
        },
      ],
      "expo-font",
    ],
    web: {
      favicon: "./assets/adaptive-icon-test.png",
    },
    extra: {
      eas: {
        projectId: "8e57705c-5ea4-459b-8705-25056f4c466f",
      },
      firebaseKeys: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID,
      },
    },
    androidStatusBar: {
      translucent: true,
    },
    runtimeVersion: {
      policy: "appVersion",
    },
    updates: {
      url: "https://u.expo.dev/8e57705c-5ea4-459b-8705-25056f4c466f",
    },
  },
};
