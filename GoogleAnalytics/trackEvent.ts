// utils/trackEvent.ts
import axios from "axios";
import * as Application from "expo-application";
import * as Device from "expo-device";
import { hasAnalyticsConsent } from "./analyticsConsent";
import { getClientId } from "./getClientIdAsyncStorage";

// const MEASUREMENT_ID = 'G-XXXXXXX'; // Replace with your GA4 Measurement ID
// const API_SECRET = '1111111'; // From GA4 Admin > Data Streams > Measurement Protocol API

// const getClientId = async (): Promise<string> => {
//   if (Device.osName === "Android") {
//     return (
//       (Application.getAndroidId() ||
//         (await Application.getIosIdForVendorAsync())) ??
//       Math.random().toString(36).substring(2)
//     );
//   } else {
//     const iosId = await Application.getIosIdForVendorAsync();
//     return iosId ?? Math.random().toString(36).substring(2);
//   }
// };

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
          // app_name: Application.applicationName,
          // app_version: Application.nativeApplicationVersion,
          // device_model: Device.modelName,
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
    console.log("Analytics track successfully")
  } catch (error) {
    console.log("Analytics tracking failed:", error);
  }
};
