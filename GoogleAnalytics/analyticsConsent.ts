// utils/analyticsConsent.ts
import * as SecureStore from 'expo-secure-store';

const CONSENT_KEY = 'analytics_consent';

export const setAnalyticsConsent = async (consent: boolean) => {
  try {
    console.log("Saving consent:", consent);
    await SecureStore.setItemAsync(CONSENT_KEY, JSON.stringify(consent));
  } catch (error) {
    console.error("Error saving consent:", error);
  }
};

export const hasAnalyticsConsent = async (): Promise<boolean> => {
  try {
    const consent = await SecureStore.getItemAsync(CONSENT_KEY);
    return consent ? JSON.parse(consent) : false;
  } catch (error) {
    console.error("Error getting consent:", error);
    return false;
  }
};
