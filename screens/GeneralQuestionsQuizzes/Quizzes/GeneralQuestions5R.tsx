import {View,ScrollView,} from "react-native";
import React from "react";
import questions5 from "../../../data/GeneralQuestions/questions5";
// import questions2 from "../../data/GeneralQuestions/questions2";
import { Entypo } from "@expo/vector-icons";
import GenerQuestTemplate from "../GenerQuestTemplate";

const GeneralQuestions5R = () => {
  return (
    <ScrollView bounces={false}>
      <View style={{ backgroundColor: "gray" }}>
        <GenerQuestTemplate
          questions={questions5}
          nomoiResults={"GeneralQuestionsResult5R"}
          // losescr={"GQLoseScreenR5"}
          losescr={"LoseScreenREndTime"}
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

export default GeneralQuestions5R;
