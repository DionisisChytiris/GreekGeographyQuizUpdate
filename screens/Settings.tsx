import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Pressable,
  Linking,
  Image
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/RootStackParamList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";

type GenerQTProp = StackNavigationProp<
  RootStackParamList,
  "GenerQuestTemplate"
>;

const Settings = () => {
  const navigation = useNavigation<GenerQTProp>();
  const [scale1, setScale1] = React.useState(1);
  const [scale2, setScale2] = React.useState(1);
  const [scale3, setScale3] = React.useState(1);
  const [scale4, setScale4] = React.useState(1);

  const removeName = async () => {
    try {
      await AsyncStorage.removeItem("UserData");
      navigation.navigate("SetUserName");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView bounces={false}>
        <ImageBackground
          source={require("../assets/romaikiAgora.jpg")}
          resizeMode="cover"
          blurRadius={3}
          style={{
            flex: 1,
            // justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 900,
          }}
        >
          <Pressable
            style={{
              position: "absolute",
              top: 50,
              right: 30,
              // padding: 30,
            }}
            onPress={() => {
              navigation.navigate("Quiz1");
            }}
          >
            <AntDesign name="closecircle" size={34} color="white" />
          </Pressable>
          <View style={{ marginTop: 150, gap: 20 }}>
            <Pressable
              onPressIn={() => setScale1(1.1)}
              onPressOut={() => {
                removeName(), setScale1(1);
              }}
              style={[styles.button, { transform: [{ scale: scale1 }] }]}
            >
              <Text style={styles.text1}>Αλλαγή Ονόματος</Text>
            </Pressable>

            <Pressable
              onPressIn={() => setScale2(1.1)}
              onPressOut={() => {
                Linking.openURL(
                  "https://sites.google.com/view/geografiatiselladas"
                ),
                  setScale2(1);
              }}
              style={[styles.button, { transform: [{ scale: scale2 }] }]}
            >
              <Text style={styles.text}>Πολιτική Απορρήτου</Text>
            </Pressable>
            <Pressable
              onPressIn={() => setScale3(1.1)}
              onPressOut={() => {
                Linking.openURL(
                  "https://play.google.com/store/apps/details?id=com.greekgeographyquizapp.dion"
                ),
                  setScale3(1);
              }}
              style={[styles.button, { transform: [{ scale: scale3 }] }]}
            >
              <Text style={styles.text1}>Αξιολογήστε μας</Text>
            </Pressable>
            <View
              style={{
                marginTop: 70,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.text2}>Δοκιμάστε την νέα μας</Text>
              <Text style={styles.text2}>εφαρμογή.</Text>
              <Pressable
                onPressIn={() => setScale4(1.1)}
                onPressOut={() => {
                  Linking.openURL(
                    "https://play.google.com/store/apps/details?id=com.worldwisetrivia.app"
                  ),
                    setScale4(1);
                }}
              >
                <Image
                    source={require("../assets/WorldTrivia.png")}
                        resizeMode="cover"
                    style={{width: 100, height: 100, borderRadius: 20, marginTop: 30,  transform: [{ scale: scale4 }] }}
                />
              </Pressable>
              <Text style={styles.text3}>World Wise Trivia</Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 65,
    borderRadius: 20,
    backgroundColor: "#738297",
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    width: 250,
    height: 65,
    borderRadius: 30,
    //   backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  text1: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  text2: {
    color: "#dfebf7",
    fontSize: 15,
    fontWeight: "bold"
  },
  text3: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 20
  },
});
