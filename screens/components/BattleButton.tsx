import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Share,
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  Animated,
} from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { Navigation, Share2 } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import { trackEvent } from "../../GoogleAnalytics/trackEvent";
import { trackEventsOrganized } from "../../GoogleAnalytics/trackEventsOrganized";

type BattleProp = StackNavigationProp<RootStackParamList, "BattleQuiz">;

const BattleButton = () => {
  const [scale, setScale] = useState(1);
  const navigation = useNavigation<BattleProp>();

  //   const onShare = async () => {
  //     setScale(1);
  //     try {
  //       const appLink =
  //         Platform.OS === "ios"
  //           ? "https://apps.apple.com/app/id6504780092" // Replace with your iOS App Store link
  //           : "https://play.google.com/store/apps/details?id=com.greekgeographyquizapp.dion";

  //       const result = await Share.share({
  //         message: `Τέσταρε τις γνώσεις σου πάνω στην γεωγραφία της Ελλάδας μέσω αυτής της εφαρμογής! 🌍📍Κατέβασε την τώρα: ${appLink}`,
  //       });

  //       if (result.action === Share.sharedAction) {
  //         if (result.activityType) {
  //           console.log("Shared via", result.activityType);
  //         } else {
  //           console.log("Shared successfully");
  //         }
  //       } else if (result.action === Share.dismissedAction) {
  //         console.log("Share dismissed");
  //       }
  //     } catch (error) {
  //       Alert.alert("Error", "Something went wrong while sharing.");
  //       console.error(error);
  //     }
  //   };

  //   const shineAnim = useRef(new Animated.Value(-100)).current; // Start off-screen

  //   useEffect(() => {
  //     const startShineAnimation = () => {
  //       Animated.loop(
  //         Animated.timing(shineAnim, {
  //           toValue: 300, // Move across the button
  //           duration: 800,
  //           useNativeDriver: true,
  //         })
  //       ).start();
  //     };

  //     startShineAnimation();
  //   }, []);

  return (
    <View style={{ margin: 0}}>
      <Pressable
        onPressIn={() => {
          setScale(0.95);
        }}
        onPressOut={() => {navigation.navigate("BattleQuiz"),trackEvent(trackEventsOrganized.BATTLE),setScale(1);}}
        style={[styles.shareButton, { transform: [{ scale: scale }] }]}
      >
        <MaterialCommunityIcons name="sword-cross" size={24} color="white" />
        <Text style={styles.shareText}>Μάχη</Text>
        <View style={{ position: "absolute", right: 10, width: "25%" }}>
          <Text style={[styles.shareText, { fontSize: 10 }]}>
            Διεκδίκισε 50 🪙
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default BattleButton;

const styles = StyleSheet.create({
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // This will horizontally center the text
    backgroundColor: "#FF4081",
    paddingVertical: '3%',
    paddingHorizontal: 40,
    borderRadius: 30,
    gap: 8,
    marginBottom: 5,
  },
  shareText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center", // Ensures text is centered if there is any overflow or multiline text
  },
  button: {
    width: 100,
    height: 60,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    overflow: "hidden", // Ensures shine stays within the button
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    zIndex: 2,
  },
  shine: {
    position: "absolute",
    left: 0,
    height: "100%",
    borderRadius: 25,
    width: 60, // Width of shine effect
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    opacity: 0.5,
    // transform: [{ rotate: '0deg' }],
  },
});
