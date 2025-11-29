import { ImageSourcePropType } from "react-native";

/**
 * Type for quiz result data passed to result screens.
 * Contains user answers, quiz statistics, and reset functionality.
 */
export type QuizResultData = {
  resetQuiz: () => void;
  totalQuestions: number;
  index: number;
  userAnswers: {
    question: string;
    userChoice: string;
    correctAnswer: string;
  }[];
  points: number;
  seconds: number;
  minutes: number;
};

/**
 * Type for simplified quiz result data (legacy format).
 * Used in older result screens that only need points and data.
 */
export type SimpleQuizResult = {
  points: number;
  data: QuizResultData;
};

export type RootStackParamList = {
  Home: undefined;
  SetUserName: undefined;
  UpdateUserName: undefined;
  LoseScreenREndTime: undefined;
  Quiz: undefined;
  Quiz1: undefined;
  QuizDynamil: undefined;
  BonusQuizzes: undefined;
  Introduction: undefined;
  Instructions: undefined;
  Settings: undefined;
  Contact: undefined;
  DragDrop: undefined;
  MapQuiz: undefined;
  DragDropQuiz: undefined;
  BattleQuiz: undefined;
  MapTest: undefined;
  GreekTraditions: undefined;
  ResultsGreekTraditions: {
    resetQuiz: () => void;
    totalQuestions: number;
    index: number;
    userAnswers: { question: string; userChoice: string; correctAnswer: string }[];
    points: number;
    seconds: number;
    minutes: number;
  };
  TraditionalFood: undefined;
  ResultsTraditionalFood: {
    resetQuiz: () => void;
    totalQuestions: number;
    index: number;
    userAnswers: { question: string; userChoice: string; correctAnswer: string }[];
    points: number;
    seconds: number;
    minutes: number;
  };
  AboutApp: undefined;
  LakeRiver: undefined;
  LakeRiverRepeat: undefined;
  LakeRiverResults: SimpleQuizResult;
  LakeRiverResultsRepeat: SimpleQuizResult;
  LakeRiverLoseScreen: undefined;
  LakeRiverLoseScreenR: undefined;
  Mountain: undefined;
  MountainRepeat: undefined;
  MountainResults: SimpleQuizResult;
  MountainResultsRepeat: SimpleQuizResult;
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
  Nomoi6Final: SimpleQuizResult;
  Nomoi6R: undefined;
  NomoiResultTemplate: undefined;
  NomoiResult1: SimpleQuizResult;
  NomoiResult2: SimpleQuizResult;
  NomoiResult3: SimpleQuizResult;
  NomoiResult4: SimpleQuizResult;
  NomoiResult5: SimpleQuizResult;
  NomoiResult6: SimpleQuizResult;
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
  GeneralQuestionsResult1: SimpleQuizResult;
  GeneralQuestionsResult2: SimpleQuizResult;
  GeneralQuestionsResult3: SimpleQuizResult;
  GeneralQuestionsResult4: SimpleQuizResult;
  GeneralQuestionsResult5: SimpleQuizResult;
  GeneralQuestionsResult1R: SimpleQuizResult;
  GeneralQuestionsResult2R: SimpleQuizResult;
  GeneralQuestionsResult3R: SimpleQuizResult;
  GeneralQuestionsResult4R: SimpleQuizResult;
  GeneralQuestionsResult5R: SimpleQuizResult;
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
  GenerQuestTemplate: SimpleQuizResult;
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

/**
 * Type for quiz question data structure.
 * Used across different quiz screens.
 */
export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  img: ImageSourcePropType | null | undefined;
  imgMap: ImageSourcePropType | null | undefined;
  answer: string;
  result1: string;
  result2: string;
  result3: string;
  result4: string;
};
