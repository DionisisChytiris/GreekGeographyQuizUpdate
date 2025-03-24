import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
// import { Home, Power } from "lucide-react-native";
// import { useNavigation } from "@react-navigation/native";
// import { StackNavigationProp } from "@react-navigation/stack";
// import { RootStackParamList } from "../../Types/RootStackParamList";

interface HelpOptionsButtonProps {
  addFunction: () => void;
  optionText: any;
  addAbility: any;
  backgroundColor?: string;
}


const HelpOptionsButton: React.FC<HelpOptionsButtonProps> = ({
  backgroundColor = "#f6f6f7",
  addFunction,
  optionText,
  addAbility,
}) => {
//   const navigation = useNavigation<LakeRiverProp>();
  const [scale, setScale] = useState(1);

  return (
    <View>
      <Pressable
        onPressIn={() => setScale(0.85)}
        onPressOut={() => { 
          setScale(1); // Reset scale back to 1 when press is released
          addFunction(); // Call the addFunction when the press is released
        }}
        disabled={addAbility}
        style={[styles.exitButton, { backgroundColor, transform: [{ scale }] }]}
      >
        {typeof optionText === "string" ? (
          <Text style={{ zIndex: 1, color: "black", fontSize: 14 }}>
            {optionText}
          </Text>
        ) : (
          optionText // Render the icon directly
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  exitButton: {
    width: "100%",
    height: 50,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#c5c5c5",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});

export default HelpOptionsButton;
