import React from "react";
import MainQuizAiGen from "../MainTemplateFiles/MainQuizAiGen";
import questions from "../../data/Mountain/questions";

/**
 * Mountain quiz screen component.
 * Displays a quiz about Greek mountains and peaks.
 */
const Mountain: React.FC = () => {
  return (
    <MainQuizAiGen
      dataT={questions}
      resultsPage="ResultsMountain"
      quizName="Βουνά"
      lastQ1="lastQuestion2"
    />
  );
};

export default Mountain;
