import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
  Animated,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/RootStackParamList";
import AsyncStorage from "@react-native-async-storage/async-storage";

type HomeProp = StackNavigationProp<RootStackParamList, "Home">;

const Home = () => {
  const navigation = useNavigation<HomeProp>();
  const [fadeAnim] = useState(new Animated.Value(0));
  const [showBtn, setShowBtn] = useState(false);
  const [color, setColor] = useState("magenta");
  const [name, setName] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setName(user.Name);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const hide = () => setShowBtn(true);

  setTimeout(hide, 1400);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Photos/meteora.jpg")}
        // resizeMode="cover"
        style={{ flex: 1, justifyContent: "center"}}
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
              // marginTop: 30,
            }}
          >
            <Text style={{ color: "white", fontSize: 28 }}>Γεωγραφία</Text>
            <Text style={{ color: "white", fontSize: 24 }}>της</Text>
            <Text style={{ color: "white", fontSize: 28 }}>Ελλάδας</Text>
          </View>
        </Animated.View>

        <Pressable
          onPressIn={() => setColor("purple")}
          onPressOut={() => {
            {
              name
                ? navigation.navigate("Quiz1")
                : navigation.navigate("Introduction");
            }
            setColor("magenta");
          }}
          style={styles.button}
        >
          <View
            style={
              showBtn ? [styles.button1, { backgroundColor: color }] : null
            }
          />
          <Text style={showBtn ? styles.btnText : styles.btnText1}>
            Είσοδος
          </Text>
        </Pressable>
        {name ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: 100,
              left: "15%",
              right: "15%",
              padding: 10,
              backgroundColor: "#f5f5f5",
              borderRadius: 20,
            }}
          >
            <Text
              style={{ color: "#006f96", fontSize: 14, fontWeight: "bold" }}
            >
              Καλώς ήλθες {name}!!!
            </Text>
          </View>
        ) : null}

        <Pressable
          onPress={() => navigation.navigate("MapQuiz")}
          style={{
            position: "absolute",
            bottom: 100,
            right: 20,
            backgroundColor: "green",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white" }}>Map Quiz</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  button: {
    position: "relative",
    width: 160,
    height: 60,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 80,
  },
  button1: {
    position: "absolute",
    opacity: 0.3,
    // backgroundColor: 'magenta',
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  btnText: {
    position: "absolute",
    bottom: 18,
    left: 42,
    color: "white",
    // fontWeight: "600",
    fontSize: 20,
  },
  btnText1: {
    position: "absolute",
    bottom: 14,
    left: 36,
    opacity: 0,
  },
  slider: {
    width: "80%",
    marginBottom: 20,
  },
});

export default Home;
