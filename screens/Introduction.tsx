import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
  Linking
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../Types/RootStackParamList";
import { Video, ResizeMode } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { MaterialIcons } from '@expo/vector-icons';

type IntroductionProp = StackNavigationProp<RootStackParamList, 'Introduction'>

const Introduction = () => {
  const navigation = useNavigation<IntroductionProp>();
  const video = React.useRef(null);
  const [showBtn, setShowBtn] = useState(true);
  const [show, setShow] = useState(true);
  const [color, setColor] = useState('magenta')

  const hide = () => setShowBtn(true);

  setTimeout(hide, 9000);

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
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/meteora.jpg")}
        // source={require("../assets/introduction2.png")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        {/* <View style={{ marginLeft: "auto", paddingRight: 40, paddingBottom: 0}}>
          <Pressable 
             onPress={() => {
              navigation.navigate("Quiz");
              setShow(false);
            }}
            >
            <MaterialIcons name="cancel" size={24} color="white" />
          </Pressable>
        </View> */}
        <View
          style={{
            // width: '100%',
            // height: '32%',
            width: '65%',
            height: '32%',
            marginBottom: 150,
            marginLeft: "auto",
            marginRight: "auto",

          }}
        >
          
          <Video
            ref={video}
            style={styles.video}
            source={require("../assets/video/aiVideo.mp4")}
            // useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping={false}
            shouldPlay={show}
          />
        </View>

        <Pressable
        onPressIn={()=>setColor('purple')}
          onPressOut={() => {
              {
              name
                ? navigation.navigate("Quiz1")
                : navigation.navigate("SetUserName");
            }
            // navigation.navigate("SetUserName");
            setShow(false);
            setColor('magenta')
          }}
          // style={showBtn > 8 ? styles.button : styles.buttonA}
          style={showBtn ? styles.button : styles.buttonA}
        >
          <View style={[styles.button1, {backgroundColor: color}]} />
          <Text style={styles.btnText}>Κατηγορίες</Text>
        </Pressable>

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

export default Introduction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: "absolute",
    bottom: 180,
    right: 60,
    width: 140,
    height: 48,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    opacity: 1,
  },
  buttonA: {
    position: "absolute",
    bottom: 100,
    right: 60,
    width: 140,
    height: 48,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    opacity: 0,
  },
  button1: {
    position: "absolute",
    opacity: 0.8,
    // backgroundColor: "magenta",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  btnText: {
    position: "absolute",
    bottom: 14,
    left: 22,
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  video: { width: "100%", height: "100%", borderRadius: 25 },
  buttons: {
    width: 100,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
});