// utils/trackEvent.ts
import axios from "axios";
import * as Device from "expo-device";
import { hasAnalyticsConsent } from "./analyticsConsent";
import { getClientId } from "./getClientIdAsyncStorage";
import { logError } from "../utils/logger";

/**
 * Tracks analytics events to Google Analytics via backend API.
 * Only tracks if user has given consent for analytics.
 * Automatically includes platform, date, and time information.
 * 
 * @param eventName - The name of the event to track (e.g., "quiz_start", "button_click")
 * @param eventParams - Optional additional parameters to include with the event
 * @returns Promise that resolves when tracking is complete (or immediately if no consent)
 * 
 * @example
 * trackEvent('quiz_start');
 * trackEvent('purchase', { item: 'premium_category', price: 500 });
 */
export const trackEvent = async (
  eventName: string,
  eventParams: Record<string, any> = {}
) => {
  const consent = await hasAnalyticsConsent();
  if (!consent) return;

  const payload = {
    client_id: (await getClientId()) || Math.random().toString(36).substring(2), // fallback ID
    events: [
      {
        name: eventName,
        params: {
          platform: Device.osName,
          date: new Date().toISOString().split("T")[0],
          time: new Date().toTimeString().split(" ")[0],
          ...eventParams,
        },
      },
    ],
  };

  try {
    await axios.post(
      "https://greek-geography-quiz-app-backend.vercel.app/track",
      payload
    );
  } catch (error) {
    logError("Analytics tracking failed:", error);
  }
};
