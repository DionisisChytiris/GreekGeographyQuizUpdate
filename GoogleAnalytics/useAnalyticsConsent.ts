// hooks/useAnalyticsConsent.ts
import { useEffect, useState } from "react";
import { hasAnalyticsConsent, setAnalyticsConsent } from "./analyticsConsent";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { trackEvent } from "./trackEvent";
import { trackEventsOrganized } from "./trackEventsOrganized";
import { logError } from "../utils/logger";

/**
 * Custom hook for managing analytics consent state and UI.
 * Handles first-launch modal display and consent persistence.
 * Provides functions to accept/decline consent and manage consent state.
 * 
 * @returns Object containing:
 *   - consentGiven: boolean - Whether user has given consent
 *   - showConsentModal: boolean - Whether to show the consent modal
 *   - acceptConsent/acceptConsent1: Function - Accept consent handlers
 *   - declineConsent/declineConsent1: Function - Decline consent handlers
 *   - deleteGA4Consent: Function - Delete consent data
 *   - setConsent: Function - Update consent programmatically
 */
export const useAnalyticsConsent = () => {
  const [consent, setConsent] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   const checkConsent = async () => {
  //     const result = await hasAnalyticsConsent();
  //     if (result) {
  //       setConsent(true);
  //       console.log("Consent is given");
  //     } else  {
  //       setShowModal(true);
  //       console.log("Consent is NOT given");
  //     }
  //   };
  //   checkConsent();
  // }, []);

  useEffect(() => {
    const checkConsent = async () => {
      const isFirstLaunch = await AsyncStorage.getItem('isFirstLaunch');
  
      // Check if it's the first launch
      if (isFirstLaunch === null) {
        // If it is, show the modal and mark that the app has been launched before
        setShowModal(true);
      } else {
        // If it's not the first launch, check consent status
        const result = await hasAnalyticsConsent();
        if (result) {
          setConsent(result);
        }
      }
    };
    
    checkConsent();
  }, []);
  
  const acceptConsent = async () => {
    await setAnalyticsConsent(true);
    setConsent(true);
    setShowModal(false);
  };
  const acceptConsent1 = async () => {
    try {
      await setAnalyticsConsent(true); // Save the consent choice
      await AsyncStorage.setItem('isFirstLaunch', 'false'); // Mark app as launched
      setConsent(true); // Update state
      setShowModal(false); // Hide the modal
      trackEvent(trackEventsOrganized.CONSENT_FIRST_LAUNCH);
    } catch (error) {
      logError("Error during accepting consent:", error);
    }
  };
  
  const declineConsent = async () => {
    await setAnalyticsConsent(false);
    setConsent(false);
    setShowModal(false);
  };
  const deleteGA4Consent = async () => {
    await setAnalyticsConsent(false);
    setConsent(false);
    // setShowModal(false);
  };
  const declineConsent1 = async () => {
    try {
      await setAnalyticsConsent(false); // Save the consent choice
      await AsyncStorage.setItem('isFirstLaunch', 'false'); // Mark app as launched
      setConsent(false); // Update state
      setShowModal(false); // Hide the modal
    } catch (error) {
      logError("Error during declining consent:", error);
    }
  };

  const updateConsent = async (newConsent: boolean) => {
    await setAnalyticsConsent(newConsent);
    setConsent(newConsent);
  };

  return {
    consentGiven: consent === true,
    showConsentModal: showModal,
    acceptConsent,
    acceptConsent1,
    declineConsent,
    deleteGA4Consent,
    declineConsent1,
    setConsent: updateConsent, // Allow external components to update consent
  };
};
