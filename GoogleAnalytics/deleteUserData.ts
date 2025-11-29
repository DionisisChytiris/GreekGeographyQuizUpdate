// utils/deleteUserData.ts
import axios from "axios";
import { hasAnalyticsConsent } from "./analyticsConsent";
import { getClientId } from "./getClientIdAsyncStorage";
import { logInfo, logWarn, logError } from "../utils/logger";

/**
 * Deletes user analytics data from the backend server.
 * Only proceeds if user has given analytics consent.
 * 
 * @returns Promise that resolves to true if deletion successful, false otherwise
 */
export const deleteUserData = async (): Promise<boolean> => {
  const consent = await hasAnalyticsConsent();
  if (!consent) return false;

  try {
    const client_id = await getClientId();

    const response = await axios.post(
      "https://greek-geography-quiz-app-backend.vercel.app/delete",
      { client_id }
    );

    if (response.status === 200) {
      logInfo("User data deletion request successful");
      return true;
    } else {
      logWarn("Data deletion request failed:", response.data);
      return false;
    }
  } catch (error: any) {
    logError("User data deletion error:", error.message);
    return false;
  }
};
