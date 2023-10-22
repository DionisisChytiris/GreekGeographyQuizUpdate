import { View,  ScrollView} from "react-native";
import React from "react";
import NomoiTemplate from "./NomoiTemplate";
import questions5 from "../../data/NomoiPoleis/questions5";
import { Entypo } from "@expo/vector-icons";

const Nomoi5R = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "darkblue" }}>
        <NomoiTemplate
          questions={questions5}
          nomoiResults={"NomoiResult5"}
          nomoiLoseScreen={'NomoiLoseScreen5R'}
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

export default Nomoi5R;
