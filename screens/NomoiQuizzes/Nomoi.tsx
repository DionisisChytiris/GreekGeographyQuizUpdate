import React from "react";
import MainQuizAiGen from "../MainTemplateFiles/MainQuizAiGen";
import questions1 from "../../data/NomoiPoleis/questions1";

/**
 * Nomoi (Prefectures/Cities) quiz screen component.
 * Displays a quiz about Greek prefectures and their capital cities.
 */
const Nomoi: React.FC = () => {
  return (
    <MainQuizAiGen
      dataT={questions1}
      resultsPage="ResultsNomoi"
      quizName="Νομοί-Πόλεις"
      lastQ1="lastQuestion3"
    />
  );
};

export default Nomoi;
