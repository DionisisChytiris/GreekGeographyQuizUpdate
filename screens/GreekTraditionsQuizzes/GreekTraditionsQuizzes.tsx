import { View, Text } from 'react-native'
import React from 'react'
import MainQuizAiGen from '../MainTemplateFiles/MainQuizAiGen'
import questions from '../../data/GreekTraditionsCustoms/GreekTraditionsCustoms'

const GreekTraditionsQuizzes = () => {
  return (
    // <View>
    //   <Text>GreekTraditionsQuizzes</Text>
    // </View>
    <MainQuizAiGen
        dataT={questions}
        resultsPage='ResultsGreekTraditions'
        quizName='Έθιμα & Παραδόσεις'
        lastQ1='lastQuestion2'    
    />
  )
}

export default GreekTraditionsQuizzes