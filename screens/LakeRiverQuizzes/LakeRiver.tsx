import React from "react";
import questions from "../../data/LakeRiver/questions";
import MainQuizAiGen from "../MainTemplateFiles/MainQuizAiGen";

const LakeRiver = () => {
  return (
    <MainQuizAiGen
      dataT={questions.map((q) => ({
        ...q,
        id: Number(q.id),
        options: q.options.map((o) => ({ answer: o.answer })),
      }))}
      resultsPage="ResultsLake"
      quizName="Λίμνες-Ποτάμια"
      lastQ1='lastQuestion1'
    />
  );
};

export default LakeRiver;
