import {View,ScrollView,} from "react-native";
import React from "react";
import questions2 from "../../../data/GeneralQuestions/questions2";
// import questions2 from "../../data/GeneralQuestions/questions2";
import GenerQuestTemplate from "../GenerQuestTemplate";

const GeneralQuestions2 = () => {
  return (
    <ScrollView bounces={false}>
      <View>
        <GenerQuestTemplate
          questions={questions2}
          nomoiResults={"GeneralQuestionsResult2"}
          losescr={"GenQResLoseScreen"}
        />
      </View>
    </ScrollView>
  );

};

export default GeneralQuestions2;
