import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
  Alert,
  Linking,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/RootStackParamList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
// import { RotateInDownLeft } from "react-native-reanimated";

type QuizScreenProp = StackNavigationProp<RootStackParamList, "Quiz">;

const urlTest =
  "https://play.google.com/store/apps/details?id=com.greekgeographyquizapp.dion";

const QuizScreen = () => {
  const navigation = useNavigation<QuizScreenProp>();
  const [color1, setColor1] = useState("#0080ff");
  const [color2, setColor2] = useState("#00ff00");
  const [color3, setColor3] = useState("#ff8000");
  const [color4, setColor4] = useState("magenta");
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [scoreMountain, setScoreMountain] = useState(0);
  const [scoreGeneral, setScoreGeneral] = useState(0);
  const [scoreNomoi, setScoreNomoi] = useState(0);
  // const score = 40

  useEffect(() => {
    getData();
    getDataRivers();
    getDataMountain();
    getDataGeneral();
    getDataNomoi();
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

  const getDataRivers = () => {
    try {
      AsyncStorage.getItem("score").then((value) => {
        if (value != null) {
          let score = JSON.parse(value);
          setScore(score);
          console.log("score" + " " + score);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getDataMountain = () => {
    try {
      AsyncStorage.getItem("scoreMountain").then((value) => {
        if (value != null) {
          let scoreMountain = JSON.parse(value);
          setScoreMountain(scoreMountain);
          // console.log("scoreMountain" + " " + scoreMountain);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getDataGeneral = () => {
    try {
      AsyncStorage.getItem("scoreGeneral").then((value) => {
        if (value != null) {
          let scoreGeneral = JSON.parse(value);
          setScoreGeneral(scoreGeneral);
          // console.log("scoreGeneral" + " " + scoreGeneral);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getDataNomoi = () => {
    try {
      AsyncStorage.getItem("scoreNomoi").then((value) => {
        if (value != null) {
          let scoreNomoi = JSON.parse(value);
          setScoreNomoi(scoreNomoi);
          // console.log("scoreNomoi" + " " + scoreNomoi);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("UpdateUserName");
      // setName('')
    } catch (error) {
      console.log(error);
    }
  };
  const removeName = async () => {
    try {
      await AsyncStorage.removeItem("UserData");
      navigation.navigate("UpdateUserName");
      // setName('')
    } catch (error) {
      console.log(error);
    }
  };

  const alertTest = () => {
    Alert.alert("", "", [
      { text: "Ακυρωση", onPress: () => {} },
      { text: "Διαγραφη Δεδομενων", onPress: removeData },
      {
        text: "Αλλαγη ονοματος",
        onPress: removeName,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/romaikiAgora.jpg")}
        resizeMode="cover"
        style={{ flex: 1}}
      >
        <Pressable
          style={{ position: "absolute", top: -20, right: 0, padding: 30 }}
          onPress={alertTest}
        >
          <AntDesign name="edit" size={24} color="white" />
        </Pressable>
        <Text style={styles.title}>Επέλεξε κατηγορία</Text>
        {/* Lakes/Rivers */}
        <Pressable
          onPressIn={() => setColor1("#00abff")}
          onPressOut={() => {
            navigation.navigate("LakeRiver");
            setColor1("#0080ff");
            // removeRiver()
          }}
          style={styles.buttonA}
        >
          <View style={[styles.button1, { backgroundColor: color1 }]} />
          <Text style={styles.buttonTxt1}>Λίμνες / Ποτάμια</Text>
          <Text
            style={{
              position: "absolute",
              right: 10,
              top: 15,
              color: "white",
              fontSize: 10,
            }}
          >
            {score}%
          </Text>
          {/* Progress Bar */}
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressBarColor,
                {
                  width: `${Math.floor((score / 100) * 100)}%`,
                  backgroundColor: "darkblue",
                },
              ]}
            />
          </View>
        </Pressable>
        {/* Mountains */}
        <Pressable
          onPressIn={() => setColor2("#56ff34")}
          onPressOut={() => {
            navigation.navigate("Mountain");
            setColor2("#00ff00");
          }}
          style={styles.buttonA}
        >
          <View style={[styles.button2, { backgroundColor: color2 }]} />
          <Text style={styles.buttonTxt1}>Βουνά</Text>
          <Text
            style={{
              position: "absolute",
              right: 10,
              top: 15,
              color: "white",
              fontSize: 10,
            }}
          >
            {scoreMountain}%
          </Text>
          {/* Progress Bar */}
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressBarColor,
                {
                  width: `${Math.floor((scoreMountain / 100) * 100)}%`,
                  backgroundColor: "darkgreen",
                },
              ]}
            />
          </View>
        </Pressable>
        {/* Nomoi/Polois */}
        <Pressable
          onPressIn={() => setColor3("#ffab00")}
          onPressOut={() => {
            navigation.navigate("Instructions");
            setColor3("#ff8000");
          }}
          style={styles.buttonA}
        >
          <View style={[styles.button3, { backgroundColor: color3 }]} />
          <Text style={styles.buttonTxt1}>Νομοί / Πόλεις</Text>
          <Text
            style={{
              position: "absolute",
              right: 10,
              top: 15,
              color: "white",
              fontSize: 10,
            }}
          >
            {scoreNomoi}%
          </Text>
          {/* Progress Bar */}
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressBarColor,
                {
                  width: `${Math.floor((scoreNomoi / 100) * 100)}%`,
                  backgroundColor: "brown",
                },
              ]}
            />
          </View>
        </Pressable>
        {/* General Questions */}
        <Pressable
          onPressIn={() => setColor4("purple")}
          onPressOut={() => {
            navigation.navigate("GeneralQuizMenu");
            // navigation.navigate("GeneralQuestions1");
            setColor4("magenta");
          }}
          style={styles.buttonA}
        >
          <View style={[styles.button4, { backgroundColor: color4 }]} />
          <Text style={styles.buttonTxt1}>Γενικές Ερωτήσεις</Text>
          <Text
            style={{
              position: "absolute",
              right: 10,
              top: 15,
              color: "white",
              fontSize: 10,
            }}
          >
            {scoreGeneral}%
          </Text>
          {/* Progress Bar */}
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressBarColor,
                {
                  width: `${Math.floor((scoreGeneral / 100) * 100)}%`,
                  backgroundColor: "purple",
                },
              ]}
            />
          </View>
        </Pressable>
        {/* Rate Button */}
        <Pressable
          style={{
            position: "absolute",
            bottom: 20,
            left: 50,
            backgroundColor: "white",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 10,
          }}
          onPress={() => {
            Linking.openURL(
              `market://details?id=${"com.greekgeographyquizapp.dion"}`
            );
          }}
        >
          <Text>Αξιολόγηση</Text>
          <Image
            style={{ width: "100%", height: 15 }}
            source={require("../assets/MorePhotos/rating.png")}
            resizeMode="cover"
          />
        </Pressable>
        {/* Share Button */}
        <Pressable
          style={{
            position: "absolute",
            bottom: 0,
            right: 20,
            backgroundColor: "gray",
            padding: 10,
            borderRadius: 10,
          }}
          onPress={() => {
            Linking.openURL(
              "https://sites.google.com/view/geografiatiselladas"
            );
          }}
          // onPress={async()=>{await onShare()}}
        >
          <Text style={{ color: "white" }}>Privacy Policy</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 92,
    backgroundColor: "#f5f5f5",
  },
  // headerContainer: {
  //   position: "absolute",
  //   top: 0,
  //   left: 20,
  //   flexDirection: "row",
  // },
  // headerText: {
  //   color: "#006f96",
  //   fontSize: 16,
  //   fontWeight: "bold",
  // },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 30,
    marginTop: 60,
  },
  progressBar: {
    backgroundColor: "white",
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    height: 4,
    position: "absolute",
    bottom: 18,
    left: 25,
    borderRadius: 12,
  },
  progressBarColor: {
    // backgroundColor: "blue",
    borderRadius: 12,
    position: "absolute",
    left: 0,
    height: 4,
    right: 0,
  },
  buttonA: {
    position: "relative",
    // width: 215,
    width: 300,
    // height: 60,
    height: 85,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    elevation: 24,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
  },
  button1: {
    position: "absolute",
    opacity: 0.5,
    // backgroundColor: "red",
    backgroundColor: "#0080ff",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  buttonTxt1: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    paddingTop: 20,
  },
  buttonB: {
    position: "relative",
    width: 250,
    height: 50,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
    elevation: 24,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1.0,
  },
  button2: {
    position: "absolute",
    opacity: 0.4,
    backgroundColor: "#00ff00",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  buttonTxt2: {
    position: "absolute",
    bottom: 35,
    left: 97,
    color: "white",
    fontWeight: "600",
    // textAlign: "center",
    fontSize: 16,
  },
  buttonC: {
    position: "relative",
    width: 250,
    height: 50,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
    elevation: 24,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
  },
  button3: {
    position: "absolute",
    opacity: 0.4,
    backgroundColor: "#ff8000",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  buttonTxt3: {
    position: "absolute",
    bottom: 35,
    left: 61,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
  },
  buttonD: {
    position: "relative",
    width: 250,
    height: 50,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
    elevation: 24,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
  },
  button4: {
    position: "absolute",
    opacity: 0.4,
    backgroundColor: "magenta",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  buttonTxt4: {
    position: "absolute",
    bottom: 35,
    left: 47,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
  },
});
