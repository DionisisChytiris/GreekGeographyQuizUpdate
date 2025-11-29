import React from 'react';
import MainQuizAiGen from '../MainTemplateFiles/MainQuizAiGen';
import questions from '../../data/GeneralQuestions/questions';

/**
 * General Questions quiz screen component.
 * Displays a quiz with general geography questions about Greece.
 */
const GeneralQuestions: React.FC = () => {
  return (
    <MainQuizAiGen
      dataT={questions}
      resultsPage="ResultsGeneral"
      quizName="Γενικές Ερωτήσεις"
      lastQ1="lastQuestion4"
    />
  );
};

export default GeneralQuestions;