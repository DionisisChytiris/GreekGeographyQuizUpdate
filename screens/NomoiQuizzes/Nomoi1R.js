import { View,  ScrollView} from "react-native";
import React from "react";
import NomoiTemplate from "./NomoiTemplate";
import questions1 from "../../data/NomoiPoleis/questions1";
import { Entypo } from "@expo/vector-icons";

const Nomoi1R = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "darkblue" }}>
        <NomoiTemplate
          questions={questions1}
          nomoiResults={"NomoiResult1"}
          nomoiLoseScreen={'NomoiLoseScreen1R'}
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

export default Nomoi1R;
