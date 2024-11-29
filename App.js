import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import StackNavigator from "./StackNavigator";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Splash from "./Splash";
import { Provider, useDispatch } from "react-redux";
import { store } from "./ReduxToolkit/store";
import { loadName } from "./ReduxToolkit/setUserNameSlice";
import * as Updates from 'expo-updates';
import { Alert, Linking, Platform } from 'react-native';

const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadName());
  }, [dispatch]);

  
  // used for minus changes on the code javascript, styling, typescript
  const checkForUpdates = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        Alert.alert(
          'Διαθέσιμη Ενημέρωση',
          'Μια νέα έκδοση της εφαρμογής είναι διαθέσιμη. Παρακαλούμε επανεκκινήστε την εφαρμογή για να ενημερωθεί.',
          // '"Μικρές διορθώσεις."',
          [
            { text: 'Ακύρωση', style: 'cancel' },
            {
              text: 'Επανεκκίνηση',
              onPress: () => Updates.reloadAsync(),
            },
          ]
        );
      }
    } catch (e) {
      console.log('Error checking for updates:', e);
    }
  };

  useEffect(() => {
    checkForUpdates();
  }, []); 

  // use only when create a new build
  // const checkVersion = async () => {
  //   const appStoreLink = Platform.OS === 'ios'
  //     ? 'itms-apps://itunes.apple.com/us/app/6504780092'   
  //     : 'market://details?id=com.greekgeographyquizapp.dion';  

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
  return isLoading ? (
    <Splash setIsLoading={setIsLoading} />
  ) : (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </GestureHandlerRootView>
  );
}
