export default {
  expo: {
    name: "Γεωγραφία της Ελλάδας",
    slug: "GreekGeographyQuizApp",
    newArchEnabled: true,
    platforms: ["ios", "android"],
    version: "1.0.25",

    jsEngine: "hermes",

    ios: {
      supportsTablet: true,
      requireFullScreen: true,
      bundleIdentifier: "com.greekgeographyquizapp.dion",
      buildNumber: "56",
      newArchEnabled: true,
      jsEngine: "hermes",
    },

    android: {
      package: "com.greekgeographyquizapp.dion",
      versionCode: 56,
      newArchEnabled: true,
      jsEngine: "hermes",
    },

    runtimeVersion: "1.0.25",

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
