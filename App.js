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
// import { StatusBar } from 'expo-status-bar';
// import { useColorScheme } from 'react-native';

// const theme = useColorScheme(); // 'light' or 'dark'

// Appearance.setColorScheme('light');

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

const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadName());
    dispatch(loadCoins());
  }, [dispatch]);

  useEffect(() => {
    saveUsageDate(); // Runs when the app starts
  }, []);

  const checkForUpdates = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        Alert.alert(
          "Διαθέσιμη Ενημέρωση",
          "Μια νέα έκδοση της εφαρμογής είναι διαθέσιμη. Παρακαλούμε επανεκκινήστε την εφαρμογή για να ενημερωθεί.",
          [
            { text: "Ακύρωση", style: "cancel" },
            {
              text: "Επανεκκίνηση",
              onPress: () => Updates.reloadAsync(),
            },
          ]
        );
      }
    } catch (e) {
      console.log("Error checking for updates:", e);
    }
  };

  useEffect(() => {
    checkForUpdates();
  }, []);

  // <<<<<<< HEAD
  //   // use only when create a new build
  //   // const checkVersion = async () => {
  //   //   const appStoreLink = Platform.OS === 'ios'
  //   //     ? 'itms-apps://itunes.apple.com/us/app/6504780092'
  //   //     : 'market://details?id=com.greekgeographyquizapp.dion';

  // =======
  //   // const checkVersion = async () => {

  //   //   const appStoreLink = Platform.OS === 'ios'
  //   //     ? 'itms-apps://itunes.apple.com/us/app/6504780092'
  //   //     : 'market://details?id=com.greekgeographyquizapp.dion';

  // >>>>>>> 92ce09298c1f5cdbfed369469c43f0898b028d61
  //   Alert.alert(
  //     "Διαθέσιμη Ενημέρωση",
  //     "Παρακαλούμε ενημερώστε την εφαρμογή στην τελευταία έκδοση.",
  //     [
  //       { text: "Ακύρωση", style: "cancel" },
  //       {
  //         text: "Ενημέρωση",
  //         onPress: () => Linking.openURL(appStoreLink),
  //       },
  //     ]
  //   );
  // };
  // useEffect(() => {
  //   checkVersion();
  // }, []);

  return (
    <BottomSheetModalProvider>
      <StackNavigator />
    </BottomSheetModalProvider>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lockOrientation = async () => {
      try {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
      } catch (error) {
        console.log("Error locking orientation:", error);
      }
    };
    lockOrientation();
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <StatusBar style="auto" translucent />
        {/* <StatusBar
          style="dark"
          translucent={Platform.OS === 'android'}
          hidden={false}
          translucent
          backgroundColor="transparent" 
          style={theme === "dark" ? "light" : "dark"}
          backgroundColor="#F7F9FC00"
        /> */}

        <AppContent />
      </Provider>
    </GestureHandlerRootView>
  );
  // return isLoading ? (
  //   <Splash setIsLoading={setIsLoading} />
  // ) : (
  //   <GestureHandlerRootView style={{ flex: 1 }}>
  //     <Provider store={store}>
  //       <StatusBar style="auto" translucent />
  //       {/* <StatusBar
  //         style="dark"
  //         translucent={Platform.OS === 'android'}
  //         hidden={false}
  //         translucent
  //         backgroundColor="transparent"
  //         style={theme === "dark" ? "light" : "dark"}
  //         backgroundColor="#F7F9FC00"
  //       /> */}

  //       <AppContent />
  //     </Provider>
  //   </GestureHandlerRootView>
  // );
}
