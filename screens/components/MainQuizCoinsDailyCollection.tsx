import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  Alert,
  StyleSheet,
  Platform,
} from "react-native";
import React, { useEffect } from "react";
import DailyBonusModal from "../Modals/DailyBonusModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppSelector, useAppDispatch } from "../../ReduxToolkit/store";
import ContactButton from "./ContactButton";
import { useSoundEffect } from "../../screens/Utilities/useSoundEffects";
import { trackEventsOrganized } from "../../GoogleAnalytics/trackEventsOrganized";
import { trackEvent } from "../../GoogleAnalytics/trackEvent";
import {
  setShow1,
  setShow2,
  setShow3,
  loadShowState,
} from "../../ReduxToolkit/lockCategorySlice";
import {
  decrementCoins,
  incrementCoins,
  incrementCoinsBonus,
  saveCoins,
} from "../../ReduxToolkit/coinsSlice";
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
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";

type LakeRiverProp = StackNavigationProp<RootStackParamList, "LakeRiver">;

const MainQuizCoinsDailyCollection = () => {
  const navigation = useNavigation<LakeRiverProp>();
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const coins = useAppSelector((state) => state.coins.coins);
  const isSoundEnabled = useAppSelector((state) => state.sound.isSoundEnabled);
  const [isClaimed, setIsClaimed] = useState(false);
  // Add default values for rotation and scale2
  const [scale2, setScale2] = useState(1);
  const [scale3, setScale3] = useState(1);
  const rotateAnim = useSharedValue(0);

  const rotation = useDerivedValue(
    () => interpolate(rotateAnim.value, [0, 1], [0, 360]) + "deg"
  );

  const startRotation = () => {
    rotateAnim.value = withRepeat(
      withTiming(1, { duration: 2500, easing: Easing.linear }),
      -1,
      false
    );
  };

  const checkLastClaimDate = async () => {
    const lastClaimDate = await AsyncStorage.getItem("lastClaimDate");
    const today = new Date().toISOString().split("T")[0];
    if (lastClaimDate === today) {
      setIsClaimed(true);
    }
  };

  const [coins1, setCoins1] = useState(0);
  // Coins Collect Sound Effect
  const coinsCollectSound = useSoundEffect(
    require("../../assets/sounds/getCoin.wav")
  );

  useEffect(() => {
    startRotation();
    checkLastClaimDate();
  }, []);

  useEffect(() => {
    dispatch(loadShowState());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(false);
    }, 2500);
  }, [showModal]);

  return (
    <View>
      {!isClaimed ? (
        <View style={styles.container}>
          <View style={{ paddingLeft: 5 }}>
            <DailyBonusModal
              visible={showModal}
              onClose={() => setShowModal(false)}
            />
            <View style={styles.coinsBox}>
              <Image
                source={require("../../assets/Photos/goldbg.png")}
                style={{ width: 26, height: 26 }}
              />
              <Text style={styles.categoryTitle}>{coins}</Text>
            </View>
            <View
              style={[styles.contactButton, { transform: [{ scale: 0.8 }] }]}
            >
              <ContactButton />
            </View>
          </View>

          <View style={{ marginRight:0 }}>
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
                trackEvent(trackEventsOrganized.COLLECT_DAILY_BONUS);
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
            >
              <Animated.View
                style={[
                  styles.rotateBg,
                  { transform: [{ rotate: rotation }, { scale: scale2 }] },
                ]}
              >
                <Image
                  source={require("../../assets/Photos/starbg.png")}
                  style={{ width: 150, height: 150, borderRadius: 50 }}
                />
              </Animated.View>
              <View style={styles.rotateCoin}>
                <Image
                  source={require("../../assets/Photos/goldbg.png")}
                  style={{ width: 38, height: 38 }}
                />
              </View>
            </Pressable>
          </View>
        </View>
      ) : (
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',marginTop: 30}}>
          <DailyBonusModal
            visible={showModal}
            onClose={() => setShowModal(false)}
          />
          <View style={styles.coinsBox}>
            <Image
              source={require("../../assets/Photos/goldbg.png")}
              style={{ width: 26, height: 26 }}
            />
            <Text style={styles.categoryTitle}>{coins}</Text>
          </View>
          <View style={[styles.contactButton, { transform: [{ scale: 0.8 }]}]}>
            <ContactButton />
          </View>
          <Pressable onPress={()=>navigation.navigate('Calendar')} style={{flex:1, position: 'absolute', left: 0, top: -45, padding: 20}}>
            <Ionicons name="calendar-outline" size={24} color="#178ae9" />
            {/* <MaterialIcons name="calendar-today" size={24} color="black" /> */}
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default MainQuizCoinsDailyCollection;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "gray",
    borderRadius: 15,
    height: Platform.OS === "ios" ? 90 : 60,
    marginLeft: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  coinsBox: {
    flexDirection: "row",
    gap: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: "black",
    marginLeft: -5,
  },
  contactButton: {
    marginLeft: -5,
    // marginTop: 15,
    marginTop: Platform.OS === "ios" ? 15 : 5,
    // marginBottom: 0,
  },
  rotateBg: {
    width: 150,
    height: 150,
    opacity: 0.4,
    marginLeft: -20,
  },
  rotateCoin: {
    padding: 5,
    borderRadius: 10,
    position: "absolute",
    right: 50,
    top: 50,
    zIndex: 10,
  },
});

//  <View>
//         <DailyBonusModal
//           visible={showModal}
//           onClose={() => setShowModal(false)}
//         />
//       </View>
//       <View style={{ marginBottom: 20, transform: [{ scale: 0.8 }] }}>
//         <ContactButton />
//       </View>
//       <View>
//         <Text>hello</Text>
//         {!isClaimed ? (
//           <Pressable
//             onPressIn={() => setScale2(0.95)}
//             onPressOut={async () => {
//               if (isSoundEnabled) {
//                 // CorrectPlaySound();
//                 coinsCollectSound();
//               }
//               if (isClaimed) {
//                 Alert.alert(
//                   "Already Claimed",
//                   "You have already claimed your daily reward."
//                 );
//                 return;
//               }
//               trackEvent(trackEventsOrganized.COLLECT_DAILY_BONUS);
//               dispatch(incrementCoinsBonus());
//               dispatch(saveCoins(coins + 50));
//               setScale2(1);
//               setShowModal(true);
//               setIsClaimed(true);
//               await AsyncStorage.setItem(
//                 "lastClaimDate",
//                 new Date().toISOString().split("T")[0]
//               );
//               // await logEvent(analytics, 'daily_bonus_collected', {
//               //   coins_collected: 50,
//               //   timestamp: new Date().toISOString(),
//               // });
//               // Alert.alert("Success", "You received 10 coins!");
//               // setTimeout(() => {
//               //   setScale2(1);
//               // }, 100); // ✅ Adds a smooth reset delay
//             }}
//             style={{
//               position: "absolute",
//               right: 50,
//               top: -20,
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Animated.View
//               style={{
//                 position: "absolute",
//                 width: 150,
//                 height: 150,
//                 opacity: 0.4,
//                 transform: [{ rotate: rotation }, { scale: scale2 }],
//               }}
//             >
//               <Image
//                 source={require("../assets/Photos/starbg.png")}
//                 style={{ width: 150, height: 150, borderRadius: 50 }}
//               />
//             </Animated.View>
//             <View
//               style={{
//                 // backgroundColor: "gold",
//                 padding: 5,
//                 borderRadius: 10,
//                 position: "absolute",
//                 zIndex: 10,
//               }}
//             >
//               <Image
//                 source={require("../assets/Photos/goldbg.png")}
//                 style={{ width: 42, height: 42 }}
//               />
//             </View>
//           </Pressable>
//         ) : null}
//       </View>
//       <View
//         style={{
//           position: "absolute",
//           right: 30,
//           bottom: 15,
//           flexDirection: "row",
//           gap: 10,
//         }}
//       >
//         <Image
//           source={require("../../assets/Photos/coin.png")}
//           style={{ width: 28, height: 28 }}
//         />
//         <Text style={[styles.categoryTitle, { fontSize: 16, color: "black" }]}>
//           {coins}
//         </Text>
//       </View>
