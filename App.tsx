import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useState } from "react";
import StackNavigator from "./StackNavigator";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Splash from "./Splash";

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return isLoading ? (
    <Splash setIsLoading={setIsLoading} />
  ) : (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <StackNavigator />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
