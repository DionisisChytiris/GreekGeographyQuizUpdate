import {View,ScrollView,} from "react-native";
import React from "react";
import questions5 from "../../../data/GeneralQuestions/questions5";
// import questions5 from "../../data/GeneralQuestions/questions5";
import GenerQuestTemplate from "../GenerQuestTemplate";

const GeneralQuestions5 = () => {
  return (
    <ScrollView>
      <View>
        <GenerQuestTemplate
          questions={questions5}
          nomoiResults={"GeneralQuestionsResult5"}
          losescr={"GenQResLoseScreen"}
        />
      </View>
    </ScrollView>
  );

};

export default GeneralQuestions5;
