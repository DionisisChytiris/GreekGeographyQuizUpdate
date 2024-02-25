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
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import styles from "../styles/testStyle";
import questions from "../../data/Mountain/questions";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Entypo } from "@expo/vector-icons";

type MountainProp = StackNavigationProp<RootStackParamList,'Mountain'>

const Mountain = () => {
  const navigation = useNavigation<MountainProp>();
  const data = questions;
  // const nomoiR = props.nomoiResults;
  const totalQuestions = data.length;
  const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState<boolean|null>(null);
  const [answers, setAnswers] = useState<any>([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [counter, setCounter] = useState<any>(15);
  const [style, setStyle] = useState<any>(styles.quizContainer);
  const [nextQueButton, setNextQueButton] = useState<any>(styles.nextQueButton);
  const [btnBackground, setBtnBackground] = useState("#2E86C1");
  let interval:any = null;
  let index1 = index + 1;
  const currentQuestion = data[index];
  const bottomSheetModalRef = useRef<any>(null);
  const snapPoints = ["50%"];
  const [heart, setHeart] = useState<any>(["❤️", "❤️", "❤️"]);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  // Add Heart (lives)
  const removeHeart = () => {
    const newArray = heart.length - 1;
    heart.pop(newArray);
    setHeart(heart);
    {newArray === 0 && navigation.navigate("LakeRiverLoseScreenR")}
  };

  const addHeart = () => {
    if (correctAnswer === 2 && heart.length < 5) {
      heart.push("❤️");
      setCorrectAnswer(0);
      setHeart(heart);
    }
  };

  // Bottom Modal
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

  // Find Correct Answer
  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints((points) => points + 1);
        setAnswerStatus(true);
        setStyle(styles.quizContainer1);
        setNextQueButton(styles.nextQueButton1);
        CorrectPlaySound();
        setCorrectAnswer((cor) => cor + 1);
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

  // Counter
  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((counter:number) => counter - 1);
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

  // if(counter === 0){
  //   setIndex(index + 1)
  //   setCounter(15)
  // }

  useEffect(() => {
    if (index + 1 > data.length) {
      navigation.navigate("MountainResults",{points,data});
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
        <ImageBackground source={require("../../assets/meteora.jpg")}>
          <View style={styles.containerInfo}>
            <Text style={stylesT.title}>Βουνά</Text>
          </View>
          <View style={styles.progressContainerInfo}>
            <View>
              <Text style={{ color: "white", fontSize: 13 }}>
                {index + 1} / {totalQuestions}
              </Text>
            </View>

            <View>
              <Text style={{ color: "red", fontSize: 15 }}>{heart}</Text>
            </View>

            <View style={stylesT.counter}>
            <Pressable
                onPress={()=>
                  Alert.alert('','Aπάντησε σε 3 συνεχόμενες ερωτήσεις σωστά για να προσθέσεις μια καρδιά.\n\nΜέγιστος αριθμός καρδιών 5.', [{text: 'Ενταξει'}])
                }
                 style={styles.btnInfoHeart}
                 >
                <Ionicons name="information-circle-sharp" size={24} color="black" />
              </Pressable>
              <Text style={styles.counterNumber}>{counter}</Text>
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

          <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
            <View style={style}>
              <Image source={currentQuestion?.img} style={stylesT.img} />
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
                    <Text style={stylesT.answer}>{item.answer}</Text>
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
                      navigation.navigate("MountainResults", {
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
                  onPress={() => setIndex(index + 1)}
                  style={nextQueButton}
                >
                  <Text style={{ color: "white", fontSize: 12 }}>
                    Επόμενη Ερώτηση
                  </Text>
                </Pressable>
                <Pressable style={stylesT.modalButton} onPress={handleModal}>
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
                    <View style={stylesT.correctAnswerContainer}>
                     <View style={stylesT.answerBox}>
                        <Text
                          style={{ color: "green", fontSize: 20, padding: 10 }}
                        >
                          Σωστή Απάντηση
                        </Text>
                        <Image
                          source={require("../../assets/thumbUp.jpg")}
                          resizeMode="cover"
                          style={stylesT.emoji}
                        />
                      </View>
                      <View style={stylesT.modalResults}>
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
                    <View style={stylesT.wrongAnswerContainer}>
                      <View style={stylesT.answerBox}>
                        <Text
                          style={{ color: "red", fontSize: 20, padding: 10 }}
                        >
                          Λάθος Απάντηση
                        </Text>
                        <Image
                          source={require("../../assets/sadFace.jpg")}
                          resizeMode="cover"
                          style={stylesT.emoji}
                        />
                      </View>
                      <View style={stylesT.modalResults}>
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
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Mountain;

const stylesT = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    paddingTop: 30,
  },
  counter: {
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    backgroundColor: "#00ff00",
    borderRadius: 20,
  },
  progressBar: {
    backgroundColor: "#00ff00",
    borderRadius: 12,
    position: "absolute",
    left: 0,
    height: 8,
    right: 0,
  },
  answer: {
    marginHorizontal: "auto",
    fontWeight: "600",
    color: "white",
    fontSize: 14,
  },
  correctAnswerContainer: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
  },
  wrongAnswerContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    width: "95%",
  },
  answerBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  img: {
    borderRadius: 10,
    marginBottom: 5,
    width: "100%",
    height: 180,
  },
  emoji: {
    marginVertical: 20,
    width: 50,
    height: 50,
  },
  button0: {
    position: "relative",
    // position: "absolute",
    // bottom: 20,
    width: 180,
    height: 40,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 25,
    marginBottom: 35,
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
  modalButton: {
    position: "absolute",
    bottom: -15,
    right: -10,
    backgroundColor: "transparent",
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  modalResults: {
    paddingBottom: 20,
    paddingHorizontal: 15,
    gap: 10,
    backgroundColor: "#f5f5f5",
    height: 300,
    borderRadius: 20,
    padding: 10,
  },
});
