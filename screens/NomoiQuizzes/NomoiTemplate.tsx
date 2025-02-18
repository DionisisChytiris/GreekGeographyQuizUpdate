import {
  View,
  Text,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Image,
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
import { stylesM } from "../styles/QuizStylesheet";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import TimerHeartSection from "../components/TimerHeartSection";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import ProgressBar from "../components/ProgressBar";
import FeedbackBottomSheet from "../components/FeedBackBottomSheet";
import { useSoundEffect } from "../Utilities/useSoundEffects";
import {
  useAnswerAnimations,
  useScaleAnimation,
  useSlideAnimation,
} from "../Utilities/useAnimations";

const { height } = Dimensions.get("window");

type NomoiTProp = StackNavigationProp<
  RootStackParamList,
  "NomoiResultTemplate"
>;

const NomoiTemplate = (props: any) => {
  const navigation = useNavigation<NomoiTProp>();
  const data = props.questions;
  const nomoiR = props.nomoiResults;
  const totalQuestions = data.length;
  const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(0);
  const currentQuestion = data[index];
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
  let interval: any = null;
  let index1 = index + 1;
  const bottomSheetModalRef = useRef<any>(null);
  const snapPoints = ["50%"];
  const [heart, setHeart] = useState<any>(3);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const removeHeart = () => {
    setHeart((prevHeart: number) => prevHeart - 1);
  };

  useEffect(() => {
    if (heart === 0) {
      navigation.navigate("NomoiLoseScreen1R");
    }
  }, [heart, navigation]);

  const addHeart = () => {
    if (correctAnswer === 2 && heart < 5) {
      setCorrectAnswer(0);
      setHeart((prevHeart: number) => prevHeart + 1);
    }
  };

  const handleModal = () => {
    bottomSheetModalRef.current?.present();
  };

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
        setCorrectAnswer((cor) => cor + 1);
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        setStyle(styles.quizContainer2);
        setNextQueButton(stylesM.nextQueButton2);
        answers.push({ question: index + 1, answer: false });
        setFifty([]);
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
        navigation.navigate(props.nomoiLoseScreenTime);
        setSelectedAnswerIndex(null);
        setAnswerStatus(null);
        setCounter(props.counter);
        setIndex(0);
      }
    };
    interval = setTimeout(myInterval, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [counter]);

  useEffect(() => {
    if (index + 1 > data.length) {
      navigation.navigate("NomoiResultTemplate");
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  const [fifty, setFifty] = useState<number[]>([]);
  const [showFifty, setShowFifty] = useState<boolean>(true);

  const fiftyfifty = async() => {
    await fiftyPlaySound()
    const wrongAnswers = currentQuestion.options
      .map((option: string[], index: number) => index)
      .filter((index: number) => index !== currentQuestion.correctAnswerIndex);

    const randomWrongAnswers = wrongAnswers
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    setFifty(randomWrongAnswers);
    setShowFifty(false);
  };

  // useEffect(() => {
  //   imgPlaySound()
  // }, [currentQuestion.img]);

  // useEffect(() => {
  //   imgPlaySound()
  // }, [currentQuestion.answer]);

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

  // ActivityIndicator - Handle Answer Selection

  const [showLoading, setShowLoading] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [isCountdownFinished, setIsCountdownFinished] =
    useState<boolean>(false);

  const handleAnswerSelection = async (index: number) => {
    await spinnerPlaySound()
    if (selectedAnswerIndex === null) {
      setSelectedAnswerIndex(index);
      setShowLoading(true);

      let count = 3;
      setCountdown(count);

      const interval = setInterval(() => {
        count -= 1;
        setCountdown(count);
        if (count === 0) {
          clearInterval(interval);
          setShowLoading(false);
          setShowCorrectAnswer(true);
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
        <View>
          {/* Section 1 */}
          <View style={{ paddingTop: Platform.OS == "ios" ? 45 : 30 }} />

          {/* Timer Heart Section */}
          <TimerHeartSection
            navigation={navigation}
            quizName="Νομοί/Πόλεις"
            index={index}
            heart={heart}
            totalQuestions={totalQuestions}
            counter={counter}
          />
          <View
            style={[styles.containerInfo, { marginTop: -5, marginBottom: -10 }]}
          >
            {/* <View>{props.goBack}</View> */}
            <View style={styles.levelBox}>
              <View style={stylesNomoi.star}>{props.star}</View>
              {showFifty && (
                <Pressable
                  onPress={fiftyfifty}
                  style={stylesNomoi.fiftyBtn}
                >
                  <Text style={{ color: "white", fontSize: 12 }}>50%</Text>
                </Pressable>
              )}
              <View style={{ marginRight: 20 }}>
                <Text style={{ color: "black", fontSize: 12 }}>
                  Επίπεδο {props.num}
                </Text>
              </View>
            </View>
          </View>

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
                <Animated.View
                  style={{ transform: [{ translateX: slideAnim }] }}
                >
                  <Text style={stylesM.question}>
                    {currentQuestion?.question}
                  </Text>
                </Animated.View>
              </View>
              <View style={{ marginBottom: height > 800 ? 30 : 0 }}>
                <ProgressBar index1={index1} totalQuestions={totalQuestions} />
              </View>

              {/* Answers Subsection */}
              <View
                style={[
                  stylesM.answersContainer,
                  {
                    height: height > 800 ? 320 : 290,
                    marginTop: height > 900 ? (height > 900 ? 50 : 70) : 30,
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
                      style={[
                        stylesM.answerButton,
                        fifty.includes(index)
                          ? { opacity: 0.4 }
                          : { opacity: 1 },
                      ]}
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
              </View>
            </View>
          </View>

          {/* Section 3 - FeedBack Area */}
          {!showCorrectAnswer ? null : (
            <View style={styles.feedBackArea}>
              {index + 1 >= data.length ? (
                answerStatus === null ? null : (
                  <View style={{}}>
                    <View
                      style={{
                        position: "absolute",
                        left: -220,
                        marginTop:
                          height > 800 ? (height > 960 ? -10 : -40) : -30,
                      }}
                    >
                      <Pressable
                        onPress={() =>
                          navigation.navigate(nomoiR, {
                            points: points,
                            data: data,
                          })
                        }
                        style={[nextQueButton, { marginTop: -45, width: 130 }]}
                      >
                        <Text
                          style={{
                            color: "white",
                            padding: 10,
                            borderRadius: 10,
                          }}
                        >
                          Αποτελέσματα
                        </Text>
                      </Pressable>
                    </View>
                    <View
                      style={{
                        position: "absolute",
                        left: -0,
                        marginTop:
                          height > 800 ? (height > 960 ? -10 : -40) : -30,
                      }}
                    >
                      <Pressable
                        style={[nextQueButton, { marginTop: -45 }]}
                        onPress={handleModal}
                      >
                        <Text
                          style={{
                            color: "white",
                            padding: 10,
                            borderRadius: 10,
                          }}
                        >
                          Απάντηση
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                )
              ) : answerStatus === null ? null : (
                <View>
                  {/* <View style={{ flexDirection: "row", marginBottom: 65 }}> */}
                  <Pressable
                    onPress={() => {
                      setIndex(index + 1),
                        setFifty([]),
                        setShowCorrectAnswer(false);
                      setIsCountdownFinished(false);
                      setShowFifty(true);
                    }}
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
                  <View
                    style={{
                      flexDirection: "row",
                      marginBottom: 5,
                      marginTop:
                        height > 800 ? (height > 960 ? -10 : -40) : -30,
                    }}
                  >
                    <Pressable
                      style={[nextQueButton, { marginTop: -40 }]}
                      onPress={handleModal}
                    >
                      <Text
                        style={{
                          color: "white",
                          padding: 10,
                          borderRadius: 10,
                        }}
                      >
                        Απάντηση
                      </Text>
                    </Pressable>
                  </View>
                </View>
              )}
              <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                backgroundStyle={{ borderRadius: 50 }}
              >
                {answerStatus === null ? null : (
                  <View
                    style={
                      answerStatus === null ? null : { alignItems: "center" }
                    }
                  >
                    {!!answerStatus ? (
                      <View
                        style={{
                          alignItems: "center",
                          backgroundColor: "white",
                          borderRadius: 20,
                          width: "100%",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            height: 60,
                            marginBottom: 20,
                          }}
                        >
                          <Text
                            style={{
                              color: "green",
                              fontSize: 20,
                              padding: 10,
                            }}
                          >
                            Σωστή Απάντηση
                          </Text>
                          <Image
                            source={require("../../assets/thumbUp.jpg")}
                            resizeMode="cover"
                            style={{
                              marginVertical: 20,
                              width: 50,
                              height: 50,
                            }}
                          />
                        </View>
                        <Image
                          source={currentQuestion?.imgMap}
                          resizeMode="cover"
                          style={{
                            borderRadius: 10,
                            marginBottom: 10,
                            marginHorizontal: 3,
                            width: 300,
                            height: 250,
                          }}
                        />
                      </View>
                    ) : (
                      <View
                        style={{
                          margin: 40,
                          alignItems: "center",
                          backgroundColor: "white",
                          borderRadius: 20,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: 30,
                            marginBottom: 50,
                            width: 250,
                            height: 200,
                          }}
                        >
                          <Text
                            style={{ color: "red", fontSize: 20, padding: 10 }}
                          >
                            Λάθος Απάντηση
                          </Text>
                          <Image
                            source={require("../../assets/sadFace.jpg")}
                            resizeMode="cover"
                            style={{
                              marginVertical: 20,
                              width: 50,
                              height: 50,
                            }}
                          />
                          <View>
                            <Text
                              style={{
                                color: "darkblue",
                                textAlign: "center",
                                fontSize: 12,
                                padding: 20,
                              }}
                            >
                              {currentQuestion?.answer}
                            </Text>
                          </View>
                        </View>
                      </View>
                    )}
                  </View>
                )}
              </BottomSheetModal>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default NomoiTemplate;

const stylesNomoi = StyleSheet.create({
  star: {
    alignItems: "center",
    backgroundColor: "#615f5f90",
    justifyContent: "center",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginLeft: 20,
  },
  fiftyBtn: {
    padding: 4,
    borderRadius: 6,
    backgroundColor: "green",
    marginLeft: 30,
  },
});
