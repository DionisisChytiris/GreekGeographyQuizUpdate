import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";

interface ExitReturnButtonProps {
  backgroundColor?: string;
}

type LakeRiverProp = StackNavigationProp<RootStackParamList, "Quiz1">;

const ExitReturnButton: React.FC<ExitReturnButtonProps> = ({
  backgroundColor = "#ccc",
}) => {
  const navigation = useNavigation<LakeRiverProp>();
  const [scale, setScale] = useState(1);

  return (
    <View>
      <Pressable
        onPressIn={() => setScale(0.95)}
        onPressOut={() => {
          navigation.navigate("Quiz1"), setScale(1);
        }}
        style={[styles.exitButton, { backgroundColor, transform: [{ scale }] }]}
      >
        <Feather name="home" size={20} color="#696969" />
        {/* <Power size={16} color="#696969" />
        <Text style={{ fontSize: 14, color: "#696969" }}>Έξοδος</Text> */}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  exitButton: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#c5c5c5",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});

export default ExitReturnButton;
