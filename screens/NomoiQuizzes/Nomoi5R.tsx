import { View,  ScrollView, Text, Pressable} from "react-native";
import React from "react";
import NomoiTemplate from "./NomoiTemplate";
import questions5 from "../../data/NomoiPoleis/questions5";
import { Entypo } from "@expo/vector-icons";
import NomoiTemplateNoTime from "./NomoiTemplateNoTime";

const Nomoi5R = () => {
  return (
    <ScrollView bounces={false}>
      <View>
        <NomoiTemplate
          questions={questions5}
          nomoiResults={"NomoiResult5"}
          nomoiLoseScreen={'NomoiLoseScreen5R'}
          nomoiLoseScreenTime={'LoseScreenREndTime'}
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
