import React from "react";
import MainQuizAiGen from "../MainTemplateFiles/MainQuizAiGen";
import questions1 from "../../data/NomoiPoleis/questions1";

const Nomoi = () => {
  return (
    <MainQuizAiGen
      dataT={questions1}
      resultsPage="ResultsNomoi"
      quizName="Νομοί-Πόλεις"
      lastQ1='lastQuestion3'
    />
  );
};

export default Nomoi;
