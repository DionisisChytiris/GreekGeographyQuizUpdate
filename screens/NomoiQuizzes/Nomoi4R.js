import { View,  ScrollView} from "react-native";
import React from "react";
import NomoiTemplate from "./NomoiTemplate";
import questions4 from "../../data/NomoiPoleis/questions4";
import { Entypo } from "@expo/vector-icons";

const Nomoi4R = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "darkblue" }}>
        <NomoiTemplate
          questions={questions4}
          nomoiResults={"NomoiResult4"}
          nomoiLoseScreen={'NomoiLoseScreen4R'}
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

export default Nomoi4R;
