import { View, Text, Pressable, ImageBackground, Image} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const NomoiLoseScreen6R = () => {
  const navigation = useNavigation();

  return (
    <View style={{ height: "100%", backgroundColor: "darkblue" }}>
      <ImageBackground
        source={require("../../assets/generalQuestions/river.jpg")}
        // resizeMode="cover"
        style={{ height: "100%" }}
      >
        <View
          style={{
            width: "75%",
            height: "38%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "55%",
            borderRadius: 20,
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
              top: "10%",
              left: "10%",
            }}
          >
            <View>
              <Text
                style={{
                  color: "magenta",
                  fontSize: 25,
                  fontWeight: "600",
                  marginLeft: 10,
                  marginBottom: 30
                }}
              >
                Λυπάμαι Έχασες
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 22,
                  fontWeight: "600",
                  marginLeft: 35,
                  marginTop: 30,
                  marginBottom: 30,
                }}
              >
                Τέλος χρόνου
              </Text>
            </View>
            <View>
              <Image
                source={require("../../assets/sadFace.jpg")}
                resizeMode="cover"
                style={{
                  marginVertical: 20,
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  marginLeft: 'auto', 
                  marginRight: 'auto', 
                }}
              />
            </View>
          </View>
        </View>

        <View style={{ marginHorizontal: 40 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 60,
            }}
          >
            <Pressable
              onPress={() => navigation.navigate("Quiz")}
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
              <View style={{ position: "absolute", top: 15 }}>
                <AntDesign name="home" size={24} color="white" />
              </View>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default NomoiLoseScreen6R;
