import {View,ScrollView,} from "react-native";
import React from "react";
import questions2 from "../../../data/GeneralQuestions/questions2";
// import questions2 from "../../data/GeneralQuestions/questions2";
import { Entypo } from "@expo/vector-icons";
import GenerQuestTemplate from "../GenerQuestTemplate";

const GeneralQuestions2R = () => {
  return (
    <ScrollView bounces={false}>
      <View style={{ backgroundColor: "gray" }}>
        <GenerQuestTemplate
          questions={questions2}
          nomoiResults={"GeneralQuestionsResult2R"}
          // losescr={"GQLoseScreenR2"}
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

export default GeneralQuestions2R;
