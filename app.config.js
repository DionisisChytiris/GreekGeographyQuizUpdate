export default {
  expo: {
    name: "Γεωγραφία της Ελλάδας",
    slug: "GreekGeographyQuizApp",
    newArchEnabled: true,
    platforms: ["ios", "android"],
    version: "1.0.27",
    icon: "./assets/iconApp.png",
    jsEngine: "hermes",

    ios: {
      supportsTablet: true,
      requireFullScreen: true,
      bundleIdentifier: "com.greekgeographyquizapp.dion",
      buildNumber: "58",
      icon: "./assets/iconApp.png", // ✅ SAME file
      newArchEnabled: true,
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
      jsEngine: "hermes",
    },

    android: {
      package: "com.greekgeographyquizapp.dion",
      versionCode: 58,
      newArchEnabled: true,
      jsEngine: "hermes",
    },

    runtimeVersion: "1.0.27",

    updates: {
      url: "https://u.expo.dev/8e57705c-5ea4-459b-8705-25056f4c466f",
    },

    // ✅ ✅ THIS WAS MISSING — ADD IT:
    extra: {
      eas: {
        projectId: "8e57705c-5ea4-459b-8705-25056f4c466f",
      },
    },
  },
};
