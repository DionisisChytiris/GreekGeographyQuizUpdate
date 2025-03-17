import React from "react";
import questions from "../../data/LakeRiver/questions";
import MainQuizAiGen from "../MainTemplateFiles/MainQuizAiGen";

const LakeRiver = () => {
  return (
    <MainQuizAiGen
      dataT={questions}
      resultsPage='ResultsLake'
      quizName='Λίμνες-Ποτάμια'
    />
  );
};

export default LakeRiver;
