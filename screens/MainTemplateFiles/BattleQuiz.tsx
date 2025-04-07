import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  Image,
  Dimensions,
  Platform,
  Alert,
  Modal,
} from "react-native";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useAppSelector } from "../../ReduxToolkit/store";
import questions from "../../data/BattleQuiz/BattleQuestions";
import { useSoundEffect } from "../Utilities/useSoundEffects";
import mockPlayers from "../../data/MockPlayers/Mockplayers";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, ArrowRight, Home } from "lucide-react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import styles from "../styles/BattleQuizStyles";
import ModalLoading from "../Modals/ModalLoading";

type BattleLinkProp = StackNavigationProp<RootStackParamList, "Quiz1">;

const { height } = Dimensions.get("window");

export default function BattleQuiz() {
  const navigation = useNavigation<BattleLinkProp>();
  const name = useAppSelector((state) => state.user.name);
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [leftAnswers, setLeftAnswers] = useState<boolean[]>([]);
  const [rightAnswers, setRightAnswers] = useState<boolean[]>([]);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [lastPlayerAnswer, setLastPlayerAnswer] = useState<string | null>(null);
  const [gameEnded, setGameEnded] = useState(false);
  const [mockPlayer, setMockPlayer] = useState<{
    name: string;
    img: string;
  } | null>(null);
  const [remainingQuestions, setRemainingQuestions] = useState<Question[]>([]);
  const [playerChoices, setPlayerChoices] = useState<string[]>([]);
  const [aiChoices, setAiChoices] = useState<string[]>([]);
  const randomTime = Math.ceil(Math.random() * (5000 - 1000) + 1000);

  type Question = {
    question: string;
    options: string[];
    correctAnswer: string;
  };

  // Correct Sound Effect
  const CorrectPlaySound = useSoundEffect(
    require("../../assets/sounds/correct3.mp3")
  );
  // Wrong Sound Effect
  const WrongPlaySound = useSoundEffect(
    require("../../assets/sounds/wrong.mp3")
  );

  // const quiz = questions.sort(() => 0.5 - Math.random()).slice(0, 5);
  const shuffleArray = (array: Question[]) => {
    return [...array].sort(() => 0.5 - Math.random());
  };
  
  const getNextQuizBatch = () => {
    if (remainingQuestions.length < 5) {
      // Reshuffle all questions when exhausted
      const reshuffled = shuffleArray(questions);
      setRemainingQuestions(reshuffled.slice(5));
      setQuiz(reshuffled.slice(0, 5));
      console.log("Reshuffling... Questions left after this batch:", reshuffled.length - 5);
    } else {
      const nextBatch = remainingQuestions.slice(0, 5);
      setQuiz(nextBatch);
      setRemainingQuestions(remainingQuestions.slice(5));
      console.log("Questions left after this batch:", remainingQuestions.slice(5).length);
    }
  };
  
  useEffect(() => {
    const shuffled = shuffleArray(questions);
    setRemainingQuestions(shuffled.slice(5));
    setQuiz(shuffled.slice(0, 5));
  }, []);

  // const getRandomQuiz = () => {
  //   const shuffledQuiz = [...questions]
  //     .filter((q): q is Question => q.correctAnswer !== undefined)
  //     .sort(() => 0.5 - Math.random())
  //     .slice(0, 5);
  //   setQuiz(shuffledQuiz);
  // };

  useEffect(() => {
    getNextQuizBatch()
    // getRandomQuiz();
    // const shuffledQuiz = [...questions]
    //   .filter((q): q is Question => q.correctAnswer !== undefined)
    //   .sort(() => 0.5 - Math.random())
    //   .slice(0, 5);
    // setQuiz(shuffledQuiz);
  }, []);

  // Initial setup of the mock player
  useEffect(() => {
    setMockPlayer(mockPlayers[Math.floor(Math.random() * mockPlayers.length)]);
  }, []);

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setLeftAnswers([]);
    setRightAnswers([]);
    setIsPlayerTurn(true);
    setLastPlayerAnswer(null);
    setGameEnded(false);
    setPlayerChoices([]);
    setAiChoices([]);
    getNextQuizBatch()
  };

  useEffect(() => {
    if (!isPlayerTurn && lastPlayerAnswer) {
      const timer = setTimeout(() => {
        const currentQuizData = quiz[currentQuestion];
        let aiAnswer: string;

        // 60% chance to give correct answer
        if (Math.random() < 0.6) {
          aiAnswer = currentQuizData.correctAnswer;
        } else {
          // Pick a random wrong answer
          const wrongOptions = currentQuizData.options.filter(
            (option) => option !== currentQuizData.correctAnswer
          );
          const randomWrongIndex = Math.floor(
            Math.random() * wrongOptions.length
          );
          aiAnswer = wrongOptions[randomWrongIndex];
        }

        handleAnswer("right", aiAnswer);
      }, randomTime);

      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, lastPlayerAnswer]);

  if (!quiz[currentQuestion]) {
    return <ModalLoading isModalVisible={true} onClose={()=>navigation.navigate('Quiz1')}/>;
  }

  const handleAnswer = (
    playerSide: "left" | "right",
    selectedAnswer: string
  ) => {
    const isCorrect = selectedAnswer === quiz[currentQuestion].correctAnswer;

    if (playerSide === "left") {
      setLeftAnswers((prev) => [...prev, isCorrect]);
      setLastPlayerAnswer(selectedAnswer);
      setIsPlayerTurn(false);
      setPlayerChoices((prev) => [...prev, selectedAnswer]);

      if (selectedAnswer === quiz[currentQuestion].correctAnswer) {
        console.log("corret answer player1");
        CorrectPlaySound();
      } else {
        console.log("wrong answer player1");
      }

      // Check if this was the last question
      if (currentQuestion === quiz.length - 1) {
        setTimeout(() => setGameEnded(true), 2500);
      }
    } else {
      setRightAnswers((prev) => [...prev, isCorrect]);
      setIsPlayerTurn(true);
      setLastPlayerAnswer(null);
      setAiChoices((prev) => [...prev, selectedAnswer]);

      if (selectedAnswer === quiz[currentQuestion].correctAnswer) {
        console.log("corret answer player2");
      } else {
        console.log("wrong answer player2");
      }

      // Only move to next question after both players have answered
      if (currentQuestion < quiz.length - 1) {
        setTimeout(() => {
          setCurrentQuestion((prev) => prev + 1);
          setPlayerChoices([]);
          setAiChoices([]);
        }, 1000);
      } else {
        setGameEnded(true);
      }
    }
  };

  const renderAnswerBoxes = (answers: boolean[]) => {
    return (
      <View style={styles.boxesContainer}>
        {[...Array(quiz.length)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.answerBox,
              answers[index] !== undefined && {
                backgroundColor: answers[index] ? "#4CAF50" : "#F44336",
                shadowColor: answers[index] ? "#4CAF50" : "#F44336",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.5,
                shadowRadius: 10,
              },
            ]}
          />
        ))}
      </View>
    );
  };

  const getScore = (answers: boolean[]) => {
    return answers.filter((answer) => answer).length;
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop",
      }}
      style={styles.container}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.3)", "rgba(0,0,0,0.7)"]}
        style={styles.gradient}
      >
        {/* Left player character */}
        <View style={[styles.characterContainer]}>
          <View style={{ marginLeft: 40 }}>
            <View style={styles.containerImg}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop",
                }}
                style={styles.character}
              />
              <Text
                style={[
                  styles.score,
                  { position: "absolute", top: 20, right: -50, fontSize: 24 },
                ]}
              >
                {getScore(leftAnswers)}
              </Text>
            </View>

            <View style={styles.userName}>
              <Text style={styles.text1}>{name ? name : "Εξερευνητής"}</Text>
            </View>
          </View>
          <View style={styles.sideContainer}>
            {renderAnswerBoxes(leftAnswers)}
            <Text style={styles.text1}>{playerChoices}</Text>
          </View>
        </View>

        {/* Question and answers container */}
        <View style={styles.centerContainer}>
          <View style={styles.optionsContainer}>
            {gameEnded &&
            leftAnswers.length === quiz.length &&
            rightAnswers.length === quiz.length ? (
              <View style={{}}>
                {getScore(leftAnswers) > getScore(rightAnswers) ? (
                  <View>
                    <Text style={styles.text2}>Νικητής</Text>
                    <Image
                      source={{
                        uri: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop",
                      }}
                      style={styles.gameOverUserWin}
                    />
                  </View>
                ) : getScore(rightAnswers) > getScore(leftAnswers) ? (
                  <View>
                    <Text style={styles.text2}>Νικητής</Text>
                    <Image
                      source={{
                        uri: mockPlayer?.img,
                      }}
                      style={styles.gameOverMockWin}
                    />
                  </View>
                ) : (
                  <View style={styles.text3Container}>
                    <Text style={styles.text3}>Ισοπαλία</Text>
                  </View>
                )}
              </View>
            ) : (
              quiz[currentQuestion].options.map((option, index) => (
                <Pressable
                  key={index}
                  style={({ pressed }) => [
                    styles.optionButton,
                    pressed && styles.optionButtonPressed,
                  ]}
                  // onPress={() => !isMockTurn && setSelectedAnswer(option)}
                  onPress={() => isPlayerTurn && handleAnswer("left", option)}
                  disabled={!isPlayerTurn}
                >
                  <LinearGradient
                    colors={["#2c3e50", "#3498db"]}
                    style={styles.optionGradient}
                  >
                    <Text style={styles.optionText}>{option}</Text>
                  </LinearGradient>
                </Pressable>
              ))
            )}
          </View>
        </View>

        {/* Right player character */}
        <View style={styles.characterContainer}>
          <View style={{ marginRight: 40 }}>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                marginLeft: 0,
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: mockPlayer?.img }}
                style={styles.character}
              />

              <Text
                style={[
                  styles.score,
                  { position: "absolute", top: 20, left: -50, fontSize: 24 },
                ]}
              >
                {getScore(rightAnswers)}
              </Text>
            </View>
            <View style={styles.mockName}>
              <Text style={styles.text1}>{mockPlayer?.name}</Text>
              {!isPlayerTurn && (
                <View style={[styles.thinkingIndicator, { marginRight: -30 }]}>
                  <Text style={styles.thinkingText}>...</Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.sideContainer}>
            {renderAnswerBoxes(rightAnswers)}
            <Text style={styles.text1}>{aiChoices}</Text>
          </View>
        </View>
        {gameEnded &&
        leftAnswers.length === quiz.length &&
        rightAnswers.length === quiz.length ? (
          <View style={styles.questionContainer}>
            <Text
              style={[
                styles.questionText,
                { fontSize: 20, marginBottom: 10, paddingTop: 0 },
              ]}
            >
              {getScore(leftAnswers) > getScore(rightAnswers) ? (
                "Συγχαρητήρια! Κέρδισες!"
              ) : getScore(leftAnswers) < getScore(rightAnswers) ? (
                <Text>
                  Ο παίκτης{" "}
                  <Text style={{ color: "orange", fontWeight: "bold" }}>
                    {mockPlayer?.name}
                  </Text>{" "}
                  κέρδισε!
                </Text>
              ) : (
                "Ισοπαλία!"
              )}
            </Text>
            <LinearGradient
              colors={["#2ecc71", "#27ae60"]}
              style={{ borderRadius: 12 }}
              // style={styles.restartGradient}
            >
              <Pressable onPress={restartQuiz}>
                <Text
                  style={[
                    styles.text1,
                    {
                      textAlign: "center",
                      paddingVertical: 10,
                      fontSize: 16,
                    },
                  ]}
                >
                  Παίξε ξανά
                </Text>
              </Pressable>
            </LinearGradient>
          </View>
        ) : (
          <View style={styles.questionContainer}>
            <Text style={styles.questionNumber}>
              Ερώτηση {currentQuestion + 1}
            </Text>
            <Text style={styles.questionText}>
              {quiz[currentQuestion]?.question || "No question available"}
            </Text>
          </View>
        )}

        {/* Return Home Button */}
        <Pressable
          onPress={() => navigation.navigate("Quiz1")}
          style={styles.returnQuizBtn}
        >
          <ArrowLeft size={16} color="#ffffff80" />
          <Home size={16} color="#ffffff80" />
        </Pressable>
      </LinearGradient>
    </ImageBackground>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   containerImg: {
//     flexDirection: "row",
//     gap: 10,
//     marginLeft: 0,
//     alignItems: "center",
//   },
//   gradient: {
//     flex: 1,
//     flexDirection: "row",
//     padding: 0,
//   },
//   characterContainer: {
//     width: 100,
//     alignItems: "center",
//     marginTop: Platform.OS === "ios" ? 70 : height > 900 ? 100 : 55,
//   },
//   character: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     // marginBottom: 20,
//     borderWidth: 3,
//     borderColor: "#FFD700",
//   },
//   userName: {
//     position: "absolute",
//     top: 90,
//     left: 0,
//     width: 150,
//     justifyContent: "center",
//     alignItems: "flex-start",
//   },
//   gameOverUserWin: {
//     width: height > 900 ? 120 : 90,
//     height: height > 900 ? 120 : 90,
//     alignSelf: "center",
//     borderRadius: 20,
//     borderColor: "green",
//     borderWidth: 5,
//   },
//   mockName: {
//     position: "absolute",
//     top: 90,
//     right: -25,
//     width: 150,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   gameOverMockWin: {
//     width: height > 900 ? 120 : 90,
//     height: height > 900 ? 120 : 90,
//     alignSelf: "center",
//     borderRadius: 20,
//     borderColor: "red",
//     borderWidth: 5,
//   },
//   score: {
//     color: "#FFD700",
//     fontSize: 14,
//     fontWeight: "600",
//     marginTop: 4,
//     textShadowColor: "rgba(0,0,0,0.5)",
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//   },
//   thinkingIndicator: {
//     // width: 120,
//     backgroundColor: "rgba(0,0,0,0.5)",
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 12,
//     marginTop: 8,
//   },
//   thinkingText: {
//     color: "#FFD700",
//     fontSize: 14,
//     paddingHorizontal: 20,
//     fontWeight: "600",
//   },
//   sideContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   boxesContainer: {
//     height: "60%",
//     justifyContent: "space-around",
//   },
//   answerBox: {
//     width: 40,
//     height: 40,
//     backgroundColor: "rgba(255,255,255,0.2)",
//     borderRadius: 8,
//     marginVertical: 5,
//     borderWidth: 2,
//     borderColor: "rgba(255,255,255,0.3)",
//   },
//   centerContainer: {
//     flex: 1,
//     // marginTop: '55%',
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: "20%",
//     padding: 10,
//   },
//   questionContainer: {
//     position: "absolute",
//     bottom: height > 900 ? "15%" : "8%",
//     width: "90%",
//     backgroundColor: "rgba(255,255,255,0.1)",
//     padding: 20,
//     borderRadius: 15,
//     paddingVertical: 20,
//     marginHorizontal: 20,
//     borderWidth: 1,
//     borderColor: "rgba(255,255,255,0.2)",
//   },
//   questionNumber: {
//     position: "absolute",
//     top: -30,
//     left: 20,
//     // transform: [{ rotate: "-10deg" }],
//     fontSize: 14,
//     color: "#FFD70090",
//     marginBottom: 10,
//     textAlign: "center",
//     fontWeight: "600",
//   },
//   questionText: {
//     fontSize: 24,
//     fontWeight: "600",
//     textAlign: "center",
//     color: "#FFFFFF",
//     paddingVertical: 20,
//     textShadowColor: "rgba(0,0,0,0.5)",
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 5,
//   },
//   optionsContainer: {
//     width: "100%",
//     maxWidth: 400,
//     gap: 12,
//   },
//   optionButton: {
//     borderRadius: 12,
//     overflow: "hidden",
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   optionButtonPressed: {
//     opacity: 0.8,
//     transform: [{ scale: 0.98 }],
//   },
//   optionGradient: {
//     padding: 16,
//     alignItems: "center",
//   },
//   optionText: {
//     fontSize: 18,
//     color: "#FFFFFF",
//     fontWeight: "500",
//     textShadowColor: "rgba(0,0,0,0.5)",
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//   },
//   text1: {
//     fontSize: 12,
//     fontFamily: "Poppins-Bold",
//     color: "#d6d6d6",
//     textAlign: "right",
//   },
//   text2: {
//     fontSize: height > 900 ? 22 : 18,
//     fontFamily: "Poppins-Bold",
//     color: "#d6d6d6",
//     textAlign: "center",
//     paddingBottom: 20,
//   },
//   text3Container: {
//     width: "90%",
//     backgroundColor: "rgba(255,255,255,0.1)",
//     padding: 20,
//     borderRadius: 15,
//     paddingVertical: 20,
//     marginHorizontal: 20,
//     borderWidth: 1,
//     borderColor: "rgba(255,255,255,0.2)",
//   },
//   text3: {
//     fontSize: height > 900 ? 24 : 20,
//     fontFamily: "Poppins-Bold",
//     color: "#d6d6d6",
//     textAlign: "center"
//   },
//   returnQuizBtn: {
//     position: "absolute",
//     top: Platform.OS === "ios" ? 20 : height > 900 ? 20 : 10,
//     left: 0,
//     paddingVertical: 30,
//     paddingHorizontal: 10,
//     flexDirection: "row",
//   },
// });
