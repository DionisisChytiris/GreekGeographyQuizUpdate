import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Alert, Animated, Easing, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DailyRewardButton = () => {
  const [coins, setCoins] = useState(0);
  const [isClaimed, setIsClaimed] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    checkLastClaimDate();
    loadCoins();
    startRotation();
  }, []);

  const startRotation = () => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const checkLastClaimDate = async () => {
    const lastClaimDate = await AsyncStorage.getItem("lastClaimDate");
    const today = new Date().toISOString().split("T")[0];
    if (lastClaimDate === today) {
      setIsClaimed(true);
    }
  };

  const loadCoins = async () => {
    const storedCoins = await AsyncStorage.getItem("coins");
    if (storedCoins) setCoins(parseInt(storedCoins));
  };

  const claimReward = async () => {
    if (isClaimed) {
      Alert.alert("Already Claimed", "You have already claimed your daily reward.");
      return;
    }
    const newCoins = coins + 10;
    setCoins(newCoins);
    setIsClaimed(true);
    await AsyncStorage.setItem("coins", newCoins.toString());
    await AsyncStorage.setItem("lastClaimDate", new Date().toISOString().split("T")[0]);
    Alert.alert("Success", "You received 10 coins!");
  };

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={{ alignItems: "center", marginTop: 50 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Coins: {coins}</Text>
      <Animated.View
        style={{
          position: "absolute",
          width: 100,
          height: 100,
          transform: [{ rotate: rotation }],
        }}
      >
        <Image
          source={require("./circle-background.png")}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      </Animated.View>
      <TouchableOpacity
        onPress={claimReward}
        disabled={isClaimed}
        style={{
          backgroundColor: isClaimed ? "gray" : "gold",
          padding: 15,
          borderRadius: 10,
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Text style={{ fontSize: 18, color: "white" }}>{isClaimed ? "Claimed" : "Claim 10 Coins"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DailyRewardButton;
