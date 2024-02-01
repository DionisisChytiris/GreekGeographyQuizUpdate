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
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/testStyle";
import questions from "../../data/LakeRiver/questions";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Entypo } from "@expo/vector-icons";

// import { Entypo } from "@expo/vector-icons";

const LakeRiverRepeat = () => {
  const navigation = useNavigation();
  const data = questions;
  // const nomoiR = props.nomoiResults;
  const totalQuestions = data.length;
  const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [counter, setCounter] = useState(15);
  const [style, setStyle] = useState(styles.quizContainer);
  const [nextQueButton, setNextQueButton] = useState(styles.nextQueButton);
  const [btnBackground, setBtnBackground] = useState("#2E86C1");
  let interval = null;
  let index1 = index + 1;
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["50%"];
  const [heart, setHeart] = useState(["❤︎", "❤︎", "❤︎"])
 
  const removeHeart = () => {
    const newArray = heart.length - 1
    heart.pop(newArray)
    setHeart(heart)
  }

  if (heart.length === 0) {
    navigation.navigate("LakeRiverLoseScreenR");
  }

  const handleModal = () => {
    bottomSheetModalRef.current?.present();
  };

  // Correct Sound Effect
  const [correctSound, setCorrectSound] = useState();
  async function CorrectPlaySound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sounds/correct2.wav")
    );
    setCorrectSound(correctSound);
    await sound.playAsync();
  }
  useEffect(() => {
    return correctSound
      ? () => {
          correctSound.uploadAsync();
        }
      : undefined;
  }, [correctSound]);

  // Wrong Sound Effect
  const [wrongSound, setWrongSound] = useState();
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
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        setStyle(styles.quizContainer2);
        setNextQueButton(styles.nextQueButton2);
        WrongPlaySound();
        removeHeart()
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
        setCounter((counter) => counter - 1);
      }
      if (counter === 1) {
        navigation.navigate("LakeRiverLoseScreenR");
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
      navigation.navigate("LakeRiverResultsRepeat");
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  const currentQuestion = data[index];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <ImageBackground
          source={require("../../assets/MorePhotos/lake2.jpg")}
          // resizeMode="cover"
          style={answerStatus == null ? { height: "100%" } : { height: "150%" }}
        >
          <View style={styles.containerInfo}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "white",
                textAlign: "center",
                paddingTop: 30,
              }}
            >
              Λίμνες / Ποτάμια
            </Text>
          </View>

          <View style={styles.progressContainerInfo}>
            <View>
              <Text style={{ color: "white", fontSize: 13 }}>
                {index + 1} / {totalQuestions}
              </Text>
            </View>

            <View>
              <Text style={{ color: "red", fontSize: 25 }}>
                {heart}
              </Text>
            </View>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 34,
                height: 34,
                backgroundColor: "#0059DF",
                borderRadius: 20,
              }}
            >
              <Text style={styles.counterNumber}>{counter}</Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressBarBack}>
            <Text
              style={{
                // backgroundColor: "#ffc0cb",
                backgroundColor: "#0059DF",
                borderRadius: 12,
                position: "absolute",
                left: 0,
                height: 8,
                right: 0,
                width: `${Math.floor((index1 / totalQuestions) * 100)}%`,
              }}
            />
          </View>

          <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
            {/* <View style={[style, {opacity: 0.5}]}> */}
            <View style={style}>
              <View>
                <Image
                  source={currentQuestion?.img}
                  style={{
                    borderRadius: 10,
                    marginBottom: 5,
                    width: "100%",
                    height: 180,
                  }}
                />
                <Text style={styles.question}>{currentQuestion?.question}</Text>
                <View style={styles.answersContainer}>
                  {currentQuestion?.options.map((item, index) => (
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
                          // padding: 30
                        }}
                      >
                        {item.answer}
                      </Text>
                    </Pressable>
                  ))}
                </View>
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
                <View style={{ marginBottom: 40 }}>
                  <Pressable
                    onPress={() =>
                      navigation.navigate("LakeRiverResultsRepeat", {
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
              <Pressable
                onPressIn={() => setBtnBackground("#62a9da")}
                onPressOut={() => {
                  navigation.navigate("Quiz");
                  setBtnBackground("#2E86C1");
                }}
                style={stylesT.button0}
              >
                <View
                  style={[stylesT.button1, { backgroundColor: btnBackground }]}
                />
                <View style={stylesT.btnText}>
                  <Ionicons name="home-outline" size={20} color="white" />
                </View>
              </Pressable>
            ) : (
              <View style={{ flexDirection: "row", marginBottom: 55 }}>
                <Pressable
                  onPress={() => setIndex(index + 1)}
                  style={nextQueButton}
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
          </View>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            backgroundStyle={{ borderRadius: 50 }}
          >
            {answerStatus === null ? null : (
              <View
                style={answerStatus === null ? null : { alignItems: "center" }}
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
                        style={{ color: "green", fontSize: 20, padding: 10 }}
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
                    <View
                      style={{
                        paddingBottom: 20,
                        paddingHorizontal: 15,
                        gap: 10,
                        backgroundColor: "#f5f5f5",
                        height: 300,
                        borderRadius: 20,
                        padding: 10,
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
                      <Text style={{ color: "red", fontSize: 20, padding: 10 }}>
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
                    <View
                      style={{
                        paddingBottom: 20,
                        paddingHorizontal: 15,
                        gap: 10,
                        backgroundColor: "#f5f5f5",
                        height: 300,
                        borderRadius: 20,
                        padding: 10,
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
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LakeRiverRepeat;

const stylesT = StyleSheet.create({
  button0: {
    position: "relative",
    width: 180,
    height: 40,
    borderRadius: 25,
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
});
