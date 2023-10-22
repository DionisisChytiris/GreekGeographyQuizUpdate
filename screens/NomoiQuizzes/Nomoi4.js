import {View,ScrollView,} from "react-native";
import React from "react";
import questions4 from "../../data/NomoiPoleis/questions4";
import { Entypo } from "@expo/vector-icons";
import NomoiTemplate from "./NomoiTemplate";

const Nomoi4 = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "darkblue" }}>
        <NomoiTemplate
          questions={questions4}
          nomoiResults={"NomoiResult4"}
          nomoiLoseScreen={'NomoiLoseScreen4'}
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
