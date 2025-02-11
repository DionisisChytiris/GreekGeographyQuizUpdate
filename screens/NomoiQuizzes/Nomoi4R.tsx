import { View,  ScrollView, Text, Pressable} from "react-native";
import React from "react";
import NomoiTemplate from "./NomoiTemplate";
import questions4 from "../../data/NomoiPoleis/questions4";
import { Entypo } from "@expo/vector-icons";
import NomoiTemplateNoTime from "./NomoiTemplateNoTime";

const Nomoi4R = () => {
  return (
    <ScrollView bounces={false}>
      <View>
        <NomoiTemplate
          questions={questions4}
          nomoiResults={"NomoiResult4"}
          nomoiLoseScreen={'NomoiLoseScreen4R'}
          nomoiLoseScreenTime={'LoseScreenREndTime'}
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
