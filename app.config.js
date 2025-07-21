import "dotenv/config";

export default {
  expo: {
    name: "Γεωγραφία της Ελλάδας",
    slug: "GreekGeographyQuizApp",
    newArchEnabled: true,
    platforms: ["ios", "android"],
    version: "1.0.13",
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
      jsEngine: "jsc",
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      package: "com.greekgeographyquizapp.dion",
      versionCode: 45,
      newArchEnabled: true,
      jsEngine: "jsc",
      permissions: ["INTERNET", "ACCESS_NETWORK_STATE", "VIBRATE"],
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
      "expo-secure-store",
      "expo-audio",
      "expo-font",
    ],
    web: {
      favicon: "./assets/adaptive-icon-test.png",
    },
    extra: {
      eas: {
        projectId: "8e57705c-5ea4-459b-8705-25056f4c466f",
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
