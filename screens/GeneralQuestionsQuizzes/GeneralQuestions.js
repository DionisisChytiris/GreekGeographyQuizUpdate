import { View, Text } from 'react-native'
import React from 'react'
import MainQuizAiGen from '../MainTemplateFiles/MainQuizAiGen'
import questions from '../../data/GeneralQuestions/questions'

const GeneralQuestions = () => {
  return (
    <MainQuizAiGen
        dataT={questions}
        resultsPage='ResultsGeneral'
        quizName='Γενικές Ερωτήσεις'
    />
  )
}

export default GeneralQuestions