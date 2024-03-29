import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  StyleSheet,
  Vibration,
  Alert
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

type NomoiTProp = StackNavigationProp<RootStackParamList,'NomoiResultTemplate'>


const NomoiTemplate = (props:any) => {
  const navigation = useNavigation<NomoiTProp>();
  const data = props.questions;
  const nomoiR = props.nomoiResults;
  const totalQuestions = data.length;
  const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(0);
  const currentQuestion = data[index];
  const [answerStatus, setAnswerStatus] = useState<boolean|null>(null);
  const [answers, setAnswers] = useState<any>([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [counter, setCounter] = useState<any>(15);
  const [style, setStyle] = useState<any>(styles.quizContainer);
  const [nextQueButton, setNextQueButton] = useState<any>(styles.nextQueButton);
  const [btnBackground, setBtnBackground] = useState("lightgrey");
  let interval:any = null;
  let index1 = index + 1;
  const bottomSheetModalRef = useRef<any>(null);
  const snapPoints = ["50%"];
  const [heart, setHeart] = useState<any>(["❤️", "❤️", "❤️"]);
  const [cor, setCor] = useState(0)
  // const [tr, setTr] = useState<boolean>(true)

  const removeHeart =() => {
    const newArray= heart.length -1;
    heart.pop(newArray);
    setHeart(heart);
    {newArray === 0 && navigation.navigate("LakeRiverLoseScreenR")}
  };

  const addHeart = ()=> {
    if(cor === 2 &&  heart.length < 5) {
      heart.push("❤️")
      setCor(0)
      setHeart(heart)
    }
  }

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
        setCor(cor=>cor + 1)
        addHeart()
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
        // console.log(counter);
      }
      if (counter === 1) {
        navigation.navigate(props.nomoiLoseScreen);
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

 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ height: "100%", backgroundColor: "#005ce6" }}>
          <View style={{ marginTop: 20 }} />
          <View style={styles.containerInfo}>
            <View style={styles.levelBox}>
              <View>{props.star}</View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: "white",
                  paddingTop: 20,
                  paddingLeft: 35
                }}
              >
                Νομοί / Πόλεις
              </Text>
              <Text style={{ color: "white", fontSize: 12 }}>
                Επίπεδο {props.num}
              </Text>
            </View>
          </View>
          <View></View>

          <View style={[styles.progressContainerInfo, {marginBottom: 25}]}>
            <View>
              <Text style={{ color: "white", fontSize: 13 }}>
                {index + 1} / {totalQuestions}
              </Text>
            </View>

            <View>
              <Text style={{ color: "red", fontSize: 15 }}>
                {heart}
              </Text>
            </View>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 34,
                height: 34,
                backgroundColor: "#ff8000",
                borderRadius: 20,
              }}
            >
              <Pressable
                onPress={()=>
                  Alert.alert('','Aπάντησε σε 3 συνεχόμενες ερωτήσεις σωστά για να προσθέσεις μια καρδιά.\n\nΜέγιστος αριθμός καρδιών 5.', [{text: 'Ενταξει'}])
                }
                 style={{position: 'absolute', left: -40}}
                 >
                <Ionicons name="information-circle-sharp" size={24} color="black" />
              </Pressable>
              <Text style={styles.counterNumber}>{counter}</Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={{ marginTop: -20 }}>
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

          <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
            <View style={style}>
              {/* <View style={style}> */}
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
                  onPress={() => setIndex(index + 1)}
                  style={nextQueButton}
                >
                  <Text style={{ color: "white", fontSize: 12 }}>
                    Επόμενη Ερώτηση
                  </Text>
                </Pressable>
                <Pressable onPress={handleModal}>
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
                          marginBottom: 20,
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
  btnText: {
    position: "absolute",
    bottom: 11,
    left: 79,
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
});
