import React from 'react';
import MainQuizAiGen from '../MainTemplateFiles/MainQuizAiGen';
import questions from '../../data/GeneralQuestions/questions';

/**
 * General Questions quiz screen component.
 * Displays a quiz with general geography questions about Greece.
 */
const GeneralQuestions: React.FC = () => {
  const convertedQuestions = questions.map(q => ({
    ...q,
    id: String(q.id)
  }));

  return (
    <MainQuizAiGen
      dataT={convertedQuestions}
      resultsPage="ResultsGeneral"
      quizName="Γενικές Ερωτήσεις"
      lastQ1="lastQuestion4"
    />
  );
};

export default GeneralQuestions;