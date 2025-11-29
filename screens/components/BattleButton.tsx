import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import { trackEvent } from "../../GoogleAnalytics/trackEvent";
import { trackEventsOrganized } from "../../GoogleAnalytics/trackEventsOrganized";

type BattleProp = StackNavigationProp<RootStackParamList, "BattleQuiz">;

/**
 * Button component that navigates to the Battle Quiz screen.
 * Includes scale animation on press and tracks analytics events.
 */
const BattleButton = () => {
  const [scale, setScale] = useState(1);
  const navigation = useNavigation<BattleProp>();

  return (
    <View style={{ margin: 0 }}>
      <Pressable
        onPressIn={() => {
          setScale(0.95);
        }}
        onPressOut={() => {
          navigation.navigate("BattleQuiz");
          trackEvent(trackEventsOrganized.BATTLE);
          setScale(1);
        }}
        style={[styles.shareButton, { transform: [{ scale: scale }] }]}
      >
        <MaterialCommunityIcons name="sword-cross" size={24} color="white" />
        <Text style={styles.shareText}>Μάχη</Text>
        <View style={{ position: "absolute", right: 10, width: "25%" }}>
          <Text style={[styles.shareText, { fontSize: 10 }]}>
            Διεκδίκισε 50 🪙
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default BattleButton;

const styles = StyleSheet.create({
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF4081",
    paddingVertical: "3%",
    paddingHorizontal: 40,
    borderRadius: 30,
    gap: 8,
    marginBottom: 5,
  },
  shareText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
  },
});
