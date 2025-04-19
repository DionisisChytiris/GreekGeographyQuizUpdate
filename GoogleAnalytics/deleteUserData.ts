// utils/deleteUserData.ts
import axios from "axios";
import { hasAnalyticsConsent } from "./analyticsConsent";
import { getClientId } from "./getClientIdAsyncStorage";

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
      console.log("User data deletion request successful");
      return true;
    } else {
      console.warn("Data deletion request failed:", response.data);
      return false;
    }
  } catch (error: any) {
    console.error("User data deletion error:", error.message);
    return false;
  }
};
