import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as StoreReview from "expo-store-review";
import CustomAlert from "../components/CustomAlert";
import LottieView from "lottie-react-native";

const { height } = Dimensions.get("window");

type GenerQResultsTProp = StackNavigationProp<
  RootStackParamList,
  "GeneralQuestionsResult1"
>;
type GenerQResultsTRouteProp<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

const GenerQueResultsTemplate = (props: any) => {
  const route = useRoute<GenerQResultsTRouteProp<"GeneralQuestionsResult1">>();
  const navigation = useNavigation<GenerQResultsTProp>();
  const scores = route.params.points;
  const data = route.params.data;
  const scoreGeneral = Math.floor((scores * 100) / data.length);

  const [show, setShow] = useState(false);

  const handleQuizCompletion = async () => {
    if (scoreGeneral >= 90) {
      setShow(true);

      if (await StoreReview.hasAction()) {
        StoreReview.requestReview();
      } else {
        console.log("In-app review is not supported on this device.");
      }
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleQuizCompletion();
    }, 1000);

    // Clean up the timeout
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timeout1);
  }, []);

  const setData = async () => {
    try {
      var user = scoreGeneral;
      await AsyncStorage.setItem("scoreGeneral", JSON.stringify(user));
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "darkblue" }}>
      <ImageBackground
        source={require("../../assets/MorePhotos/Acropolis.jpg")}
        resizeMode="cover"
        style={{ height: "100%" }}
      >
        {/* {show ? (
          <View style={{ position: "absolute", top: 0, left: 0 }}>
            <CustomAlert />
          </View>
        ) : null} */}
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={stylesT.title}>
            <Text
              style={{
                fontWeight: "600",
                fontSize: height > 960 ? 30 : 20,
                color: "white",
                // marginTop: height  ? 90 : 100,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Βαθμολογία
            </Text>
          </View>

          <View style={stylesT.container}>
            {scoreGeneral > 49 ? (
              <View>
                <View style={stylesT.score}>
                  <Text
                    style={{ fontSize: 50, fontWeight: "bold", color: "green" }}
                  >
                    {scoreGeneral}
                  </Text>
                  <Text style={{ fontSize: 20, color: "green" }}>%</Text>
                </View>
                <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                  {scoreGeneral === 100 ? (
                    <View>
                      <View>
                        <Text
                          style={{
                            textAlign: "center",
                            fontSize: height > 960 ? 18 : 14,
                            color: "green",
                            marginTop: 20,
                          }}
                        >
                          Συγχαρητήρια!!! Οι γνώσεις σου στην γεωγραφία είναι
                          φανταστικές!!!
                        </Text>
                        <Image
                          source={require("../../assets/trophy.png")}
                          resizeMode="cover"
                          style={{
                            marginVertical: 20,
                            width: 80,
                            height: 80,
                            borderRadius: 50,
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                        />
                      </View>
                    </View>
                  ) : (
                    <View>
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: height > 960 ? 18 : 14,
                          color: "green",
                          marginTop: 20,
                        }}
                      >
                        Καλή προσπάθεια, αλλά πάντα υπάρχει περιθώριο βελτίωσης.
                        Επανέλαβε το κουίζ για να τελειωποιήσεις τις γνώσεις σου
                        ή πήγαινε στην αρχική σελίδα για να επιλέξεις άλλη
                        κατηγορία.
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            ) : (
              <View>
                <View style={stylesT.score}>
                  <Text
                    style={{ fontSize: 50, fontWeight: "bold", color: "red" }}
                  >
                    {scoreGeneral}
                  </Text>
                  <Text style={{ fontSize: 20, color: "red" }}>%</Text>
                </View>
                <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: height > 960 ? 18 : 14,
                      color: "red",
                      marginTop: 20,
                    }}
                  >
                    Δεν ήταν άσχημη προσπάθεια, αλλά χρείαζεται να προσπαθήσεις
                    περισσότερο για να βρεις τις σωστές απαντήσεις. Επανέλαβε το
                    κουίζ για να βελτιώσεις τις γνώσεις σου.
                  </Text>
                </View>
              </View>
            )}
          </View>

          {scoreGeneral === 100 ? (
            <View style={stylesT.buttonBox2}>
              <Pressable
                onPress={() => {
                  navigation.navigate("Quiz1");
                  setData();
                }}
                style={stylesT.button0}
              >
                <View style={stylesT.button1} />
                <View style={stylesT.btnText}>
                  <AntDesign name="home" size={24} color="white" />
                </View>
              </Pressable>
            </View>
          ) : (
            <View style={stylesT.buttonBox1}>
              <Pressable
                onPress={() => {
                  navigation.navigate("GeneralQuizMenu");
                  setData();
                }}
                style={stylesT.button0}
              >
                <View style={stylesT.button1} />
                <View style={stylesT.btnText}>
                  <AntDesign name="home" size={24} color="white" />
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate(props.repeat);
                  setData();
                }}
                style={stylesT.button0}
              >
                <View style={stylesT.button1} />
                <View style={stylesT.btnText}>
                  <MaterialIcons name="replay" size={24} color="white" />
                </View>
              </Pressable>
            </View>
          )}
        </View>

        {/* 
        <View
          style={{     
            flex: 1,
            margin: 0,
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <LottieView
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: '1000%',
            }}
            source={require("../../assets/LottieAnimations/confeti.json")}
            autoPlay
            loop={false}
          />
        </View> */}
      </ImageBackground>
    </View>
  );
};

export default GenerQueResultsTemplate;

const stylesT = StyleSheet.create({
  title: {
    // marginTop: "10%",
    marginHorizontal: "auto",
    marginBottom: "8%",
  },
  container: {
    width: "70%",
    // height: 400,
    backgroundColor: "#ccc",
    borderRadius: 20,
    marginVertical: 30,
    marginLeft: "auto",
    marginRight: "auto",
    paddingHorizontal: 10,
    paddingTop: 60,
    paddingBottom: 90,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  score: {
    flexDirection: "row",
    marginHorizontal: "auto",
    alignItems: "baseline",
    justifyContent: "center",
  },
  nextQueButton: {
    backgroundColor: "green",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 180,
    marginTop: 50,
    borderRadius: 20,
    marginHorizontal: "auto",
  },
  buttonBox1: {
    marginTop: 40,
    flexDirection: "row",
    marginHorizontal: 40,
    gap: 20,
  },
  buttonBox2: {
    // marginTop: 40,
    // position: 'relative',
    // zIndex: 9999999,
    flexDirection: "row",
    marginHorizontal: 40,
    gap: 20,
    // marginBottom: 100
  },
  button0: {
    position: "relative",
    width: 100,
    height: 50,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    // marginBottom: 100
  },
  button1: {
    position: "absolute",
    opacity: 0.4,
    backgroundColor: "magenta",
    width: "100%",
    height: "100%",
    borderRadius: 25,
    // marginBottom: 100
  },
  btnText: {
    position: "absolute",
    bottom: 12,
    left: 37,
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
});
