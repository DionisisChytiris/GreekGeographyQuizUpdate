import {
    SafeAreaView,
    View,
    Text,
    Pressable,
    Image,
    ScrollView,
    StyleSheet,
    Vibration,
    Alert,
    Animated,
    Dimensions,
  } from "react-native";
  import React, { useState, useEffect, useRef } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { StackNavigationProp } from "@react-navigation/stack";
  import { RootStackParamList } from "../../../Types/RootStackParamList";
  import styles from "../../styles/testStyle";
  import { Ionicons } from "@expo/vector-icons";
  import { Audio } from "expo-av";
  import { BottomSheetModal } from "@gorhom/bottom-sheet";
  import { AntDesign } from "@expo/vector-icons";
  import LottieView from "lottie-react-native";
  
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
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [counter, setCounter] = useState<any>(15);
    const [style, setStyle] = useState<any>(styles.quizContainer);
    const [nextQueButton, setNextQueButton] = useState<any>(
      stylesT.nextQueButton
    );
    const [btnBackground, setBtnBackground] = useState("lightgrey");
    let interval: any = null;
    let index1 = index + 1;
    const bottomSheetModalRef = useRef<any>(null);
    const snapPoints = ["50%"];
    const [heart, setHeart] = useState<any>(["❤️", "❤️", "❤️"]);
    const [cor, setCor] = useState(0);
    // const [tr, setTr] = useState<boolean>(true)
  
    const removeHeart = () => {
      const newArray = heart.length - 1;
      heart.pop(newArray);
      setHeart(heart);
      {
        newArray === 0 && navigation.navigate("NomoiLoseScreen1R");
        newArray === 0 && navigation.navigate(props.nomoiLoseScreen);
        // newArray === 0 && navigation.navigate('NomoiLoseScreen1R');
      }
    };
  
    const addHeart = () => {
      if (cor === 2 && heart.length < 5) {
        heart.push("❤️");
        setCor(0);
        setHeart(heart);
      }
    };
  
    const handleModal = () => {
      bottomSheetModalRef.current?.present();
    };
  
    // Correct Sound Effect
    const [correctSound, setCorrectSound] = useState<any>();
    async function CorrectPlaySound() {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/sounds/correct2.wav")
      );
      setCorrectSound(correctSound);
      await sound.playAsync();
    }
    useEffect(() => {
      return correctSound ? () => correctSound.uploadAsync() : undefined;
    }, [correctSound]);
  
    // Wrong Sound Effect
    const [wrongSound, setWrongSound] = useState<any>();
    async function WrongPlaySound() {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/sounds/wrong.wav")
      );
      setWrongSound(wrongSound);
      await sound.playAsync();
    }
    useEffect(() => {
      return wrongSound ? () => wrongSound.uploadAsync() : undefined;
    }, [wrongSound]);
  
    useEffect(() => {
      if (selectedAnswerIndex !== null) {
        if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
          setPoints((points) => points + 1);
          setAnswerStatus(true);
          setStyle(styles.quizContainer1);
          setNextQueButton(stylesT.nextQueButton1);
          CorrectPlaySound();
          setCor((cor) => cor + 1);
          addHeart();
          answers.push({ question: index + 1, answer: true });
        } else {
          setAnswerStatus(false);
          setStyle(styles.quizContainer2);
          setNextQueButton(stylesT.nextQueButton2);
          WrongPlaySound();
          removeHeart();
          Vibration.vibrate();
          answers.push({ question: index + 1, answer: false });
          setFifty([]);
        }
      }
    }, [selectedAnswerIndex]);
  
    useEffect(() => {
      setSelectedAnswerIndex(null);
      setStyle(styles.quizContainer);
      setNextQueButton(stylesT.nextQueButton);
      setAnswerStatus(null);
    }, [index]);
  
    useEffect(() => {
      const myInterval = () => {
        if (counter >= 1) {
          setCounter((counter: number) => counter - 1);
          // console.log(counter);
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
  
    // if(counter === 0){
    //   setIndex(index + 1)
    //   setCounter(15)
    // }
  
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
  
    const fiftyfifty = () => {
      // Alert.alert("hello world");
      const wrongAnswers = currentQuestion.options
        .map((option: string[], index: number) => index)
        .filter((index: number) => index !== currentQuestion.correctAnswerIndex);
  
      const randomWrongAnswers = wrongAnswers
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);
  
      // console.log(randomWrongAnswers)
      setFifty(randomWrongAnswers);
    };
  
    const slideAnim = useRef(new Animated.Value(-300)).current;
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const answerAnims = useRef([
      new Animated.Value(0), // Box 0
      new Animated.Value(0), // Box 1
      new Animated.Value(0), // Box 2
      new Animated.Value(0), // Box 3
    ]).current;
  
    useEffect(() => {
      slideAnim.setValue(-300);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }, [index, slideAnim]);
  
    useEffect(() => {
      scaleAnim.setValue(0);
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }, [index, scaleAnim]);
  
    useEffect(() => {
      answerAnims.forEach((anim) => anim.setValue(0));
      setTimeout(() => {
        Animated.stagger(
          200, // Delay between each animation
          answerAnims.map((anim) =>
            Animated.timing(anim, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true,
            })
          )
        ).start();
      }, 300);
    }, [index, answerAnims]);
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView bounces={false}>
          <View
            style={{
              height: "100%",
              backgroundColor: "#005ce6",
              marginTop: height > 1100 ? 100 : null,
            }}
          >
            <View style={[styles.containerInfo, { marginTop: 10 }]}>
              <View>{props.goBack}</View>
              <View style={styles.levelBox}>
                <View>{props.star}</View>
                <Pressable
                  onPress={fiftyfifty}
                  style={{
                    borderColor: "white",
                    borderWidth: 1,
                    padding: 3,
                    borderRadius: 6,
                  }}
                >
                  <Text style={{ color: "white" }}>50%</Text>
                </Pressable>
  
                <Text style={{ color: "white", fontSize: 12 }}>
                  Επίπεδο {props.num}
                </Text>
              </View>
            </View>
            <View></View>
  
            <View style={[styles.progressContainerInfo, { marginTop: -10 }]}>
              <View>
                <Text style={{ color: "white", fontSize: 13 }}>
                  {index + 1} / {totalQuestions}
                </Text>
              </View>
  
              <View>
                <Text style={{ color: "red", fontSize: 15 }}>{heart}</Text>
              </View>
  
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: -20,
                  width: 64,
                  height: 64,
                  backgroundColor: "#ff8000",
                  borderRadius: 20,
                }}
              >
                <Pressable
                  onPress={() =>
                    Alert.alert(
                      "",
                      "Aπάντησε σε 3 συνεχόμενες ερωτήσεις σωστά για να προσθέσεις μια καρδιά.\n\nΜέγιστος αριθμός καρδιών 5.",
                      [{ text: "Ενταξει" }]
                    )
                  }
                  style={{ position: "absolute", left: -40 }}
                >
                  <Ionicons
                    name="information-circle-sharp"
                    size={24}
                    color="white"
                  />
                </Pressable>
                <Text style={[styles.counterNumber, { fontSize: 24 }]}>
                  {counter}
                </Text>
              </View>
            </View>
  
            {/* Progress Bar */}
            <View style={{ marginTop: 0 }}>
              <View style={styles.progressBarBack}>
                <Text
                  style={{
                    // backgroundColor: "#ffc0cb",
                    backgroundColor: "#ff8000",
                    borderRadius: 12,
                    position: "absolute",
                    left: 0,
                    height: 8,
                    right: 0,
                    width: `${Math.floor((index1 / totalQuestions) * 100)}%`,
                  }}
                />
              </View>
            </View>
  
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: height > 1000 ? 120 : 35,
              }}
            >
              <View style={[style, {marginBottom: height>980? 0: 80}]}>
                {/* <View style={style}> */}
                <Animated.Image
                  key={currentQuestion?.id}
                  source={currentQuestion?.img}
                  style={[
                    {
                      borderRadius: 10,
                      marginBottom: 5,
                      width:  "100%",
                      margin: "auto",
                      marginLeft: height > 960 ? (height > 1100 ? 30 : 0) : null,
                      height: height > 960 ? (height > 1000 ? 350 : 250) : 180,
                    },
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
                <View style={{ width: "100%", overflow: "hidden" }}>
                  <Animated.View
                    style={{ transform: [{ translateX: slideAnim }] }}
                  >
                    <Text style={styles.question}>
                      {currentQuestion?.question}
                    </Text>
                  </Animated.View>
                </View>
                <View style={styles.answersContainer}>
                  {currentQuestion?.options.map((item: any, index: any) => (
                    <Pressable
                      key={index}
                      onPress={() => {
                        selectedAnswerIndex === null &&
                          setSelectedAnswerIndex(index);
                        setCounter(false);
                      }}
                      style={[{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "47%",
                        height: height > 960 ? 120 : 90,
                        borderRadius: 6,
                        margin: "1.5%",
                      }, fifty.includes(index)
                      ? { opacity: 0.4 }
                      : { opacity: 1 },]}
                    >
                      <Animated.View
                        style={[
                            selectedAnswerIndex === index &&
                            index === currentQuestion.correctAnswerIndex
                              ? stylesT.correctAnswer
                              : selectedAnswerIndex !== null &&
                                selectedAnswerIndex === index
                              ? stylesT.wrongAnswer
                              : stylesT.borderAnswer ,{
                            opacity: answerAnims[index],
                            transform: [
                              {
                                scale: answerAnims[index].interpolate({
                                  inputRange: [0, 1],
                                  outputRange: [0.8, 1],
                                }),
                              },
                            ],
                          }
                        ]}
                      >
                        <Text
                          style={{
                            marginHorizontal: "auto",
                            fontWeight: "600",
                            color: "white",
                            fontSize: height > 960 ? 20 : 14,
                          }}
                        >
                          {item.answer}
                        </Text>
                        {selectedAnswerIndex === index &&
                        index === currentQuestion.correctAnswerIndex ? (
                          <View
                            style={{
                              position: "absolute",
                              width: "100%",
                              height: "70%",
                              top: 0,
                              right: -30,
                            }}
                          >
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
                          <View
                            style={{
                              position: "absolute",
                              width: "100%",
                              height: "70%",
                              top: 0,
                              right: -30,
                            }}
                          >
                            <LottieView
                              style={{ width: "100%", height: "100%" }}
                              source={require("../../assets/LottieAnimations/Fail.json")}
                              autoPlay
                              loop={false}
                            />
                          </View>
                        ) : null}
                      </Animated.View>
                    </Pressable>
                  ))}
                </View>
              </View>
            </View>
  
            <View style={styles.feedBackArea}>
              {index + 1 >= data.length ? (
                answerStatus === null ? (
                  <View style={{ marginBottom: 40 }} />
                ) : (
                  <View style={{ marginBottom: 75}}>
                    <Pressable
                      onPress={() =>
                        navigation.navigate(nomoiR, {
                          points: points,
                          data: data,
                        })
                      }
                      style={[
                        nextQueButton,
                        { position: "absolute", bottom: 50, right: 180 },
                      ]}
                    >
                      <Text
                        style={{ color: "white", padding: 10, borderRadius: 10 }}
                      >
                        Αποτελέσματα
                      </Text>
                    </Pressable>
                    <Pressable
                      style={[
                        nextQueButton,
                        { position: "absolute", bottom: 50, right: 10 },
                      ]}
                      onPress={handleModal}
                    >
                      <Text
                        style={{ color: "white", padding: 10, borderRadius: 10 }}
                      >
                        Απάντηση
                        {/* <Entypo name="info-with-circle" size={28} color="white" /> */}
                      </Text>
                    </Pressable>
                  </View>
                )
              ) : answerStatus === null ? (
                <View style={{ padding: 38 }} />
              ) : (
                <View>
                  <View style={{ flexDirection: "row", marginBottom: 65 }}>
                    <Pressable
                      onPress={() => {
                        setIndex(index + 1), setFifty([]);
                      }}
                      // style={nextQueButton}
                      style={{
                        position: "absolute",
                        bottom: height > 960 ? 350 : 260,
                        right: -10,
                      }}
                    >
                      <AntDesign name="rightcircle" size={50} color="white" />
                    </Pressable>
                    <Pressable
                      style={[
                        nextQueButton,
                        { position: "absolute", bottom: 50, right: 10 },
                      ]}
                      onPress={handleModal}
                    >
                      <Text
                        style={{ color: "white", padding: 10, borderRadius: 10 }}
                      >
                        Απάντηση
                        {/* <Entypo name="info-with-circle" size={28} color="white" /> */}
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
                            style={{ color: "green", fontSize: 20, padding: 10 }}
                          >
                            Σωστή Απάντηση
                          </Text>
                          <Image
                            source={require("../../assets/Photos/thumbUp.jpg")}
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
                            source={require("../../assets/Photos/sadFace.jpg")}
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
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default NomoiTemplate;
  
  const stylesT = StyleSheet.create({
    button0: {
      position: "relative",
      width: 180,
      height: 40,
      borderRadius: 25,
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: 30,
      marginTop: 0,
    },
    button1: {
      position: "absolute",
      opacity: 0.4,
      // backgroundColor: "#2E86C1",
      backgroundColor: "lightgray",
      width: "100%",
      height: "100%",
      borderRadius: 25,
    },
    BtmModalView: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "white",
      width: "95%",
    },
    btmMdlView: {
      paddingBottom: 20,
      paddingHorizontal: 15,
      gap: 10,
      backgroundColor: "#f5f5f5",
      height: 300,
      borderRadius: 20,
      padding: 10,
    },
    btmMdlText: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: 60,
    },
    infoBtn: {
      position: "absolute",
      bottom: -15,
      right: 10,
      backgroundColor: "magenta",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
    },
    btnText: {
      position: "absolute",
      bottom: 11,
      left: 79,
      color: "white",
      fontWeight: "600",
      fontSize: 20,
    },
    nextQueButton: {
      position: "absolute",
      bottom: -15,
      right: 10,
      backgroundColor: "magenta",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
    },
    nextQueButton1: {
      // position: "absolute",
      // bottom: -15,
      // right: 10,
      backgroundColor: "green",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
    },
    nextQueButton2: {
      backgroundColor: "#dd0530",
      // position: "absolute",
      // bottom: -15,
      // right: 10,
      // backgroundColor: "magenta",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
    },
    correctAnswer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "green",
      width: "100%",
      height: height > 960 ? 120 : 90,
      borderRadius: 6,
      margin: "1.5%",
    },
    wrongAnswer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#dd0530",
      width: "100%",
      height: height > 960 ? 120 : 90,
      borderRadius: 6,
      margin: "1.5%",
    },
    borderAnswer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#006cfa",
      width: "100%",
      height: height > 960 ? 120 : 90,
      borderRadius: 6,
      margin: "1.5%",
    },
  });
  