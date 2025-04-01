import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
  ActivityIndicator,
  Alert,
  Platform,
  Vibration,
  ImageBackground,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowRight, Ban, Phone } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import React, { useState, useEffect, useRef, useMemo } from "react";
import questions from "../../data/LakeRiver/questions";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import ProgressBar from "../components/ProgressBar";
import FeedbackBottomSheet from "../components/FeedBackBottomSheet";
import { useSoundEffect } from "../Utilities/useSoundEffects";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
  FadeInDown,
  FadeInUp,
  withRepeat,
} from "react-native-reanimated";
// import {
//   useAnswerAnimations,
//   useScaleAnimation,
//   useSlideAnimation,
//   useSlideAnimationFiftyBtn,
// } from "../Utilities/useAnimations";
import TimerHeartSection from "../components/TimerHeartSection";
import * as StoreReview from "expo-store-review";
import ExitReturnButton from "../components/ExitReturnButton";
import { stylesM } from "../styles/QuizStylesheet";
import ModalExplanationQuestion from "../components/ModalExplanationQuestion";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../ReduxToolkit/store";
import HelpOptionsButton from "../components/HelpOptionsButton";
import { useScaleAnim } from "../Utilities/useScaleAnim";
import {
  incrementCoins,
  decrementCoins,
  saveCoins,
} from "../../ReduxToolkit/coinsSlice";
import {
  decrementHeart,
  incrementHeart,
  resetLives,
} from "../../ReduxToolkit/livesSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveProgress, getProgress } from "../../ReduxToolkit/progressSlice";

type LakeRiverProp = StackNavigationProp<RootStackParamList, "LakeRiver">;

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

type MainQuizAiGenProps = {
  dataT: {
    id: number;
    question: string;
    options: { answer: string }[];
    correctAnswerIndex: number;
    img: any;
  }[];
  resultsPage: any;
  quizName: string;
  lastQ1: string;
};

const MainQuizAiGen: React.FC<MainQuizAiGenProps> = ({
  dataT,
  resultsPage,
  quizName,
  lastQ1,
}) => {
  const navigation = useNavigation<LakeRiverProp>();
  const livesEnabled = useAppSelector((state) => state.lives.livesEnabled);
  const heart = useAppSelector((state) => state.lives.heart);
  const isTimerEnabled = useAppSelector((state) => state.timer.isTimerEnabled);
  const isSoundEnabled = useAppSelector((state) => state.sound.isSoundEnabled);
  const coins = useAppSelector((state) => state.coins.coins);
  // const data = questions;
  // Removed duplicate declaration of dispatch
  const data = dataT;
  const totalQuestions = data.length;
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  // const [coins, setCoins] = useState(0);
  const [answerStatus, setAnswerStatus] = useState<boolean | null>(null);
  const [answers, setAnswers] = useState<any>([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [counter, setCounter] = useState<any>(15);
  let interval: any = null;
  const currentQuestion: any = data[index];
  // const [heart, setHeart] = useState<any>(3);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [ansBtnClr, setAnsBtnClr] = useState({
    default: ["#3d8be4", "#418ce0"],
    correct: ["#3ce992", "#2bc79b"],
    incorrect: ["#f56c6c", "#eb5050"],
  });
  const [currentColor, setCurrentColor] = useState(ansBtnClr.default);
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": Poppins_400Regular,
    "Poppins-SemiBold": Poppins_600SemiBold,
    "Poppins-Bold": Poppins_700Bold,
  });
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!fontsLoaded || fontError) {
      return;
    }
  }, [fontsLoaded, fontError]);

  const soundFiles = [
    require("../../assets/sounds/spinner.mp3"),
    require("../../assets/sounds/timpani.mp3"),
    require("../../assets/sounds/cymbal.mp3"), // Add more sounds as needed
  ];
  const randomIndex = Math.floor(Math.random() * soundFiles.length);
  const selectedSound = soundFiles[randomIndex];

  // Correct Sound Effect
  const CorrectPlaySound = useSoundEffect(
    require("../../assets/sounds/correct3.mp3")
  );
  // Wrong Sound Effect
  const WrongPlaySound = useSoundEffect(
    require("../../assets/sounds/wrong.mp3")
  );
  // Fifty Fifty Sound Effect
  const fiftyPlaySound = useSoundEffect(
    require("../../assets/sounds/popup.mp3")
  );
  // Spinner Sound Effect
  const spinnerPlaySound = useSoundEffect(
    selectedSound
    // require("../../assets/sounds/spinner.mp3")
  );
  // Image Sound Effect
  const imgPlaySound = useSoundEffect(
    require("../../assets/sounds/popimg.mp3")
  );
  // Coins Drop Sound Effect
  const coinsDropSound = useSoundEffect(
    require("../../assets/sounds/coinsDrop.wav")
  );
  // Coins Collect Sound Effect
  const coinsCollectSound = useSoundEffect(
    require("../../assets/sounds/getCoin.wav")
  );
  // Click Sound Effect
  const click5sSound = useSoundEffect(require("../../assets/sounds/click.mp3"));

  const removeHeart = () => {
    if (livesEnabled && heart > 0) {
      // setHeart((prevHeart: number) => prevHeart - 1);
      dispatch(decrementHeart());
    }
  };

  const resetQuiz = () => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
    dispatch(resetLives());
    // setHeart(3); // Reset to the original value
    setIndex(0); // Start from the first question
    setCounter(15); // Reset the score or counter
    setUserAnswers([]);
    setPoints(0);
    setSeconds(0);
    setMinutes(0);
    setIsDisabled(true);
    setFifty([]);
    setFiftyCoin(false);
    setPhoneCoin(false);
    setHundredCoin(false);
  };

  const [userAnswers, setUserAnswers] = useState<
    { question: string; userChoice: string; correctAnswer: string }[]
  >([]);

  const handleAnswer = (
    question: string,
    userChoice: string,
    correctAnswer: string
  ) => {
    setUserAnswers((prev) => [
      ...prev,
      { question, userChoice, correctAnswer },
    ]);
  };

  useEffect(() => {
    if (heart === 0) {
      navigation.navigate(resultsPage, {
        resetQuiz,
        totalQuestions,
        index,
        userAnswers,
        points,
        seconds,
        minutes,
      });
    }
  }, [heart]);

  useEffect(() => {
    if (isTimerEnabled && counter > 0) {
      interval = setInterval(() => {
        setCounter((prevCounter: any) => prevCounter - 1);
      }, 1000);
    } else if (counter === 0) {
      // Navigate to results page when the timer hits 0
      navigation.navigate(resultsPage, {
        resetQuiz,
        totalQuestions,
        index,
        userAnswers,
        points,
        seconds,
        minutes,
      });
    }

    if (counter <= 5 && counter > 0) {
      if (isSoundEnabled) {
        click5sSound();
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval); // Clear the interval when counter is reset or when useEffect is cleaned up
      }
    };
  }, [isTimerEnabled, counter]);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        if (isSoundEnabled) {
          CorrectPlaySound();
          coinsCollectSound();
        }
        setPoints((points) => points + 10);
        // Increment the score by 10 points
        dispatch(incrementCoins());
        // Save the updated score to AsyncStorage
        dispatch(saveCoins(coins + 10));
        // setCoins((coins)=>coins+10)
        setCorrectAnswer((prev) => {
          if (prev + 1 === 3) {
            requestReview();
            return 0; // Reset counter after alert
          }
          return prev + 1;
        });
      } else {
        setCorrectAnswer(0);
        if (isSoundEnabled) {
          WrongPlaySound();
        }
        removeHeart();
      }
    }
  }, [selectedAnswerIndex]);

  const requestReview = async () => {
    // console.log("requestReview function called");

    if (await StoreReview.hasAction()) {
      console.log("StoreReview has action, requesting review...");
      StoreReview.requestReview();
      // Alert.alert("Congratulations!", "You answered 3 in a row correctly!");
    } else {
      console.log("In-app review is not supported or already given.");
    }
  };
  // Create shared values for scales based on the number of options
  const scales = currentQuestion?.options.map(() => useSharedValue(1)) || [];

  const handlePressIn = (index: number) => {
    // setScales((prev) => prev.map((s, i) => (i === index ? 0.9 : s)));
    scales[index].value = withSpring(0.9, { damping: 10, stiffness: 150 });
  };

  const handlePressOut = (index: number) => {
    if (selectedAnswerIndex === null) {
      setSelectedAnswerIndex(index);
    }
    // setScales((prev) => prev.map((s, i) => (i === index ? 1 : s)));
    scales[index].value = withSpring(1, { damping: 10, stiffness: 150 });
  };

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          setMinutes((prevMinutes) => prevMinutes + 1);
          return 0;
        }
        return prevSeconds + 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount or when quiz ends
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  const buyExtraCall = () => {
    if (coins >= 50) {
      // Check if the user has 30 or more coins
      if (isSoundEnabled) {
        coinsDropSound();
      }
      setPhoneCoin(false);
      dispatch(decrementCoins(50)); // Decrement 1 coin
      dispatch(saveCoins(coins - 50)); // Save the updated coins after purchase
      // Add any extra life logic here
    } else {
      // Optionally, show a message or alert indicating the user doesn't have enough coins
      Alert.alert("You need at least 50 coins to buy an extra Call!");
    }
  };

  const buyExtraFifty = () => {
    if (coins >= 40) {
      if (isSoundEnabled) {
        coinsDropSound();
      }
      // Check if the user has 30 or more coins
      setFiftyCoin(false);
      dispatch(decrementCoins(40)); // Decrement 1 coin
      dispatch(saveCoins(coins - 40)); // Save the updated coins after purchase
      // Add any extra life logic here
    } else {
      // Optionally, show a message or alert indicating the user doesn't have enough coins
      Alert.alert("You need at least 40 coins to buy an extra 50%!");
    }
  };
  const buyExtraHundred = () => {
    if (coins >= 80) {
      if (isSoundEnabled) {
        coinsDropSound();
      }
      // Check if the user has 30 or more coins
      setHundredCoin(false);
      dispatch(decrementCoins(80)); // Decrement 1 coin
      dispatch(saveCoins(coins - 80)); // Save the updated coins after purchase
      // Add any extra life logic here
    } else {
      // Optionally, show a message or alert indicating the user doesn't have enough coins
      Alert.alert("You need at least 80 coins to buy an extra 100%!");
    }
  };

  const [fifty, setFifty] = useState<number[]>([]);

  const NextQuizDelay = () => {
    setTimeout(() => {
      setFifty([]);
      if (index + 1 === data.length) {
        navigation.navigate(resultsPage, {
          resetQuiz,
          totalQuestions,
          index,
          userAnswers,
          points,
          seconds,
          minutes,
        });
      } else {
        setIndex((prev) => prev + 1);
        setSelectedAnswerIndex(null);
        setCurrentColor(ansBtnClr.default);
        setIsDisabled(true);
        if (isSoundEnabled) {
          imgPlaySound();
        }
        setCounter(15);
      }
    }, 2000);
  };

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      setOpacity(0.4);
    } else {
      setOpacity(1);
    }
  }, [selectedAnswerIndex]);

  const DialPlaySound1 = useSoundEffect(
    require("../../assets/sounds/dianNumber.mp3")
  );
  const MessagePlaySound1 = useSoundEffect(
    require("../../assets/sounds/message.mp3")
  );

  async function DialPlaySound() {
    setTimeout(() => {
      DialPlaySound1();
    }, 1000);
  }
  async function MessagePlaySound() {
    setTimeout(() => {
      MessagePlaySound1();
    }, 3000);
  }

  const animScale1 = useScaleAnim(3000, 1.3, 1); // Animates after 3 seconds
  const animScale2 = useScaleAnim(4000, 1.3, 1); // Animates after 5 seconds
  const animScale3 = useScaleAnim(5000, 1.3, 1); // Animates after 5 seconds

  const [fiftyCoin, setFiftyCoin] = useState(false);
  const [phoneCoin, setPhoneCoin] = useState(false);
  const [hundredCoin, setHundredCoin] = useState(false);

  const progressKey = lastQ1;
  const lastQuestionIndex = useAppSelector(
    (state) => state.progress.progress[progressKey]
  );
  const dispatch = useAppDispatch();

  // Track Quiz Progress - find the last question user left the game
  // const saveProgress = async (lastQuestionIndex:any) => {
  //   try {
  //     // await AsyncStorage.setItem('lastQuestion', JSON.stringify(lastQuestionIndex));
  //     await AsyncStorage.setItem(lastQ1, JSON.stringify(lastQuestionIndex));
  //     console.log('successfully saved')
  //   } catch (e) {
  //     console.error("Failed to save progress", e);
  //   }
  // };

  const startQuiz = async () => {
    dispatch(getProgress(progressKey));
    // const lastQuestionIndex = await getProgress();
    // setIndex(lastQuestionIndex); // Set the index to continue from the last answered question
  };

  useEffect(() => {
    if (lastQuestionIndex !== undefined) {
      setIndex(lastQuestionIndex); // Update the index when the progress is fetched
    }
  }, [lastQuestionIndex]);

  // const getProgress = async () => {
  //   try {
  //     const lastQuestionIndex = await AsyncStorage.getItem(lastQ1);
  //     // const lastQuestionIndex = await AsyncStorage.getItem('lastQuestion');
  //     return lastQuestionIndex ? JSON.parse(lastQuestionIndex) : 0; // 0 if no progress
  //   } catch (e) {
  //     console.error("Failed to retrieve progress", e);
  //     return 0;
  //   }
  // };

  const onAnswerQuestion = (currentIndex: any) => {
    // Save the last answered question index
    // saveProgress(currentIndex);
    dispatch(
      saveProgress({ key: progressKey, lastQuestionIndex: currentIndex })
    );
    console.log("successfully saved");
    // Proceed to the next question...
  };

  useEffect(() => {
    startQuiz();
    // getProgress
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TimerHeartSection
        navigation={navigation}
        quizName={quizName}
        index={index}
        heart={heart}
        totalQuestions={totalQuestions}
        counter={counter}
        onAnswerQuestion={onAnswerQuestion}
        resetQuiz={resetQuiz}
      />
      {/* Question Card */}
      <View style={styles.card}>
        <View>
          <ImageBackground
            key={currentQuestion?.id}
            source={currentQuestion?.img}
            style={styles.questionImage}
          />
          <View style={{ position: "absolute", top: 0, right: 0 }}>
            <ModalExplanationQuestion
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              title="Επεξήγηση"
              currentQuestion={currentQuestion}
            />
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{currentQuestion?.question}</Text>
          </View>
        </View>
        {/* Answer Grid */}
        {/* <Animated.View
            entering={FadeInUp.delay(100).springify()}
            style={styles.answersGrid}
          > */}
        <View style={styles.answersGrid}>
          {currentQuestion?.options.map((item: any, index: any) => {
            const animatedStyle = useAnimatedStyle(() => ({
              transform: [{ scale: scales[index].value }],
            }));
            return (
              <Animated.View
                key={index}
                style={[styles.answerButton, animatedStyle]}
              >
                <Pressable
                  key={index}
                  onPressIn={() => handlePressIn(index)}
                  onPressOut={() => {
                    if (selectedAnswerIndex === null) {
                      setSelectedAnswerIndex(index);
                    }

                    handlePressOut(index);
                    setIsDisabled(false);
                    setCounter(null);

                    // Capture the user's answer when they select one
                    const userChoice = item.answer;
                    const correctAnswer =
                      currentQuestion?.options[
                        currentQuestion.correctAnswerIndex
                      ].answer;

                    handleAnswer(
                      currentQuestion?.question,
                      userChoice,
                      correctAnswer
                    );
                  }}
                  style={[
                    styles.answerButton,
                    fifty.includes(index) ? { opacity: 0.6 } : { opacity: 1 },
                  ]}
                >
                  <LinearGradient
                    colors={
                      selectedAnswerIndex !== null
                        ? index === currentQuestion?.correctAnswerIndex
                          ? [ansBtnClr.correct[0], ansBtnClr.correct[1]] // Correct answer color
                          : index === selectedAnswerIndex
                          ? [ansBtnClr.incorrect[0], ansBtnClr.incorrect[1]] // Incorrect answer color
                          : [ansBtnClr.default[0], ansBtnClr.default[1]] // Default color for unselected answers
                        : [ansBtnClr.default[0], ansBtnClr.default[1]]
                    }
                    style={styles.answerGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <Text style={styles.answerText}>{item.answer}</Text>
                  </LinearGradient>
                </Pressable>
              </Animated.View>
            );
          })}
        </View>
      </View>

      {/* Bottom Section Helps */}
      <View style={styles.bottomButtonsBox}>
        {/* 50% Help*/}
        {fiftyCoin ? (
          <Pressable onPress={buyExtraFifty}>
            <View style={styles.coinText}>
              <Image
                source={require("../../assets/Photos/goldbg.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ fontSize: 12 }}>40</Text>
            </View>
            <View style={{ width: 60, opacity: 0.3 }}>
              <HelpOptionsButton
                optionText="50%"
                addAbility={isDisabled} // Set addAbility to null to disable the button
                addFunction={() => {}} // No action when clicked
              />
            </View>
          </Pressable>
        ) : (
          <Animated.View
            style={[
              {
                width: "20%",
                opacity: opacity,
              },
              animScale1,
            ]}
          >
            <HelpOptionsButton
              addFunction={async () => {
                setFiftyCoin(true);
                await fiftyPlaySound();
                const wrongAnswers = currentQuestion.options
                  .map((option: any, index: any) => index)
                  .filter(
                    (index: any) => index !== currentQuestion.correctAnswerIndex
                  );

                const randomWrongAnswers = wrongAnswers
                  .sort(() => 0.5 - Math.random())
                  .slice(0, 2);
                setFifty(randomWrongAnswers);
              }}
              addAbility={selectedAnswerIndex !== null}
              optionText="50%"
            />
          </Animated.View>
        )}
        {/* Phone Help */}
        {phoneCoin ? (
          <Pressable onPress={buyExtraCall}>
            <View style={styles.coinText}>
              <Image
                source={require("../../assets/Photos/goldbg.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ fontSize: 12 }}>50</Text>
            </View>
            <View style={{ width: 60, opacity: 0.3 }}>
              <HelpOptionsButton
                optionText={<Phone size={20} color="#696969" />}
                addAbility={isDisabled} // Set addAbility to null to disable the button
                addFunction={() => {}} // No action when clicked
              />
            </View>
          </Pressable>
        ) : (
          // When PhoneCoin is false, show the button with animation
          <Animated.View
            style={[{ width: "20%", opacity: opacity }, animScale2]} // Apply animation styles
          >
            <HelpOptionsButton
              optionText={<Phone size={20} color="#696969" />}
              addAbility={selectedAnswerIndex !== null} // Enable button only if a valid answer is selected
              addFunction={() => {
                setPhoneCoin(true); // Set PhoneCoin to true when the button is pressed
                setModalVisible(true); // Show modal
                if (isSoundEnabled) {
                  DialPlaySound();
                  MessagePlaySound();
                  fiftyPlaySound(); // Play sound if enabled
                }
                setCounter(counter + 15); // Increment counter when button is pressed
              }}
            />
          </Animated.View>
        )}

        {/* 100% Help */}
        {hundredCoin ? (
          <Pressable onPress={buyExtraHundred}>
            <View style={styles.coinText}>
              <Image
                source={require("../../assets/Photos/goldbg.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ fontSize: 12 }}>80</Text>
            </View>
            <View style={{ width: 60, opacity: 0.3 }}>
              <HelpOptionsButton
                optionText="100%"
                addAbility={isDisabled} // Set addAbility to null to disable the button
                addFunction={() => {}} // No action when clicked
              />
            </View>
          </Pressable>
        ) : (
          <Animated.View
            style={[{ width: "20%", opacity: opacity }, animScale3]}
          >
            <HelpOptionsButton
              optionText="100%"
              addFunction={() => {
                setHundredCoin(true);
                setSelectedAnswerIndex(currentQuestion.correctAnswerIndex);
                NextQuizDelay();
                setCounter(false);
              }}
              addAbility={selectedAnswerIndex !== null}
            />
          </Animated.View>
        )}
        {/* </Animated.View> */}
        {/* Next Question Button */}
        <View style={{ width: "20%" }}>
          <HelpOptionsButton
            addFunction={() => {
              setFifty([]);
              if (index + 1 === data.length) {
                navigation.navigate(resultsPage, {
                  resetQuiz,
                  totalQuestions,
                  index,
                  userAnswers,
                  points,
                  seconds,
                  minutes,
                });
              } else {
                onAnswerQuestion;
                setIndex((prev) => prev + 1);
                setSelectedAnswerIndex(null);
                setCurrentColor(ansBtnClr.default);
                setIsDisabled(true);
                if (isSoundEnabled) {
                  // CorrectPlaySound();
                  imgPlaySound();
                }
                setCounter(15);
              }
            }}
            addAbility={isDisabled}
            optionText={
              isDisabled ? (
                <Ban size={20} color="#ffffff" />
              ) : (
                <ArrowRight size={26} color="#ffffff" />
              )
            }
            backgroundColor={isDisabled ? "#b3e4d1" : "#3ce992"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    paddingTop: height > 1000 ? 20 : 0,
    justifyContent: "center",
    alignSelf: "center",
    // width: width>1000?"50%":"100%",
  },
  percentageContainer: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "#FF1493",
    borderRadius: 12,
    padding: 8,
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  percentageText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Poppins-Bold",
  },
  card: {
    height: Platform.OS === "android" ? "75%" : null,
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 24,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    // flexDirection: width>1100? 'row': 'column'
  },
  questionImage: {
    width: "100%",
    height: height > 1000 ? 400 : height > 900 ? 250 : 200,
    resizeMode: "cover",
  },
  questionContainer: {
    height: Platform.OS === "android" ? (height > 820 ? 150 : 80) : null,
    paddingHorizontal: Platform.OS === "android" ? 5 : 10,
    paddingTop: Platform.OS === "android" ? 10 : 20,
    // paddingBottom: Platform.OS === "android" ? 0 : 0,
    alignContent: "center",
    justifyContent: "center",
    // marginBottom: 9,
    // backgroundColor: 'yellow'
  },
  questionText: {
    fontFamily: "Poppins-SemiBold",
    // fontSize: 10,
    fontSize: height > 800 ? 22 : 18,
    color: "#333",
    textAlign: "center",
  },
  answersGrid: {
    // flex:1,
    padding: 16,
    gap: 12,
    width: "100%",
  },
  answerButton: {
    height: 55,
    borderRadius: 16,
    overflow: "hidden",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
    //  borderWidth: 1,
    // borderColor: '#DEE2E6'
  },
  answerGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
  },
  answerText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: "#fff",
    // color: "black",
  },
  progressBarContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#E8EDF3",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4A90E2",
    borderRadius: 4,
  },
  bottomButtonsBox: {
    position: Platform.OS === "ios" ? "absolute" : "relative",
    bottom: 0,
    top: Platform.OS === "android" ? (height > 940 ? 0 : 0) : null,
    width: "100%",
    // height: Platform.OS === "ios" ? null : "8%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginTop: 0,
    paddingTop: 10,
    paddingBottom: Platform.OS === "ios" ? 35 : null,
    borderColor: Platform.OS === "ios" ? "#DEE2E6" : "#ccc00",
    // backgroundColor: "yellow",
    // backgroundColor: Platform.OS === "ios" ? "white" : "transparent",
  },
  exitButton: {
    width: "47%",
    height: 55,
    // height: "100%",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  coinText: {
    flexDirection: "row",
    position: "absolute",
    top: -10,
    left: 20,
    gap: 5,
  },
});

export default MainQuizAiGen;
