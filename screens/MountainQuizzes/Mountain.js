import React from "react"
import MainQuizAiGen from "../MainTemplateFiles/MainQuizAiGen";
import questions from "../../data/Mountain/questions";

const Mountain = () => {
  return (
    <MainQuizAiGen
      dataT={questions}
      resultsPage="ResultsMountain"
      quizName="Βουνά"
      lastQ1='lastQuestion2'
    />
  );
};

export default Mountain;
