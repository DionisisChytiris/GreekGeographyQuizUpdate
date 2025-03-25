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
  Image,
} from "react-native";
import { Heart, ArrowLeft, Info, Ban, Coins } from "lucide-react-native";
import { NavigationProp } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../ReduxToolkit/store";
import { useSoundEffect } from "../Utilities/useSoundEffects";
import { AntDesign } from "@expo/vector-icons";
import { incrementHeart, resetLives } from "../../ReduxToolkit/livesSlice";
import { decrementCoins, saveCoins } from "../../ReduxToolkit/coinsSlice";

const { height } = Dimensions.get("window");

interface YourComponentProps {
  navigation: NavigationProp<any>;
  index: number;
  totalQuestions: number;
  heart: number;
  counter: number;
  quizName: string;
  onAnswerQuestion: any;
  resetQuiz: any;
}

const TimerHeartSection: React.FC<YourComponentProps> = ({
  navigation,
  quizName,
  index,
  totalQuestions,
  onAnswerQuestion,
  resetQuiz,
  // heart,
  counter,
}) => {
  const livesEnabled = useAppSelector((state) => state.lives.livesEnabled);
  const heart = useAppSelector((state) => state.lives.heart);
  const isTimerEnabled = useAppSelector((state) => state.timer.isTimerEnabled);
  const isSoundEnabled = useAppSelector((state) => state.sound.isSoundEnabled);
  const coins = useAppSelector((state) => state.coins.coins);
  const dispatch = useAppDispatch();

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
  // Coins Drop Sound Effect
  const coinsDropSound = useSoundEffect(
    require("../../assets/sounds/coinsDrop.wav")
  );

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <View style={styles.quizName}>
          <Text style={{ fontSize: 12, color: "#333" }}>{quizName}</Text>
        </View>
        <Pressable
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: -12,
          }}
          // style={styles.btnArrow}
          onPress={() => {
            navigation.navigate("Quiz1");
            onAnswerQuestion = onAnswerQuestion(index);
            dispatch(resetLives());
            resetQuiz;
          }}
        >
          <AntDesign name="arrowleft" size={20} color="black" />
          <Text style={styles.progress}>
            {index + 1} / {totalQuestions}
          </Text>
        </Pressable>
      </View>

      <View style={{ width: "20%" }}>
        <View style={[styles.livesContainer, { backgroundColor: "#fafafa" }]}>
          <Image
            source={require("../../assets/Photos/goldbg.png")}
            style={{ width: 30, height: 25 }}
          />
          <Text style={[styles.livesText, { fontSize: 10, color: "grey" }]}>
            {coins}
          </Text>
        </View>
      </View>

      <View style={styles.headerRight}>
        {/* Other */}
        {livesEnabled && (
          <View style={styles.livesContainer}>
            {heart === 1 ? (
              <Pressable
                onPress={() => {
                  if (coins >= 50) {
                    if (isSoundEnabled) {
                      coinsDropSound();
                    }
                    dispatch(incrementHeart());
                    dispatch(decrementCoins(50)); // Decrement 1 coin
                    dispatch(saveCoins(coins - 50));
                  } else {
                    // Optionally, show a message or alert indicating the user doesn't have enough coins
                    Alert.alert(
                      "You need at least 50 coins to buy an extra life!"
                    );
                  }
                }}
                style={{
                  position: "absolute",
                  top: -5,
                  padding: 40,
                  right: -15,
                }}
              >
                <View style={styles.coinText}>
                  <Image
                    source={require("../../assets/Photos/goldbg.png")}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text style={{ fontSize: 12 }}>50</Text>
                </View>
              </Pressable>
            ) : null}
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
    paddingTop: Platform.OS === "ios" ? 12 : 25,
    marginBottom: -5,
    // backgroundColor: "yellow",
  },
  quizName: {
    position: "absolute",
    bottom: 45,
    left: 0,
  },
  btnArrow: {
    position: "absolute",
    top: Platform.OS == "ios" ? -5 : height > 800 ? 10 : 0,
    left: -20,
    padding: 30,
    zIndex: 1,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
    // backgroundColor: "yellow",
    width: "40%",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    justifyContent: "flex-end",
    // backgroundColor: "yellow",
    width: "40%",
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
    height: 40,
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#333",
    backgroundColor: "#E8EDF3",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  livesContainer: {
    height: 40,
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
    // paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreText: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "white",
  },
  coinText: {
    flexDirection: "row",
    position: "absolute",
    top: -10,
    left: 20,
    gap: 5,
  },
});
