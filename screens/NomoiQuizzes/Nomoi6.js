import {View,ScrollView,} from "react-native";
import React from "react";
import questions6 from "../../data/NomoiPoleis/questions6";
import { Entypo } from "@expo/vector-icons";
import NomoiTemplate from "./NomoiTemplate";

const Nomoi6 = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "darkblue" }}>
        <NomoiTemplate
          questions={questions6}
          nomoiResults={"Nomoi6Final"}
          nomoiLoseScreen={'NomoiLoseScreen6'}
          num={6}
          star={
            <View style={{ flexDirection: "row" }}>
              <Entypo name="star" size={16} color="gold" />
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

export default Nomoi6
