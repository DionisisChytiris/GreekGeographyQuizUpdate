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
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import {
    Heart,
    ArrowLeft,
    Info,
    LogOut,
    Power,
    ArrowRight,
    Ban,
  } from "lucide-react-native";
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
  import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    FadeInDown,
    FadeInUp,
  } from "react-native-reanimated";
  import {
    useAnswerAnimations,
    useScaleAnimation,
    useSlideAnimation,
    useSlideAnimationFiftyBtn,
  } from "../Utilities/useAnimations";
  import TimerHeartSection from "../components/TimerHeartSection";
  import ExitReturnButton from "../components/ExitReturnButton";
  import { stylesM } from "../styles/QuizStylesheet";
  
  type LakeRiverProp = StackNavigationProp<RootStackParamList, "LakeRiver">;
  
  const { height } = Dimensions.get("window");
  
  const MainQuizAiTestingFile = ({dataT}) => {
    const navigation = useNavigation<LakeRiverProp>();
    // const data = questions;
    const data = dataT;
    const totalQuestions = data.length;
    const [index, setIndex] = useState(0);
    const [points, setPoints] = useState(0);
    const [answerStatus, setAnswerStatus] = useState<boolean | null>(null);
    const [answers, setAnswers] = useState<any>([]);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
      null
    );
    const [counter, setCounter] = useState<any>(15);
    // const [style, setStyle] = useState<any>(styles.quizContainer);
    // const [nextQueButton, setNextQueButton] = useState<any>(
    //   stylesM.nextQueButton
    // );
    let interval: any = null;
    let index1 = index + 1;
    const currentQuestion = data[index];
    const bottomSheetModalRef = useRef<any>(null);
    // const snapPoints = useMemo(() => ["50%"], []);
    const snapPoints = ["50%"];
    const [heart, setHeart] = useState<any>(3);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [cor, setCor] = useState(0);
    const [ansBtnClr, setAnsBtnClr] = useState({
      default: ["#4A90E2", "#357ABD"],
      correct: ["#56cf74", "#148831"],
      incorrect: ["#ff4d4d", "#cc0000"],
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
  
    const removeHeart = () => {
      setHeart((prevHeart: number) => prevHeart - 1);
    };
  
    const resetQuiz = () => {
      setSelectedAnswerIndex(null);
      setAnswerStatus(null);
      setHeart(3); // Reset to the original value
      setIndex(0); // Start from the first question
      setCounter(15); // Reset the score or counter
      setUserAnswers([]); 
      setPoints(0)
      setSeconds(0)
      setMinutes(0)
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
        navigation.navigate("ResultsAi", { resetQuiz,totalQuestions, index, userAnswers, points, seconds, minutes });
      }
    }, [heart]);
    // }, [heart, navigation, resetQuiz, totalQuestions, index]);
  
    useEffect(() => {
      const myInterval = () => {
        if (counter >= 1) {
          setCounter((counter: number) => counter - 1);
        }
        if (counter === 1) {
          navigation.navigate("ResultsAi", { resetQuiz, totalQuestions, index, userAnswers, points, seconds, minutes });
        }
      };
      interval = setTimeout(myInterval, 1000);
  
      return () => {
        clearTimeout(interval);
      };
    }, [counter]);
  
    useEffect(() => {
      if (selectedAnswerIndex !== null) {
        if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
          CorrectPlaySound();
          setPoints((points) => points + 10);
        } else {
          WrongPlaySound();
          removeHeart();
          // setAnswerStatus(false);
          // setStyle(styles.quizContainer2);
          // setNextQueButton(stylesM.nextQueButton2);
          // setShowCorrectAnswer(false);
          // setConsecutiveCorrectAnswers(0);
          // setShowConsecutiveCorrectAnswers(false);
          // answers.push({ question: index + 1, answer: false });
  
          // setTimeout(() => {
          //   setConsecutiveCorrectAnswers(0);
          // }, 3000);
        }
      }
    }, [selectedAnswerIndex]);
  
    // useEffect(() => {
    //   const myInterval = () => {
    //     if (selectedAnswerIndex !== null) {
    //       setIndex((prev) => prev + 1);
    //       setSelectedAnswerIndex(null);
    //       setCurrentColor(ansBtnClr.default);
    //     }
    //   };
    //   interval = setTimeout(myInterval, 2000);
  
    //   return () => {
    //     clearTimeout(interval);
    //   };
    // }, [selectedAnswerIndex]);
  
    // const [scales, setScales] = useState<number[]>(
    //   Array(currentQuestion?.options.length).fill(1)
    // );
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
  
    const handleModal = () => {
      bottomSheetModalRef.current?.present();
      setAnswerStatus(true); // Make sure this isn't modifying a shared value directly
      fiftyPlaySound(); // If this modifies state, delay it with `setTimeout`
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
  
    return (
      <SafeAreaView style={styles.container}>
        {/* Percentage Indicator */}
        {/* <View style={styles.percentageContainer}>
          <Text style={styles.percentageText}>50%</Text>
        </View> */}
  
        {/* Header */}
        <TimerHeartSection
          navigation={navigation}
          color="white"
          color1="white"
          quizName="Λίμνες/Ποτάμια"
          index={index}
          heart={heart}
          totalQuestions={totalQuestions}
          counter={counter}
        />
  
        {!isDisabled && (
          <Pressable onPress={handleModal}>
            <View style={{ position: "absolute", top: -30, right: 80 }}>
              {/* <View style={{ marginTop: 30 }}> */}
              <Info size={22} color="#8a8686" />
            </View>
          </Pressable>
        )}
  
       {/* <View>
        <Text>time: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</Text>
       </View> */}
  
        {/* Question Card */}
        <View style={styles.card}>
          <Animated.Image
            key={currentQuestion?.id}
            source={currentQuestion?.img}
            style={styles.questionImage}
          />
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{currentQuestion?.question}</Text>
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
                      // selectedAnswerIndex === null &&
                      //   setSelectedAnswerIndex(index);
                      // handlePressOut(index);
                      // setIsDisabled(false);
                      if (selectedAnswerIndex === null) {
                        setSelectedAnswerIndex(index);
                      }
            
                      handlePressOut(index);
                      setIsDisabled(false);
                      setCounter(false)
            
                      // Capture the user's answer when they select one
                      const userChoice = item.answer;
                      const correctAnswer = currentQuestion?.options[currentQuestion.correctAnswerIndex].answer;
            
                      handleAnswer(currentQuestion?.question, userChoice, correctAnswer);
                    }}
                    style={[
                      styles.answerButton,
                      // animatedStyle,
                      // { transform: [{ scale: scales[index] }] },
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
  
        <View style={styles.bottomButtonsBox}>
          <View style={{ width: "30%" }}>
            <ExitReturnButton backgroundColor="#d1d1d110" />
          </View>
  
          <Pressable
            // onPress={() => {
            //   setIndex(index + 1), setSelectedAnswerIndex(null);
            // }}
            // onPress={handleModal}
            onPress={() => {
              setIndex((prev) => prev + 1);
              setSelectedAnswerIndex(null);
              setCurrentColor(ansBtnClr.default);
              setIsDisabled(true);
              imgPlaySound();
              setCounter(15)
            }}
            disabled={isDisabled}
            style={[
              styles.exitButton,
              { backgroundColor: "#e5e5e5", width: "65%" },
            ]}
          >
            <Text style={{ fontSize: 16, color: "#4e4e4e" }}>
              {isDisabled ? (
                <View style={{ opacity: 0.3 }}>
                  <Ban color="red" size={24} />
                </View>
              ) : (
                "Επόμενο"
              )}
            </Text>
            {isDisabled ? null : <ArrowRight size={18} color="#7c7c7c" />}
          </Pressable>
        </View>
  
        <FeedbackBottomSheet
          bottomSheetModalRef={bottomSheetModalRef}
          snapPoints={snapPoints}
          answerStatus={answerStatus}
          currentQuestion={currentQuestion}
        />
  
        {/* Progress Bar */}
        {/* <View style={styles.progressBarContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: "50%" }]} />
          </View>
        </View> */}
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F7FA",
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
      margin: 16,
      backgroundColor: "#fff",
      borderRadius: 24,
      overflow: "hidden",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 12,
      elevation: 5,
    },
    questionImage: {
      width: "100%",
      height: height > 800 ? 200 : 200,
      resizeMode: "cover",
    },
    questionContainer: {
      paddingHorizontal: 10,
      paddingTop: 20,
      paddingBottom: 10,
    },
    questionText: {
      fontFamily: "Poppins-SemiBold",
      // fontSize: 10,
      fontSize: height > 800 ? 22 : 20,
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
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
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
      width: "100%",
      height: "8%",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      marginTop: 0,
    },
    exitButton: {
      width: "47%",
      height: "100%",
      borderRadius: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      // borderWidth: 2,
      // borderColor: '#c5c5c5',
    },
  });
  
  export default MainQuizAiTestingFile;
  