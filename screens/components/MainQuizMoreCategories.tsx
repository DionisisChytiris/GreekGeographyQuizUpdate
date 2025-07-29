import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";

type QuizScreenProp = StackNavigationProp<RootStackParamList, "Quiz1">;

export const MainQuizMoreCategories = () => {
  const navigation = useNavigation<QuizScreenProp>();
  const [scale3, setScale3] = useState(1);
  return (
    <View style={{ marginRight: 10 }}>
      <Pressable
        onPressIn={() => setScale3(0.95)}
        onPressOut={() => {
          setScale3(1);
          // navigation.navigate("QuizDynamil");
          navigation.navigate("BonusQuizzes");
        }}
        style={[
          styles.bonusQuizBtn,
          { transform: [{ scale: scale3 }] ,justifyContent: "center", alignItems: "center" },
        ]}
      >
        <View style={{marginLeft: -30 }}>
          <Text style={{fontWeight: 600, marginBottom: 2}}>Bonus</Text>
          <Text style={{fontWeight: 600}}>Κατηγορίες</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bonusQuizBtn: {
    // width: "100%",
    // height: 70,
    // height: Platform.OS === "ios" ? 90 : 70,
    marginTop: 0,
    marginRight: 0,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#e3eaf1",
  },
});
