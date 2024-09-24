import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Home,
  QuizScreen,
  Introduction,
  LoseScreen,
  SetUserName,
} from "./screens";
import {
  Nomoi1,
  Nomoi1R,
  Nomoi2,
  Nomoi2R,
  Nomoi3,
  Nomoi3R,
  Nomoi4,
  Nomoi4R,
  Nomoi5,
  Nomoi5R,
  Nomoi6,
  Nomoi6Final,
  Nomoi6R,
  NomoiLoseScreen1,
  NomoiLoseScreen1R,
  NomoiLoseScreen2,
  NomoiLoseScreen2R,
  NomoiLoseScreen3,
  NomoiLoseScreen3R,
  NomoiLoseScreen4,
  NomoiLoseScreen4R,
  NomoiLoseScreen5,
  NomoiLoseScreen5R,
  NomoiLoseScreen6,
  NomoiLoseScreen6R,
} from "./screens/NomoiQuizzes";
import {
  NomoiResult1,
  NomoiResult2,
  NomoiResult3,
  NomoiResult4,
  NomoiResult5,
  NomoiResult6,
} from "./screens/NomoiResults";
import NomoiInstructions from "./screens/NomoiQuizzes/NomoiInstructions";
import {
  GeneralQuestions1,
  GeneralQuestions2,
  GeneralQuestions3,
  GeneralQuestions4,
  GeneralQuestions5,
  GeneralQuestions1R,
  GeneralQuestions2R,
  GeneralQuestions3R,
  GeneralQuestions4R,
  GeneralQuestions5R,
  GQLoseScreen1,
  GQLoseScreen2,
  GQLoseScreen3,
  GQLoseScreen4,
  GQLoseScreen5,
  GQLoseScreenR1,
  GQLoseScreenR2,
  GQLoseScreenR3,
  GQLoseScreenR4,
  GQLoseScreenR5,
} from "./screens/GeneralQuestionsQuizzes";
import {
  LakeRiver,
  LakeRiverRepeat,
  LakeRiverResults,
  LakeRiverResultsRepeat,
  LakeRiverLoseScreen,
  LakeRiverLoseScreenR,
} from "./screens/LakeRiverQuizzes";
import {
  Mountain,
  MountainRepeat,
  MountainResults,
  MountainResultsRepeat,
  MountainLoseScreen,
  MountainLoseScreenR,
} from "./screens/MountainQuizzes";
import {
  GeneralQuestionsResults1,
  GeneralQuestionsResults1R,
  GeneralQuestionsResults2,
  GeneralQuestionsResults2R,
  GeneralQuestionsResults3,
  GeneralQuestionsResults3R,
  GeneralQuestionsResults4,
  GeneralQuestionsResults4R,
  GeneralQuestionsResults5,
  GeneralQuestionsResults5R,
  GenQResLoseScreen,
  GenQResLoseScreenR,
} from "./screens/GeneralQuestionsResults";
import NomoiResultTemplate from "./screens/NomoiResults/NomoiResultTemplate";
import UpdateUserName from "./screens/UpdateUserName";
import { RootStackParamList } from "./Types/RootStackParamList";
import GenerQuestTemplate from "./screens/GeneralQuestionsQuizzes/GenerQuestTemplate";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GeneralQuizMenu from "./screens/GeneralQuestionsQuizzes/QuizMenu";
import QuizScreen1 from "./screens/QuizScreen1";
import LoseScreenR from "./screens/LoseScreenR";
import Settings from "./screens/Settings";
// import { StatusBar } from 'expo-status-bar';
// import Introduction from './screens/Introduction';
import { useSelector } from 'react-redux';
import { useAppSelector } from "./ReduxToolkit/store";

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  // const [name, setName] = React.useState("");
  const name = useAppSelector((state) => state.user.name);

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
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Nomoi6Final" component={Nomoi6Final} options={{headerShown: false, orientation: 'portrait'}}/>  */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false,headerBackTitleVisible: false, orientation: "portrait"}}
        />
        <Stack.Screen
          name="SetUserName"
          component={SetUserName}
          options={{ headerShown: false,headerBackTitleVisible: false, orientation: "portrait"}}
        />
        <Stack.Screen
          name="UpdateUserName"
          component={UpdateUserName}
          options={{ headerShown: false,headerBackTitleVisible: false,orientation: "portrait"}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false,headerBackTitleVisible: false,orientation: "portrait"}}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{
            headerBackTitleVisible: false,
            headerShown: true,
            orientation: "portrait",
            title: `Γειά σου ${ name }`,
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#006f96",
              fontSize: 16,
            },
          }}
        />
        <Stack.Screen
          name="Quiz1"
          component={QuizScreen1}
          options={{
            orientation: "portrait",
            headerBackTitleVisible: false,
            headerShown: true,
            title: `Γειά σου ${name}`,
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#006f96",
              fontSize: 16,
            },
          }}
        />
        <Stack.Screen
          name="Introduction"
          component={Introduction}
          options={{ headerBackTitleVisible: false,headerShown: false, orientation: "portrait" }}
        />
        <Stack.Screen
          name="Instructions"
          component={NomoiInstructions}
          options={{headerBackTitleVisible: false, headerShown: false, orientation: "portrait" }}
        />
        <Stack.Group
          screenOptions={{
            headerBackTitleVisible: false,
            headerShown: true,
            orientation: "portrait",
            title: "Ποτάμια / Λίμνες",
            headerStyle: {
              // backgroundColor: 'transparent',
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#006f96",
              fontSize: 16,
            },
          }}
        >
          <Stack.Screen name="LakeRiver" component={LakeRiver} />
          <Stack.Screen name="LakeRiverRepeat" component={LakeRiverRepeat} />
        </Stack.Group>
        <Stack.Screen
          name="LakeRiverResults"
          component={LakeRiverResults}
          options={{ headerBackTitleVisible: false,headerShown: false, orientation: "portrait" }}
        />
        <Stack.Screen
          name="LakeRiverResultsRepeat"
          component={LakeRiverResultsRepeat}
          options={{ headerBackTitleVisible: false,headerShown: false, orientation: "portrait" }}
        />

        <Stack.Screen
          name="LakeRiverLoseScreen"
          component={LakeRiverLoseScreen}
          options={{headerBackTitleVisible: false, headerShown: false, orientation: "portrait" }}
        />
        <Stack.Screen
          name="LakeRiverLoseScreenR"
          component={LakeRiverLoseScreenR}
          options={{headerBackTitleVisible: false, headerShown: false, orientation: "portrait" }}
        />
        <Stack.Group
          screenOptions={{
            headerBackTitleVisible: false,
            headerShown: true,
            orientation: "portrait",
            title: "Βουνά",
            headerStyle: {
              // backgroundColor: 'transparent',
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#006f96",
              fontSize: 16,
            },
          }}
        >
          <Stack.Screen name="Mountain" component={Mountain} />
          <Stack.Screen name="MountainRepeat" component={MountainRepeat} />
        </Stack.Group>
        <Stack.Screen
          name="MountainResults"
          component={MountainResults}
          options={{ headerBackTitleVisible: false,headerShown: false, orientation: "portrait" }}
        />
        <Stack.Screen
          name="MountainResultsRepeat"
          component={MountainResultsRepeat}
          options={{ headerBackTitleVisible: false,headerShown: false, orientation: "portrait" }}
        />
        <Stack.Screen
          name="MountainLoseScreen"
          component={MountainLoseScreen}
          options={{ headerBackTitleVisible: false,headerShown: false, orientation: "portrait" }}
        />
        <Stack.Screen
          name="MountainLoseScreenR"
          component={MountainLoseScreenR}
          options={{ headerBackTitleVisible: false,headerShown: false, orientation: "portrait" }}
        />
        <Stack.Screen
          name="LoseScreen"
          component={LoseScreen}
          options={{headerBackTitleVisible: false, headerShown: false, orientation: "portrait" }}
        />
        <Stack.Screen
          name="LoseScreenR"
          component={LoseScreenR}
          options={{headerBackTitleVisible: false, headerShown: false, orientation: "portrait" }}
        />
        <Stack.Group
          screenOptions={{
            headerBackTitleVisible: false,
            headerShown: false,
            orientation: "portrait",
            title: "Νομοί / Πόλεις",
            headerStyle: {
              // backgroundColor: 'transparent',
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#006f96",
              fontSize: 16,
            },
          }}
        >
          <Stack.Screen name="Nomoi1" component={Nomoi1} options={{headerShown: true}}/>
          <Stack.Screen name="Nomoi1R" component={Nomoi1R} options={{headerShown: true}} />
          <Stack.Screen name="Nomoi2" component={Nomoi2} />
          <Stack.Screen name="Nomoi2R" component={Nomoi2R} />
          <Stack.Screen name="Nomoi3" component={Nomoi3} />
          <Stack.Screen name="Nomoi3R" component={Nomoi3R} />
          <Stack.Screen name="Nomoi4" component={Nomoi4} />
          <Stack.Screen name="Nomoi4R" component={Nomoi4R} />
          <Stack.Screen name="Nomoi5" component={Nomoi5} />
          <Stack.Screen name="Nomoi5R" component={Nomoi5R} />
          <Stack.Screen name="Nomoi6" component={Nomoi6} />
          <Stack.Screen name="Nomoi6Final" component={Nomoi6Final} />
          <Stack.Screen name="Nomoi6R" component={Nomoi6R} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerBackTitleVisible: false,
            headerShown: false,
            orientation: "portrait",
          }}
        >
          <Stack.Screen
            name="NomoiResultTemplate"
            component={NomoiResultTemplate}
          />
          <Stack.Screen name="NomoiResult1" component={NomoiResult1} />
          <Stack.Screen name="NomoiResult2" component={NomoiResult2} />
          <Stack.Screen name="NomoiResult3" component={NomoiResult3} />
          <Stack.Screen name="NomoiResult4" component={NomoiResult4} />
          <Stack.Screen name="NomoiResult5" component={NomoiResult5} />
          <Stack.Screen name="NomoiResult6" component={NomoiResult6} />
          <Stack.Screen name="NomoiLoseScreen1" component={NomoiLoseScreen1} />
          <Stack.Screen
            name="NomoiLoseScreen1R"
            component={NomoiLoseScreen1R}
          />
          <Stack.Screen name="NomoiLoseScreen2" component={NomoiLoseScreen2} />
          <Stack.Screen
            name="NomoiLoseScreen2R"
            component={NomoiLoseScreen2R}
          />
          <Stack.Screen name="NomoiLoseScreen3" component={NomoiLoseScreen3} />
          <Stack.Screen
            name="NomoiLoseScreen3R"
            component={NomoiLoseScreen3R}
          />
          <Stack.Screen name="NomoiLoseScreen4" component={NomoiLoseScreen4} />
          <Stack.Screen
            name="NomoiLoseScreen4R"
            component={NomoiLoseScreen4R}
          />
          <Stack.Screen name="NomoiLoseScreen5" component={NomoiLoseScreen5} />
          <Stack.Screen
            name="NomoiLoseScreen5R"
            component={NomoiLoseScreen5R}
          />
          <Stack.Screen name="NomoiLoseScreen6" component={NomoiLoseScreen6} />
          <Stack.Screen
            name="NomoiLoseScreen6R"
            component={NomoiLoseScreen6R}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerBackTitleVisible: false,
            headerShown: true,
            orientation: "portrait",
            title: "Γενικές Ερωτήσεις",
            headerStyle: {
              // backgroundColor: 'transparent',
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#006f96",
              fontSize: 16,
            },
          }}
        >
          <Stack.Screen name="GeneralQuizMenu" component={GeneralQuizMenu} />
          <Stack.Screen
            name="GeneralQuestions1"
            component={GeneralQuestions1}
          />
          <Stack.Screen
            name="GeneralQuestions1R"
            component={GeneralQuestions1R}
          />
          <Stack.Screen
            name="GeneralQuestions2"
            component={GeneralQuestions2}
          />
          <Stack.Screen
            name="GeneralQuestions2R"
            component={GeneralQuestions2R}
          />
          <Stack.Screen
            name="GeneralQuestions3"
            component={GeneralQuestions3}
          />
          <Stack.Screen
            name="GeneralQuestions3R"
            component={GeneralQuestions3R}
          />
          <Stack.Screen
            name="GeneralQuestions4"
            component={GeneralQuestions4}
          />
          <Stack.Screen
            name="GeneralQuestions4R"
            component={GeneralQuestions4R}
          />
          <Stack.Screen
            name="GeneralQuestions5"
            component={GeneralQuestions5}
          />
          <Stack.Screen
            name="GeneralQuestions5R"
            component={GeneralQuestions5R}
          />
          <Stack.Screen
            name="GQLoseScreen1"
            component={GQLoseScreen1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GQLoseScreen2"
            component={GQLoseScreen2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GQLoseScreen3"
            component={GQLoseScreen3}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GQLoseScreen4"
            component={GQLoseScreen4}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GQLoseScreen5"
            component={GQLoseScreen5}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GQLoseScreenR1"
            component={GQLoseScreenR1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GQLoseScreenR2"
            component={GQLoseScreenR2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GQLoseScreenR3"
            component={GQLoseScreenR3}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GQLoseScreenR4"
            component={GQLoseScreenR4}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GQLoseScreenR5"
            component={GQLoseScreenR5}
            options={{headerShown: false}}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerBackTitleVisible: false,
            headerShown: false,
            orientation: "portrait",
          }}
        >
          <Stack.Screen
            name="GeneralQuestionsResult1"
            component={GeneralQuestionsResults1}
          />
          <Stack.Screen
            name="GeneralQuestionsResult2"
            component={GeneralQuestionsResults2}
          />
          <Stack.Screen
            name="GeneralQuestionsResult3"
            component={GeneralQuestionsResults3}
          />
          <Stack.Screen
            name="GeneralQuestionsResult4"
            component={GeneralQuestionsResults4}
          />
          <Stack.Screen
            name="GeneralQuestionsResult5"
            component={GeneralQuestionsResults5}
          />
          <Stack.Screen
            name="GeneralQuestionsResult1R"
            component={GeneralQuestionsResults1R}
          />
          <Stack.Screen
            name="GeneralQuestionsResult2R"
            component={GeneralQuestionsResults2R}
          />
          <Stack.Screen
            name="GeneralQuestionsResult3R"
            component={GeneralQuestionsResults3R}
          />
          <Stack.Screen
            name="GeneralQuestionsResult4R"
            component={GeneralQuestionsResults4R}
          />
          <Stack.Screen
            name="GeneralQuestionsResult5R"
            component={GeneralQuestionsResults5R}
          />
          <Stack.Screen
            name="GenQResLoseScreen"
            component={GenQResLoseScreen}
          />
          <Stack.Screen
            name="GenQResLoseScreenR"
            component={GenQResLoseScreenR}
          />
          {/* <Stack.Screen
            name="GenerQuestTemplate"
            component={GenerQuestTemplate}
          /> */}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
