import {View, ScrollView} from "react-native";
import React from "react";
import questions1 from "../../../data/GeneralQuestions/questions1";
import GenerQuestTemplate from "../GenerQuestTemplate";

const GeneralQuestions1 = () => {

  return (
    <ScrollView bounces={false}>
      <View>
        <GenerQuestTemplate
          questions={questions1}
          nomoiResults={"GeneralQuestionsResult1"}
          losescr={"GQLoseScreen1"}
        />
      </View>
    </ScrollView>
  );

};

export default GeneralQuestions1;
