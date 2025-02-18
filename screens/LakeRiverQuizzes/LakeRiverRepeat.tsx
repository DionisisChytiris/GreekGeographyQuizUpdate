import {
  View,
  Text,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Vibration,
  Animated,
  Dimensions,
  Platform,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import styles from "../styles/testStyle";
import questions from "../../data/LakeRiver/questions";
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";
import LottieView from "lottie-react-native";
import TimerHeartSection from "../components/TimerHeartSection";
import ProgressBar from "../components/ProgressBar";
import FeedbackBottomSheet from "../components/FeedBackBottomSheet";
import { stylesM } from "../styles/QuizStylesheet";
import { useSoundEffect } from "../Utilities/useSoundEffects";
import {
  useAnswerAnimations,
  useScaleAnimation,
  useSlideAnimation,
} from "../Utilities/useAnimations";

const { height } = Dimensions.get("window");

type LakeRiverRepeatProp = StackNavigationProp<
  RootStackParamList,
  "LakeRiverRepeat"
>;

const LakeRiverRepeat = () => {
  const navigation = useNavigation<LakeRiverRepeatProp>();
  const data = questions;
  const totalQuestions = data.length;
  const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState<boolean | null>(null);
  const [answers, setAnswers] = useState<any>([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [counter, setCounter] = useState<any>(15);
  const [style, setStyle] = useState<any>(styles.quizContainer);
  const [nextQueButton, setNextQueButton] = useState<any>(
    stylesM.nextQueButton
  );
  const [btnBackground, setBtnBackground] = useState("#2E86C1");
  let interval: any = null;
  let index1 = index + 1;
  const currentQuestion = data[index];
  const bottomSheetModalRef = useRef<any>(null);
  const snapPoints = ["50%"];
  // const [heart, setHeart] = useState<any>(["❤️", "❤️", "❤️"]);
  const [heart, setHeart] = useState<any>(3);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const removeHeart = () => {
    setHeart((prevHeart: number) => prevHeart - 1);
  };

  useEffect(() => {
    if (heart === 0) {
      navigation.navigate("LakeRiverLoseScreenR");
    }
  }, [heart, navigation]);

  const addHeart = () => {
    if (correctAnswer === 2 && heart < 5) {
      // heart.push("❤️");
      setCorrectAnswer(0);
      setHeart((prevHeart: number) => prevHeart + 1);
    }
  };

  const handleModal = () => {
    bottomSheetModalRef.current?.present();
  };

  // Correct Sound Effect
  // const [correctSound, setCorrectSound] = useState<any>();
  // async function CorrectPlaySound() {
  //   const { sound } = await Audio.Sound.createAsync(
  //     require("../../assets/sounds/correct2.wav")
  //   );
  //   setCorrectSound(correctSound);
  //   await sound.playAsync();
  // }
  // useEffect(() => {
  //   return correctSound
  //     ? () => {
  //         correctSound.uploadAsync();
  //       }
  //     : undefined;
  // }, [correctSound]);

  // Wrong Sound Effect
  // const [wrongSound, setWrongSound] = useState<any>();
  // async function WrongPlaySound() {
  //   const { sound } = await Audio.Sound.createAsync(
  //     require("../../assets/sounds/wrong.wav")
  //   );
  //   setWrongSound(wrongSound);
  //   await sound.playAsync();
  // }
  // useEffect(() => {
  //   return wrongSound ? () => wrongSound.uploadAsync() : undefined;
  // }, [wrongSound]);

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
    require("../../assets/sounds/spinner.mp3")
  );
  // Image Sound Effect
  const imgPlaySound = useSoundEffect(
    require("../../assets/sounds/popimg.mp3")
  );

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints((points) => points + 1);
        setAnswerStatus(true);
        setStyle(styles.quizContainer1);
        setNextQueButton(stylesM.nextQueButton1);
        // CorrectPlaySound();
        setCorrectAnswer((cor) => cor + 1);
        // addHeart();
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        setStyle(styles.quizContainer2);
        setNextQueButton(stylesM.nextQueButton2);
        setShowCorrectAnswer(false);
        // WrongPlaySound();
        // removeHeart();
        // Vibration.vibrate();
        answers.push({ question: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setStyle(styles.quizContainer);
    setNextQueButton(stylesM.nextQueButton);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((counter: number) => counter - 1);
      }
      if (counter === 1) {
        // navigation.navigate("LakeRiverLoseScreenR");
        navigation.navigate("LoseScreenREndTime");
      }
    };
    interval = setTimeout(myInterval, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [counter]);

  // if(counter === 0){
  //   setIndex(index + 1)
  //   setCounter(15)
  // }

  useEffect(() => {
    if (index + 1 > data.length) {
      navigation.navigate("LakeRiverResultsRepeat", { points, data });
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  useEffect(() => {
    currentQuestion?.options.forEach((_, index) => {
      setTimeout(() => {
        imgPlaySound();
      }, index * 200); // Delay each sound to match animation timing
    });
  }, [currentQuestion]);

  // Animations
  const slideAnim = useSlideAnimation(index);
  const scaleAnim = useScaleAnimation(index);
  const answerAnims = useAnswerAnimations(index);

  // const slideAnim = useRef(new Animated.Value(-300)).current;
  // const scaleAnim = useRef(new Animated.Value(0)).current;
  // const answerAnims = useRef([
  //   new Animated.Value(0), // Box 0
  //   new Animated.Value(0), // Box 1
  //   new Animated.Value(0), // Box 2
  //   new Animated.Value(0), // Box 3
  // ]).current;

  // useEffect(() => {
  //   slideAnim.setValue(-300);
  //   Animated.timing(slideAnim, {
  //     toValue: 0,
  //     duration: 400,
  //     useNativeDriver: true,
  //   }).start();
  // }, [index, slideAnim]);

  // useEffect(() => {
  //   scaleAnim.setValue(0);
  //   Animated.timing(scaleAnim, {
  //     toValue: 1,
  //     duration: 400,
  //     useNativeDriver: true,
  //   }).start();
  // }, [index, scaleAnim]);

  // useEffect(() => {
  //   answerAnims.forEach((anim) => anim.setValue(0));
  //   setTimeout(() => {
  //     Animated.stagger(
  //       200, // Delay between each animation
  //       answerAnims.map((anim) =>
  //         Animated.timing(anim, {
  //           toValue: 1,
  //           duration: 500,
  //           useNativeDriver: true,
  //         })
  //       )
  //     ).start();
  //   }, 300);
  // }, [index, answerAnims]);

  const [showLoading, setShowLoading] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [isCountdownFinished, setIsCountdownFinished] =
    useState<boolean>(false);

  const handleAnswerSelection = async (index: number) => {
    await spinnerPlaySound()
    if (selectedAnswerIndex === null) {
      setSelectedAnswerIndex(index);
      setShowLoading(true); // Show loading spinner

      let count = 3;
      setCountdown(count);

      const interval = setInterval(() => {
        count -= 1;
        setCountdown(count);
        if (count === 0) {
          clearInterval(interval);
          setShowLoading(false); // Hide loading spinner
          setShowCorrectAnswer(true); // Show correct answer
          setIsCountdownFinished(true);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    if (isCountdownFinished) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        CorrectPlaySound();
        addHeart();
      } else {
        WrongPlaySound();
        Vibration.vibrate();
        removeHeart();
      }
    }
  }, [isCountdownFinished, selectedAnswerIndex, currentQuestion]);

  return (
    <View style={{ flex: 1, backgroundColor: "lightgrey" }}>
      <ScrollView bounces={false}>
        {/* <ImageBackground
          source={require("../../assets/MorePhotos/lake2.jpg")}
          style={{ marginTop: height > 1100 ? 100 : null }}
        > */}

        {/* Section 1 */}
        <View style={{ paddingTop: Platform.OS == "ios" ? 45 : 30 }} />

        {/* Timer Heart Section */}
        <TimerHeartSection
          navigation={navigation}
          quizName="Λίμνες/Ποτάμια"
          index={index}
          heart={heart}
          totalQuestions={totalQuestions}
          counter={counter}
        />

        {/* Section 2 */}
        <View style={stylesM.section2Container}>
          <View style={{}}>
            <Animated.Image
              key={currentQuestion?.id}
              source={currentQuestion?.img}
              style={[
                stylesM.image,
                {
                  transform: [
                    {
                      scale: scaleAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                      }),
                    },
                  ],
                },
              ]}
            />
            {/* Question Subsection */}
            <View
              style={{
                width: "100%",
                overflow: "hidden",
                marginTop: height > 900 ? 20 : 0,
              }}
            >
              <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
                <Text style={stylesM.question}>
                  {currentQuestion?.question}
                </Text>
              </Animated.View>
            </View>

            {/* Answers Subsection */}
            <View
              style={[
                stylesM.answersContainer,
                {
                  height: 260,
                  marginTop: height > 900 ? (height > 900 ? 70 : 70) : 30,
                },
              ]}
            >
              {showLoading ? (
                <View style={stylesM.ActivityIndicatorBox}>
                  {/* Custom size for ActivityIndicator */}
                  <Text>
                    <ActivityIndicator size={80} color="#ffffff" />{" "}
                  </Text>
                  {/* 80px size */}
                  <Text style={stylesM.ActivityIndText}>{countdown}</Text>
                </View>
              ) : showCorrectAnswer ? (
                // Show correct answer after loading
                currentQuestion?.options.map((item: any, index: any) => (
                  <Pressable
                    key={index}
                    onPress={() => {
                      selectedAnswerIndex === null &&
                        setSelectedAnswerIndex(index);
                      setCounter(false);
                    }}
                    style={stylesM.answerButton}
                  >
                    <View>
                      <Animated.View
                        style={[
                          selectedAnswerIndex === index &&
                          index === currentQuestion.correctAnswerIndex
                            ? stylesM.correctAnswer
                            : selectedAnswerIndex !== null &&
                              selectedAnswerIndex === index
                            ? stylesM.wrongAnswer
                            : stylesM.borderAnswer,
                          {
                            opacity: answerAnims[index],
                            transform: [
                              {
                                scale: answerAnims[index].interpolate({
                                  inputRange: [0, 1],
                                  outputRange: [0.8, 1],
                                }),
                              },
                            ],
                          },
                        ]}
                      >
                        <Text style={stylesM.textAnswer}>{item.answer}</Text>
                      </Animated.View>
                      {selectedAnswerIndex === index &&
                      index === currentQuestion.correctAnswerIndex ? (
                        <View style={stylesM.lottieCorrect}>
                          <LottieView
                            style={{ width: "100%", height: "100%" }}
                            source={require("../../assets/LottieAnimations/Success.json")}
                            autoPlay
                            loop={false}
                          />
                        </View>
                      ) : null}
                      {selectedAnswerIndex === index &&
                      index !== currentQuestion.correctAnswerIndex ? (
                        <View style={stylesM.lottieWrong}>
                          <LottieView
                            style={{ width: "100%", height: "100%" }}
                            source={require("../../assets/LottieAnimations/Fail.json")}
                            autoPlay
                            loop={false}
                          />
                        </View>
                      ) : null}
                    </View>
                  </Pressable>
                ))
              ) : (
                // Show normal answer buttons if no answer has been selected
                currentQuestion?.options.map((item: any, index: any) => (
                  <Pressable
                    key={index}
                    onPress={() => (
                      handleAnswerSelection(index), setCounter(false)
                    )}
                    style={stylesM.answerButton}
                  >
                    <Animated.View
                      style={[
                        stylesM.borderAnswer,
                        {
                          opacity: answerAnims[index],
                          transform: [
                            {
                              scale: answerAnims[index].interpolate({
                                inputRange: [0, 1],
                                outputRange: [0.8, 1],
                              }),
                            },
                          ],
                        },
                      ]}
                    >
                      <Text style={stylesM.textAnswer}>{item.answer}</Text>
                    </Animated.View>
                  </Pressable>
                ))
              )}
              {/* Progress Bar */}
              {!showCorrectAnswer && (
                <ProgressBar index1={index1} totalQuestions={totalQuestions} />
              )}
            </View>
          </View>
        </View>

        {/* Section 3 - FeedBack Area */}
        {!showCorrectAnswer ? null : (
          <View style={styles.feedBackArea}>
            {index + 1 >= data.length ? (
              answerStatus === null ? null : (
                <View style={{ marginBottom: 75 }}>
                  <Pressable
                    onPress={() =>
                      navigation.navigate("LakeRiverResults", {
                        points: points,
                        data: data,
                      })
                    }
                    style={nextQueButton}
                  >
                    <Text
                      style={{ color: "white", padding: 10, borderRadius: 10 }}
                    >
                      Αποτελέσματα
                    </Text>
                  </Pressable>
                  <Pressable style={nextQueButton} onPress={handleModal}>
                    <Text
                      style={{ color: "white", padding: 10, borderRadius: 10 }}
                    >
                      Απάντηση
                    </Text>
                  </Pressable>
                </View>
              )
            ) : answerStatus === null ? null : (
              <View>
                <View style={{ flexDirection: "row", marginBottom: 65 }}>
                  <Pressable
                    onPress={() => {
                      setIndex(index + 1),
                        setShowCorrectAnswer(false),
                        setIsCountdownFinished(false);
                    }}
                    // style={nextQueButton}
                    style={{
                      position: "absolute",
                      bottom:
                        Platform.OS === "android"
                          ? height > 800
                            ? height / 2.5
                            : height / 2.2
                          : height / 2.3,
                      right: -10,
                    }}
                  >
                    <AntDesign name="rightcircle" size={50} color="white" />
                  </Pressable>
                  <Pressable style={nextQueButton} onPress={handleModal}>
                    <Text
                      style={{ color: "white", padding: 10, borderRadius: 10 }}
                    >
                      Απάντηση
                    </Text>
                  </Pressable>
                </View>
              </View>
            )}
          </View>
        )}
        {/* FeedBackBottomSheet */}
        <FeedbackBottomSheet
          bottomSheetModalRef={bottomSheetModalRef}
          snapPoints={snapPoints}
          answerStatus={answerStatus}
          currentQuestion={currentQuestion}
        />
        {/* </ImageBackground> */}
      </ScrollView>
    </View>
  );
};

export default LakeRiverRepeat;

// const stylesM = StyleSheet.create({
//   textTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "white",
//     textAlign: "center",
//     paddingTop: 30,
//   },
//   timer: {
//     alignItems: "center",
//     justifyContent: "center",
//     // position: 'absolute',
//     // top: 0,
//     // right: 10,
//     marginTop: 15,
//     marginRight: -30,
//     width: 60,
//     height: 60,
//     backgroundColor: "#b8f5ef",
//     borderRadius: 20,
//   },
//   progressBar: {
//     backgroundColor: "#0059DF",
//     borderRadius: 12,
//     position: "absolute",
//     left: 0,
//     height: 8,
//     right: 0,
//   },
//   image: {
//     borderRadius: 10,
//     marginBottom: 5,
//     width: "100%",
//     margin: "auto",
//     marginLeft: height > 960 ? (height > 1100 ? 30 : 0) : null,
//     height: height > 960 ? (height > 1000 ? 350 : 250) : 180,
//   },
//   textAnswer: {
//     marginHorizontal: "auto",
//     fontWeight: "600",
//     color: "white",
//     fontSize: 14,
//   },
//   button0: {
//     position: "relative",
//     width: 180,
//     height: 40,
//     marginLeft: "auto",
//     marginRight: "auto",
//     marginTop: 0,
//     marginBottom: 40,
//   },
//   button1: {
//     position: "absolute",
//     opacity: 0.4,
//     backgroundColor: "#2E86C1",
//     width: "100%",
//     height: "100%",
//     borderRadius: 25,
//   },
//   btnText: {
//     position: "absolute",
//     bottom: 11,
//     left: 79,
//     color: "white",
//     fontWeight: "600",
//     fontSize: 20,
//   },
//   progressContainerInfo: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: "10%",
//   },
//   progressBarBack: {
//     backgroundColor: "white",
//     // backgroundColor: "green",
//     width: height > 960 ? "60%" : "80%",
//     flexDirection: "row",
//     alignItems: "center",
//     height: 7,
//     borderRadius: 20,
//     justifyContent: "center",
//     marginTop: "5%",
//     marginBottom: -10,
//     marginLeft: "auto",
//     marginRight: "auto",
//   },
//   BtmModalView: {
//     flex: 1,
//     alignItems: "center",
//     backgroundColor: "white",
//     width: "95%",
//   },
//   btmMdlView: {
//     paddingBottom: 20,
//     paddingHorizontal: 15,
//     gap: 10,
//     backgroundColor: "#f5f5f5",
//     height: 300,
//     borderRadius: 20,
//     padding: 10,
//   },
//   btmMdlText: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     height: 60,
//   },
//   infoBtn: {
//     position: "absolute",
//     bottom: -15,
//     right: -10,
//     backgroundColor: "transparent",
//     width: 80,
//     height: 80,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   nextQueButton: {
//     position: "absolute",
//     bottom: -15,
//     right: 10,
//     backgroundColor: "magenta",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 10,
//   },
//   nextQueButton1: {
//     // position: "absolute",
//     // bottom: -15,
//     // right: 10,
//     backgroundColor: "green",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 10,
//   },
//   nextQueButton2: {
//     backgroundColor: "#dd0530",
//     // position: "absolute",
//     // bottom: -15,
//     // right: 10,
//     // backgroundColor: "magenta",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 10,
//   },
//   correctAnswer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "green",
//     width: "100%",
//     height: height > 960 ? 120 : 90,
//     borderRadius: 6,
//     margin: "1.5%",
//   },
//   wrongAnswer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#dd0530",
//     width: "100%",
//     height: height > 960 ? 120 : 90,
//     borderRadius: 6,
//     margin: "1.5%",
//   },
//   borderAnswer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#006cfa",
//     width: "100%",
//     height: height > 960 ? 120 : 90,
//     borderRadius: 6,
//     margin: "1.5%",
//   },
// });
