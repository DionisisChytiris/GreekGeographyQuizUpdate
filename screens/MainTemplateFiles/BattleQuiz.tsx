import {
  View,
  Text,
  Pressable,
  ImageBackground,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from "react-native-reanimated";
import { useCallback, useEffect, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useAppDispatch, useAppSelector } from "../../ReduxToolkit/store";
import questions from "../../data/BattleQuiz/BattleQuestions";
import { useSoundEffect } from "../Utilities/useSoundEffects";
import mockPlayers from "../../data/MockPlayers/Mockplayers";
import { useNavigation } from "@react-navigation/native";
import * as StoreReview from "expo-store-review";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import styles from "../styles/BattleQuizStyles";
import ModalLoading from "../Modals/ModalLoading";
import { incrementCoinsBonus, saveCoins } from "../../ReduxToolkit/coinsSlice";
import { Audio } from "expo-av";
import { trackEvent } from "../../GoogleAnalytics/trackEvent";
import { trackEventsOrganized } from "../../GoogleAnalytics/trackEventsOrganized";
import { Ionicons, Feather } from "@expo/vector-icons";
import CharacterModal from "../Modals/SelectImageModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ContactButton from "../components/ContactButton";
import { logInfo, logError } from "../../utils/logger";

type BattleLinkProp = StackNavigationProp<RootStackParamList, "Quiz1">;

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const imageOptions = [
  "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497899291447-f41b9a6c7a6f?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1669725687150-15c603ac6a73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1707732067917-7401e4db3fd0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1584866459331-e9dae24a24ff?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const CHARACTER_KEY = "selectedCharacterUri";

// const useSoundDrumLoopPlayer = (soundFile: string) => {
//   const [sound, setSound] = useState<Audio.Sound | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   // Load sound and handle cleanup on unmount
//   useEffect(() => {
//     const loadSound = async () => {
//       try {
//         // Ensure the sound is loaded properly
//         const { sound } = await Audio.Sound.createAsync(
//           { uri: soundFile }
//         );
//         setSound(sound);
//         console.log('Sound loaded successfully!');
//       } catch (error) {
//         console.error('Error loading sound:', error);
//       }
//     };

//     loadSound();

//     // Cleanup when the component is unmounted
//     return () => {
//       if (sound) {
//         sound.unloadAsync();
//         console.log('Sound unloaded');
//       }
//     };
//   }, [soundFile]);

//   // Play sound function
//   const playSound = async () => {
//     if (sound && !isPlaying) {
//       try {
//         await sound.playAsync(); // Play the sound
//         setIsPlaying(true);
//         console.log('Sound is playing');
//       } catch (error) {
//         console.error('Error playing sound:', error);
//       }
//     }
//   };

//   // Stop sound function
//   const stopSound = async () => {
//     if (sound && isPlaying) {
//       try {
//         await sound.stopAsync(); // Stop the sound
//         setIsPlaying(false);
//         console.log('Sound stopped');
//       } catch (error) {
//         console.error('Error stopping sound:', error);
//       }
//     }
//   };

//   return { playSound, stopSound, isPlaying };
// };

export default function BattleQuiz() {
  const intervalRef = useRef<number | null>(null); // 👈 Fix type for TS
  const navigation = useNavigation<BattleLinkProp>();
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.user.name);
  const coins = useAppSelector((state) => state.coins.coins);
  const isTimerEnabled = useAppSelector((state) => state.timer.isTimerEnabled);
  const isSoundEnabled = useAppSelector((state) => state.sound.isSoundEnabled);
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
  const [isMockLoading, setIsMockLoading] = useState(false);
  const [remainingQuestions, setRemainingQuestions] = useState<Question[]>([]);
  const [playerChoices, setPlayerChoices] = useState<string[]>([]);
  const [aiChoices, setAiChoices] = useState<string[]>([]);
  const randomTime = Math.ceil(Math.random() * (5000 - 1000) + 1000);
  const scaleValue = useSharedValue(1);
  const soundRef = useRef<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [counter, setCounter] = useState<number | null>(30);

  // Load and play sound on mount
  useEffect(() => {
    const loadSound = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/sounds/BattleSounds/DrumKitLoop.mp3"), // Path to sound file
          {
            isLooping: true,
            volume: 1.0,
            shouldPlay: true,
          }
        );
        soundRef.current = sound;
        await sound.playAsync();
        setIsPlaying(true);
      } catch (error) {
        logError("Error loading sound:", error);
      }
    };

    isSoundEnabled && loadSound();

    // Unload sound on unmount
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []); // Empty dependency array to run only once

  // Stop the background sound
  const stopSound = async () => {
    if (soundRef.current) {
      await soundRef.current.stopAsync();
      setIsPlaying(false);
    }
  };

  // Restart the sound
  const restartSound = async () => {
    if (soundRef.current) {
      await soundRef.current.stopAsync();
      await soundRef.current.playAsync();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (getScore(leftAnswers) > getScore(rightAnswers)) {
      // Trigger scale-up and scale-down animation
      setTimeout(() => {
        scaleValue.value = withSequence(
          withSpring(1.5, { damping: 10, stiffness: 200 }), // Scale up
          withSpring(1) // Scale back down
        );
      }, 4500);
    }
  }, [gameEnded]); // Run when the game ends

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleValue.value }],
  }));

  // Correct Sound Effect
  const CorrectUserSound = useSoundEffect(
    require("../../assets/sounds/BattleSounds/correctUser.mp3")
  );
  const CorrectMockSound = useSoundEffect(
    require("../../assets/sounds/BattleSounds/correctMock.mp3")
  );
  // Wrong Sound Effect
  const WrongUserSound = useSoundEffect(
    require("../../assets/sounds/BattleSounds/wrongUser.mp3")
  );
  const WrongMockSound = useSoundEffect(
    require("../../assets/sounds/wrong.mp3")
  );
  const coinsCollectSound = useSoundEffect(
    require("../../assets/sounds/getCoin.wav")
  );
  const winnerSound = useSoundEffect(
    require("../../assets/sounds/BattleSounds/WinnerPlaySound.mp3")
  );

  // const quiz = questions.sort(() => 0.5 - Math.random()).slice(0, 5);
  const shuffleArray = (array: Question[]) => {
    return [...array].sort(() => 0.5 - Math.random());
  };

  const getNextQuizBatch = () => {
    if (remainingQuestions.length <= 5) {
      // Only reshuffle if fewer than 5 questions are left
      const reshuffled = shuffleArray(questions);
      setRemainingQuestions(reshuffled.slice(5));
      setQuiz(reshuffled.slice(0, 5));
      logInfo(
        "Reshuffling... Questions left after this batch:",
        reshuffled.length - 5
      );
    } else {
      const nextBatch = remainingQuestions.slice(0, 5);
      setQuiz(nextBatch);
      setRemainingQuestions(remainingQuestions.slice(5));
      logInfo(
        "Questions left after this batch:",
        remainingQuestions.slice(5).length
      );
    }
  };

  useEffect(() => {
    const shuffled = shuffleArray(questions);
    setRemainingQuestions(shuffled.slice(5));
    setQuiz(shuffled.slice(0, 5));
  }, []);

  const getRandomMockPlayer = () => {
    return mockPlayers[Math.floor(Math.random() * mockPlayers.length)];
  };

  const findMockPlayer = () => {
    setIsMockLoading(true);
    setMockPlayer(null);
    // setCounter(null);

    const randomDelay = Math.floor(Math.random() * 3000) + 2000; // 2000–5000ms

    setTimeout(() => {
      const player = getRandomMockPlayer();
      setMockPlayer(player);
      setIsMockLoading(false);
      // setCounter(15);
    }, randomDelay);
  };

  useEffect(() => {
    findMockPlayer(); // when component first mounts
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
    getNextQuizBatch();
    findMockPlayer();
  };

  useEffect(() => {
    if (isMockLoading) {
      setCounter(null);
    } else {
      setCounter(30);
    }
  }, [isMockLoading]);

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

  useEffect(() => {
    if (isTimerEnabled && counter !== null && counter > 0) {
      intervalRef.current = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter === null) return null;
          return prevCounter - 1;
        });
      }, 1000);
    } else if (counter === 0) {
      setLeftAnswers(Array(5).fill(false)); // or any number instead of 0
      setRightAnswers(Array(5).fill(true));
      // Alert.alert("You lost!");
      // navigation.navigate(resultsPage, { ... });
    }

    // if (counter <= 5 && counter > 0 && isSoundEnabled) {
    //   useSoundEffect(require("../../assets/sounds/click.mp3"));
    // }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isTimerEnabled, counter]);

  const requestReviewApp = async () => {
    if (await StoreReview.hasAction()) {
      logInfo("StoreReview has action, requesting review...");
      StoreReview.requestReview();
      // trackEvent(trackEventsOrganized.REVIEW_PROMPT_SHOWN);
      // Alert.alert("Congratulations!", "You answered 3 in a row correctly!");
    } else {
      logInfo("In-app review is not supported or already given.");
    }
  };

  const handleAnswer = useCallback(
    (playerSide: "left" | "right", selectedAnswer: string) => {
      const isCorrect = selectedAnswer === quiz[currentQuestion].correctAnswer;

      if (playerSide === "left") {
        setLeftAnswers((prev) => [...prev, isCorrect]);
        setLastPlayerAnswer(selectedAnswer);
        setIsPlayerTurn(false);
        setPlayerChoices((prev) => [...prev, selectedAnswer]);

        if (selectedAnswer === quiz[currentQuestion].correctAnswer) {
          // console.log("correct answer player1");
          isSoundEnabled && CorrectUserSound();
          setCounter(30);
        } else {
          isSoundEnabled && WrongUserSound();
          setCounter(30);
          // console.log("wrong answer player1");
        }

        if (currentQuestion === quiz.length - 1) {
          setTimeout(() => setGameEnded(true), 2500);
        }
        // if (counter === 0) {
        //   setRightAnswers((prev)=>[...prev, !isCorrect])
        // }
      } else {
        setRightAnswers((prev) => [...prev, isCorrect]);
        setIsPlayerTurn(true);
        setLastPlayerAnswer(null);
        setAiChoices((prev) => [...prev, selectedAnswer]);
        setTimeout(() => setCounter(30), 1000);

        if (selectedAnswer === quiz[currentQuestion].correctAnswer) {
          // console.log("correct answer player2");
          isSoundEnabled && CorrectMockSound();
          // setCounter(15)
        } else {
          isSoundEnabled && WrongMockSound();
          // console.log("wrong answer player2");
        }

        if (currentQuestion < quiz.length - 1) {
          setTimeout(() => {
            setCurrentQuestion((prev) => prev + 1);
            setPlayerChoices([]);
            setAiChoices([]);
          }, 1000);
        } else {
          setGameEnded(true);
          if (getScore(leftAnswers) > getScore(rightAnswers)) {
            // handleStopMusic();
            stopSound();
            isSoundEnabled && winnerSound();
            setTimeout(() => {
              logInfo("Winner in battle quiz");
              requestReviewApp();
              dispatch(incrementCoinsBonus());
              dispatch(saveCoins(coins + 50));
              isSoundEnabled && coinsCollectSound();
            }, 4500);
          } else {
            stopSound();
            // handleStopMusic();
            logInfo("Loser in battle quiz");
          }
        }
      }
    },
    [currentQuestion, quiz]
  );

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

  const [characterUri, setCharacterUri] = useState(imageOptions[0]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const loadCharacter = async () => {
      try {
        const savedUri = await AsyncStorage.getItem(CHARACTER_KEY);
        if (savedUri) {
          setCharacterUri(savedUri);
        }
      } catch (error) {
        logError("Failed to load character image", error);
      }
    };
    loadCharacter();
  }, []);

  const selectImage = async (uri: string) => {
    try {
      await AsyncStorage.setItem(CHARACTER_KEY, uri);
      setCharacterUri(uri);
      setModalVisible(false);
    } catch (error) {
      logError("Failed to save character image", error);
    }
  };

  const getScore = (answers: boolean[]) => {
    return answers.filter((answer) => answer).length;
  };

  // if (!soundUri) return null; // Wait until the URI is ready

  if (!quiz[currentQuestion]) {
    return (
      <ModalLoading
        isModalVisible={true}
        onClose={() => {
          navigation.navigate("Quiz1"), restartQuiz();
        }}
      />
    );
  }

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
            <Pressable
              style={{ position: "absolute", top: 0, left: 75 }}
              onPress={() => {
                setModalVisible(true),
                  trackEvent(trackEventsOrganized.CHARACTER_IMAGE);
              }}
            >
              <Ionicons name="add-circle" size={20} color="yellow" />
            </Pressable>
            <View style={styles.containerImg}>
              <Image
                source={{
                  uri: characterUri,
                  // uri: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop",
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

            
            {!isMockLoading && isPlayerTurn && (
              <View style={[styles.thinkingIndicator,{position: 'absolute',top:110, height:30, width: 70}]}>
                <Text style={[styles.thinkingText,{paddingHorizontal:15}]}>...</Text>
              </View>
            )}
          </View>
          <View style={styles.sideContainer}>
            {renderAnswerBoxes(leftAnswers)}
            <Text style={styles.text1}>{playerChoices}</Text>
          </View>
        </View>

        <CharacterModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSelect={selectImage}
          imageOptions={imageOptions}
        />

        {/* Question and answers container */}
        <View style={styles.centerContainer}>
          <View style={styles.optionsContainer}>
            {(gameEnded &&
              leftAnswers.length === quiz.length &&
              rightAnswers.length === quiz.length) ||
            counter === 0 ? (
              <View>
                {getScore(leftAnswers) > getScore(rightAnswers) ? (
                  <View>
                    <Text style={styles.text2}>Νικητής</Text>
                    <Image
                      source={{
                        uri: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop",
                      }}
                      style={styles.gameOverUserWin}
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5,
                        paddingTop: 50,
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        source={require("../../assets/Photos/goldbg.png")}
                        style={{ width: 30, height: 30 }}
                      />
                      <Animated.View style={[{ margin: 0 }, animatedStyle]}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          {coins}
                        </Text>
                      </Animated.View>
                    </View>
                  </View>
                ) : getScore(rightAnswers) > getScore(leftAnswers) ? (
                  <View>
                    <Text style={styles.text2}>Νικητής</Text>
                    <Image
                      source={{ uri: mockPlayer?.img }}
                      style={styles.gameOverMockWin}
                    />
                  </View>
                ) : (
                  <View style={styles.text3Container}>
                    <Text style={styles.text3}>Ισοπαλία</Text>
                  </View>
                )}
              </View>
            ) : isMockLoading ? (
              <Text style={{ textAlign: "center" }}>Αναμονή αντιπάλου...</Text>
            ) : (
              quiz[currentQuestion].options.map((option, index) => (
                <Pressable
                  key={index}
                  style={({ pressed }) => [
                    styles.optionButton,
                    pressed && styles.optionButtonPressed,
                  ]}
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
              {/* {isMockLoading ? (
                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <ActivityIndicator size="large" color="#2196F3" />
                 
                </View>
              ) : mockPlayer ? (
               null
              ) : null} */}
              {isMockLoading ? (
                <View style={{ marginTop: 25, height: 60 }}>
                  <ActivityIndicator size="large" color="#2196F3" />
                </View>
              ) : (
                <Image
                  source={{ uri: mockPlayer?.img }}
                  style={styles.character}
                />
              )}

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
              {isMockLoading ? (
                <Text
                  style={{ marginLeft: 60, color: "#f5f5f5", fontSize: 12 }}
                >
                  Αναζήτηση Αντιπάλου...
                </Text>
              ) : (
                <Text style={styles.text1}>{mockPlayer?.name}</Text>
              )}
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

        {(gameEnded &&
          leftAnswers.length === quiz.length &&
          rightAnswers.length === quiz.length) ||
        counter === 0 ? (
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
              <Pressable
                onPress={() => {
                  restartQuiz(),
                    restartSound(),
                    trackEvent(trackEventsOrganized.REPEAT_BATTLE);
                  // handlePlayMusic();
                }}
              >
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
                  Νέα Μάχη
                </Text>
              </Pressable>
            </LinearGradient>
          </View>
        ) : (
          <View style={styles.questionContainer}>
            <Text style={styles.questionNumber1}>
              Ερώτηση {currentQuestion + 1}
            </Text>

            {isTimerEnabled && !isMockLoading && counter !== null && (
              <View style={{ position: "absolute", top: -30, left: 180 }}>
                <Text style={{ fontSize: 20, color: "white" }}>{counter}</Text>
              </View>
            )}

            <Text style={styles.questionText}>
              {quiz[currentQuestion]?.question || "No question available"}
            </Text>

            {isSoundEnabled &&
              (isPlaying ? (
                <Pressable
                  style={styles.questionNumber2}
                  onPress={stopSound} // Call stop when button is pressed
                >
                  <Text style={{}}>
                    <Feather name="stop-circle" size={24} color="white" />
                  </Text>
                </Pressable>
              ) : (
                <Pressable
                  style={styles.questionNumber2}
                  onPress={restartSound} // Call play when button is pressed
                >
                  <Text style={{}}>
                    <Feather name="music" size={24} color="white" />
                  </Text>
                </Pressable>
              ))}
            <View
              style={{
                position: "absolute",
                bottom: 10,
                right: 10,
                transform: [{ scale: 0.6 }],
              }}
            >
              <ContactButton />
            </View>
          </View>
        )}

        {/* <Pressable onPress={handleStopMusic} style={{position: 'absolute', bottom: 220, right: 100}}>
          <Text>Stop Music</Text>
        </Pressable> */}
        {/* Return Home Button */}
        <Pressable
          onPress={() => {
            navigation.navigate("Quiz1"), stopSound();
            // handleStopMusic();
          }}
          style={styles.returnQuizBtn}
        >
          <Feather name="arrow-left" size={16} color="#ffffff80" />

          <Feather name="home" size={16} color="#ffffff80" />
        </Pressable>
      </LinearGradient>
    </ImageBackground>
  );
}

// function dispatch(arg0: any) {
//   throw new Error("Function not implemented.");
// }
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
