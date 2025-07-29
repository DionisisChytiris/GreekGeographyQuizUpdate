import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import StackNavigator from "./StackNavigator";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Splash from "./Splash";
import { Provider, useDispatch } from "react-redux";
import { store } from "./ReduxToolkit/store";
import { loadName } from "./ReduxToolkit/setUserNameSlice";
import { loadCoins } from "./ReduxToolkit/coinsSlice";
import * as Updates from "expo-updates";
import { Alert, StatusBar, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ScreenOrientation from "expo-screen-orientation";
import UpdateAvailableModal from "./screens/Modals/UpdateAvailableModal";
import ConsentModal from "./GoogleAnalytics/ConsentModal";
import { useAnalyticsConsent } from "./GoogleAnalytics/useAnalyticsConsent";
import { trackEvent } from "./GoogleAnalytics/trackEvent";
import { trackEventsOrganized } from "./GoogleAnalytics/trackEventsOrganized";
import {
  incrementHeart,
  loadHeart,
  loadHeartAsync,
} from "./ReduxToolkit/livesSlice";
import { loadShowState } from "./ReduxToolkit/lockCategorySlice";
// Import the functions you need from the SDKs you need

const saveUsageDate = async () => {
  const today = new Date().toISOString().split("T")[0];
  try {
    const storedDates = await AsyncStorage.getItem("usedDates");
    const dates = storedDates ? JSON.parse(storedDates) : {};
    dates[today] = {
      marked: true,
      selected: true,
      // backgroundColor: 'green',
      selectedColor: "lightblue",
      // dotColor: "blue"
    };
    await AsyncStorage.setItem("usedDates", JSON.stringify(dates));
  } catch (error) {
    console.error("Error saving usage date:", error);
  }
};

const AppContent = ({ setUpdateAvailable }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadName());
    dispatch(loadCoins());
    dispatch(loadShowState())
    dispatch(loadHeartAsync());
  }, [dispatch]);

  useEffect(() => {
    saveUsageDate(); // Runs when the app starts
  }, []);

  const checkForUpdates = async () => {
    if (__DEV__) return;
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        setUpdateAvailable(true);
      }
    } catch (e) {
      console.log("Error checking for updates:", e);
    }
  };
  
  useEffect(() => {
    // setUpdateAvailable(true);
    checkForUpdates();
  }, []);

  return (
    <BottomSheetModalProvider>
      <StackNavigator />
    </BottomSheetModalProvider>
  );
};

export default function App() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { showConsentModal, acceptConsent1, declineConsent1, consentGiven} =
    useAnalyticsConsent();

  const handleButtonClick = () => {
    if (consentGiven) {
      // Send analytics event if consent is given
      console.log("Sending analytics data...");
    } else {
      console.log("No consent given, analytics not tracked");
    }
  };

  useEffect(() => {
    handleButtonClick();
  }, []);

  // useEffect(() => {
  //   const lockOrientation = async () => {
  //     try {
  //       await ScreenOrientation.lockAsync(
  //         ScreenOrientation.OrientationLock.PORTRAIT_UP
  //       );
  //     } catch (error) {
  //       console.log("Error locking orientation:", error);
  //     }
  //   };
  //   lockOrientation();
  // }, []);

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
