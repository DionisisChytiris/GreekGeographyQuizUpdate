import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Alert,
  ImageBackground,
  Dimensions,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/RootStackParamList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import { useAppSelector } from "../ReduxToolkit/store";
import { LinearGradient } from "expo-linear-gradient";

type QuizScreenProp = StackNavigationProp<RootStackParamList, "Quiz1">;

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const QuizScreen1 = () => {
  const navigation = useNavigation<QuizScreenProp>();
  const name = useAppSelector((state) => state.user.name);
  const [scale1, setScale1] = React.useState(1);
  const [scale2, setScale2] = React.useState(1);
  const [scale3, setScale3] = React.useState(1);
  const [scale4, setScale4] = React.useState(1);

  // const removeData = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //     navigation.navigate("UpdateUserName");
  //     // setName('')
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const removeName = async () => {
    try {
      await AsyncStorage.removeItem("UserData");
      navigation.navigate("SetUserName");
    } catch (error) {
      console.log(error);
    }
  };

  const alertTest = () => {
    Alert.alert("", "", [
      { text: "Ακυρωση     ", onPress: () => {} },
      // { text: " ", onPress: () => {} },
      // { text: "Διαγραφη Δεδομενων", onPress: removeData },
      {
        text: "Αλλαγη ονοματος",
        onPress: removeName,
      },
    ]);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <LinearGradient
        colors={["#0073f7", "#bdc1c4"]} // Gradient from blue to light blue
        start={{ x: 0, y: 0 }} // Top center
        end={{ x: 0, y: 1 }} // Bottom center
        style={{ flex: 1 }}
      /> */}
      <ImageBackground
        source={require("../assets//MorePhotos/ath.jpg")}
        resizeMode="cover"
        // blurRadius={2}
        style={styles.imageBg}
      >
        <View style={styles.linear}>
          <View style={styles.welcomeCnt}>
            <FontAwesome5 name="user-alt" size={12} color="white" />
            <Text style={styles.welcomeTxt}>{`Γειά σου ${name}`}</Text>
          </View>
          <Pressable
            style={styles.menuBtn}
            onPress={() => {
              navigation.navigate("Settings");
            }}
          >
            <Feather name="menu" size={24} color="white" />
          </Pressable>
          <View style={styles.titleCnt}>
            <Text style={styles.titleTxt}>Επέλεξε κατηγορία</Text>
          </View>
          <View style={styles.buttonSection}>
            <View style={styles.buttonBox}>
              <Pressable
                onPressIn={() => setScale1(0.95)}
                onPressOut={() => {
                  navigation.navigate("GeneralQuizMenu");
                  setScale1(1);
                }}
                style={[styles.button, { transform: [{ scale: scale1 }] }]}
              >
                <View style={styles.btnContentView}>
                  <View style={styles.btnTop}>
                    <Image
                      source={require("../assets/MorePhotos/monumentsAnimation.jpg")}
                      style={styles.img}
                    />
                  </View>
                  <View style={{ height: 2, backgroundColor: "#0b7fcc" }} />
                  <View style={styles.btnBottom}>
                    <Text style={styles.text}>Γενικές</Text>
                    <Text style={styles.text1}>Eρωτήσεις</Text>
                  </View>
                </View>
              </Pressable>
              <Pressable
                onPressIn={() => setScale2(0.95)}
                onPressOut={() => {
                  navigation.navigate("LakeRiver");
                  setScale2(1);
                }}
                style={[styles.button, { transform: [{ scale: scale2 }] }]}
              >
                <View style={styles.btnContentView}>
                  <View style={styles.btnTop}>
                    <Image
                      source={require("../assets/MorePhotos/lakeAnimation.jpg")}
                      style={styles.img}
                    />
                  </View>
                  <View style={styles.btnBottom}>
                    <Text style={styles.text}>Λίμνες/Ποτάμια</Text>
                  </View>
                </View>
              </Pressable>
              <Pressable
                onPressIn={() => setScale3(0.95)}
                onPressOut={() => {
                  navigation.navigate("Instructions");
                  setScale3(1);
                }}
                style={[styles.button, { transform: [{ scale: scale3 }] }]}
              >
                <View style={styles.btnContentView}>
                  <View style={styles.btnTop}>
                    <Image
                      source={require("../assets/MorePhotos/cityAnimation.jpg")}
                      style={styles.img}
                    />
                  </View>
                  <View style={styles.btnBottom}>
                    <Text style={styles.text}>Πόλεις/Νομοί</Text>
                  </View>
                </View>
              </Pressable>
              <Pressable
                onPressIn={() => setScale4(0.95)}
                onPressOut={() => {
                  navigation.navigate("Mountain");
                  setScale4(1);
                }}
                style={[styles.button, { transform: [{ scale: scale4 }] }]}
              >
                <View style={styles.btnContentView}>
                  <View style={styles.btnTop}>
                    <Image
                      source={require("../assets/MorePhotos/mountainAnimation.jpg")}
                      style={styles.img}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.btnBottom}>
                    <Text style={styles.text}>Βουνά</Text>
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default QuizScreen1;

const styles = StyleSheet.create({
  imageBg: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeCnt: {
    position: "absolute",
    top: Platform.OS == "ios" ? 55 : 50,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#615f5f90",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  welcomeTxt: {
    fontWeight: "bold",
    color: "white",
    fontSize: 12,
    marginLeft: 5,
  },
  menuBtn: {
    position: "absolute",
    top: Platform.OS == "ios" ? 25 : 20,
    right: 0,
    padding: 30,
  },
  linear: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff40",
    // backgroundColor: '#cfd5da'
  },
  titleCnt: {
    position: "absolute",
    left: 30,
    top:
      Platform.OS == "ios" ? 170 : height > 800 ? height * 0.21 : height * 0.2,
    // bottom: 0,
    // top: height>960? 90: 70
    // top: 110,
  },
  titleTxt: {
    color: "#ffffff",
    fontSize: Platform.OS === "android" ? (height > 800 ? 24 : 20) : 22,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text1: {
    marginTop: -5,
    fontSize: 16,
    fontWeight: "bold",
  },
  btnContentView: {
    // backgroundColor: "#0b7fcc",
    backgroundColor: "transparent",
    width: "100%",
    borderRadius: 20,
  },
  btnTop: {
    height: "70%",
    // backgroundColor: "green",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  btnBottom: {
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: 'transparent',
    // backgroundColor: '#20345d',
    // borderBottomRightRadius: 20,
    // borderBottomLeftRadius: 20,
  },
  buttonSection: {
    width: "100%",
    backgroundColor: "#615f5f90",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  buttonBox: {
    width: width > 400 ? (width > 400 ? "90%" : "95%") : "90%",
    height: height > 960 ? (height > 1000 ? 650 : 500) : 450,
    paddingTop: 10,
    flexWrap: "wrap",
    // backgroundColor: "yellow",
    // alignItems: "center",
    // justifyContent: "center",
    gap: 7,
  },
  button: {
    width: "49%",
    height: "48%",
    // backgroundColor: "#738297",
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
