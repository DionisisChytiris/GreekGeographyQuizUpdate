import {View,ScrollView,} from "react-native";
import React from "react";
import questions1 from "../../data/GeneralQuestions/questions1";
// import questions2 from "../../data/GeneralQuestions/questions2";
import GenerQuestTemplate from "./GenerQuestTemplate";

const GeneralQuestions1 = () => {
  return (
    <ScrollView>
      <View>
        <GenerQuestTemplate
          questions={questions1}
          nomoiResults={"GeneralQuestionsResult1"}
          losescr={"GenQResLoseScreen"}
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

export default GeneralQuestions1;
