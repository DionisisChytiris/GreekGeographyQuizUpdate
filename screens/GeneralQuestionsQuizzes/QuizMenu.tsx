import { Pressable, StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";

type GenerQTProp = StackNavigationProp<
  RootStackParamList,
  "GenerQuestTemplate"
>;

const GeneralQuizMenu = () => {
    const navigation = useNavigation<GenerQTProp>();
    const [scale1, setScale1] = React.useState(1)
    const [scale2, setScale2] = React.useState(1)
    const [scale3, setScale3] = React.useState(1)
    const [scale4, setScale4] = React.useState(1)
    const [scale5, setScale5] = React.useState(1)

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/MorePhotos/ath.jpg")}
        resizeMode="cover"
        blurRadius={5}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}}
      >
      <View style={{ gap: 30, marginTop: -30 }}>
        <Pressable 
           onPressIn={() => setScale1(1.1)}
           onPressOut={() => {
            navigation.navigate("GeneralQuestions1")
             setScale1(1);
           }}
           style={[styles.button, { transform: [{scale: scale1}]}]}
        >
          <Text style={styles.text}>Kουίζ 1</Text>
        </Pressable>
        <Pressable 
           onPressIn={() => setScale2(1.1)}
           onPressOut={() => {
            navigation.navigate("GeneralQuestions2")
             setScale2(1);
           }}
           style={[styles.button, { transform: [{scale: scale2}]}]}
        >
          <Text style={styles.text}>Kουίζ 2</Text>
        </Pressable>
        <Pressable 
           onPressIn={() => setScale3(1.1)}
           onPressOut={() => {
            navigation.navigate("GeneralQuestions3")
             setScale3(1);
           }}
           style={[styles.button, { transform: [{scale: scale3}]}]}
        >
          <Text style={styles.text}>Kουίζ 3</Text>
        </Pressable>
        <Pressable 
           onPressIn={() => setScale4(1.1)}
           onPressOut={() => {
            navigation.navigate("GeneralQuestions4")
             setScale4(1);
           }}
           style={[styles.button, { transform: [{scale: scale4}]}]}
        >
          <Text style={styles.text}>Kουίζ 4</Text>
        </Pressable>
        <Pressable 
           onPressIn={() => setScale5(1.1)}
           onPressOut={() => {
            navigation.navigate("GeneralQuestions5")
             setScale5(1);
           }}
           style={[styles.button, { transform: [{scale: scale5}]}]}
        >
          <Text style={styles.text}>Kουίζ 5</Text>
        </Pressable>
        
      </View>
      </ImageBackground>
    </View>
  );
};

export default GeneralQuizMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 220,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#006f96",
    fontSize: 18,
    fontWeight: 'bold'
  },
});
