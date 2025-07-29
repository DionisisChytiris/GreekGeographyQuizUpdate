import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
  StatusBar,
  ImageBackground,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/RootStackParamList";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import ShareButton from "./components/ShareButton";
import { useAppSelector, useAppDispatch } from "../ReduxToolkit/store";
import { getProgress } from "../ReduxToolkit/progressSlice";
import { trackEventsOrganized } from "../GoogleAnalytics/trackEventsOrganized";
import { trackEvent } from "../GoogleAnalytics/trackEvent";
import QuizScreenCategoryCard from "./MainTemplateFiles/QuizScreenCategoryCard";
// import QuizScreenCategoryCard from "./MainTemplateFiles/QuizScreenCategoryCard";
// import { StatusBar } from 'expo-status-bar';

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

type QuizScreenProp = StackNavigationProp<RootStackParamList, "Quiz1">;
// import { SplashScreen } from 'expo-router';

// Prevent splash screen from auto-hiding
// SplashScreen.preventAutoHideAsync();

export default function BonusQuizzes() {
  const navigation = useNavigation<QuizScreenProp>();
  const name = useAppSelector((state) => state.user.name);
  const [scale1, setScale1] = useState(1);
  const [scale2, setScale2] = useState(1);
  const [pressedCategory, setPressedCategory] = useState<string | null>(null);
  const [enable, setEnable] = useState<string | boolean>(false);
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": Poppins_400Regular,
    "Poppins-SemiBold": Poppins_600SemiBold,
    "Poppins-Bold": Poppins_700Bold,
  });
  // const dispatch = useAppDispatch();
  // const coins = useAppSelector((state) => state.coins.coins);

  const progressKey1 = "lastQuestion3";
  const progressKey2 = "lastQuestion2";
  const progressKey3 = "lastQuestion1";
  const progressKey4 = "lastQuestion4";
  const lastQuestionIndex1 = useAppSelector(
    (state) => state.progress.progress[progressKey1]
  );
  const lastQuestionIndex2 = useAppSelector(
    (state) => state.progress.progress[progressKey2]
  );
  const lastQuestionIndex3 = useAppSelector(
    (state) => state.progress.progress[progressKey3]
  );
  const lastQuestionIndex4 = useAppSelector(
    (state) => state.progress.progress[progressKey4]
  );

  const progressKey = "lastQuestion3";
  const dispatch = useAppDispatch();

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

  useEffect(() => {
    dispatch(getProgress(progressKey));
  }, [dispatch, progressKey]);

  // const categories: {
  const categories: {
    id: string;
    title: string;
    icon: React.ComponentType<any>;
    iconName: string;
    gradient: [string, string, ...string[]];
    image: string;
    track: any;
  }[] = [
    {
      id: "GreekTraditions",
      title: "Έθιμα & Παραδόσεις",
      icon: FontAwesome,
      iconName: "globe",
      gradient: ["#626ccc", "#3f4dca"],
      track: null,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
    },
    {
      id: "TraditionalFood",
      title: "Παραδοσιακά Φαγητά ανά Περιοχή",
      icon: Feather,
      iconName: "map-pin",
      gradient: ["#b160c5", "#c94dc9"],
      track: null,
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80",
    },
  ];

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handleCategoryPress = (categoryId: string) => {
    const categoryToScreenMap: Record<string, string> = {
      GreekTraditions: "GreekTraditions",
      TraditionalFood: "TraditionalFood",
    };

    const screenName = categoryToScreenMap[categoryId];

    if (screenName) {
      // console.log(`Navigating to ${screenName} with category:`, categoryId);
      navigation.navigate(screenName as any, { categoryId });
    } else {
      console.warn("Category not found:", categoryId);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <Animated.View entering={FadeInUp.delay(200).springify()}>
        <View style={styles.header}>
          <Pressable
            onPress={() => {
              navigation.navigate("Quiz1");
            }}
            style={{ marginLeft: 10 }}
          >
            <Feather name="home" size={24} color="#000" />
          </Pressable>

          <Pressable
            onPressIn={() => setScale1(1.25)}
            onPressOut={() => {
              navigation.navigate("Quiz1");
              setScale1(1);
            }}
            style={[
              styles.menuButton,
              { transform: [{ scale: scale1 }], padding: 0 },
            ]}
          >
            <Image
              source={require("../assets/adaptive-icon-test.png")}
              style={{ width: 45, height: 45 }}
            />
          </Pressable>
        </View>
        <View style={{ marginTop: -20, marginBottom: 20 }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#595a5f",
              paddingHorizontal: 10,
            }}
          >
            Γνώρισε τα παραδοσιακά φαγητά κάθε περιοχής και τα μοναδικά έθιμα
            της Ελλάδας μέσα από διασκεδαστικά quiz!
          </Text>
        </View>
      </Animated.View>

      <Animated.View
        style={styles.categoriesGrid}
        entering={FadeInDown.delay(300).springify()}
      >
        <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: '48%'}}>
          <QuizScreenCategoryCard
            id1="itrad"
            link1="GreekTraditions"
            title1="Έθιμα & Παραδόσεις"
            trackEventName={trackEventsOrganized.GREEK_TRADITIONS}
            icon1={null}
            gradient1={["#626ccc", "#3f4dca"]}
          />

        </View>
         <View style={{width: '48%'}}>

          <QuizScreenCategoryCard
            id1="ifaasdf"
            link1="TraditionalFood"
            title1="Παραδοσιακά Φαγητά ανά Περιοχή"
            trackEventName={trackEventsOrganized.GREEK_FOOD}
            icon1={null}
            gradient1={["#b160c5", "#c94dc9"]}
          />
         </View>

        </View>
        {/* <QuizScreenCategoryCard
        /> */}
        {/* {categories.map((category) => {
          const Icon = category.icon;
          const isPressed = pressedCategory === category.id;
          const isDisabled = enable === category.id;
          return (
            <Pressable
              key={category.id}
              style={[
                styles.categoryCard,
                { transform: [{ scale: isPressed ? 0.95 : 1 }] },
              ]}
              onPressIn={() => {
                setPressedCategory(category.id);
              }}
              onPressOut={() => {
                handleCategoryPress(category.id);
                setPressedCategory(null);
              }}
              disabled={isDisabled}
            >
              <LinearGradient
                colors={category.gradient}
                style={styles.categoryContent}
              >
                <Icon size={32} color="white" />

                <Text style={styles.categoryTitle}>{category.title}</Text>
              </LinearGradient>
            </Pressable>
          );
        })} */}
      </Animated.View>
      <Image
        source={require("../assets/Photos/imgBonus.png")}
        style={{
          width: "100%",
          height: 300,
          borderRadius: 20,
          marginBottom: 20,
        }}
      />
      <View style={{ marginBottom: 20 }} />
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
    alignItems: height > 900 ? "center" : "flex-start",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
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
    alignItems: "center",
    marginTop: height > 1000 ? 40 : 0,
    width: height > 1000 ? "80%" : "100%",
  },
  categoryCard: {
    width: "47.7%",
    aspectRatio: 1,
    borderRadius: 20,
    overflow: "hidden",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.15,
    // shadowRadius: 8,
    // elevation: 5,
  },
  // categoryBackground: {
  //   position: "absolute",
  //   width: "100%",
  //   height: "100%",
  // },
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
    width: 150,
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
