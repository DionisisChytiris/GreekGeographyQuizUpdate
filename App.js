import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import StackNavigator from "./StackNavigator";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Splash from "./Splash";
import { Provider, useDispatch } from "react-redux";
import {store} from './ReduxToolkit/store'
import { loadName } from "./ReduxToolkit/setUserNameSlice";


const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadName());
  }, [dispatch]);

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
        <AppContent/>
      </Provider>
    </GestureHandlerRootView>
  );
}
