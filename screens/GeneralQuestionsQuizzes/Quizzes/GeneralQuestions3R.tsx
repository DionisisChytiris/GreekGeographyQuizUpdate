import {View,ScrollView,} from "react-native";
import React from "react";
import questions3 from "../../../data/GeneralQuestions/questions3";
// import questions2 from "../../data/GeneralQuestions/questions2";
import { Entypo } from "@expo/vector-icons";
import GenerQuestTemplate from "../GenerQuestTemplate";

const GeneralQuestions3R = () => {
  return (
    <ScrollView bounces={false}>
      <View style={{ backgroundColor: "gray" }}>
        <GenerQuestTemplate
          questions={questions3}
          nomoiResults={"GeneralQuestionsResult3R"}
          losescr={"GQLoseScreenR3"}
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

export default GeneralQuestions3R;
