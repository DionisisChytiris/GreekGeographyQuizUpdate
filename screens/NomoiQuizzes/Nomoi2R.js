import { View,  ScrollView} from "react-native";
import React from "react";
import NomoiTemplate from "./NomoiTemplate";
import questions2 from "../../data/NomoiPoleis/questions2";
import { Entypo } from "@expo/vector-icons";

const Nomoi2R = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "darkblue" }}>
        <NomoiTemplate
          questions={questions2}
          nomoiResults={"NomoiResult2"}
          nomoiLoseScreen={'NomoiLoseScreen2R'}
          num={2}
          star={
            <View style={{ flexDirection: "row" }}>
              <Entypo name="star" size={16} color="gold" />
              <Entypo name="star" size={16} color="gold" />
            </View>
          }
        />
      </View>
    </ScrollView>
  );
};

export default Nomoi2R;
