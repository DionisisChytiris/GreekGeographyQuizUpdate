import {View,ScrollView, Text, Pressable} from "react-native";
import React from "react";
import questions3 from "../../data/NomoiPoleis/questions3";
import { Entypo } from "@expo/vector-icons";
import NomoiTemplate from "./NomoiTemplate";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import { SafeAreaView } from "react-native-safe-area-context";

// type NomoiInstructionsProp = StackNavigationProp<
//   RootStackParamList,
//   "Instructions"
// >;

const Nomoi3 = () => {
  // const navigation = useNavigation<NomoiInstructionsProp>();
  return (
    <ScrollView bounces={false}>
    <View style={{ backgroundColor: "#005ce6"}}>
        <NomoiTemplate
          questions={questions3}
          nomoiResults={"NomoiResult3"}
          nomoiLoseScreen={'NomoiLoseScreen3'}
          nomoiLoseScreenTime={'NomoiLoseScreen3Time'}
          num={3}
          star={
            <View style={{ flexDirection: "row" }}>
              <Entypo name="star" size={16} color="gold" />
              <Entypo name="star" size={16} color="gold" />
              <Entypo name="star" size={16} color="gold" />
            </View>
          }
        />
      </View>
    </ScrollView>
  );

};

export default Nomoi3;
