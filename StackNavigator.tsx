import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, SetUserName } from "./screens";
import { LakeRiver } from "./screens/LakeRiverQuizzes";
import { Mountain } from "./screens/MountainQuizzes";
import { RootStackParamList } from "./Types/RootStackParamList";
import QuizScreen1 from "./screens/QuizScreen1";
import Settings from "./screens/Settings";
import { useAppSelector } from "./ReduxToolkit/store";
import AboutApp from "./screens/components/AboutApp";
import DragDrop from "./screens/Atestcomponents/DragDropQuiz";
import MapTest from "./screens/Atestcomponents/MapTest";
import DragAndDropQuiz from "./screens/Atestcomponents/DragDropQuiz";
import MapQuiz from "./screens/Atestcomponents/MapQuiz";
import Calendar from "./screens/Atestcomponents/Calendar";
import FirstPageTest from "./screens/Atestcomponents/FirstPageTest";
import ResultsMountain from "./screens/MountainQuizzes/ResultMountain";
import ResultsLake from "./screens/LakeRiverQuizzes/ResultsLake";
import GeneralQuestions from "./screens/GeneralQuestionsQuizzes/GeneralQuestions";
import ResultsGeneral from "./screens/GeneralQuestionsQuizzes/ResultsGeneral";
import Nomoi from "./screens/NomoiQuizzes/Nomoi";
import ResultsNomoi from "./screens/NomoiQuizzes/ResultsNomoi";
import * as Analytics from "expo-firebase-analytics";

// const Stack = createStackNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  // const [name, setName] = React.useState("");
  const name = useAppSelector((state) => state.user.name);
 
  const handleStateChange = async (state: any) => {
    if (state?.routes?.length > 0) {
      const currentRouteName = state.routes[state.index]?.name;
      if (currentRouteName) {
        await Analytics.logEvent("screen_view", { screen_name: currentRouteName });
      }
    }
  };
  // React.useEffect(() => {
  //   getData();
  // }, []);

  // const getData = () => {
  //   try {
  //     AsyncStorage.getItem("UserData").then((value) => {
  //       if (value != null) {
  //         let user = JSON.parse(value);
  //         setName(user.Name);
  //       }
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <NavigationContainer onStateChange={handleStateChange}>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "lightgrey" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
            orientation: "portrait"
          }}
        />
        <Stack.Screen
          name="SetUserName"
          component={SetUserName}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
            orientation: "portrait"
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
            orientation: "portrait"
          }}
        />
        <Stack.Screen
          name="Calendar"
          component={Calendar}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
            orientation: "portrait"
          }}
        />
        <Stack.Screen
          name="ResultsLake"
          component={ResultsLake}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
            orientation: "portrait"
          }}
        />
        <Stack.Screen
          name="ResultsMountain"
          component={ResultsMountain}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
            orientation: "portrait"
          }}
        />
        <Stack.Screen
          name="ResultsGeneral"
          component={ResultsGeneral}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
            orientation: "portrait"
          }}
        />
        <Stack.Screen
          name="ResultsNomoi"
          component={ResultsNomoi}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
            orientation: "portrait"
          }}
        />
        <Stack.Screen
          name="AboutApp"
          component={AboutApp}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
            orientation: "portrait"
          }}
        />
        <Stack.Screen
          name="DragDrop"
          component={DragDrop}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            orientation: "portrait"
          }}
        />
        <Stack.Screen
          name="DragDropQuiz"
          component={DragAndDropQuiz}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            orientation: "portrait"
          }}
        />
        <Stack.Screen
          name="MapTest"
          component={MapTest}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            orientation: "portrait"
          }}
        />
        <Stack.Screen
          name="MapQuiz"
          component={FirstPageTest}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
            orientation: "portrait"
          }}
        />

        <Stack.Screen
          name="Quiz1"
          component={QuizScreen1}
          options={{
            orientation: "portrait",
            headerBackTitleVisible: false,
            headerShown: false
          }}
        />
        <Stack.Screen
          name="LakeRiver"
          component={LakeRiver}
          options={{
            orientation: "portrait",
            headerBackTitleVisible: false,
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Mountain"
          component={Mountain}
          options={{
            orientation: "portrait",
            headerBackTitleVisible: false,
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Nomoi"
          component={Nomoi}
          options={{
            orientation: "portrait",
            headerBackTitleVisible: false,
            headerShown: false
          }}
        />
        <Stack.Screen
          name="GeneralQuestions"
          component={GeneralQuestions}
          options={{
            orientation: "portrait",
            headerBackTitleVisible: false,
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
