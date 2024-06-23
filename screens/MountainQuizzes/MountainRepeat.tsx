import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Vibration,
  Alert,
  Dimensions
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../Types/RootStackParamList";
import styles from "../styles/testStyle";
import questions from "../../data/Mountain/questions";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons";

const { height } = Dimensions.get('window');

type MountRepeatProp = StackNavigationProp<RootStackParamList, 'MountainRepeat'>

const MountainRepeat = () => {
  const navigation = useNavigation<MountRepeatProp>();
  const data = questions;
  const totalQuestions = data.length;
  const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState<boolean|null>(null);
  const [answers, setAnswers] = useState<any>([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [counter, setCounter] = useState<any>(15);
  const [style, setStyle] = useState<any>(styles.quizContainer);
  const [nextQueButton, setNextQueButton] = useState<any>(stylesT.nextQueButton);
  const [btnBackground, setBtnBackground] = useState("#2E86C1");
  let interval:any = null;
  let index1 = index + 1;
  const currentQuestion = data[index];
  const bottomSheetModalRef = useRef<any>(null);
  const snapPoints = ["50%"];
  const [heart, setHeart] = useState<any>(["❤️", "❤️", "❤️"]);
  const [cor, setCor] = useState(0);

  const removeHeart = () => {
    const newArray = heart.length - 1;
    heart.pop(newArray);
    setHeart(heart);
    {
      newArray === 0 && navigation.navigate("LakeRiverLoseScreenR");
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
        setCounter((counter:number) => counter - 1);
      }
      if (counter === 1) {
        navigation.navigate("MountainLoseScreenR");
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
      navigation.navigate("MountainResultsRepeat",{points,data});
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView bounces={false}>
        <ImageBackground
          source={require("../../assets/meteora.jpg")}
        >
          <View style={styles.progressContainerInfo}>
            <View>
              <Text style={{ color: "white", fontSize: 13 }}>
                {index + 1} / {totalQuestions}
              </Text>
            </View>

            <View>
              <Text style={{ color: "red", fontSize: 15 }}>{heart}</Text>
            </View>

            <Pressable
              onPress={() =>
                Alert.alert(
                  "",
                  "Aπάντησε σε 3 συνεχόμενες ερωτήσεις σωστά για να προσθέσεις μια καρδιά.\n\nΜέγιστος αριθμός καρδιών 5.",
                  [{ text: "Ενταξει" }]
                )
              }
              style={{ position: "absolute", top: 32, right: height>900? 130:90 }}
            >
              <Ionicons
                name="information-circle-sharp"
                size={24}
                color="white"
              />
            </Pressable>
            <View style={stylesT.timer}>
              <Text
                style={{
                  ...styles.counterNumber,
                  fontSize: 30,
                  color: "#2E86C1",
                }}
              >
                {counter}
              </Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressBarBack}>
            <Text
              style={[
                stylesT.progressBar,
                { width: `${Math.floor((index1 / totalQuestions) * 100)}%` },
              ]}
            />
          </View>

          <View style={{ paddingVertical: 20, paddingHorizontal: height>900? 120: 35 }}>
          <View style={style}>
              <Image source={currentQuestion?.img} style={stylesT.image} />
              <Text style={styles.question}>{currentQuestion?.question}</Text>
              <View style={styles.answersContainer}>
                {currentQuestion?.options.map((item: any, index: any) => (
                  <Pressable
                    key={index}
                    onPress={() => {
                      selectedAnswerIndex === null &&
                        setSelectedAnswerIndex(index);
                      setCounter(false);
                    }}
                    style={
                      selectedAnswerIndex === index &&
                      index === currentQuestion.correctAnswerIndex
                        ? styles.correctAnswer
                        : selectedAnswerIndex !== null &&
                          selectedAnswerIndex === index
                        ? styles.wrongAnswer
                        : styles.borderAnswer
                    }
                  >
                    <Text style={stylesT.textAnswer}>{item.answer}</Text>
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
                <View style={{ marginBottom: 50 }}>
                  <Pressable
                    onPress={() =>
                      navigation.navigate("MountainResults", {
                        points: points,
                        data: data,
                      })
                    }
                    style={[
                      nextQueButton,
                      { position: "absolute", bottom: -15, right: 180 },
                    ]}
                  >
                    <Text
                      style={{ color: "white", padding: 10, borderRadius: 10 }}
                    >
                      Αποτελέσματα
                    </Text>
                  </Pressable>
                  <Pressable  style={[
                      nextQueButton,
                      { position: "absolute", bottom: -15, right: 10 },
                    ]} onPress={handleModal}>
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
                    onPress={() => setIndex(index + 1)}
                    // style={nextQueButton}
                    style={{ position: "absolute", bottom: height>900? 350:260, right: -10 }}
                  >
                    <AntDesign name="rightcircle" size={50} color="white" />
                  </Pressable>
                  <Pressable
                    style={[
                      nextQueButton,
                      { position: "absolute", bottom: -15, right: 10 },
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
              backgroundStyle={{ borderRadius: 30 }}
            >
              <View style={{ flex: 1, alignItems: "center" }}>
                {answerStatus === null ? null : (
                  <View
                    style={
                      answerStatus === null ? null : { alignItems: "center" }
                    }
                  >
                    {!!answerStatus ? (
                      <View style={[stylesT.BtmModalView, { width: "100%" }]}>
                        <View style={stylesT.btmMdlText}>
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
                              // marginBottom: 20,
                              width: 50,
                              height: 50,
                            }}
                          />
                        </View>

                        <View style={stylesT.btmMdlView}>
                          <Text style={{ color: "#22c200" }}>
                            {currentQuestion?.result1}{" "}
                          </Text>
                          <Text style={{ color: "black" }}>
                            {currentQuestion?.result2}{" "}
                          </Text>
                          <Text style={{ color: "#014acf" }}>
                            {currentQuestion?.result3}{" "}
                          </Text>
                          <Text style={{ color: "magenta" }}>
                            {currentQuestion?.result4}{" "}
                          </Text>
                        </View>
                      </View>
                    ) : (
                      <View style={stylesT.BtmModalView}>
                        <View style={stylesT.btmMdlText}>
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
                        </View>
                        <View style={stylesT.btmMdlView}>
                          <Text style={{ color: "#22c200" }}>
                            {currentQuestion?.result1}{" "}
                          </Text>
                          <Text style={{ color: "black" }}>
                            {currentQuestion?.result2}{" "}
                          </Text>
                          <Text style={{ color: "#014acf" }}>
                            {currentQuestion?.result3}{" "}
                          </Text>
                          <Text style={{ color: "magenta" }}>
                            {currentQuestion?.result4}{" "}
                          </Text>
                        </View>
                      </View>
                    )}
                  </View>
                )}
              </View>
            </BottomSheetModal>
          </View>
        </ImageBackground>
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MountainRepeat;

const stylesT = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    paddingTop: 30,
  },
  timer: {
    alignItems: "center",
    justifyContent: "center",
    // position: 'absolute',
    // top: 0,
    // right: 10,
    marginTop: 15,
    marginRight: -30,
    width: 60,
    height: 60,
    backgroundColor: "#b8f5ef",
    borderRadius: 20,
  },
  progressBar: {
    backgroundColor: "#0059DF",
    borderRadius: 12,
    position: "absolute",
    left: 0,
    height: 8,
    right: 0,
  },
  image: {
    borderRadius: 10,
    marginBottom: 20,
    width: height>900?"90%": '100%',
    margin: 'auto',
    height: height>900? 300:180,
  },
  textAnswer: {
    marginHorizontal: "auto",
    fontWeight: "600",
    color: "white",
    fontSize: 14,
  },
  button0: {
    position: "relative",
    width: 180,
    height: 40,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 0,
    marginBottom: 40,
  },
  button1: {
    position: "absolute",
    opacity: 0.4,
    backgroundColor: "#2E86C1",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  btnText: {
    position: "absolute",
    bottom: 11,
    left: 79,
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
  progressContainerInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "10%",
  },
  progressBarBack: {
    backgroundColor: "white",
    // backgroundColor: "green",
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    height: 7,
    borderRadius: 20,
    justifyContent: "center",
    marginTop: "8%",
    marginBottom: -10,
    marginLeft: "auto",
    marginRight: "auto",
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
    right: -10,
    backgroundColor: "transparent",
    // width: 80,
    // height: 80,
    alignItems: "center",
    justifyContent: "center",
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
});