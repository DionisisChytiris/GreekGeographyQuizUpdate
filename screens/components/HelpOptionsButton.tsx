import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { ReactNode, useState } from "react";

interface HelpOptionsButtonProps {
  addFunction: () => void;
  optionText: string | ReactNode;
  addAbility: boolean;
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
        onPressIn={() => {
          if (!addAbility) {
            setScale(0.85);
          }
        }}
        onPressOut={() => { 
          setScale(1); // Reset scale back to 1 when press is released
        }}
        onPress={() => {
          if (!addAbility) {
            addFunction(); // Call the addFunction when pressed
          }
        }}
        disabled={addAbility} // addAbility: true = disabled, false = enabled
        style={[
          styles.exitButton, 
          { 
            backgroundColor, 
            transform: [{ scale }],
            opacity: addAbility ? 0.5 : 1, // Visual feedback when disabled
          }
        ]}
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
