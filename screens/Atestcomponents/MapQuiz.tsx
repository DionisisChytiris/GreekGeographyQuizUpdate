import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const MapQuiz = () => {
  return (
    <View style={{flex:1}}>
      <LinearGradient
        colors={["#0000FF", "#87CEFA"]} // Gradient from blue to light blue
        start={{ x: 0, y: 0 }} // Top center
        end={{ x: 0, y: 1 }} // Bottom center
        style={{ flex: 1 }}
      />
      <View style={{flex:1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
        <Image
          source={require("../../assets/maps/N.Artas.png")}
          resizeMode="contain"
          style={{ width: "100%", height: "60%" }}
          />
         <Text>MapQuiz</Text>
      </View>
    </View>
  );
};

export default MapQuiz;
