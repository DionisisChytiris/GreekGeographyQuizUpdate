import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Platform,
  StyleSheet,
  Dimensions,
  Alert,
  Button,
} from "react-native";
import { Heart, ArrowLeft, Info } from "lucide-react-native";
import { NavigationProp } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../ReduxToolkit/store";
import { useSoundEffect } from "../Utilities/useSoundEffects";

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
  color1,
}) => {
  const livesEnabled = useAppSelector((state) => state.lives.livesEnabled);
  const isTimerEnabled = useAppSelector((state) => state.timer.isTimerEnabled);

  const soundFiles = [
    require("../../assets/sounds/spinner.mp3"),
    require("../../assets/sounds/timpani.mp3"),
    require("../../assets/sounds/cymbal.mp3"), // Add more sounds as needed
  ];
  const randomIndex = Math.floor(Math.random() * soundFiles.length);
  const selectedSound = soundFiles[randomIndex];

   // Fifty Fifty Sound Effect
    const fiftyPlaySound = useSoundEffect(
      require("../../assets/sounds/popup.mp3")
    );
    // Spinner Sound Effect
    const spinnerPlaySound = useSoundEffect(
      selectedSound
      // require("../../assets/sounds/spinner.mp3")
    );

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <View style={styles.quizName}>
          <Text style={{ fontSize: 12, color: "#333" }}>{quizName}</Text>
        </View>
        <Text style={styles.progress}>
          {index + 1} / {totalQuestions}
        </Text>
      </View>

      <View style={styles.headerRight}>
        {/* Lives */}
        {/* <View style={styles.livesContainer}>
          <Text style={{ zIndex: 1, color: "red", fontSize: 14 }}>❤️</Text>
          <Text style={styles.livesText}>{heart}</Text>
        </View> */}

        {/* 50% */}
        {/* <View style={styles.livesContainer}>
          <Text style={{ zIndex: 1, color: "red", fontSize: 14 }}>❤️</Text>
          <Text style={styles.livesText}>9</Text>
        </View> */}
        {/* Other */}
        {/* <View style={styles.livesContainer}>
          <Text style={{ zIndex: 1, color: "red", fontSize: 14 }}>❤️</Text>
          <Text style={styles.livesText}>8</Text>
        </View> */}
        {livesEnabled && (
          <View style={styles.livesContainer}>
            <Text style={{ zIndex: 1, color: "red", fontSize: 14 }}>❤️</Text>
            <Text style={styles.livesText}>{heart}</Text>
          </View>
        )}
        {/* Timer */}
        {isTimerEnabled && (
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>{counter}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default TimerHeartSection;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 12:25,
    marginBottom: -5,
  },
  quizName: {
    position: "absolute",
    bottom: 45,
    left: 0,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    justifyContent: "flex-end",
    // backgroundColor: 'yellow',
    width: "80%",
  },
  iconButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginLeft: -50,
  },
  progress: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#333",
    backgroundColor: "#E8EDF3",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  livesContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e7e6e6",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },
  livesText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
  },
  scoreContainer: {
    backgroundColor: "#1f85a7",
    // backgroundColor: "#E0F7FF",
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 12,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scoreText: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "white",
  },
});
