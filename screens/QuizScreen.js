import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
  Platform
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const QuizScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/romaikiAgora.jpg")}
        // source={require("../assets/ath.jpg")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Text style={{ textAlign: "center", color: "white", fontSize: 22, fontWeight: '600', marginBottom: 40}}>
          Επέλεξε κατηγορία
        </Text>
        <Pressable
          onPress={() => navigation.navigate("LakeRiver")}
          style={styles.buttonA}>
          <View style={styles.button1}/>
          <Text style={styles.buttonTxt1}>Λίμνες / Ποτάμια</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Mountain")}
          style={styles.buttonB}>
          <View style={styles.button2}/>
          <Text style={styles.buttonTxt2}>Βουνά</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Instructions")}
          style={styles.buttonC}>
          <View style={styles.button3}/>
          <Text style={styles.buttonTxt3}>Νομοί / Πόλεις</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("GeneralQuestions1")}
          style={styles.buttonD}>
          <View style={styles.button4}/>
          <Text style={styles.buttonTxt4}>Γενικές Ερωτήσεις</Text>
        </Pressable>
        <View>
          <Text>Api version {Platform.Version?.toString()}</Text>
        </View>
        
      </ImageBackground>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonA: {
    position: "relative",
    // width: 215,
    width: 200,
    // height: 60,
    height: 55,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
  },
  button1: {
    position: "absolute",
    opacity: 0.5,
    backgroundColor: "blue",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  buttonTxt1: {
    position: "absolute",
    bottom: 18,
    left: 25,
    color: "white",
    fontWeight: "600",
    // textAlign: "center",
    fontSize: 16,
  },
  buttonB: {
    position: "relative",
    width: 120,
    height: 50,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
  },
  button2: {
    position: "absolute",
    opacity: 0.4,
    backgroundColor: "green",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  buttonTxt2: {
    position: "absolute",
    bottom: 15,
    left: 35,
    color: "white",
    fontWeight: "600",
    // textAlign: "center",
    fontSize: 16,
  },
  buttonC: {
    position: "relative",
    width: 200,
    height: 50,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
  },
  button3: {
    position: "absolute",
    opacity: 0.8,
    backgroundColor: "gray",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  buttonTxt3: {
    position: "absolute",
    bottom: 15,
    left: 34,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
  },
  buttonD: {
    position: "relative",
    width: 220,
    height: 50,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
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
    bottom: 15,
    left: 32,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
  },
});


