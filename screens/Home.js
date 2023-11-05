import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const [fadeAnim] = useState(new Animated.Value(0));
  const [showBtn, setShowBtn] = useState(false);
  
  const hide = () => setShowBtn(true);

  setTimeout(hide, 1700);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/meteora.jpg")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 30 }}>Γεωγραφία</Text>
            <Text style={{ color: "white", fontSize: 26 }}>της</Text>
            <Text style={{ color: "white", fontSize: 30 }}>Ελλάδας</Text>
          </View>
        </Animated.View>

        <Pressable
          onPress={() => navigation.navigate("Introduction")}
          style={styles.button}
        >
          <View style={showBtn? styles.button1 : null} />
          <Text style={showBtn? styles.btnText : styles.btnText1}>Είσοδος</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: "relative",
    width: 140,
    height: 48,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
  },
  button1: {
    position: "absolute",
    opacity: 0.3,
    backgroundColor: "magenta",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  btnText: {
    position: "absolute",
    bottom: 14,
    left: 36,
    color: "white",
    fontWeight: "600",
    fontSize: 17,
  },
  btnText1: {
    position: "absolute",
    bottom: 14,
    left: 36,
    opacity: 0
  },
});

export default Home;
