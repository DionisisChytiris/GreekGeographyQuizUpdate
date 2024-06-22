import {View,ScrollView,} from "react-native";
import React from "react";
import questions4 from "../../../data/GeneralQuestions/questions4";
// import questions2 from "../../data/GeneralQuestions/questions2";
import { Entypo } from "@expo/vector-icons";
import GenerQuestTemplate from "../GenerQuestTemplate";

const GeneralQuestions4R = () => {
  return (
    <ScrollView bounces={false}>
      <View style={{ backgroundColor: "gray" }}>
        <GenerQuestTemplate
          questions={questions4}
          nomoiResults={"GeneralQuestionsResult4R"}
          losescr={"GenQResLoseScreenR"}
          // num={1}
          // star={
          //   <View style={{ flexDirection: "row" }}>
          //     <Entypo name="star" size={16} color="gold" />
          //   </View>
          // }
        />
      </View>
    </ScrollView>
  );

};

export default GeneralQuestions4R;
