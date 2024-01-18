import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import StackNavigator from "./StackNavigator";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <StackNavigator />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
