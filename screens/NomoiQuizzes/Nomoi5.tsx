import {View,ScrollView, Text, Pressable} from "react-native";
import React from "react";
import questions5 from "../../data/NomoiPoleis/questions5";
import { Entypo } from "@expo/vector-icons";
import NomoiTemplate from "./NomoiTemplate";

const Nomoi5 = () => {
  return (
    <ScrollView bounces={false}>
      <View style={{ backgroundColor: "darkblue" }}>
        <NomoiTemplate
          questions={questions5}
          nomoiResults={"NomoiResult5"}
          nomoiLoseScreen={'NomoiLoseScreen5'}
          nomoiLoseScreenTime={'NomoiLoseScreen5Time'}
          num={5}
          star={
            <View style={{ flexDirection: "row" }}>
              <Entypo name="star" size={16} color="gold" />
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

export default Nomoi5;
