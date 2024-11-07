import {View,ScrollView,} from "react-native";
import React from "react";
import questions1 from "../../../data/GeneralQuestions/questions1";
import GenerQuestTemplate from "../GenerQuestTemplate";

const GeneralQuestions1R = () => {
  return (
    <ScrollView bounces={false}>
      <View style={{ backgroundColor: "gray" }}>
        <GenerQuestTemplate
          questions={questions1}
          nomoiResults={"GeneralQuestionsResult1R"}
          // losescr={"GQLoseScreenR1"}
          losescr={"LoseScreenREndTime"}
        />
      </View>
    </ScrollView>
  );

};

export default GeneralQuestions1R;
