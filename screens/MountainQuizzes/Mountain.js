import { View, Text } from "react-native";
import React from "react";
import MainQuizAiGen from "../MainTemplateFiles/MainQuizAiGen";
import questions from "../../data/Mountain/questions";

const Mountain = () => {
  return (
    <MainQuizAiGen
      dataT={questions}
      resultsPage="ResultsMountain"
      quizName="Βουνά"
    />
  );
};

export default Mountain;
