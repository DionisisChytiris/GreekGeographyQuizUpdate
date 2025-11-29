// utils/analyticsConsent.ts
import * as SecureStore from 'expo-secure-store';
import { logDebug, logError } from '../utils/logger';

const CONSENT_KEY = 'analytics_consent';

/**
 * Saves analytics consent preference to secure storage.
 * 
 * @param consent - true to enable analytics, false to disable
 * @returns Promise that resolves when consent is saved
 */
export const setAnalyticsConsent = async (consent: boolean) => {
  try {
    logDebug("Saving consent:", consent);
    await SecureStore.setItemAsync(CONSENT_KEY, JSON.stringify(consent));
  } catch (error) {
    logError("Error saving consent:", error);
  }
};

/**
 * Checks if user has given consent for analytics tracking.
 * 
 * @returns Promise that resolves to true if consent given, false otherwise
 */
export const hasAnalyticsConsent = async (): Promise<boolean> => {
  try {
    const consent = await SecureStore.getItemAsync(CONSENT_KEY);
    return consent ? JSON.parse(consent) : false;
  } catch (error) {
    logError("Error getting consent:", error);
    return false;
  }
};
