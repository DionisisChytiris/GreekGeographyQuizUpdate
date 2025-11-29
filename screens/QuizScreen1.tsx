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
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
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
import BattleButton from "./components/BattleButton";
import { trackEventsOrganized } from "../GoogleAnalytics/trackEventsOrganized";
import { trackEvent } from "../GoogleAnalytics/trackEvent";
import MainQuizCoinsDailyCollection from "./components/MainQuizCoinsDailyCollection";
import { MainQuizMoreCategories } from "./components/MainQuizMoreCategories";
import { logInfo } from "../utils/logger";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

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
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": Poppins_400Regular,
    "Poppins-SemiBold": Poppins_600SemiBold,
    "Poppins-Bold": Poppins_700Bold,
  });
  const { width } = useWindowDimensions();

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

  useEffect(() => {
    dispatch(loadShowState());
  }, [dispatch]);

  const handlePress = async () => {
    await AsyncStorage.removeItem("lastClaimDate"); // Remove item from AsyncStorage
    await AsyncStorage.removeItem("coins"); // Remove coins from AsyncStorage
    await AsyncStorage.removeItem("isFirstLaunch"); // Remove firstlaunch from AsyncStorage
    await AsyncStorage.removeItem("showState"); // Remove item from AsyncStorage
    logInfo("Storage cleared - State reset to initial values");
  };

  const coinsDropSound = useSoundEffect(
    require("../assets/sounds/coinsDrop.wav")
  );

  const UnlockMountainCtg = () => {
    if (coins >= 500) {
      if (isSoundEnabled) {
        coinsDropSound();
      }
      dispatch(decrementCoins(500)); // Decrement 1 coin
      dispatch(saveCoins(coins - 500)); // Save the updated coins after purchase
      dispatch(setShow1(!show1));
    } else {
      Alert.alert(
        "Δεν υπάρχουν αρκετά νομίσματα", // Title
        "Χρειάζεσαι τουλάχιστον 500 νομίσματα για να ενεργοποιήσεις αυτή την κατηγορία!",
        [{ text: "ΟΚ" }]
      );
    }
  };
  const UnlockLakesCtg = () => {
    if (coins >= 200) {
      if (isSoundEnabled) {
        coinsDropSound();
      }
      dispatch(decrementCoins(200)); // Decrement 1 coin
      dispatch(saveCoins(coins - 200)); // Save the updated coins after purchase
      dispatch(setShow2(!show2));
    } else {
      Alert.alert(
        "Δεν υπάρχουν αρκετά νομίσματα", // Title
        "Χρειάζεσαι τουλάχιστον 200 νομίσματα για να ενεργοποιήσεις αυτή την κατηγορία!",
        [{ text: "ΟΚ" }]
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
        "Δεν υπάρχουν αρκετά νομίσματα", // Title
        "Χρειάζεσαι τουλάχιστον 500 νομίσματα για να ενεργοποιήσεις αυτή την κατηγορία!",
        [{ text: "ΟΚ" }]
      );
    }
  };

  if (!fontsLoaded && !fontError) {
    return null;
  }
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
            trackEvent(trackEventsOrganized.SETTINGS);
          }}
          style={[styles.menuButton, { transform: [{ scale: scale1 }] }]}
        >
          {/* <Menu size={24} color="#333" /> */}
          <Feather name="menu" size={24} color="#333" />
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
            icon1={<Feather name="globe" size={32} color="white" />}
            gradient1={["#9B59B6", "#8E44AD"]}
            trackEventName={trackEventsOrganized.GENERAL_QUESTIONS}
          />
        </View>
        <View style={{ width: dynamicWidth }}>
          {show2 ? (
            <CoverButton
              testFunction={UnlockLakesCtg}
              titleTest1="Λίμνες - Ποτάμια"
              amount={200}
              iconTest1={
                <MaterialCommunityIcons name="wave" size={32} color="white" />
              }
              gradient={["#3498DB", "#2980B9"]}
            />
          ) : (
            <QuizScreenCategoryCard
              id1="ifaasd"
              link1="LakeRiver"
              title1="Λίμνες - Ποτάμια"
              icon1={
                <MaterialCommunityIcons name="wave" size={32} color="white" />
              }
              gradient1={["#3498DB", "#2980B9"]}
              trackEventName={trackEventsOrganized.LAKES_RIVERS}
            />
          )}
        </View>
        <View style={{ width: dynamicWidth }}>
          {/* {show1 && <CoverButton test={UnlockMountainCtg} />} */}
          {show1 ? (
            <CoverButton
              testFunction={UnlockMountainCtg}
              titleTest1="Βουνά"
              amount={500}
              iconTest1={
                <MaterialIcons name="terrain" size={32} color="white" />
              }
              gradient={["#4ECDC4", "#45B7AF"]}
            />
          ) : (
            <QuizScreenCategoryCard
              id1="adsfifa"
              link1="Mountain"
              title1="Βουνά"
              icon1={<MaterialIcons name="terrain" size={32} color="white" />}
              gradient1={["#4ECDC4", "#45B7AF"]}
              trackEventName={trackEventsOrganized.MOUNTAINS}
            />
          )}
        </View>
        <View style={{ width: dynamicWidth }}>
          {show3 ? (
            <CoverButton
              testFunction={UnlockNomoiCtg}
              titleTest1="Νομοί - Πόλεις"
              amount={500}
              iconTest1={<Feather name="map-pin" size={32} color="white" />}
              gradient={["#FF6B6B", "#FF8E8E"]}
            />
          ) : (
            <QuizScreenCategoryCard
              id1="gerwifa"
              link1="Nomoi"
              title1="Νομοί - Πόλεις"
              icon1={<Feather name="map-pin" size={32} color="white" />}
              gradient1={["#FF6B6B", "#FF8E8E"]}
              trackEventName={trackEventsOrganized.NOMOI_CITIES}
            />
          )}
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(600).springify()}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 30}}>
          <View  style={{width: '48%'}}>
            <MainQuizMoreCategories/>
          </View>
          <View  style={{width: '48%'}}>
            <MainQuizCoinsDailyCollection/>
          </View>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(590).springify()}>
        <BattleButton />
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
    paddingTop: Platform.OS === "ios" ? 0 : height < 900 ? 12 : 0,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24,
    width: "100%",
    marginTop: height > 1000 ? 20 : 0,
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
  },
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    textAlign: "center",
  },
});
