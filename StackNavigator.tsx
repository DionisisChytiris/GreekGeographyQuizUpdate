import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, SetUserName } from "./screens";
import { LakeRiver } from "./screens/LakeRiverQuizzes";
import { Mountain } from "./screens/MountainQuizzes";
import { RootStackParamList } from "./Types/RootStackParamList";
import QuizScreen1 from "./screens/QuizScreen1";
import Settings from "./screens/Settings";
import AboutApp from "./screens/components/AboutApp";
import Calendar from "./screens/Atestcomponents/Calendar";
import ResultsMountain from "./screens/MountainQuizzes/ResultMountain";
import ResultsLake from "./screens/LakeRiverQuizzes/ResultsLake";
import GeneralQuestions from "./screens/GeneralQuestionsQuizzes/GeneralQuestions";
import ResultsGeneral from "./screens/GeneralQuestionsQuizzes/ResultsGeneral";
import Nomoi from "./screens/NomoiQuizzes/Nomoi";
import ResultsNomoi from "./screens/NomoiQuizzes/ResultsNomoi";
import BattleQuiz from "./screens/MainTemplateFiles/BattleQuiz";
import Contact from "./screens/components/Contact";
import BonusQuizzes from "./screens/BonusQuizzes";
import QuizDynamil from "./screens/QuizScreenDynamil";
import GreekTraditionsQuizzes from "./screens/GreekTraditionsQuizzes/GreekTraditionsQuizzes";
import TraditionalFoodQuizzes from "./screens/TraditionalFoodQuizzes/TraditionalFoodQuizzes";
import ResultsGreekTraditions from "./screens/GreekTraditionsQuizzes/ResultsGreekTraditions";
import ResultsTraditionalFood from "./screens/TraditionalFoodQuizzes/ResultsTraditionalFood";

const Stack = createNativeStackNavigator<RootStackParamList>();

const defaultScreenOptions = {
  headerShown: false,
  headerBackTitleVisible: false,
  orientation: "portrait" as const,
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...defaultScreenOptions,
          contentStyle: { backgroundColor: "lightgrey" },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SetUserName" component={SetUserName} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="ResultsLake" component={ResultsLake} />
        <Stack.Screen name="ResultsMountain" component={ResultsMountain} />
        <Stack.Screen name="ResultsGeneral" component={ResultsGeneral} />
        <Stack.Screen name="ResultsNomoi" component={ResultsNomoi} />
        <Stack.Screen name="AboutApp" component={AboutApp} />
        <Stack.Screen name="BattleQuiz" component={BattleQuiz} />
        <Stack.Screen name="Quiz1" component={QuizScreen1} />
        <Stack.Screen name="QuizDynamil" component={QuizDynamil} />
        <Stack.Screen name="BonusQuizzes" component={BonusQuizzes} />
        <Stack.Screen name="LakeRiver" component={LakeRiver} />
        <Stack.Screen name="Mountain" component={Mountain} />
        <Stack.Screen name="Nomoi" component={Nomoi} />
        <Stack.Screen name="GeneralQuestions" component={GeneralQuestions} />
        <Stack.Screen name="GreekTraditions" component={GreekTraditionsQuizzes} />
        <Stack.Screen name="ResultsGreekTraditions" component={ResultsGreekTraditions} />
        <Stack.Screen name="TraditionalFood" component={TraditionalFoodQuizzes} />
        <Stack.Screen name="ResultsTraditionalFood" component={ResultsTraditionalFood} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
