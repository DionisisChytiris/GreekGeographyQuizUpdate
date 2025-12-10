import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
  Alert,
  Platform,
  ImageBackground,
  ScrollView,
  ImageSourcePropType,
  StatusBar,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import { useSoundEffect } from "../Utilities/useSoundEffects";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  FadeInUp,
  FadeInDown,
  withDelay,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated";
// import {
//   useAnswerAnimations,
//   useScaleAnimation,
//   useSlideAnimation,
//   useSlideAnimationFiftyBtn,
// } from "../Utilities/useAnimations";
import TimerHeartSection from "../components/TimerHeartSection";
import * as StoreReview from "expo-store-review";
import ModalExplanationQuestion from "../Modals/ModalExplanationQuestion";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../ReduxToolkit/store";
import HelpOptionsButton from "../components/HelpOptionsButton";
import { useScaleAnim } from "../Utilities/useScaleAnim";
import {
  incrementCoins,
  decrementCoins,
  saveCoins,
} from "../../ReduxToolkit/coinsSlice";
import {
  decrementHeart,
  incrementHeart,
  loadHeart,
  resetLives,
  saveHeartAsync,
} from "../../ReduxToolkit/livesSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveProgress, getProgress } from "../../ReduxToolkit/progressSlice";
import { trackEvent } from "../../GoogleAnalytics/trackEvent";
import { trackEventsOrganized } from "../../GoogleAnalytics/trackEventsOrganized";
import ModalBrokenHeart from "../Modals/ModalBrokenHeart";
import { logInfo } from "../../utils/logger";

type LakeRiverProp = StackNavigationProp<RootStackParamList, "LakeRiver">;

const { width, height } = Dimensions.get("window");

/**
 * Coin Animation Component - Single coin in sequence
 * Defined outside main component to prevent recreation on every render
 */
const CoinAnimation: React.FC<{
  id: string;
  index: number;
  onComplete: (id: string) => void;
}> = ({ id, index, onComplete }) => {
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);
  const rotate = useSharedValue(0);

  // Start position: 1/3 from bottom (2/3 from top)
  const startY = height * (2 / 3);
  // Target: top center (where coins counter is)
  const targetY = 80;
  const distance = startY - targetY;

  useEffect(() => {
    // Stagger the start of each coin
    const delay = index * 150; // 150ms delay between each coin

    // Fade in and scale up at start with delay
    opacity.value = withDelay(
      delay,
      withTiming(1, {
        duration: 300,
        easing: Easing.out(Easing.quad),
      })
    );

    scale.value = withDelay(
      delay,
      withTiming(1, {
        duration: 300,
        easing: Easing.out(Easing.back(1.5)),
      })
    );

    // Rotate while moving
    rotate.value = withDelay(
      delay,
      withTiming(360, {
        duration: 1500,
        easing: Easing.linear,
      })
    );

    // Move upward
    translateY.value = withDelay(
      delay,
      withTiming(
        -distance,
        {
          duration: 800,
          easing: Easing.out(Easing.quad),
        },
        (finished) => {
          if (finished) {
            // Fade out at the top
            opacity.value = withTiming(
              0,
              {
                duration: 300,
                easing: Easing.in(Easing.quad),
              },
              () => {
                // Notify parent that this coin is done - use runOnJS to call JS function from worklet
                runOnJS(onComplete)(id);
              }
            );

            scale.value = withTiming(0.5, {
              duration: 300,
              easing: Easing.in(Easing.quad),
            });
          }
        }
      )
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    position: "absolute",
    left: width / 2 - 16, // center-ish, adjust for icon width
    top: startY,
    transform: [
      { translateY: translateY.value },
      { scale: scale.value },
      { rotate: `${rotate.value}deg` },
    ],
    opacity: opacity.value,
  }));

  return (
    <View pointerEvents="none">
      <Animated.Image
        source={require("../../assets/Photos/goldbg.png")}
        style={[
          {
            width: 32,
            height: 32,
            zIndex: 50,
          },
          animatedStyle,
        ]}
        resizeMode="contain"
      />
    </View>
  );
};

type QuizQuestion = {
  id: string;
  question: string;
  options: { answer: string }[];
  correctAnswerIndex: number;
  img?: ImageSourcePropType | null;
};

/**
 * Result screens that accept the full quiz result data format.
 * These screens receive resetQuiz, totalQuestions, userAnswers, etc. directly.
 */
type ResultScreenName =
  | "ResultsLake"
  | "ResultsMountain"
  | "ResultsGeneral"
  | "ResultsNomoi"
  | "ResultsGreekTraditions"
  | "ResultsTraditionalFood";

type MainQuizAiGenProps = {
  dataT: QuizQuestion[];
  resultsPage: ResultScreenName;
  quizName: string;
  lastQ1: string;
};

const MainQuizAiGen: React.FC<MainQuizAiGenProps> = ({
  dataT,
  resultsPage,
  quizName,
  lastQ1,
}) => {
  const livesEnabled = useAppSelector((state) => state.lives.livesEnabled);
  const heart = useAppSelector((state) => state.lives.heart);
  const isTimerEnabled = useAppSelector((state) => state.timer.isTimerEnabled);
  const isSoundEnabled = useAppSelector((state) => state.sound.isSoundEnabled);
  const coins = useAppSelector((state) => state.coins.coins);
  const navigation = useNavigation<LakeRiverProp>();
  const [showBrokenHeartModal, setShowBrokenHeartModal] = useState(false);
  // const data = questions;
  // Removed duplicate declaration of dispatch
  const data = dataT;
  const totalQuestions = data.length;
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  // const [coins, setCoins] = useState(0);
  const [answerStatus, setAnswerStatus] = useState<boolean | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [counter, setCounter] = useState<number | null | false>(15);
  let interval: ReturnType<typeof setInterval> | null = null;
  const currentQuestion: QuizQuestion | undefined = data[index];
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [ansBtnClr, setAnsBtnClr] = useState({
    default: ["#3d8be4", "#418ce0"],
    correct: ["#3ce992", "#2bc79b"],
    incorrect: ["#f56c6c", "#eb5050"],
  });
  const [currentColor, setCurrentColor] = useState(ansBtnClr.default);
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": Poppins_400Regular,
    "Poppins-SemiBold": Poppins_600SemiBold,
    "Poppins-Bold": Poppins_700Bold,
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [coinAnimations, setCoinAnimations] = useState<
    Array<{
      id: string;
      index: number;
    }>
  >([]);
  const coinIndexRef = useRef(0);
  const coinSequenceActive = useRef(false);
  const coinPlayedForQuestionRef = useRef<number | null>(null);

  useEffect(() => {
    coinPlayedForQuestionRef.current = null;
  }, [index]);

  useEffect(() => {
    if (!fontsLoaded || fontError) {
      return;
    }
  }, [fontsLoaded, fontError]);

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
  // Coins Drop Sound Effect
  const coinsDropSound = useSoundEffect(
    require("../../assets/sounds/coinsDrop.wav")
  );
  // Coins Collect Sound Effect
  const coinsCollectSound = useSoundEffect(
    require("../../assets/sounds/getCoin.wav")
  );
  // Click Sound Effect
  const click5sSound = useSoundEffect(require("../../assets/sounds/click.mp3"));

  const removeHeart = () => {
    if (livesEnabled && heart > 0) {
      // setHeart((prevHeart: number) => prevHeart - 1);
      dispatch(decrementHeart());
      dispatch(saveHeartAsync(heart - 1));
    }
    if (heart > 1) {
      setShowBrokenHeartModal(true);
    }
  };

  const resetQuiz = () => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
    // dispatch(loadHeart());
    dispatch(resetLives());
    // setHeart(3); // Reset to the original value
    setIndex(0); // Start from the first question
    setCounter(15); // Reset the score or counter
    setUserAnswers([]);
    setPoints(0);
    setSeconds(0);
    setMinutes(0);
    setIsDisabled(true);
    setFifty([]);
    setFiftyCoin(false);
    setPhoneCoin(false);
    setHundredCoin(false);
  };

  const resetQuizHome = () => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
    // dispatch(loadHeart());
    dispatch(resetLives());
    // setHeart(3); // Reset to the original value
    setIndex(0); // Start from the first question
    setCounter(15); // Reset the score or counter
    setUserAnswers([]);
    setPoints(0);
    setSeconds(0);
    setMinutes(0);
    setIsDisabled(true);
    setFifty([]);
    setFiftyCoin(false);
    setPhoneCoin(false);
    setHundredCoin(false);
  };

  const [userAnswers, setUserAnswers] = useState<
    { question: string; userChoice: string; correctAnswer: string }[]
  >([]);

  const handleAnswer = (
    question: string,
    userChoice: string,
    correctAnswer: string
  ) => {
    setUserAnswers((prev) => [
      ...prev,
      { question, userChoice, correctAnswer },
    ]);
  };

  /**
   * Navigates to the results page with quiz data.
   * All result screens in ResultScreenName accept the same params format.
   */
  const navigateToResults = () => {
    const params = {
      resetQuiz,
      totalQuestions,
      index,
      userAnswers,
      points,
      seconds,
      minutes,
    };
    // Type assertion is safe because all ResultScreenName screens accept these params
    (navigation.navigate as any)(resultsPage, params);
  };

  useEffect(() => {
    if (heart === 0) {
      navigateToResults();
    }
  }, [heart]);

  useEffect(() => {
    if (
      isTimerEnabled &&
      counter !== null &&
      counter !== false &&
      counter > 0
    ) {
      interval = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter === null || prevCounter === false) return null;
          return prevCounter - 1;
        });
      }, 1000);
    } else if (counter === 0) {
      // Navigate to results page when the timer hits 0
      navigateToResults();
    }

    if (counter !== null && counter !== false && counter <= 5 && counter > 0) {
      if (isSoundEnabled) {
        click5sSound();
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval); // Clear the interval when counter is reset or when useEffect is cleaned up
      }
    };
  }, [isTimerEnabled, counter]);

  useEffect(() => {
    if (selectedAnswerIndex === null) return;
    if (coinPlayedForQuestionRef.current !== null) return;

    const isCorrect =
      selectedAnswerIndex === currentQuestion?.correctAnswerIndex;

    if (isCorrect) {
      coinPlayedForQuestionRef.current = index; // 🔒 HARD LOCK
      startCoinSequence();

      if (isSoundEnabled) {
        CorrectPlaySound();
        coinsCollectSound();
      }

      setPoints((p) => p + 10);
      dispatch(incrementCoins());
      // Save coins after increment - incrementCoins adds 10 coins
      const newCoinValue = coins + 10;
      dispatch(saveCoins(newCoinValue));

      setCorrectAnswer((prev) => {
        if (prev + 1 === 3) {
          requestReview();
          return 0;
        }
        return prev + 1;
      });
    } else {
      setCorrectAnswer(0);
      if (isSoundEnabled) {
        WrongPlaySound();
      }
      removeHeart();
    }
    // Removed 'coins' from dependencies - it was causing the loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAnswerIndex, currentQuestion?.correctAnswerIndex, index]);

  const requestReview = async () => {
    if (await StoreReview.hasAction()) {
      logInfo("StoreReview has action, requesting review...");
      StoreReview.requestReview();
      // Alert.alert("Congratulations!", "You answered 3 in a row correctly!");
    } else {
      logInfo("In-app review is not supported or already given.");
    }
  };
  // Create shared values for scales based on the number of options
  // const scales = currentQuestion?.options.map(() => useSharedValue(1)) || [];

  const scale0 = useSharedValue(1);
  const scale1 = useSharedValue(1);
  const scale2 = useSharedValue(1);
  const scale3 = useSharedValue(1);
  const scales = [scale0, scale1, scale2, scale3];

  // Create all animated styles at the top level - hooks must be called unconditionally
  const animatedStyle0 = useAnimatedStyle(() => ({
    transform: [{ scale: scale0.value }],
  }));
  const animatedStyle1 = useAnimatedStyle(() => ({
    transform: [{ scale: scale1.value }],
  }));
  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ scale: scale2.value }],
  }));
  const animatedStyle3 = useAnimatedStyle(() => ({
    transform: [{ scale: scale3.value }],
  }));
  const animatedStyles = [
    animatedStyle0,
    animatedStyle1,
    animatedStyle2,
    animatedStyle3,
  ];

  const handleCoinComplete = useCallback((coinId: string) => {
    setCoinAnimations((prev) => {
      const filtered = prev.filter((coin) => coin.id !== coinId);
      // When all coins are done, stop the sequence
      if (filtered.length === 0) {
        coinSequenceActive.current = false;
        coinIndexRef.current = 0;
      }
      return filtered;
    });
  }, []);

  const startCoinSequence = () => {
    if (coinSequenceActive.current) return;

    coinSequenceActive.current = true;
    coinIndexRef.current = 0;

    // Start with more coins in sequence (8-10 coins)
    const initialCoins = 5;
    const newCoins = Array.from({ length: initialCoins }, (_, i) => ({
      id: `coin-${Date.now()}-${i}-${Math.random()}`,
      index: i,
    }));

    setCoinAnimations(newCoins);
    coinIndexRef.current = initialCoins;
  };

  const handlePressIn = (index: number) => {
    // setScales((prev) => prev.map((s, i) => (i === index ? 0.9 : s)));
    scales[index].value = withSpring(0.9, { damping: 10, stiffness: 150 });
  };

  const handlePressOut = (
    index: number,
    question: string,
    userChoice: string,
    correctAnswer: string
  ) => {
    if (selectedAnswerIndex === null) {
      setSelectedAnswerIndex(index);
    }
    // setScales((prev) => prev.map((s, i) => (i === index ? 1 : s)));
    scales[index].value = withSpring(1, { damping: 10, stiffness: 150 });
    setUserAnswers((prev) => [
      ...prev,
      { question, userChoice, correctAnswer },
    ]);
    // Coin sequence is already triggered in the useEffect above (line 337)
    // Removed duplicate call to prevent animation loop
    // if (
    //   index === currentQuestion.correctAnswerIndex &&
    //   coinPlayedForQuestionRef.current !== index
    // ) {
    //   coinPlayedForQuestionRef.current = index;
    //   startCoinSequence();
    // }
  };

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          setMinutes((prevMinutes) => prevMinutes + 1);
          return 0;
        }
        return prevSeconds + 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount or when quiz ends
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  const buyExtraCall = () => {
    if (coins >= 50) {
      // Check if the user has 30 or more coins
      if (isSoundEnabled) {
        coinsDropSound();
      }
      trackEvent(trackEventsOrganized.BUY_EXTRA_CALL);
      setPhoneCoin(false);
      dispatch(decrementCoins(50)); // Decrement 1 coin
      dispatch(saveCoins(coins - 50)); // Save the updated coins after purchase
      // Add any extra life logic here
    } else {
      // Optionally, show a message or alert indicating the user doesn't have enough coins
      Alert.alert("You need at least 50 coins to buy an extra Call!");
    }
  };

  const buyExtraFifty = () => {
    if (coins >= 40) {
      if (isSoundEnabled) {
        coinsDropSound();
      }
      trackEvent(trackEventsOrganized.BUY_EXTRA_FIFTY);
      // Check if the user has 30 or more coins
      setFiftyCoin(false);
      dispatch(decrementCoins(40)); // Decrement 1 coin
      dispatch(saveCoins(coins - 40)); // Save the updated coins after purchase
      // Add any extra life logic here
    } else {
      // Optionally, show a message or alert indicating the user doesn't have enough coins
      Alert.alert("You need at least 40 coins to buy an extra 50%!");
    }
  };
  const buyExtraHundred = () => {
    if (coins >= 80) {
      if (isSoundEnabled) {
        coinsDropSound();
      }
      trackEvent(trackEventsOrganized.BUY_EXTRA_HUNDRED);
      // Check if the user has 30 or more coins
      setHundredCoin(false);
      dispatch(decrementCoins(80)); // Decrement 1 coin
      dispatch(saveCoins(coins - 80)); // Save the updated coins after purchase
      // Add any extra life logic here
    } else {
      // Optionally, show a message or alert indicating the user doesn't have enough coins
      Alert.alert("You need at least 80 coins to buy an extra 100%!");
    }
  };

  const [fifty, setFifty] = useState<number[]>([]);

  const NextQuizDelay = () => {
    setTimeout(() => {
      setFifty([]);
      if (index + 1 === data.length) {
        navigateToResults();
      } else {
        setIndex((prev) => prev + 1);
        setSelectedAnswerIndex(null);
        setCurrentColor(ansBtnClr.default);
        setIsDisabled(true);
        if (isSoundEnabled) {
          imgPlaySound();
        }
        setCounter(15);
      }
    }, 2000);
  };

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      setOpacity(0.4);
    } else {
      setOpacity(1);
    }
  }, [selectedAnswerIndex]);

  const DialPlaySound1 = useSoundEffect(
    require("../../assets/sounds/dianNumber.mp3")
  );
  const MessagePlaySound1 = useSoundEffect(
    require("../../assets/sounds/message.mp3")
  );

  async function DialPlaySound() {
    setTimeout(() => {
      DialPlaySound1();
    }, 1000);
  }
  async function MessagePlaySound() {
    setTimeout(() => {
      MessagePlaySound1();
    }, 3000);
  }

  const animScale1 = useScaleAnim(3000, 1.3, 1); // Animates after 3 seconds
  const animScale2 = useScaleAnim(4000, 1.3, 1); // Animates after 5 seconds
  const animScale3 = useScaleAnim(5000, 1.3, 1); // Animates after 5 seconds

  const [fiftyCoin, setFiftyCoin] = useState(false);
  const [phoneCoin, setPhoneCoin] = useState(false);
  const [hundredCoin, setHundredCoin] = useState(false);

  const progressKey = lastQ1;
  const lastQuestionIndex = useAppSelector(
    (state) => state.progress.progress[progressKey]
  );
  const dispatch = useAppDispatch();

  // Track Quiz Progress - find the last question user left the game
  // const saveProgress = async (lastQuestionIndex:any) => {
  //   try {
  //     // await AsyncStorage.setItem('lastQuestion', JSON.stringify(lastQuestionIndex));
  //     await AsyncStorage.setItem(lastQ1, JSON.stringify(lastQuestionIndex));
  //     console.log('successfully saved')
  //   } catch (e) {
  //     console.error("Failed to save progress", e);
  //   }
  // };

  const startQuiz = async () => {
    dispatch(getProgress(progressKey));
  };

  useEffect(() => {
    if (lastQuestionIndex !== undefined) {
      setIndex(lastQuestionIndex); // Update the index when the progress is fetched
    }
  }, [lastQuestionIndex]);

  const onAnswerQuestion = (currentIndex: number) => {
    // Save the last answered question index
    // saveProgress(currentIndex);
    dispatch(
      saveProgress({ key: progressKey, lastQuestionIndex: currentIndex })
    );
    logInfo("Progress saved successfully");
    // Proceed to the next question...
  };

  useEffect(() => {
    startQuiz();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowBrokenHeartModal(false);
    }, 2000);
  }, [showBrokenHeartModal]);

  const insets = useSafeAreaInsets();

  // Reset coin animations when question index changes (like in working code)
  useEffect(() => {
    // Reset coin animations
    setCoinAnimations([]);
    coinSequenceActive.current = false;
    coinIndexRef.current = 0;
  }, [index]);

  const [cardHeight, setCardHeight] = useState<number | null>(null);

  const containerPaddingTop =
    Platform.OS === "ios"
      ? 0 // Let SafeAreaView handle iOS padding
      : height > 900
      ? Math.max(insets.top, StatusBar.currentHeight || 0) - 30 // Reduce significantly for very large screens
      : height > 800
      ? Math.max(insets.top, StatusBar.currentHeight || 0) - 10 // Reduce for large screens
      : Math.max(insets.top, StatusBar.currentHeight || 0) + 2; // Keep normal padding for smaller screens

  return (
    <SafeAreaView
      style={[styles.container, { paddingTop: containerPaddingTop }]}
      edges={Platform.OS === "ios" ? ["top", "bottom"] : []}
    >
      {/* Geography-themed background with gradient */}
      <LinearGradient
        colors={["#E8F4F8", "#D4E8F0", "#B8D4E3"]}
        style={styles.backgroundGradient}
      >
        {/* Decorative map-like pattern overlay */}
        <View style={styles.decorativeOverlay}>
          <View style={[styles.mapDot, { top: "20%", left: "15%" }]} />
          <View style={[styles.mapDot, { top: "35%", right: "20%" }]} />
          <View style={[styles.mapDot, { top: "60%", left: "25%" }]} />
          <View style={[styles.mapDot, { bottom: "25%", right: "15%" }]} />
        </View>
      </LinearGradient>

      <View style={{ flexShrink: 0 }}>
        <TimerHeartSection
          navigation={navigation}
          quizName={quizName}
          index={index}
          heart={heart}
          totalQuestions={totalQuestions}
          counter={counter}
          onAnswerQuestion={onAnswerQuestion}
          resetQuiz={resetQuiz}
        />
      </View>

      <View style={styles.modalContainer}>
        <ModalBrokenHeart
          visible={showBrokenHeartModal}
          onClose={() => setShowBrokenHeartModal(false)}
        />
      </View>

      {/* Coin Animations Sequence */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          // bottom: 300,
          zIndex: 100,
        }}
      >
        {coinAnimations.map((coin) => (
          <CoinAnimation
            key={coin.id}
            id={coin.id}
            index={coin.index}
            onComplete={handleCoinComplete}
          />
        ))}
      </View>

      <Animated.View
        entering={FadeInUp.delay(100).springify()}
        style={styles.card}
        onLayout={(event) => {
          const { height: measuredHeight } = event.nativeEvent.layout;
          setCardHeight(measuredHeight);
        }}
      >
        <View style={styles.cardShadow} />

        {currentQuestion?.img && (
          <View style={styles.imageContainer}>
            <ImageBackground
              source={currentQuestion.img}
              style={[
                styles.questionImage,
                cardHeight ? { height: cardHeight / 3 } : undefined,
              ]}
              imageStyle={styles.questionImageStyle}
            >
              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.3)"]}
                style={styles.imageGradient}
              />
            </ImageBackground>
            <View style={{ position: "absolute", top: 0, right: 0 }}>
              <ModalExplanationQuestion
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                title="Επεξήγηση"
                currentQuestion={currentQuestion}
              />
            </View>
            <View style={styles.cornerAccent} />
          </View>
        )}

        {/* <View>
          {currentQuestion?.img ? (
            <ImageBackground
              key={currentQuestion?.id}
              source={currentQuestion.img}
              style={styles.questionImage}
            />
          ) : (
            <View
              style={{ height: 70, padding: 15, flexDirection: "row", gap: 5 }}
            >
            
            </View>
          )}

          <View style={{ position: "absolute", top: 0, right: 0 }}>
            <ModalExplanationQuestion
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              title="Επεξήγηση"
              currentQuestion={currentQuestion}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={true}>
            <View
              style={[
                styles.questionContainer,
                !currentQuestion?.img && {
                  height: 180,
                  backgroundColor: "#e6f4fd",
                  borderRadius: 16,
                  marginHorizontal: 10,
                },
              ]}
            >
              <Text style={styles.questionText}>
                {currentQuestion?.question}
              </Text>
            </View>
          </ScrollView>
        </View> */}
        {/* Answer Grid */}
        {/* <Animated.View
            entering={FadeInUp.delay(100).springify()}
            style={styles.answersGrid}
          > */}
        {/* <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={true}
        >
          <View style={styles.answersGrid}>
            {currentQuestion?.options.map((item, index: number) => {
              const animatedStyle = useAnimatedStyle(() => ({
                transform: [{ scale: scales[index].value }],
              }));
              return (
                <Animated.View
                  key={index}
                  style={[styles.answerButton, animatedStyle]}
                >
                  <Pressable
                    key={index}
                    onPressIn={() => handlePressIn(index)}
                    onPressOut={() => {
                      if (selectedAnswerIndex === null) {
                        setSelectedAnswerIndex(index);
                      }

                      handlePressOut(index);
                      setIsDisabled(false);
                      setCounter(null);

                      // Capture the user's answer when they select one
                      const userChoice = item.answer;
                      const correctAnswer =
                        currentQuestion?.options[
                          currentQuestion.correctAnswerIndex
                        ].answer;

                      handleAnswer(
                        currentQuestion?.question,
                        userChoice,
                        correctAnswer
                      );
                    }}
                    style={[
                      styles.answerButton,
                      fifty.includes(index) ? { opacity: 0.6 } : { opacity: 1 },
                    ]}
                  >
                    <LinearGradient
                      colors={
                        selectedAnswerIndex !== null
                          ? index === currentQuestion?.correctAnswerIndex
                            ? [ansBtnClr.correct[0], ansBtnClr.correct[1]] // Correct answer color
                            : index === selectedAnswerIndex
                            ? [ansBtnClr.incorrect[0], ansBtnClr.incorrect[1]] // Incorrect answer color
                            : [ansBtnClr.default[0], ansBtnClr.default[1]] // Default color for unselected answers
                          : [ansBtnClr.default[0], ansBtnClr.default[1]]
                      }
                      style={styles.answerGradient}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    >
                      <Text style={styles.answerText}>{item.answer}</Text>
                    </LinearGradient>
                  </Pressable>
                </Animated.View>
              );
            })}
          </View>
        </ScrollView> */}
        <View style={styles.questionContainer}>
          <View
            style={[
              styles.questionTextContainer,
              !currentQuestion?.img && styles.questionTextContainerNoImage,
            ]}
          >
            <Text
              style={styles.questionText}
              numberOfLines={3}
              adjustsFontSizeToFit
            >
              {currentQuestion?.question}
            </Text>
          </View>
        </View>

        <View style={styles.answersContainer}>
          <View style={styles.answersGrid}>
            {currentQuestion?.options.map((item, idx: number) => {
              const isCorrect = idx === currentQuestion.correctAnswerIndex;
              const isSelected = idx === selectedAnswerIndex;
              const isWrong = isSelected && !isCorrect;

              let buttonColors: [string, string] = ansBtnClr.default as [
                string,
                string
              ];
              if (selectedAnswerIndex !== null) {
                if (isCorrect) {
                  buttonColors = ansBtnClr.correct as [string, string];
                } else if (isWrong) {
                  buttonColors = ansBtnClr.incorrect as [string, string];
                }
              }

              return (
                <Animated.View
                  key={idx}
                  entering={FadeInDown.delay(200 + idx * 100).springify()}
                  style={[styles.answerButtonWrapper, animatedStyles[idx]]}
                >
                  <Pressable
                    onPressIn={() => handlePressIn(idx)}
                    onPressOut={() => (
                      handlePressOut(
                        idx,
                        currentQuestion.question,
                        item.answer,
                        currentQuestion.options[
                          currentQuestion.correctAnswerIndex
                        ].answer
                      ),
                      setIsDisabled(false),
                      setCounter(null)
                    )}
                    style={[
                      styles.answerButton,

                      // ✅ Apply 50% dimming
                      fifty.includes(idx) && {
                        opacity: 0.35,
                      },

                      // ✅ Apply dimming after answer selection
                      selectedAnswerIndex !== null &&
                        !isSelected && {
                          opacity: 0.6,
                        },
                    ]}
                    disabled={
                      selectedAnswerIndex !== null || fifty.includes(idx)
                    }
                  >
                    <LinearGradient
                      colors={buttonColors}
                      style={styles.answerGradient}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    >
                      {/* Answer letter badge */}
                      <View style={styles.answerBadge}>
                        <Text style={styles.answerBadgeText}>
                          {String.fromCharCode(65 + idx)}
                        </Text>
                      </View>
                      <Text
                        style={styles.answerText}
                        numberOfLines={1}
                        adjustsFontSizeToFit
                      >
                        {item.answer}
                      </Text>
                      {/* Status icon */}
                      {selectedAnswerIndex !== null && isCorrect && (
                        <View style={styles.statusIcon}>
                          <Feather
                            name="check-circle"
                            size={
                              height > 1200
                                ? 32
                                : height > 1000
                                ? 28
                                : height > 800
                                ? 24
                                : 20
                            }
                            color="white"
                          />
                        </View>
                      )}
                      {selectedAnswerIndex !== null && isWrong && (
                        <View style={styles.statusIcon}>
                          <Feather
                            name="x-circle"
                            size={
                              height > 1200
                                ? 32
                                : height > 1000
                                ? 28
                                : height > 800
                                ? 24
                                : 20
                            }
                            color="white"
                          />
                        </View>
                      )}
                    </LinearGradient>
                  </Pressable>
                </Animated.View>
              );
            })}
          </View>
        </View>
      </Animated.View>

      {/* Bottom Section Helps */}
      <View
        style={[
          styles.bottomButtonsBox,
          {
            paddingBottom: Math.max(
              Platform.OS === "ios" ? 20 : insets.bottom + 8,
              12
            ),
          },
        ]}
      >
        {/* 50% Help*/}
        {fiftyCoin ? (
          <Pressable onPress={buyExtraFifty}>
            <View style={styles.coinText}>
              <Image
                source={require("../../assets/Photos/goldbg.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ fontSize: 12 }}>40</Text>
            </View>
            <Animated.View style={[{ width: 60, opacity: 0.3 }, animScale1]}>
              <HelpOptionsButton
                optionText="50%"
                addAbility={isDisabled} // Set addAbility to null to disable the button
                addFunction={() => {}} // No action when clicked
              />
            </Animated.View>
          </Pressable>
        ) : (
          <Animated.View
            style={[
              {
                width: "20%",
                opacity: opacity,
              },
              animScale1,
            ]}
          >
            <HelpOptionsButton
              addFunction={() => {
                if (selectedAnswerIndex !== null) return; // Don't allow if answer already selected
                if (!currentQuestion) return; // Safety check

                // Apply 50% help
                trackEvent(trackEventsOrganized.HELP_FIFTY_PERCENT);

                // Play sound (fire and forget)
                if (isSoundEnabled) {
                  fiftyPlaySound();
                }

                const wrongAnswers = currentQuestion.options
                  .map((_option, index: number) => index)
                  .filter(
                    (index: number) =>
                      index !== currentQuestion.correctAnswerIndex
                  );

                // Calculate 50% of wrong answers (rounded up)
                const numberOfWrongAnswers = wrongAnswers.length;
                const numberOfAnswersToHide = Math.ceil(
                  numberOfWrongAnswers / 2
                );

                const randomWrongAnswers = wrongAnswers
                  .sort(() => 0.5 - Math.random())
                  .slice(0, numberOfAnswersToHide);

                setFifty(randomWrongAnswers);

                // Mark as used so user can buy extra use
                setFiftyCoin(true);
              }}
              addAbility={selectedAnswerIndex !== null}
              optionText="50%"
            />
          </Animated.View>
        )}
        {/* Phone Help */}
        {phoneCoin ? (
          <Pressable onPress={buyExtraCall}>
            <View style={styles.coinText}>
              <Image
                source={require("../../assets/Photos/goldbg.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ fontSize: 12 }}>50</Text>
            </View>
            <View style={{ width: 60, opacity: 0.3 }}>
              <HelpOptionsButton
                optionText={<Feather name="phone" size={20} color="#696969" />}
                addAbility={isDisabled} // Set addAbility to null to disable the button
                addFunction={() => {}} // No action when clicked
              />
            </View>
          </Pressable>
        ) : (
          // When PhoneCoin is false, show the button with animation
          <Animated.View
            style={[{ width: "20%", opacity: opacity }, animScale2]} // Apply animation styles
          >
            <HelpOptionsButton
              optionText={<Feather name="phone" size={20} color="#696969" />}
              addAbility={selectedAnswerIndex !== null} // Enable button only if a valid answer is selected
              addFunction={() => {
                setPhoneCoin(true); // Set PhoneCoin to true when the button is pressed
                setModalVisible(true); // Show modal
                if (isSoundEnabled) {
                  DialPlaySound();
                  MessagePlaySound();
                  fiftyPlaySound(); // Play sound if enabled
                }
                trackEvent(trackEventsOrganized.HELP_CALL_PERCENT);
                setCounter(
                  counter !== null && counter !== false ? counter + 15 : 15
                ); // Increment counter when button is pressed
              }}
            />
          </Animated.View>
        )}

        {/* 100% Help */}
        {hundredCoin ? (
          <Pressable onPress={buyExtraHundred}>
            <View style={styles.coinText}>
              <Image
                source={require("../../assets/Photos/goldbg.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ fontSize: 12 }}>80</Text>
            </View>
            <View style={{ width: 60, opacity: 0.3 }}>
              <HelpOptionsButton
                optionText="100%"
                addAbility={isDisabled} // Set addAbility to null to disable the button
                addFunction={() => {}} // No action when clicked
              />
            </View>
          </Pressable>
        ) : (
          <Animated.View
            style={[{ width: "20%", opacity: opacity }, animScale3]}
          >
            <HelpOptionsButton
              optionText="100%"
              addFunction={() => {
                if (selectedAnswerIndex !== null) return; // Don't allow if answer already selected
                setHundredCoin(true);
                setSelectedAnswerIndex(currentQuestion.correctAnswerIndex);
                NextQuizDelay();
                setCounter(false);
                trackEvent(trackEventsOrganized.HELP_HUNDRED_PERCENT);
              }}
              addAbility={selectedAnswerIndex !== null}
            />
          </Animated.View>
        )}
        {/* </Animated.View> */}
        {/* Next Question Button */}
        <View style={{ width: "20%" }}>
          <HelpOptionsButton
            addFunction={() => {
              setFifty([]);
              if (index + 1 === data.length) {
                navigateToResults();
              } else {
                onAnswerQuestion;
                setIndex((prev) => prev + 1);
                setSelectedAnswerIndex(null);
                setCurrentColor(ansBtnClr.default);
                setIsDisabled(true);
                if (isSoundEnabled) {
                  // CorrectPlaySound();
                  imgPlaySound();
                }
                setCounter(15);
              }
            }}
            addAbility={isDisabled}
            optionText={
              isDisabled ? (
                <FontAwesome name="ban" size={20} color="#ffffff" />
              ) : (
                <Feather name="arrow-right" size={26} color="#ffffff" />
              )
            }
            backgroundColor={isDisabled ? "#b3e4d1" : "#3ce992"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    // paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    paddingTop: Platform.OS === "ios" ? -30 : height > 900 ? -35 : 0,
    justifyContent: "center",
    alignSelf: "center",
  },
  modalContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  decorativeOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  mapDot: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(74, 144, 226, 0.2)",
  },
  cardShadow: {
    position: "absolute",
    top: 4,
    left: 4,
    right: -4,
    bottom: -4,
    backgroundColor: "rgba(74, 144, 226, 0.1)",
    borderRadius: 28,
    zIndex: -1,
  },
  card: {
    height: Platform.OS === "android" ? "75%" : "80%",
    // height: Platform.OS === "android" ? height * 0.75 :height * 0.80,
    marginHorizontal: height < 840 ? 20 : 16,
    marginTop: height < 840 ? 20 : 16,
    marginBottom: height < 840 ? 10 : 6,
    backgroundColor: "#fff",
    borderRadius: 24,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
  },
  questionImage: {
    width: "100%",
    // Height will be set dynamically to 1/3 of card height via onLayout
  },
  questionImageStyle: {
    borderTopLeftRadius: height > 1200 ? 32 : height > 1000 ? 28 : 28,
    borderTopRightRadius: height > 1200 ? 32 : height > 1000 ? 28 : 28,
  },
  imageGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "40%",
  },
  cornerAccent: {
    position: "absolute",
    top: 0,
    right: 0,
    width: height > 1200 ? 80 : height > 1000 ? 70 : height > 800 ? 65 : 60,
    height: height > 1200 ? 80 : height > 1000 ? 70 : height > 800 ? 65 : 60,
    borderTopRightRadius: height > 1200 ? 32 : height > 1000 ? 28 : 28,
    borderBottomLeftRadius:
      height > 1200 ? 50 : height > 1000 ? 45 : height > 800 ? 42 : 40,
    backgroundColor: "rgba(74, 144, 226, 0.1)",
  },
  questionTextContainer: {
    minHeight:
      height > 1200
        ? 120
        : height > 1000
        ? 100
        : height > 950
        ? 80
        : height > 800
        ? 70
        : 70,
    maxHeight:
      height > 1200
        ? 140
        : height > 1000
        ? 120
        : height > 950
        ? 100
        : height > 800
        ? 85
        : 90,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    // paddingTop: height > 1200 ? 16: height > 1000 ? 12 : height > 950 ? 10 : height > 800 ? 8 : 8,
  },
  questionTextContainerNoImage: {
    backgroundColor: "#F0F8FF",
    borderRadius: 12,
    padding: height > 1200 ? 20 : height > 1000 ? 16 : height > 800 ? 14 : 12,
    borderWidth: 2,
    borderColor: "#E0F0FF",
  },
  // questionImage: {
  //   width: "100%",
  //   height: height > 1000 ? 400 : height > 930 ? 250 : 200,
  //   resizeMode: "cover",
  // },
  questionContainer: {
    height: Platform.OS === "android" ? (height > 820 ? 130 : 80) : null,
    paddingHorizontal: Platform.OS === "android" ? 10 : 10,
    paddingTop: Platform.OS === "android" ? 10 : 30,
    paddingBottom: Platform.OS === "android" ? 0 : 30,
    alignContent: "center",
    justifyContent: "center",
  },
  questionText: {
    fontFamily: "Poppins-SemiBold",
    // fontSize: 10,
    fontSize: Platform.OS === "ios" ? 20 : height > 820 ? 24 : 18,
    color: "#333",
    textAlign: "center",
  },
  answersContainer: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 8,
    // backgroundColor: 'pink'
  },
  answersGrid: {
    paddingHorizontal:
      height > 1200 ? 20 : height > 1000 ? 16 : height > 800 ? 14 : 12,
    gap: height > 1200 ? 14 : height > 1000 ? 12 : height > 800 ? 10 : 8,
    flex: 1,
    justifyContent: "center",
  },
  answerButtonWrapper: {
    flex: 1,
    minHeight:
      height > 1200
        ? 70
        : height > 1000
        ? 65
        : height > 950
        ? 55
        : height > 800
        ? 50
        : 45,
    maxHeight:
      height > 1200
        ? 80
        : height > 1000
        ? 75
        : height > 950
        ? 65
        : height > 800
        ? 60
        : 55,
    // maxHeight: height > 1200 ? 80 : height > 1000 ? 75 : height > 950 ? 65 : height > 800 ? 60 : 55,
  },
  answerButton: {
    flex: 1,
    borderRadius: 14,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  answerGradient: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal:
      height > 1200 ? 20 : height > 1000 ? 18 : height > 800 ? 16 : 14,
    gap: height > 1200 ? 16 : height > 1000 ? 14 : height > 800 ? 13 : 12,
  },
  answerBadge: {
    width:
      height > 1200
        ? 40
        : height > 1000
        ? 36
        : height > 950
        ? 32
        : height > 800
        ? 28
        : 24,
    height:
      height > 1200
        ? 40
        : height > 1000
        ? 36
        : height > 950
        ? 32
        : height > 800
        ? 28
        : 24,
    borderRadius:
      height > 1200
        ? 20
        : height > 1000
        ? 18
        : height > 950
        ? 16
        : height > 800
        ? 14
        : 14,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  answerBadgeText: {
    fontFamily: "Poppins-Bold",
    fontSize:
      height > 1200
        ? 20
        : height > 1000
        ? 18
        : height > 950
        ? 16
        : height > 800
        ? 14
        : 12,
    color: "white",
  },
  answerText: {
    flex: 1,
    fontFamily: "Poppins-SemiBold",
    fontSize:
      height > 1200
        ? 22
        : height > 1000
        ? 20
        : height > 950
        ? 18
        : height > 800
        ? 16
        : 14,
    color: "#fff",
  },
  statusIcon: {
    marginLeft: "auto",
  },
  // answersGrid: {
  //   // flex:1,
  //   paddingTop: width * 0.07,
  //   paddingBottom: width * 0.05,
  //   paddingHorizontal: width * 0.04,
  //   gap: 10,
  //   width: "100%",
  // },
  // answerButton: {
  //   height: Platform.OS === "ios" ? 50 : height > 820 ? 60 : 50,
  //   borderRadius: 16,
  //   overflow: "hidden",
  // },
  // answerGradient: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   padding: 12,
  // },
  // answerText: {
  //   fontFamily: "Poppins-SemiBold",
  //   fontSize: Platform.OS === "ios" ? 16 : height > 820 ? 20 : 16,
  //   color: "#fff",
  // },
  // progressBarContainer: {
  //   paddingHorizontal: 16,
  //   paddingBottom: 16,
  // },
  // progressBar: {
  //   height: 8,
  //   backgroundColor: "#E8EDF3",
  //   borderRadius: 4,
  //   overflow: "hidden",
  // },
  // progressFill: {
  //   height: "100%",
  //   backgroundColor: "#4A90E2",
  //   borderRadius: 4,
  // },
  bottomButtonsBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 8,
    // paddingBottom is set dynamically using safe area insets
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  // bottomButtonsBox: {
  //   position: Platform.OS === "ios" ? "absolute" : "relative",
  //   bottom: 0,
  //   top: Platform.OS === "android" ? (height > 940 ? 0 : 0) : null,
  //   width: "100%",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   paddingHorizontal: 30,
  //   marginTop: 0,
  //   paddingTop: 10,
  //   paddingBottom: Platform.OS === "ios" ? 35 : null,
  //   borderColor: Platform.OS === "ios" ? "#DEE2E6" : "#ccc00",
  // },
  exitButton: {
    width: "47%",
    height: 55,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  coinText: {
    flexDirection: "row",
    position: "absolute",
    top: -10,
    left: 20,
    gap: 5,
  },
});

export default MainQuizAiGen;
