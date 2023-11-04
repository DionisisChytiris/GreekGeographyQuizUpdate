import {
    SafeAreaView,
    View,
    Text,
    Pressable,
    Image,
    ScrollView,
    StyleSheet,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  import styles from "../styles/testStyle";
  import { Ionicons } from "@expo/vector-icons";
  
  // import { Entypo } from "@expo/vector-icons";
  
  const NomoiTemplate = (props) => {
    const navigation = useNavigation();
    const data = props.questions;
    const nomoiR = props.nomoiResults;
    const totalQuestions = data.length;
    const [points, setPoints] = useState(0);
    const [index, setIndex] = useState(0);
    const [answerStatus, setAnswerStatus] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [counter, setCounter] = useState(15);
    const [style, setStyle] = useState(styles.quizContainer);
    const [nextQueButton, setNextQueButton] = useState(styles.nextQueButton);
    let interval = null;
    let index1 = index + 1;
  
    useEffect(() => {
      if (selectedAnswerIndex !== null) {
        if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
          setPoints((points) => points + 1);
          setAnswerStatus(true);
          setStyle(styles.quizContainer1);
          setNextQueButton(styles.nextQueButton1);
          answers.push({ question: index + 1, answer: true });
        } else {
          setAnswerStatus(false);
          setStyle(styles.quizContainer2);
          setNextQueButton(styles.nextQueButton2);
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
          console.log(counter);
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
  
    const currentQuestion = data[index];
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ height: "100%", backgroundColor: "#005ce6" }}>
            <View style={{ marginTop: 20 }} />
            <View style={styles.containerInfo}>
              <View style={styles.levelBox}>
                <View>{props.star}</View>
                <Text style={{ color: "white", fontSize: 12 }}>Επίπεδο {props.num}</Text>
              </View>
            </View>
  
            <View style={styles.progressContainerInfo}>
              <View>
                <Text style={{ color: "white", fontSize: 13 }}>
                  {index + 1} / {totalQuestions}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: "white",
                  paddingBottom: 50,
                }}
              >
                Νομοί / Πόλεις
              </Text>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 24,
                  height: 24,
                  backgroundColor: "#ff8000",
                  borderRadius: 20,
                }}
              >
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
              <View style={[style, styles.androidShadow]}>
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
                          fontSize: 14
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
                answerStatus === null ? null : (
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
                )
              ) : answerStatus === null ? null : (
                <Pressable
                  onPress={() => setIndex(index + 1)}
                  style={nextQueButton}
                >
                  <Text style={{ color: "white", fontSize: 12 }}>
                    Επόμενη Ερώτηση
                  </Text>
                </Pressable>
              )}
  
              {answerStatus === null ? null : (
                <View
                  style={answerStatus === null ? null : { alignItems: "center" }}
                >
                  {!!answerStatus ? (
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
                          width: 250,
                          height: 180,
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
                        <Text>Συνέχισε έτσι</Text>
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
                      {/* <Text>Helo adfkjl </Text> */}
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
                        {/* <Text>Προσπάθησε περισσότερο</Text> */}
                        <View>
                          <Text
                            style={{ color: "darkblue", textAlign: "center",  fontSize: 12, padding: 20}}
                          >
                            {currentQuestion?.answer}
                          </Text>
                        </View>
                       
                      </View>
                    </View>
                  )}
                </View>
              )}
            </View>
            <Pressable
              onPress={() => navigation.navigate("Quiz")}
              style={stylesT.button0}
            >
              <View style={stylesT.button1} />
              <View style={stylesT.btnText}>
                <Ionicons name="home-outline" size={20} color="white" />
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default NomoiTemplate;
  
  const stylesT = StyleSheet.create({
    button0: {
      position: "relative",
      width: 80,
      height: 40,
      borderRadius: 25,
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: 40,
      // marginTop: 20,
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
      left: 30,
      color: "white",
      fontWeight: "600",
      fontSize: 20,
    },
  });
  