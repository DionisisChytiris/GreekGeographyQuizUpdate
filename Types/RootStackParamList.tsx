export type RootStackParamList = {
  Home: undefined;
  SetUserName: undefined;
  UpdateUserName: undefined;
  LoseScreenREndTime: undefined;
  Quiz: undefined;
  Quiz1: undefined;
  Introduction: undefined;
  Instructions: undefined;
  Settings: undefined;
  Contact: undefined;
  DragDrop: undefined;
  MapQuiz: undefined;
  DragDropQuiz: undefined;
  BattleQuiz: undefined;
  MapTest: undefined;
  AboutApp: undefined;
  LakeRiver: undefined;
  LakeRiverRepeat: undefined;
  LakeRiverResults: { points: number; data: any };
  LakeRiverResultsRepeat: { points: number; data: any };
  LakeRiverLoseScreen: undefined;
  LakeRiverLoseScreenR: undefined;
  Mountain: undefined;
  MountainRepeat: undefined;
  MountainResults: { points: number; data: any };
  MountainResultsRepeat: { points: number; data: any };
  MountainLoseScreen: undefined;
  MountainLoseScreenR: undefined;
  LoseScreen: undefined;
  LoseScreenR: undefined;
  LoseScreenNomoi: undefined;
  Nomoi: undefined;
  Nomoi1: undefined;
  Nomoi1R: undefined;
  Nomoi2: undefined;
  Nomoi2R: undefined;
  Nomoi3: undefined;
  Nomoi3R: undefined;
  Nomoi4: undefined;
  Nomoi4R: undefined;
  Nomoi5: undefined;
  Nomoi5R: undefined;
  Nomoi6: undefined;
  Nomoi6Final: { points: number; data: any };
  Nomoi6R: undefined;
  NomoiResultTemplate: undefined;
  NomoiResult1: { points: number; data: any };
  NomoiResult2: { points: number; data: any };
  NomoiResult3: { points: number; data: any };
  NomoiResult4: { points: number; data: any };
  NomoiResult5: { points: number; data: any };
  NomoiResult6: { points: number; data: any };
  NomoiLoseScreen1: undefined;
  NomoiLoseScreen1R: undefined;
  NomoiLoseScreen1Time: undefined;
  NomoiLoseScreen2: undefined;
  NomoiLoseScreen2R: undefined;
  NomoiLoseScreen2Time: undefined;
  NomoiLoseScreen3: undefined;
  NomoiLoseScreen3R: undefined;
  NomoiLoseScreen3Time: undefined;
  NomoiLoseScreen4: undefined;
  NomoiLoseScreen4R: undefined;
  NomoiLoseScreen4Time: undefined;
  NomoiLoseScreen5: undefined;
  NomoiLoseScreen5R: undefined;
  NomoiLoseScreen5Time: undefined;
  NomoiLoseScreen6: undefined;
  NomoiLoseScreen6R: undefined;
  GeneralQuestions: undefined;
  GeneralQuestions1: undefined;
  GeneralQuestions1R: undefined;
  GeneralQuestions2: undefined;
  GeneralQuestions2R: undefined;
  GeneralQuestions3: undefined;
  GeneralQuestions3R: undefined;
  GeneralQuestions4: undefined;
  GeneralQuestions4R: undefined;
  GeneralQuestions5: undefined;
  GeneralQuestions5R: undefined;
  // GeneralQuestionsResult1: undefined;
  GeneralQuestionsResult1: { points: number; data: any };
  GeneralQuestionsResult2: { points: number; data: any };
  GeneralQuestionsResult3: { points: number; data: any };
  GeneralQuestionsResult4: { points: number; data: any };
  GeneralQuestionsResult5: { points: number; data: any };
  GeneralQuestionsResult1R: { points: number; data: any };
  GeneralQuestionsResult2R: { points: number; data: any };
  GeneralQuestionsResult3R: { points: number; data: any };
  GeneralQuestionsResult4R: { points: number; data: any };
  GeneralQuestionsResult5R: { points: number; data: any };
  GQLoseScreen1: undefined;
  GQLoseScreen2: undefined;
  GQLoseScreen3: undefined;
  GQLoseScreen4: undefined;
  GQLoseScreen5: undefined;
  GQLoseScreenR1: undefined;
  GQLoseScreenR2: undefined;
  GQLoseScreenR3: undefined;
  GQLoseScreenR4: undefined;
  GQLoseScreenR5: undefined;
  GenQResLoseScreen: undefined;
  GenQResLoseScreenR: undefined;
  GenerQuestTemplate: { points: number; data: any };
  GeneralQuizMenu: undefined;
  Calendar: undefined;
  // ResultsAi: undefined;
  ResultsLake: {
    resetQuiz: () => void;
    totalQuestions: number;
    index: number;
    userAnswers: { question: string; userChoice: string; correctAnswer: string }[];
    points:number;
    seconds: number;
    minutes: number;
  };
  ResultsMountain: {
    resetQuiz: () => void;
    totalQuestions: number;
    index: number;
    userAnswers: { question: string; userChoice: string; correctAnswer: string }[];
    points:number;
    seconds: number;
    minutes: number;
  };
  ResultsGeneral: {
    resetQuiz: () => void;
    totalQuestions: number;
    index: number;
    userAnswers: { question: string; userChoice: string; correctAnswer: string }[];
    points:number;
    seconds: number;
    minutes: number;
  };
  ResultsNomoi: {
    resetQuiz: () => void;
    totalQuestions: number;
    index: number;
    userAnswers: { question: string; userChoice: string; correctAnswer: string }[];
    points:number;
    seconds: number;
    minutes: number;
  };
  // GeneralQuizMenu: { points: number, data: any }
};

export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  img: any;
  imgMap: any;
  answer: string;
  result1: string;
  result2: string;
  result3: string;
  result4: string;
};
