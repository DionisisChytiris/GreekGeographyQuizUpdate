import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
  StatusBar,
  Platform,
  Alert,
  useWindowDimensions,
  DimensionValue,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import {
  Menu,
  Waves,
  Globe as Globe2,
  MapPin,
  Mountain,
} from "lucide-react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useEffect, useState, useRef, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/RootStackParamList";
import Animated, {
  FadeInDown,
  FadeInUp,
  interpolate,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
import ShareButton from "./components/ShareButton";
import { useAppSelector, useAppDispatch } from "../ReduxToolkit/store";
import {
  setShow1,
  setShow2,
  setShow3,
  loadShowState,
} from "../ReduxToolkit/lockCategorySlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import QuizScreenCategoryCard from "./MainTemplateFiles/QuizScreenCategoryCard";
import {
  decrementCoins,
  incrementCoins,
  incrementCoinsBonus,
  saveCoins,
} from "../ReduxToolkit/coinsSlice";
import { useSoundEffect } from "./Utilities/useSoundEffects";
import CoverButton from "./components/CoverButton";
import DailyBonusModal from "./components/DailyBonusModal";
// import { logEvent } from 'firebase/analytics';
// import { analytics } from "../App";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
// const { width } = Dimensions.get("window");

type QuizScreenProp = StackNavigationProp<RootStackParamList, "Quiz1">;

export default function HomeScreen() {
  const navigation = useNavigation<QuizScreenProp>();
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.user.name);
  const coins = useAppSelector((state) => state.coins.coins);
  const isSoundEnabled = useAppSelector((state) => state.sound.isSoundEnabled);
  const { show1, show2, show3, isLoaded } = useAppSelector(
    (state) => state.show
  );
  const [scale1, setScale1] = useState(1);
  const [scale2, setScale2] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": Poppins_400Regular,
    "Poppins-SemiBold": Poppins_600SemiBold,
    "Poppins-Bold": Poppins_700Bold,
  });
  const { width } = useWindowDimensions();

  // Adjust width dynamically
  let dynamicWidth: DimensionValue;
  if (width > 1440) {
    dynamicWidth = "22%"; // Desktop
  } else if (width > 1200) {
    dynamicWidth = "22%"; // Large tablets
  } else if (width > 800) {
    dynamicWidth = "22%"; // Small tablets
  } else {
    dynamicWidth = "47.7%"; // Phones
  }
  const rotateAnim = useSharedValue(0);
  // const rotateAnim = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    startRotation();
    checkLastClaimDate();
  }, []);

  const checkLastClaimDate = async () => {
    const lastClaimDate = await AsyncStorage.getItem("lastClaimDate");
    const today = new Date().toISOString().split("T")[0];
    if (lastClaimDate === today) {
      setIsClaimed(true);
    }
  };

  const startRotation = () => {
    rotateAnim.value = withRepeat(
      withTiming(1, { duration: 2500, easing: Easing.linear }),
      -1,
      false
    );
  };

  const rotation = useDerivedValue(
    () => interpolate(rotateAnim.value, [0, 1], [0, 360]) + "deg"
  );

  useEffect(() => {
    dispatch(loadShowState());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  }, [showModal]);

  const handlePress = async () => {
    await AsyncStorage.removeItem("lastClaimDate"); // Remove item from AsyncStorage
    // await AsyncStorage.removeItem("showState"); // Remove item from AsyncStorage
    console.log("Storage cleared-State reset to initial values");
  };

  const coinsDropSound = useSoundEffect(
    require("../assets/sounds/coinsDrop.wav")
  );

  // const CoverButton1: React.FC<{
  //   iconTest1: React.ReactNode;
  //   titleTest1: string;
  //   gradient: [string, string, ...string[]];
  //   testFunction: () => void;
  // }> = ({ iconTest1, titleTest1, gradient, testFunction }) => {
  //   return (
  //     <View style={{}}>
  //       <View style={{ position: "absolute", top: 20, right: 40, zIndex: 1 }}>
  //         <Image
  //           source={require("../assets/Photos/goldbg.png")}
  //           style={{ width: 20, height: 20 }}
  //         />
  //         <Text style={styles.categoryTitle}>100</Text>
  //       </View>
  //       <Pressable
  //         onPress={testFunction}
  //         style={[styles.categoryCard, { opacity: 0.4 }]}
  //       >
  //         <LinearGradient
  //           colors={gradient as [string, string, ...string[]]}
  //           style={styles.categoryContent}
  //         >
  //           <Text>
  //             {iconTest1} {/* The icon passed as a prop */}
  //           </Text>
  //           <Text style={styles.categoryTitle}>{titleTest1}</Text>
  //         </LinearGradient>
  //       </Pressable>
  //     </View>
  //   );
  // };

  const UnlockMountainCtg = () => {
    if (coins >= 300) {
      if (isSoundEnabled) {
        coinsDropSound();
      }
      dispatch(decrementCoins(300)); // Decrement 1 coin
      dispatch(saveCoins(coins - 300)); // Save the updated coins after purchase
      dispatch(setShow1(!show1));
    } else {
      Alert.alert(
        "Χρειάζεσαι τουλάχιστον 300 νομίσματα για να ενεργοποιήσεις αυτή την κατηγορία!"
      );
    }
  };
  const UnlockLakesCtg = () => {
    if (coins >= 100) {
      if (isSoundEnabled) {
        coinsDropSound();
      }
      dispatch(decrementCoins(100)); // Decrement 1 coin
      dispatch(saveCoins(coins - 100)); // Save the updated coins after purchase
      dispatch(setShow2(!show2));
    } else {
      Alert.alert(
        "Χρειάζεσαι τουλάχιστον 100 νομίσματα για να ενεργοποιήσεις αυτή την κατηγορία!"
      );
    }
  };
  const UnlockNomoiCtg = () => {
    if (coins >= 500) {
      if (isSoundEnabled) {
        coinsDropSound();
      }
      dispatch(decrementCoins(500)); // Decrement 1 coin
      dispatch(saveCoins(coins - 500)); // Save the updated coins after purchase
      dispatch(setShow3(!show3));
    } else {
      Alert.alert(
        "Χρειάζεσαι τουλάχιστον 500 νομίσματα για να ενεργοποιήσεις αυτή την κατηγορία!"
      );
    }
  };

  const [coins1, setCoins1] = useState(0);
  // Coins Collect Sound Effect
  const coinsCollectSound = useSoundEffect(
    require("../assets/sounds/getCoin.wav")
  );

  if (!fontsLoaded && !fontError) {
    return null;
  }
  // console.log("Current show state:", show1);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <Animated.View
        entering={FadeInUp.delay(200).springify()}
        style={styles.header}
      >
        {/* <Pressable onPress={handlePress} style={{ marginBottom: 30 }}>
          <View>
            <Text>Clear Storage</Text>
          </View>
        </Pressable> */}
        <View>
          {/* <Text style={styles.greeting}>Hello Explorer! 👋</Text> */}
          <Text style={styles.greeting}>Γειά σου {name}! 👋</Text>
          {/* <Text style={styles.subtitle}>Ready to test your geography knowledge?</Text> */}
          <Text style={styles.subtitle}>Έτοιμος να τεστάρεις τις γνώσεις </Text>
          <Text style={[styles.subtitle, { marginTop: -5 }]}>
            σου στην γεωγραφία;
          </Text>
        </View>
        <Pressable
          onPressIn={() => setScale1(1.25)}
          onPressOut={() => {
            navigation.navigate("Settings");
            setScale1(1);
          }}
          style={[styles.menuButton, { transform: [{ scale: scale1 }] }]}
        >
          <Menu size={24} color="#333" />
        </Pressable>
      </Animated.View>
      <Animated.View
        style={styles.categoriesGrid}
        entering={FadeInDown.delay(300).springify()}
      >
        <View style={{ width: dynamicWidth }}>
          <QuizScreenCategoryCard
            id1="ifa"
            link1="GeneralQuestions"
            title1="Γενικές Ερωτήσεις"
            icon1={<Globe2 size={32} color="white" />}
            gradient1={["#9B59B6", "#8E44AD"]}
          />
        </View>
        <View style={{ width: dynamicWidth }}>
          {/* {show2 && <CoverButton test={UnlockLakesCtg} />} */}
          {show2 ? (
            <CoverButton
              testFunction={UnlockLakesCtg}
              titleTest1="Λίμνες - Ποτάμια"
              amount={100}
              iconTest1={<Waves size={32} color="white" />}
              gradient={["#3498DB", "#2980B9"]}
            />
          ) : (
            // <CoverButton1
            //   testFunction={UnlockLakesCtg}
            //   titleTest1="Λίμνες - Ποτάμια"
            //   iconTest1={<Waves size={32} color="white" />}
            //   gradient={["#3498DB", "#2980B9"]}
            // />
            <QuizScreenCategoryCard
              id1="ifaasd"
              link1="LakeRiver"
              title1="Λίμνες - Ποτάμια"
              icon1={<Waves size={32} color="white" />}
              gradient1={["#3498DB", "#2980B9"]}
            />
          )}
        </View>
        <View style={{ width: dynamicWidth }}>
          {/* {show1 && <CoverButton test={UnlockMountainCtg} />} */}
          {show1 ? (
            <CoverButton
              testFunction={UnlockMountainCtg}
              titleTest1="Βουνά"
              amount={300}
              iconTest1={<Mountain size={32} color="white" />}
              gradient={["#4ECDC4", "#45B7AF"]}
            />
          ) : (
            <QuizScreenCategoryCard
              id1="adsfifa"
              link1="Mountain"
              title1="Βουνά"
              icon1={<Mountain size={32} color="white" />}
              gradient1={["#4ECDC4", "#45B7AF"]}
            />
          )}
        </View>
        <View style={{ width: dynamicWidth }}>
          {/* <View style={{ width: width>900? "22%": "47.7%" }}> */}
          {/* {show3 && <CoverButton test={UnlockNomoiCtg} />} */}
          {show3 ? (
            <CoverButton
              testFunction={UnlockNomoiCtg}
              titleTest1="Νομοί - Πόλεις"
              amount={500}
              iconTest1={<MapPin size={32} color="white" />}
              gradient={["#FF6B6B", "#FF8E8E"]}
            />
          ) : (
            <QuizScreenCategoryCard
              id1="gerwifa"
              link1="Nomoi"
              title1="Νομοί - Πόλεις"
              icon1={<MapPin size={32} color="white" />}
              gradient1={["#FF6B6B", "#FF8E8E"]}
            />
          )}
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(500).springify()}>
        <View style={styles.bankCoinAbsolute}>
          <View style={styles.bankContainer}>
            <Image
              source={require("../assets/Photos/bankbg.png")}
              style={{ width: 100, height: 100 }}
            />
            <View style={styles.coinsContainer}>
              <Image
                source={require("../assets/Photos/goldbg.png")}
                style={{ width: 28, height: 28 }}
              />
              <Text style={[styles.categoryTitle, { fontSize: 14 }]}>
                {coins}
              </Text>
            </View>
          </View>

          <View>
            <DailyBonusModal
              visible={showModal}
              onClose={() => setShowModal(false)}
            />
          </View>

          {!isClaimed ? (
            <Pressable
              onPressIn={() => setScale2(0.95)}
              onPressOut={async () => {
                if (isSoundEnabled) {
                  // CorrectPlaySound();
                  coinsCollectSound();
                }
                if (isClaimed) {
                  Alert.alert(
                    "Already Claimed",
                    "You have already claimed your daily reward."
                  );
                  return;
                }
                // Log the analytics event
                // Analytics.logEvent("daily_bonus_collected", {
                //   coins_collected: 50, // Number of coins collected
                //   timestamp: new Date().toISOString(), // Optional: Add a timestamp
                // });
                // Alert.alert("get your daily coins"),
                dispatch(incrementCoinsBonus());
                dispatch(saveCoins(coins + 50));
                setScale2(1);
                setShowModal(true);
                setIsClaimed(true);
                await AsyncStorage.setItem(
                  "lastClaimDate",
                  new Date().toISOString().split("T")[0]
                );
                // await logEvent(analytics, 'daily_bonus_collected', {
                //   coins_collected: 50,
                //   timestamp: new Date().toISOString(),
                // });
                // Alert.alert("Success", "You received 10 coins!");
                // setTimeout(() => {
                //   setScale2(1);
                // }, 100); // ✅ Adds a smooth reset delay
              }}
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingRight: 60,
              }}
            >
              <Animated.View
                style={{
                  position: "absolute",
                  width: 200,
                  height: 200,
                  opacity: 0.4,
                  transform: [{ rotate: rotation }, { scale: scale2 }],
                }}
              >
                <Image
                  source={require("../assets/Photos/starbg.png")}
                  style={{ width: 200, height: 200, borderRadius: 50 }}
                />
              </Animated.View>
              <View
                style={{
                  // backgroundColor: "gold",
                  padding: 5,
                  borderRadius: 10,
                  position: "absolute",
                  zIndex: 10,
                }}
              >
                <Image
                  source={require("../assets/Photos/goldbg.png")}
                  style={{ width: 48, height: 48 }}
                />
                {/* <Text style={{ fontSize: 12, color: "white" }}>button</Text> */}
              </View>
            </Pressable>
          ) : null}
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(400).springify()}>
        <ShareButton />
      </Animated.View>
      <View
        style={{
          marginBottom:
            Platform.OS === "android" ? (height > 820 ? 60 : 20) : 20,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    // backgroundColor: '#F7F9FC',
    paddingTop: Platform.OS === "ios" ? 0 : 14,
    paddingHorizontal: 16,
    // alignItems: 'center'
    // alignItems: height > 900 ? "center" : "flex-start",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  coverButton: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 9999,
    width: "100%",
    // padding: 40,
    backgroundColor: "#F7F9FC90",
    height: height > 1000 ? "38%" : "32%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24,
    width: "100%",
    marginTop: height > 1000 ? 20 : 0,
    // padding: 16,
  },
  greeting: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    color: "#333",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: height > 900 ? 20 : 16,
    fontFamily: "Poppins-Regular",
    color: "#666",
  },
  menuButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoriesGrid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
    alignSelf: "center",
    marginTop: height > 1000 ? 40 : 0,
    width: height > 1000 ? "80%" : "100%",
    // width: width>900?"60%":"50%",
  },
  categoryCard: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 20,
    overflow: "hidden",
    // backgroundColor: "#F7F9FC90",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.15,
    // shadowRadius: 8,
    // elevation: 5,
  },
  categoryContent: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  categoryTitle: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    color: "white",
  },
  bankCoinAbsolute: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 30 : 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 40,
    // backgroundColor: "#57df45",
    // backgroundColor: "#f5f5f5",
  },
  bankContainer: {
    flexDirection: "row",
    gap: 10,
    paddingBottom: 40,
    paddingHorizontal: 0,
  },
  coinsContainer: {
    position: "absolute",
    bottom: 20,
    left: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#0cc0df",
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 3,
  },
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // This will horizontally center the text
    backgroundColor: "#464443",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    gap: 8,
  },
  shareText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center", // Ensures text is centered if there is any overflow or multiline text
  },
});

// const categories: {
// const categories: {
//   id: string;
//   title: string;
//   icon: any;
//   gradient: [string, string, ...string[]];
//   image: string;
//   track: any;
// }[] = [
//   {
//     id: "GeneralQuestions",
//     title: "Γενικές Ερωτήσεις",
//     icon: Globe2,
//     gradient: ["#9B59B6", "#8E44AD"],
//     track: trackData4,
//     image:
//       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
//   },
//   {
//     id: "LakeRiver",
//     title: "Λίμνες - Ποτάμια",
//     icon: Waves,
//     gradient: ["#3498DB", "#2980B9"],
//     track: trackData3,
//     image:
//       "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&q=80",
//   },
//   {
//     id: "Mountain",
//     title: "Βουνά",
//     icon: Mountain,
//     gradient: ["#4ECDC4", "#45B7AF"],
//     track: trackData2,
//     image:
//       "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
//   },
//   {
//     id: "Nomoi",
//     title: "Νομοί - Πόλεις",
//     icon: MapPin,
//     gradient: ["#FF6B6B", "#FF8E8E"],
//     track: trackData1,
//     image:
//       "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80",
//   },
// ];

// const handleCategoryPress = (categoryId: string) => {
//   const categoryToScreenMap: Record<string, string> = {
//     GeneralQuestions: "GeneralQuestions",
//     LakeRiver: "LakeRiver",
//     Mountain: "Mountain",
//     Nomoi: "Nomoi",
//   };

//   const screenName = categoryToScreenMap[categoryId];

//   if (screenName) {
//     // console.log(`Navigating to ${screenName} with category:`, categoryId);
//     navigation.navigate(screenName as any, { categoryId });
//   } else {
//     console.warn("Category not found:", categoryId);
//   }
// };

// const dispatch = useAppDispatch();
// const coins = useAppSelector((state) => state.coins.coins);

// const progressKey1 = "lastQuestion3";
// const progressKey2 = "lastQuestion2";
// const progressKey3 = "lastQuestion1";
// const progressKey4 = "lastQuestion4";
// const lastQuestionIndex1 = useAppSelector(
//   (state) => state.progress.progress[progressKey1]
// );
// const lastQuestionIndex2 = useAppSelector(
//   (state) => state.progress.progress[progressKey2]
// );
// const lastQuestionIndex3 = useAppSelector(
//   (state) => state.progress.progress[progressKey3]
// );
// const lastQuestionIndex4 = useAppSelector(
//   (state) => state.progress.progress[progressKey4]
// );

// const progressKey = "lastQuestion3";
// const dispatch = useAppDispatch();

// const [trackData1, setTrackData1] = useState(`${lastQuestionIndex1 ?? 0}/60`);
// const [trackData2, setTrackData2] = useState(`${lastQuestionIndex2 ?? 0}/60`);
// const [trackData3, setTrackData3] = useState(`${lastQuestionIndex3 ?? 0}/60`);
// const [trackData4, setTrackData4] = useState(`${lastQuestionIndex4 ?? 0}/60`);

// useEffect(() => {
//   setTrackData1(`${lastQuestionIndex1 ?? 0}/60`);
//   setTrackData2(`${lastQuestionIndex2 ?? 0}/60`);
//   setTrackData3(`${lastQuestionIndex3 ?? 0}/60`);
//   setTrackData4(`${lastQuestionIndex4 ?? 0}/60`);
// }, [
//   lastQuestionIndex1,
//   lastQuestionIndex2,
//   lastQuestionIndex3,
//   lastQuestionIndex4,
// ]);

// useEffect(() => {
//   dispatch(getProgress(progressKey));
// }, [dispatch, progressKey]);
