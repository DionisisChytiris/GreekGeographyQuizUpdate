import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Video, ResizeMode } from "expo-av";
import { MaterialIcons } from '@expo/vector-icons';

const Introduction = () => {
  const navigation = useNavigation();
  const video = React.useRef(null);
  const [showBtn, setShowBtn] = useState(false);
  const [show, setShow] = useState(true);

  const hide = () => setShowBtn(true);

  setTimeout(hide, 9000);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/meteora.jpg")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "grey",
            // backgroundColor: "transparent",
            width: '62%',
            height: '30%',
            marginTop: -50,
            marginLeft: "auto",
            marginRight: "auto",
            // borderRadius: 25,
          }}
        >
          <Pressable 
             onPress={() => {
              navigation.navigate("Quiz");
              setShow(false);
            }}
            style={{marginRight: -280}}>
            <MaterialIcons name="cancel" size={24} color="white" />
          </Pressable>
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
          onPress={() => {
            navigation.navigate("Quiz");
            setShow(false);
          }}
          // style={showBtn > 8 ? styles.button : styles.buttonA}
          style={showBtn ? styles.button : styles.buttonA}
        >
          <View style={styles.button1} />
          <Text style={styles.btnText}>Κατηγορίες</Text>
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
    bottom: 100,
    right: 60,
    width: 140,
    height: 45,
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
    height: 45,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    opacity: 0,
  },
  button1: {
    position: "absolute",
    opacity: 0.3,
    backgroundColor: "magenta",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  btnText: {
    position: "absolute",
    bottom: 12,
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