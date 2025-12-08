import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import StackNavigator from "./StackNavigator";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Provider } from "react-redux";
import { store, useAppDispatch } from "./ReduxToolkit/store";
import { loadName } from "./ReduxToolkit/setUserNameSlice";
import { loadCoins } from "./ReduxToolkit/coinsSlice";
import * as Updates from "expo-updates";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UpdateAvailableModal from "./screens/Modals/UpdateAvailableModal";
import ConsentModal from "./GoogleAnalytics/ConsentModal";
import { useAnalyticsConsent } from "./GoogleAnalytics/useAnalyticsConsent";
import { loadHeartAsync } from "./ReduxToolkit/livesSlice";
import { loadShowState } from "./ReduxToolkit/lockCategorySlice";
import { logError } from "./utils/logger";

interface AppContentProps {
  setUpdateAvailable: (value: boolean) => void;
}

/**
 * Saves the current date to AsyncStorage for usage tracking.
 * Used for calendar display to show which dates the app was used.
 * @returns Promise that resolves when the date is saved
 */
const saveUsageDate = async (): Promise<void> => {
  const today = new Date().toISOString().split("T")[0];
  try {
    const storedDates = await AsyncStorage.getItem("usedDates");
    const dates = storedDates ? JSON.parse(storedDates) : {};
    dates[today] = {
      marked: true,
      selected: true,
      selectedColor: "lightblue",
    };
    await AsyncStorage.setItem("usedDates", JSON.stringify(dates));
  } catch (error) {
    logError("Error saving usage date:", error);
  }
};

/**
 * Main app content component that handles initialization and update checking.
 * Loads persisted state on mount and checks for OTA updates.
 */
const AppContent: React.FC<AppContentProps> = ({ setUpdateAvailable }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadName());
    dispatch(loadCoins());
    dispatch(loadShowState());
    dispatch(loadHeartAsync());
  }, [dispatch]);

  useEffect(() => {
    saveUsageDate();
  }, []);

  /**
   * Checks for over-the-air updates via Expo Updates.
   * Only runs in production builds, not in development mode.
   * @returns Promise that resolves when update check is complete
   */
  const checkForUpdates = async (): Promise<void> => {
    if (__DEV__) return;
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        setUpdateAvailable(true);
      }
    } catch (error) {
      logError("Error checking for updates:", error);
    }
  };
  
  useEffect(() => {
    checkForUpdates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BottomSheetModalProvider>
      <StackNavigator />
    </BottomSheetModalProvider>
  );
};

/**
 * Root application component.
 * Sets up Redux store, navigation, and handles modals for updates and analytics consent.
 * @returns JSX.Element - The root app component
 */
export default function App(): JSX.Element {
  const [updateAvailable, setUpdateAvailable] = useState<boolean>(false);
  const { showConsentModal, acceptConsent1, declineConsent1 } =
    useAnalyticsConsent();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <StatusBar style="auto" translucent />
        <AppContent setUpdateAvailable={setUpdateAvailable} />
        <UpdateAvailableModal
          visible={updateAvailable}
          onUpdate={() => Updates.reloadAsync()}
          onDismiss={() => setUpdateAvailable(false)}
        />
        <ConsentModal
          visible={showConsentModal}
          onAccept={acceptConsent1}
          onDecline={declineConsent1}
        />
      </Provider>
    </GestureHandlerRootView>
  );
}

