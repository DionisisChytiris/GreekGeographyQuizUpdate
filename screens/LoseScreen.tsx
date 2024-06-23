import {
  View,
  Text,
  Pressable,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/RootStackParamList";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import LoseScreenAiMsg from "./LoseScreenAi";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

type LoseScreenProp = StackNavigationProp<RootStackParamList, "LoseScreen">;

const LoseScreen = (props: any) => {
  const navigation = useNavigation<LoseScreenProp>();
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [show, setShow] = useState<boolean>(true);

  const hide1 = () => setBtn1(true);
  const hide2 = () => setBtn2(true);

  setTimeout(hide1, 1500);
  setTimeout(hide2, 2500);

  // setTimeout(hide1, 6500);
  // setTimeout(hide2, 9500);

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

  return (
    <View style={{ height: "100%", backgroundColor: "darkblue" }}>
      <ImageBackground
        source={require("../assets/generalQuestions/river.jpg")}
        resizeMode="cover"
        style={{ height: "100%" }}
      >
        <View style={styles.container}>
          <View
            style={{
              width: "100%",
              // height: "100%",
              height: height>900? 600 : 480,
              backgroundColor: "#ccc",
              borderRadius: 20,
              opacity: 0.5,
            }}
          />
          <View
            style={{
              position: "absolute",
              // top: "10%",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              left: "1%",
              right: "1%",
            }}
          >
            <View>
              <Text style={styles.text1}>
                Λυπάμαι {name ? name : " 'Εχασες"}
              </Text>
              <Text style={styles.text2}>Τέλος χρόνου</Text>
            </View>
            <View
              style={{
                width: height > 900 ? 300 : 200,
                height: height > 900 ? 300 : 200,
                marginTop: 30,
              }}
            >
              <LoseScreenAiMsg showT={show} />
            </View>
          </View>
        </View>

        <View style={{ marginHorizontal: 40, paddingBottom: 80, marginTop: -100 }}>
          <View style={styles.btnBox}>
            <Pressable
              onPress={() => {
                navigation.navigate("Quiz1");
                setShow(false);
              }}
              style={btn2 ? styles.opacity1 : styles.opacity0}
            >
              <View style={styles.btn} />
              <View style={{ position: "absolute", top: 15 }}>
                <AntDesign name="home" size={24} color="white" />
              </View>
            </Pressable>
            {/* <Text>helo</Text> */}
            <Pressable
              onPress={() => {
                {
                  navigation.navigate(props.loseScreen);
                  setShow(false);
                }
              }}
              style={btn1 ? styles.opacity1 : styles.opacity0}
            >
              <View style={styles.btn} />
              <View style={{ position: "absolute", top: 15 }}>
                <MaterialIcons name="replay" size={24} color="white" />
              </View>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoseScreen;

const styles = StyleSheet.create({
  container: {
    width: "75%",
    height: "58%",
    margin:'auto',
    // marginLeft: "auto",
    // marginRight: "auto",
    // marginTop: height>900?"20%": "30%",
    borderRadius: 20,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  opacity1: {
    opacity: 1,
    alignItems: "center",
    width: 90,
    height: 60,
  },
  opacity0: {
    opacity: 0,
    alignItems: "center",
    width: 90,
    height: 60,
  },
  text1: {
    color: "white",
    fontSize: height > 900 ? 32 : 22,
    fontWeight: "600",
    textAlign: "center",
  },
  text2: {
    color: "white",
    fontSize: height > 900 ? 30 : 20,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 20,
  },
  btnBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 60,
  },
  btn: {
    position: "absolute",
    top: 0,
    backgroundColor: "magenta",
    width: "100%",
    height: "100%",
    borderRadius: 20,
    opacity: 0.5,
  },
});
