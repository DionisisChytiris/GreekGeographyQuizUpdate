import {
  View,
  Text,
  Pressable,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/RootStackParamList";
import { AntDesign } from "@expo/vector-icons";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

type NomoiLoseScr1RProp = StackNavigationProp<
  RootStackParamList,
  "LoseScreenR"
>;

const LoseScreenR = () => {
  const navigation = useNavigation<NomoiLoseScr1RProp>();

  return (
    <View style={{ height: "100%", backgroundColor: "darkblue"}}>
      <ImageBackground
        source={require("../assets/generalQuestions/river.jpg")}
        // resizeMode="cover"
        style={{ height: "100%" }}
      >
        <View
          style={{
            width: width > 900 ? "40%" : "75%",
            height: "45%",
            margin: "auto",
            // marginLeft: "auto",
            // marginRight: "auto",
            // marginTop: height>900 ?"35%": height<850? "45%": '50%',
            borderRadius: 20,
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#ccc",
              borderRadius: 20,
              opacity: 0.5,
            }}
          />
          <View
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              left: "1%",
              right: "1%",
            }}
          >
            <View>
              <Text
                style={{
                  color: "magenta",
                  fontSize: height > 900 ? 32 : 25,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Λυπάμαι Έχασες
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: height > 900 ? 30 : 20,
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: 30,
                }}
              >
                Τέλος χρόνου
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 16,
                    fontWeight: "bold",
                    marginHorizontal: 30,
                    textAlign: "center",
                    marginTop: height > 900 ? 80 : 50,
                  }}
                >
                  Επιστροφή στην αρχική σελίδα{" "}
                  <AntDesign name="home" size={16} color="white" />
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* <View style={{ marginHorizontal: 40 }}> */}
        <View style={{ paddingBottom: 100, marginTop: -50}}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              // marginTop: 60
            }}
          >
            <Pressable
              onPress={() => navigation.navigate("Quiz1")}
              style={{
                opacity: 1,
                alignItems: "center",
                width: 90,
                height: 60,
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  backgroundColor: "magenta",
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                  opacity: 0.5,
                }}
              />
              <View style={{ position: "absolute", top: 17 }}>
                <AntDesign name="home" size={24} color="white" />
              </View>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoseScreenR;
