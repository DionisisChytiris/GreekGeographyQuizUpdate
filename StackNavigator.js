import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, QuizScreen, Introduction, LoseScreen, SetUserName} from './screens'
import {Nomoi1, Nomoi1R, Nomoi2, Nomoi2R, Nomoi3, Nomoi3R, Nomoi4, Nomoi4R, Nomoi5, Nomoi5R, Nomoi6, Nomoi6Final,Nomoi6R, NomoiLoseScreen1, NomoiLoseScreen1R, NomoiLoseScreen2, NomoiLoseScreen2R, NomoiLoseScreen3, NomoiLoseScreen3R, NomoiLoseScreen4, NomoiLoseScreen4R, NomoiLoseScreen5, NomoiLoseScreen5R, NomoiLoseScreen6, NomoiLoseScreen6R} from './screens/NomoiQuizzes'
import {NomoiResult1, NomoiResult2, NomoiResult3, NomoiResult4, NomoiResult5, NomoiResult6, ResultsScreen} from './screens/NomoiResults'
import NomoiInstructions from './screens/NomoiQuizzes/NomoiInstructions';
import {GeneralQuestions1, GeneralQuestions1R} from './screens/GeneralQuestionsQuizzes';
import { LakeRiver, LakeRiverRepeat, LakeRiverResults, LakeRiverResultsRepeat, LakeRiverLoseScreen, LakeRiverLoseScreenR} from './screens/LakeRiverQuizzes'
import { Mountain, MountainRepeat, MountainResults, MountainResultsRepeat, MountainLoseScreen, MountainLoseScreenR } from './screens/MountainQuizzes';
import {GeneralQuestionsResults1, GeneralQuestionsResults1R, GenQResLoseScreen, GenQResLoseScreenR} from './screens/GeneralQuestionsResults';
import UpdateUserName from './screens/UpdateUserName';
// import { StatusBar } from 'expo-status-bar';
// import Introduction from './screens/Introduction';

const Stack = createNativeStackNavigator();

const StackNavigator =()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Nomoi6} options={{headerShown: false, orientation: 'portrait'}}/>  */}
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>    
        <Stack.Screen name="SetUserName" component={SetUserName} options={{headerShown: false}}/>    
        <Stack.Screen name="UpdateUserName" component={UpdateUserName} options={{headerShown: false}}/>    
        <Stack.Screen name="Quiz" component={QuizScreen} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="Introduction" component={Introduction} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="Instructions" component={NomoiInstructions} options={{headerShown: false, orientation: 'portrait'}}/>
        {/* <Stack.Screen name="Cities" component={Cities} options={{headerShown: false, orientation: 'portrait'}}/> */}
        <Stack.Screen name="LakeRiver" component={LakeRiver} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="LakeRiverRepeat" component={LakeRiverRepeat} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="LakeRiverResults" component={LakeRiverResults} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="LakeRiverResultsRepeat" component={LakeRiverResultsRepeat} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="LakeRiverLoseScreen" component={LakeRiverLoseScreen} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="LakeRiverLoseScreenR" component={LakeRiverLoseScreenR} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="Mountain" component={Mountain} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="MountainRepeat" component={MountainRepeat} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="MountainResults" component={MountainResults} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="MountainResultsRepeat" component={MountainResultsRepeat} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="MountainLoseScreen" component={MountainLoseScreen} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="MountainLoseScreenR" component={MountainLoseScreenR} options={{headerShown: false, orientation: 'portrait'}}/>
        {/* <Stack.Screen name="Counties" component={Counties} options={{headerShown: false, orientation: 'portrait'}}/> */}
        <Stack.Screen name="LoseScreen" component={LoseScreen} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="Nomoi1" component={Nomoi1} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="Nomoi1R" component={Nomoi1R} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="Nomoi2" component={Nomoi2} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="Nomoi2R" component={Nomoi2R} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="Nomoi3" component={Nomoi3} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="Nomoi3R" component={Nomoi3R} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="Nomoi4" component={Nomoi4} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="Nomoi4R" component={Nomoi4R} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="Nomoi5" component={Nomoi5} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="Nomoi5R" component={Nomoi5R} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="Nomoi6" component={Nomoi6} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="Nomoi6Final" component={Nomoi6Final} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="Nomoi6R" component={Nomoi6R} options={{headerShown: false, orientation: 'portrait'}}/>
        {/* <Stack.Screen name="Results" component={ResultsScreen} options={{headerShown: false, orientation: 'portrait'}}/> */}
        <Stack.Screen name="NomoiResult1" component={NomoiResult1} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="NomoiResult2" component={NomoiResult2} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="NomoiResult3" component={NomoiResult3} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="NomoiResult4" component={NomoiResult4} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="NomoiResult5" component={NomoiResult5} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="NomoiResult6" component={NomoiResult6} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="NomoiLoseScreen1" component={NomoiLoseScreen1} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="NomoiLoseScreen1R" component={NomoiLoseScreen1R} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="NomoiLoseScreen2" component={NomoiLoseScreen2} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="NomoiLoseScreen2R" component={NomoiLoseScreen2R} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="NomoiLoseScreen3" component={NomoiLoseScreen3} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="NomoiLoseScreen3R" component={NomoiLoseScreen3R} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="NomoiLoseScreen4" component={NomoiLoseScreen4} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="NomoiLoseScreen4R" component={NomoiLoseScreen4R} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="NomoiLoseScreen5" component={NomoiLoseScreen5} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="NomoiLoseScreen5R" component={NomoiLoseScreen5R} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="NomoiLoseScreen6" component={NomoiLoseScreen6} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="NomoiLoseScreen6R" component={NomoiLoseScreen6R} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="GeneralQuestions1" component={GeneralQuestions1} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="GeneralQuestions1R" component={GeneralQuestions1R} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="GeneralQuestionsResult1" component={GeneralQuestionsResults1} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="GeneralQuestionsResult1R" component={GeneralQuestionsResults1R} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="GenQResLoseScreen" component={GenQResLoseScreen} options={{headerShown: false, orientation: 'portrait'}}/>
        <Stack.Screen name="GenQResLoseScreenR" component={GenQResLoseScreenR} options={{headerShown: false, orientation: 'portrait'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;