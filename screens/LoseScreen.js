import { View, Text, Pressable, ImageBackground } from "react-native";
import React,{useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import LoseScreenAiMsg from "./LoseScreenAi";

const LoseScreen = (props) => {
  const navigation = useNavigation();
  const [btn1, setBtn1] = useState(false)
  const [btn2, setBtn2] = useState(false)
  const [show, setShow] = useState(true)

  const hide1 = () => setBtn1(true)
  const hide2 = () => setBtn2(true)

  setTimeout(hide1, 6500)
  setTimeout(hide2, 9500)

  return (
    <View style={{ height: "100%", backgroundColor: "darkblue" }}>
      <ImageBackground
        source={require("../assets/generalQuestions/river.jpg")}
        // resizeMode="cover"
        style={{ height: "100%" }}
      >
        <View
          style={{
            width: "75%",
            height: "58%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "35%",
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
              left: "15%"
            }}
          >
            <View>
              <Text
                style={{
                  color: "magenta",
                  fontSize: 22,
                  fontWeight: "600",
                  // marginHorizontal: 'auto',
                }}
              >
                Λυπάμαι Έχασες
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "600",
                  marginLeft: 25,
                  marginTop: 30,
                  marginBottom: 30,
                }}
              >
                Τέλος χρόνου
              </Text>
            </View>
            <View style={{width: '110%'}}>
              <LoseScreenAiMsg showT={show}/>
            </View>
          </View>
        </View>

        <View style={{marginHorizontal: 40}}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 60,
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate("Quiz")
              setShow(false)
            }}
            style={ btn2 ? ({
              opacity: 1,
              alignItems: "center",
              width: 90,
              height: 60,
            }) : ({
              opacity: 0,
              alignItems: "center",
              width: 90,
              height: 60,
            })
            }
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
          <Pressable
            onPress={() => {
              navigation.navigate(props.loseScreen)
              setShow(false)
            }}
            style={ btn1 ? ({
              opacity: 1,
              alignItems: "center",
              width: 90,
              height: 60,
            }) : ({
              opacity: 0,
              alignItems: "center",
              width: 90,
              height: 60,
            })
            }
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
