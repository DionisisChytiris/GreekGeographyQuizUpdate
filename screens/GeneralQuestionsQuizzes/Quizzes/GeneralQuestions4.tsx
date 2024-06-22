import {View,ScrollView,} from "react-native";
import React from "react";
import questions4 from "../../../data/GeneralQuestions/questions4";
// import questions4 from "../../data/GeneralQuestions/questions4";
import GenerQuestTemplate from "../GenerQuestTemplate";

const GeneralQuestions4 = () => {
  return (
    <ScrollView bounces={false}>
      <View>
        <GenerQuestTemplate
          questions={questions4}
          nomoiResults={"GeneralQuestionsResult4"}
          losescr={"GenQResLoseScreen"}
        />
      </View>
    </ScrollView>
  );

};

export default GeneralQuestions4;
