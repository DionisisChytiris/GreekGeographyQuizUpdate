import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Vibration,
  Alert,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import styles from "../styles/testStyle";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Entypo } from "@expo/vector-icons";

type GenerQTProp = StackNavigationProp<RootStackParamList,'GenerQuestTemplate'>

const GenerQuestTemplate = (props:any) => {
  const navigation = useNavigation<GenerQTProp>();
  const data = props.questions;
  const nomoiR = props.nomoiResults;
  const totalQuestions = data.length;
  const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState<boolean|null>(null);
  const [answers, setAnswers] = useState<any>([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [counter, setCounter] = useState<any>(15);
  const [style, setStyle] = useState<any>(styles.quizContainer);
  const [nextQueButton, setNextQueButton] = useState<any>(styles.nextQueButton);
  const [btnBackground, setBtnBackground] = useState("magenta");
  const [opacityBtn, setOpacityBtn] = useState(1);
  let interval:any = null;
  let index1 = index + 1;
  const bottomSheetModalRef = useRef<any>(null);
  const snapPoints = ["50%"];
  const [heart, setHeart] = useState<any>(["❤️", "❤️", "❤️"]);
  const [cor, setCor] = useState(0);
  const currentQuestion = data[index];

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
        setNextQueButton(styles.nextQueButton1);
        CorrectPlaySound();
        setCor((cor) => cor + 1);
        addHeart();
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        setStyle(styles.quizContainer2);
        setNextQueButton(styles.nextQueButton2);
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
    setNextQueButton(styles.nextQueButton);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((counter:number) => counter - 1);
      }
      if (counter === 1) {
        navigation.navigate(props.losescr);
      }
    };
    interval = setTimeout(myInterval, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [counter]);

  useEffect(() => {
    if (index + 1 > data.length) {
      navigation.navigate("GeneralQuestionsResult1",{points, data});
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <ImageBackground source={require("../../assets/MorePhotos/ath.jpg")}>
          <View>
            <View style={styles.containerInfo}>
              {/* <View style={styles.levelBox}>
                <View>{props.star}</View>
                <Text style={{ color: "white" }}>Επίπεδο {props.num}</Text>
              </View> */}
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: "white",
                  textAlign: "center",
                  marginTop: 30,
                }}
              >
                Γενικές Ερωτήσεις
              </Text>
            </View>

            <View style={styles.progressContainerInfo}>
              <View>
                <Text style={{ color: "white" }}>
                  {index + 1} / {totalQuestions}
                </Text>
              </View>

              <View>
                <Text style={{ color: "red", fontSize: 15 }}>{heart}</Text>
              </View>

              <View
                style={{
                  //  padding: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 34,
                  height: 34,
                  backgroundColor: "magenta",
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
                  style={styles.btnInfoHeart}
                >
                  <Ionicons
                    name="information-circle-sharp"
                    size={24}
                    color="black"
                  />
                </Pressable>
                <Text style={styles.counterNumber}>{counter}</Text>
              </View>
            </View>

            {/* Progress Bar */}
            <View style={styles.progressBarBack}>
              <Text
                style={{
                  // backgroundColor: "#ffc0cb",
                  backgroundColor: "magenta",
                  borderRadius: 12,
                  position: "absolute",
                  left: 0,
                  height: 7,
                  right: 0,
                  width: `${Math.floor((index1 / totalQuestions) * 100)}%`,
                }}
              />
            </View>

            <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
              <View style={style}>
                <Image
                  source={currentQuestion?.img}
                  // resizeMethod="contain"
                  // style={styles.image}
                  style={{
                    borderRadius: 10,
                    marginBottom: 10,
                    width: "100%",
                    height: 180,
                  }}
                  // imageStyle={{borderRadius: 16}}
                />
                <Text style={styles.question}>{currentQuestion?.question}</Text>
                <View style={styles.answersContainer}>
                  {currentQuestion?.options.map((item:any, index:any) => (
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
                      <Text
                        style={{
                          marginHorizontal: "auto",
                          fontWeight: "600",
                          color: "white",
                          fontSize: 14,
                        }}
                      >
                        {item.answer}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>
            </View>

            <View style={styles.feedBackArea}>
              {index + 1 >= data.length ? (
                answerStatus === null ? (
                  <Pressable
                    onPressIn={() => setBtnBackground("#62a9da")}
                    onPressOut={() => {
                      navigation.navigate("Quiz");
                      setBtnBackground("#2E86C1");
                    }}
                    style={stylesT.button0}
                  >
                    <View
                      style={[
                        stylesT.button1,
                        { backgroundColor: btnBackground },
                      ]}
                    />
                    <View style={stylesT.btnText}>
                      <Ionicons name="home-outline" size={20} color="white" />
                    </View>
                  </Pressable>
                ) : (
                  <View style={{ marginBottom: 25 }}>
                    <Pressable
                      onPress={() =>
                        navigation.navigate(nomoiR, {
                          points: points,
                          data: data,
                        })
                      }
                      style={nextQueButton}
                    >
                      <Text style={{ color: "white" }}>Αποτελέσματα</Text>
                    </Pressable>
                  </View>
                )
              ) : answerStatus === null ? (
                <View style={{ marginBottom: 25 }}>
                  <Pressable
                    onPressIn={() => setBtnBackground("#62a9da")}
                    onPressOut={() => {
                      navigation.navigate("Quiz");
                      setBtnBackground("#2E86C1");
                    }}
                    style={stylesT.button0}
                  >
                    <View
                      style={[
                        stylesT.button1,
                        { backgroundColor: btnBackground },
                      ]}
                    />
                    <View style={stylesT.btnText}>
                      <Ionicons name="home-outline" size={20} color="white" />
                    </View>
                  </Pressable>
                </View>
              ) : (
                <View style={{ flexDirection: "row", marginBottom: 65 }}>
                  <Pressable
                    onPressIn={() => setOpacityBtn(0.8)}
                    onPress={() => {
                      setIndex(index + 1);
                      setOpacityBtn(1);
                    }}
                    style={[nextQueButton, { opacity: opacityBtn }]}
                  >
                    <Text style={{ color: "white", fontSize: 12 }}>
                      Επόμενη Ερώτηση
                    </Text>
                  </Pressable>
                  <Pressable
                    style={{
                      position: "absolute",
                      bottom: -15,
                      right: -10,
                      backgroundColor: "transparent",
                      width: 80,
                      height: 80,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onPress={handleModal}
                  >
                    <Text>
                      <Entypo name="info-with-circle" size={28} color="white" />
                    </Text>
                  </Pressable>
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
                            style={{
                              marginVertical: 20,
                              width: 50,
                              height: 50,
                            }}
                          />
                        </View>
                        <View
                          style={{
                            paddingBottom: 20,
                            paddingHorizontal: 15,
                            gap: 10,
                            backgroundColor: "#f5f5f5",
                            height: 300,
                            borderRadius: 20,
                            padding: 10,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
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
                      <View
                        style={{
                          flex: 1,
                          alignItems: "center",
                          backgroundColor: "white",
                          width: "95%",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            height: 60,
                          }}
                        >
                          <Text
                            style={{ color: "red", fontSize: 20, padding: 10 }}
                          >
                            Λάθος Απάντηση
                          </Text>
                          <Image
                            source={require("../../assets/sadFace.jpg")}
                            style={{
                              marginVertical: 20,
                              width: 50,
                              height: 50,
                            }}
                          />
                        </View>
                        <View
                          style={{
                            paddingBottom: 20,
                            paddingHorizontal: 15,
                            gap: 10,
                            backgroundColor: "#f5f5f5",
                            height: 300,
                            borderRadius: 20,
                            padding: 10,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
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
              </BottomSheetModal>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GenerQuestTemplate;

const stylesT = StyleSheet.create({
  button0: {
    position: "relative",
    width: 180,
    height: 40,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    marginTop: 0,
  },
  button1: {
    position: "absolute",
    opacity: 0.4,
    backgroundColor: "magenta",
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
});
