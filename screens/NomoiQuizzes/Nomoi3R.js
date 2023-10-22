import { View,  ScrollView} from "react-native";
import React from "react";
import NomoiTemplate from "./NomoiTemplate";
import questions3 from "../../data/NomoiPoleis/questions3";
import { Entypo } from "@expo/vector-icons";

const Nomoi3R = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "darkblue" }}>
        <NomoiTemplate
          questions={questions3}
          nomoiResults={"NomoiResult3"}
          nomoiLoseScreen={'NomoiLoseScreen3R'}
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

export default Nomoi3R;
