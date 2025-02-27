import { View,  ScrollView} from "react-native";
import React from "react";
import NomoiTemplate from "./NomoiTemplate";
import questions6 from "../../data/NomoiPoleis/questions6";
import { Entypo } from "@expo/vector-icons";

const Nomoi6R = () => {
  return (
    <ScrollView bounces={false}>
      <View>
        <NomoiTemplate
          questions={questions6}
          nomoiResults={"Nomoi6Final"}
          nomoiLoseScreen={'NomoiLoseScreen6R'}
          nomoiLoseScreenTime={'LoseScreenREndTime'}
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

export default Nomoi6R;
