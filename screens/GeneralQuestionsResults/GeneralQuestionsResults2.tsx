import React from 'react'
import { View, Text } from 'react-native'
import GenerQueResultsTemplate from './GenerQueResultsTemplate'
// import questions1 from '../../data/GeneralQuestions/questions1'

const GeneralQuestionsResults2 = () => {
  return (
    <View style={{flex: 1}}>
      <GenerQueResultsTemplate 
        repeat={'GeneralQuestions2R'}
      /> 
       {/* <Text>hello</Text> */}
    </View>
  )
}

export default GeneralQuestionsResults2
