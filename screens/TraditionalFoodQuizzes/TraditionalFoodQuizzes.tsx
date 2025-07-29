import { View, Text } from 'react-native'
import React from 'react'
import MainQuizAiGen from '../MainTemplateFiles/MainQuizAiGen'
import questions from '../../data/GreekFoodByCities/GreekFoodByCities'

const TraditionalFoodQuizzes = () => {
  return (
    <MainQuizAiGen
      dataT={questions}
      resultsPage='ResultsTraditionalFood'
      quizName='Παραδοσιακά Φαγητά'
      lastQ1='lastQuestion2'
    />
  )
}

export default TraditionalFoodQuizzes