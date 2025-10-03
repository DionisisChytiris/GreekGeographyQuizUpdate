import React from "react";
import {
  View,
  Text,
  Pressable,
  Platform,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";

const { height } = Dimensions.get("window");

interface YourComponentProps {
  navigation: NavigationProp<any>;
  index: number;
  totalQuestions: number;
  heart: number;
  counter: number;
  quizName: string;
  color: string;
  color1: string;
}

const TimerHeartSection: React.FC<YourComponentProps> = ({
  navigation,
  quizName,
  index,
  totalQuestions,
  heart,
  counter,
  color,
  color1
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.quizName}>
        <Text style={{ fontSize: 12, color: color }}>{quizName}</Text>
      </View>
      {/* Back Button */}
      <Pressable
        style={styles.btnArrow}
        onPress={() => navigation.navigate("Quiz1")}
      >
        <AntDesign name="left" size={20} color={color1}/>
      </Pressable>

      {/* Question Counter */}
      <View>
        <Text style={styles.text1}>
          {index + 1} / {totalQuestions}
        </Text>
      </View>

      {/* Heart Counter */}
      <View style={styles.heartBox}>
        <Text style={{ zIndex: 1, color: "red", fontSize: 16 }}>❤️</Text>
        <Text style={styles.heartCounterTxt}>{heart}</Text>
      </View>

      <Pressable
        onPress={() =>
          Alert.alert(
            "",
            "Aπάντησε σωστά σε 3 συνεχόμενες ερωτήσεις για να προσθέσεις μια καρδιά.\n\nΜέγιστος αριθμός καρδιών 5.",
            [{ text: "Ενταξει" }]
          )
        }
        style={styles.btnInfo}
      >
        <Ionicons name="information-circle-sharp" size={24} color="white" />
      </Pressable>

      {/* Timer */}
      <View style={styles.timer}>
        <Text
          style={{ ...styles.counterNumber, fontSize: 30, color: "#2E86C1" }}
        >
          {counter}
        </Text>
      </View>
    </View>
  );
};

export default TimerHeartSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "10%",
    paddingVertical: Platform.OS === "android" ? (height > 800 ? 20 : 10) : 5,
  },
  quizName: {
    position: "absolute",
    top: Platform.OS === "android" ? (height > 800 ? 10 : 0) : 0,
    left: 20
  },
  btnArrow: {
    position: "absolute",
    top: Platform.OS == "ios" ? -5 : height > 800 ? 10 : 0,
    left: -20,
    padding: 30,
    zIndex: 1,
  },
  text1: {
    color: "white",
    fontSize: 13,
    alignItems: "center",
    backgroundColor: "#615f5f90",
    justifyContent: "center",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  heartBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  heartCounterTxt: {
    backgroundColor: "#615f5f90",
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginLeft: -10,
    borderRadius: 5,
    color: "white",
  },
  btnInfo: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    right: height > 1000 ? -130 : -120,
  },
  timer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    marginRight: 0,
    width: 60,
    height: 60,
    backgroundColor: "#b8f5ef",
    borderRadius: 20,
  },
  counterNumber: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
});
