import {
  View,
  Text,
  Pressable,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Vibration,
  Animated,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import styles from "../styles/testStyle";
import questions from "../../data/Mountain/questions";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import TimerHeartSection from "../components/TimerHeartSection";
import ProgressBar from "../components/ProgressBar";
import FeedbackBottomSheet from "../components/FeedBackBottomSheet";
import { stylesM } from '../styles/QuizStylesheet'
import { useSoundEffect } from "../Utilities/useSoundEffects";
import {
  useAnswerAnimations,
  useScaleAnimation,
  useSlideAnimation,
} from "../Utilities/useAnimations";

const { height } = Dimensions.get("window");

type MountainProp = StackNavigationProp<RootStackParamList, "Mountain">;

const Mountain = () => {
  const navigation = useNavigation<MountainProp>();
  const data = questions;
  // const nomoiR = props.nomoiResults;
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

  // Add Heart (lives)
  const removeHeart = () => {
    setHeart((prevHeart: number) => prevHeart - 1);
    // const newArray = heart.length - 1;
    // heart.pop(newArray);
    // {
    //   newArray === 0 && navigation.navigate("MountainLoseScreenR");
    // }
  };
  useEffect(() => {
    if (heart === 0) {
      navigation.navigate("MountainLoseScreenR");
    }
  }, [heart, navigation]);

  const addHeart = () => {
    if (correctAnswer === 2 && heart < 5) {
      // heart.push("❤️");
      setCorrectAnswer(0);
      setHeart((prevHeart: number) => prevHeart + 1);
    }
  };

  // Bottom Modal
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
  //   return correctSound ? () => correctSound.uploadAsync() : undefined;
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

  // Find Correct Answer
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

  // Counter
  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((counter: number) => counter - 1);
      }
      if (counter === 1) {
        navigation.navigate("MountainLoseScreen");
      }
    };
    interval = setTimeout(myInterval, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [counter]);

  useEffect(() => {
    if (index + 1 > data.length) {
      navigation.navigate("MountainResults", { points, data });
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
    await spinnerPlaySound();
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
          source={require("../../assets/meteora.jpg")}
          resizeMode="cover"
          blurRadius={2}
          style={{ flex: 1, width: "100%", height: "130%" }}
        > */}

        {/* Section 1 */}
        <View style={{ paddingTop: Platform.OS == "ios" ? 45 : 30 }} />

        {/* Timer Heart Section */}
        <TimerHeartSection
          navigation={navigation}
          quizName="Βουνά"
          index={index}
          heart={heart}
          totalQuestions={totalQuestions}
          counter={counter}
        />

        {/* Section 2 */}
        <View style={stylesM.section2Container}>
          <View style={{}}>
            {/* Image Subsection */}
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
                <Text style={stylesM.question}>{currentQuestion?.question}</Text>
              </Animated.View>
            </View>

             {/* Answers Subsection */}
            <View
              style={[
                stylesM.answersContainer,
                { height: 260, marginTop: height > 900 ? height>900? 70:70 : 30 },
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
                  <TouchableOpacity
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
                  </TouchableOpacity>
                ))
              ) : (
                // Show normal answer buttons if no answer has been selected
                currentQuestion?.options.map((item: any, index: any) => (
                  <TouchableOpacity
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
                  </TouchableOpacity>
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
                      navigation.navigate("MountainResults", {
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
                <Pressable
                  onPress={() => {
                    setIndex(index + 1);
                    setShowCorrectAnswer(false);
                    setIsCountdownFinished(false);
                  }}
                  style={{
                    position: "absolute",
                    right: -10,
                    // bottom: Platform.OS ==="android"?height > 800 ? (height>960? height/2.6:height / 2.5): height / 2 : height/2.3
                    bottom: Platform.OS ==="android"? height > 800 ? height / 2.5: height / 2.2 : height/2.3
                  }}
                >
                  <AntDesign name="rightcircle" size={50} color="white" />
                </Pressable>
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
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
            {/* FeedBackBottomSheet */}
            <FeedbackBottomSheet
              bottomSheetModalRef={bottomSheetModalRef}
              snapPoints={snapPoints}
              answerStatus={answerStatus}
              currentQuestion={currentQuestion}
            />
          </View>
        )}
        {/* </ImageBackground> */}
      </ScrollView>
    </View>
  );
};

export default Mountain;

// const stylesT = StyleSheet.create({
//   image: {
//     borderRadius: 10,
//     marginBottom: 20,
//     width: height > 1100 ? "100%" : "90%",
//     margin: "auto",
//     marginLeft: height > 960 ? (height > 1000 ? 30 : 20) : null,
//     height:
//       Platform.OS === "android"
//         ? height < 800
//           ? 190
//           : height > 1100
//           ? 320
//           : 210
//         : 190,
//   },
//   textAnswer: {
//     marginHorizontal: "auto",
//     fontWeight: "600",
//     color: "white",
//     fontSize: height>800? 16:14,
//   },
 
//   section2Container: {
//     marginVertical: 0,
//     paddingHorizontal: height > 1000 ? 120 : 25,
//     marginTop: 20,
//   },
//   answersContainer: {
//     flex: 1,
//     flexDirection: "row",
//     flexWrap: "wrap",
//     marginTop: 10,
//     paddingTop: 5,
//   },
//   answerButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "47%",
//     height: height > 960 ? 120 : 100,
//     borderRadius: 6,
//     margin: "0.8%",
//   },
//   lottieCorrect: {
//     position: "absolute",
//     width: "100%",
//     height: "70%",
//     top: 0,
//     right: -30,
//   },
//   lottieWrong: {
//     position: "absolute",
//     width: "100%",
//     height: "70%",
//     top: 0,
//     right: -30,
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
//   nextQueButton: {
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 10,
//   },
//   nextQueButton1: {
//     marginTop: 0,
//     marginLeft: Platform.OS === "android" ? (height > 800 ? 300 : 230) : 240,
//     backgroundColor: "green",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 10,
//   },
//   nextQueButton2: {
//     marginTop: 0,
//     marginLeft: Platform.OS === "android" ? (height > 800 ? 300 : 230) : 240,
//     backgroundColor: "#dd0530",
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
//     height: height > 960 ? 120 : 100,
//     borderRadius: 6,
//   },
//   wrongAnswer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#dd0530",
//     width: "100%",
//     height: height > 960 ? 120 : 100,
//     borderRadius: 6,
//   },
//   borderAnswer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#006cfa",
//     width: "100%",
//     height: height > 960 ? 120 : 100,
//     borderRadius: 6,
//   },
//   ActivityIndicatorBox: {
//     width: 200,
//     height: 200,
//     backgroundColor: "rgba(0, 0, 0, 0.3)",
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: [{ translateX: -100 }, { translateY: -100 }],
//   },
//   ActivityIndText: {
//     color: "#ffffff",
//     fontSize: 50,
//     fontWeight: "bold",
//     marginTop: 10,
//   },
// });


 // button0: {
  //   position: "relative",
  //   width: 180,
  //   height: 40,
  //   marginLeft: "auto",
  //   marginRight: "auto",
  //   marginTop: 0,
  //   marginBottom: 40,
  // },
  // button1: {
  //   position: "absolute",
  //   opacity: 0.4,
  //   backgroundColor: "#2E86C1",
  //   width: "100%",
  //   height: "100%",
  //   borderRadius: 25,
  // },
  // btnText: {
  //   position: "absolute",
  //   bottom: 11,
  //   left: 79,
  //   color: "white",
  //   fontWeight: "600",
  //   fontSize: 20,
  // },