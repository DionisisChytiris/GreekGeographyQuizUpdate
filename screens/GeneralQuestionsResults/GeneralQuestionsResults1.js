import React from 'react'
import { View, Text } from 'react-native'
import GenerQueResultsTemplate from './GenerQueResultsTemplate'
// import questions1 from '../../data/GeneralQuestions/questions1'

const GeneralQuestionsResults1 = () => {
  return (
    <View style={{flex: 1}}>
      <GenerQueResultsTemplate 
        repeat={'GeneralQuestions1R'}
      /> 
       {/* <Text>hello</Text> */}
    </View>
  )
}

export default GeneralQuestionsResults1
