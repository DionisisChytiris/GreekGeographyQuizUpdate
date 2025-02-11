import {View,ScrollView,} from "react-native";
import React from "react";
import questions1 from "../../data/NomoiPoleis/questions1";
import { Entypo } from "@expo/vector-icons";
import NomoiTemplate from "./NomoiTemplate";

const Nomoi1 = () => {
  return (
    <ScrollView bounces={false}>
      <View>
        <NomoiTemplate
          questions={questions1}
          nomoiResults={"NomoiResult1"}
          nomoiLoseScreen={'NomoiLoseScreen1'}
          nomoiLoseScreenTime={'NomoiLoseScreen1Time'}
          num={1}
          star={
            <View style={{ flexDirection: "row" }}>
              <Entypo name="star" size={16} color="gold" />
            </View>
          }
        />
      </View>
    </ScrollView>
  );

};

export default Nomoi1;
