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
    Alert,
  } from "react-native";
  import React, { useState, useEffect, useRef } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { StackNavigationProp } from "@react-navigation/stack";
  import { RootStackParamList } from "../../Types/RootStackParamList";
  import styles from "../styles/testStyle";
  import questions from "../../data/Mountain/questions";
  import { Audio } from "expo-av";
  import { AntDesign, Ionicons } from "@expo/vector-icons";
  import LottieView from "lottie-react-native";
  import TimerHeartSection from "../components/TimerHeartSection1";
  import ProgressBar from "../components/ProgressBar";
  import FeedbackBottomSheet from "../components/FeedBackBottomSheet";
  import { stylesM } from "../styles/QuizStylesheet";
  import { useSoundEffect } from "../Utilities/useSoundEffects";
  import {
    useAnswerAnimations,
    useScaleAnimation,
    useSlideAnimation,
    useSlideAnimationFiftyBtn,
  } from "../Utilities/useAnimations";
  
  const { height } = Dimensions.get("window");
  
  type MountainProp = StackNavigationProp<RootStackParamList, "Mountain">;
  
  const Mountain1 = () => {
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
  
    // Find Correct Answer
    useEffect(() => {
      if (selectedAnswerIndex !== null) {
        if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
          setPoints((points) => points + 1);
          setAnswerStatus(true);
          setStyle(styles.quizContainer1);
          setNextQueButton(stylesM.nextQueButton1);
          setCorrectAnswer((cor) => cor + 1);
          setConsecutiveCorrectAnswers((prev) => prev + 1);
          answers.push({ question: index + 1, answer: true });
        } else {
          setAnswerStatus(false);
          setStyle(styles.quizContainer2);
          setNextQueButton(stylesM.nextQueButton2);
          setShowCorrectAnswer(false);
          setConsecutiveCorrectAnswers(0);
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
    const slideAnimFiftyBtn = useSlideAnimationFiftyBtn(index);
    const scaleAnim = useScaleAnimation(index);
    const answerAnims = useAnswerAnimations(index);
  
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
        setShowConsecutiveCorrectAnswers(false);
  
        const interval = setInterval(() => {
          count -= 1;
          setCountdown(count);
          if (count === 0) {
            clearInterval(interval);
            setShowLoading(false); // Hide loading spinner
            setShowCorrectAnswer(true); // Show correct answer
            setIsCountdownFinished(true);
            setShowConsecutiveCorrectAnswers(true);
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
  
    const [fifty, setFifty] = useState<number[]>([]);
    const [showFifty, setShowFifty] = useState<boolean>(true);
  
    const fiftyfifty = async () => {
      await fiftyPlaySound();
      const wrongAnswers = currentQuestion.options
        .map((option, index) => index)
        .filter((index) => index !== currentQuestion.correctAnswerIndex);
  
      const randomWrongAnswers = wrongAnswers
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);
      setFifty(randomWrongAnswers);
      setShowFifty(false);
    };
  
    const [consecutiveCorrectAnswers, setConsecutiveCorrectAnswers] = useState(0);
    const [showConsecutiveCorrectAnswers, setShowConsecutiveCorrectAnswers] =
      useState(false);
  
    const infoIcon = () => {
      setCounter(false);
      Alert.alert(
        "",
        "Aπάντησε σωστά σε 3 συνεχόμενες ερωτήσεις  για να επανεμφανιστεί η βοήθεια.",
        [
          {
            text: "Ενταξει",
            // onPress: ()=>setCounter(true)
          },
        ]
      );
    };
  
    return (
      <View style={{ flex: 1, backgroundColor: "lightgrey" }}>
        <ScrollView bounces={false}>
          <ImageBackground
            source={require("../../assets/Photos/meteora.jpg")}
            resizeMode="cover"
            blurRadius={0.4}
            style={{ flex: 1, width: "100%", height: "150%" }}
          >
            {/* Section 1 */}
            <View style={{ paddingTop: Platform.OS == "ios" ? 45 : 30 }} />
  
            {/* Timer Heart Section */}
            <TimerHeartSection
              navigation={navigation}
              color='black'
              color1='grey'
              quizName="Βουνά"
              index={index}
              heart={heart}
              totalQuestions={totalQuestions}
              counter={counter}
            />
  
            {/* Fifty Fifty Button */}
            {showFifty ? (
              <Animated.View
                style={{
                  transform: [{ translateX: slideAnimFiftyBtn }],
                  zIndex: 999,
                }}
              >
                <Pressable onPress={fiftyfifty} style={stylesM.fiftyBtn}>
                  <Text style={{ color: "white", fontSize: 10 }}>50%</Text>
                </Pressable>
              </Animated.View>
            ) : (
              <View style={{ zIndex: 9999 }}>
                <View style={stylesM.infoIcon}>
                  {showConsecutiveCorrectAnswers ? (
                    <Text style={{ color: "white", fontSize: 10 }}>
                      {consecutiveCorrectAnswers}
                    </Text>
                  ) : (
                    <Text style={{ color: "white", fontSize: 10 }}>
                      {Math.max(consecutiveCorrectAnswers - 1, 0)}
                    </Text>
                  )}
                </View>
                <Pressable
                  onPress={infoIcon}
                  style={[stylesM.fiftyBtn, { opacity: 0.5, paddingVertical: 5 }]}
                >
                  <View>
                    <Ionicons
                      name="information-circle-sharp"
                      size={24}
                      color="white"
                    />
                  </View>
                </Pressable>
              </View>
            )}
  
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
                      // width: '100%',
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
                    // backgroundColor: 'lightgrey'
                  }}
                >
                  <Animated.View
                    style={{ transform: [{ translateX: slideAnim }] }}
                  >
                    <Text style={[stylesM.question, { color: "black" }]}>
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
  
                  {/* Progress Bar */}
                  {!showCorrectAnswer && (
                    <ProgressBar
                      index1={index1}
                      totalQuestions={totalQuestions}
                    />
                  )}
                </View>
              </View>
            </View>
  
            {/* Section 3 - FeedBack Area */}
            {!showCorrectAnswer ? null : (
              <View style={styles.feedBackArea}>
                {index + 1 >= data.length ? (
                  answerStatus === null ? null : (
                    <View>
                      <View
                        style={{
                          position: "absolute",
                          left: -220,
                          // marginTop: height > 800 ? -40 : -30,
                        }}
                      >
                        <Pressable
                          onPress={() =>
                            navigation.navigate("MountainResults", {
                              points: points,
                              data: data,
                            })
                          }
                          // style={nextQueButton}
                          // style={[nextQueButton, { marginTop: -45, width: 130 }]}
                          style={[nextQueButton, { width: 130 }]}
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
                          right: 10
                        }}
                      >
                        <Pressable style={nextQueButton} onPress={handleModal}>
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
                    <Pressable
                      onPress={() => {
                        setIndex(index + 1);
                        setShowCorrectAnswer(false);
                        setIsCountdownFinished(false);
                        setFifty([]);
                        if (consecutiveCorrectAnswers === 3) {
                          setShowFifty(true);
                          setConsecutiveCorrectAnswers(0);
                        }
                      }}
                      style={{
                        position: "absolute",
                        right: -10,
                        // bottom: Platform.OS ==="android"?height > 800 ? (height>960? height/2.6:height / 2.5): height / 2 : height/2.3
                        bottom:
                          Platform.OS === "android"
                            ? height > 800
                              ? height / 2.5
                              : height / 2.2
                            : height / 2.3,
                        zIndex: 999,
                      }}
                    >
                      <AntDesign name="rightcircle" size={50} color="white" />
                    </Pressable>
                    <View
                      style={{
                        position: "absolute",
                        left: -0,
                        // marginTop: height > 800 ? -40 : -30,
                      }}
                    >
                      <Pressable style={nextQueButton} onPress={handleModal}>
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
                {/* FeedBackBottomSheet */}
                <FeedbackBottomSheet
                  bottomSheetModalRef={bottomSheetModalRef}
                  snapPoints={snapPoints}
                  answerStatus={answerStatus}
                  currentQuestion={currentQuestion}
                />
              </View>
            )}
          </ImageBackground>
        </ScrollView>
      </View>
    );
  };
  
  export default Mountain1;
  
  // const stylesMountain = StyleSheet.create({
  //   fiftyBtn: {
  //     position: "absolute",
  //     top: 60,
  //     left: 5,
  //     paddingVertical: 10,
  //     paddingHorizontal: 4,
  //     borderRadius: 6,
  //     backgroundColor: "#615f5f95",
  //   },
  //   infoIcon: {
  //     position: "absolute",
  //     top: 60,
  //     left: 15,
  //     opacity: 1,
  //   },
  // });
  