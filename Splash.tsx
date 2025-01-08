import { View, Text, StatusBar } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import LottieView from "lottie-react-native";

interface SplashProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const Splash = ({ setIsLoading }: SplashProps): JSX.Element => {
  return (
    // <SafeAreaView>

    <View
      style={{
        flex: 1,
        margin: 0,
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <StatusBar hidden={true} />
      {/* <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text> */}
      <LottieView
        style={{ width: "100%", height: "100%" }}
        source={require("./assets/splashspinscreen.json")}
        autoPlay
        loop={false}
        onAnimationFinish={()=>setIsLoading(false)}
      />
    </View>
    // </SafeAreaView>
  );
};

export default Splash;
