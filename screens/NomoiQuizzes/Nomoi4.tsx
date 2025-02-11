import {View,ScrollView, Text, Pressable} from "react-native";
import React from "react";
import questions4 from "../../data/NomoiPoleis/questions4";
import { Entypo } from "@expo/vector-icons";
import NomoiTemplate from "./NomoiTemplate";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import { SafeAreaView } from "react-native-safe-area-context";;

const Nomoi4 = () => {
  return (
    <ScrollView bounces={false}>
      <View style={{ backgroundColor: "darkblue" }}>
        <NomoiTemplate
          questions={questions4}
          nomoiResults={"NomoiResult4"}
          nomoiLoseScreen={'NomoiLoseScreen4'}
          nomoiLoseScreenTime={'NomoiLoseScreen4Time'}
          num={4}
          star={
            <View style={{ flexDirection: "row" }}>
              <Entypo name="star" size={16} color="gold" />
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

export default Nomoi4;
