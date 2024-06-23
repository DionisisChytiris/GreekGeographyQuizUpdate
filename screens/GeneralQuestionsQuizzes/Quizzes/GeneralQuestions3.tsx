import {View,ScrollView,} from "react-native";
import React from "react";
import questions3 from "../../../data/GeneralQuestions/questions3";
// import questions3 from "../../data/GeneralQuestions/questions3";
import GenerQuestTemplate from "../GenerQuestTemplate";

const GeneralQuestions3 = () => {
  return (
    <ScrollView bounces={false}>
      <View>
        <GenerQuestTemplate
          questions={questions3}
          nomoiResults={"GeneralQuestionsResult3"}
          losescr={"GQLoseScreen1"}
        />
      </View>
    </ScrollView>
  );

};

export default GeneralQuestions3;
