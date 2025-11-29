import { ImageSourcePropType } from "react-native";

/**
 * Option format used in modern quiz questions (MainQuizAiGen format).
 * Each option is an object with an answer string.
 */
export type QuizOption = {
  answer: string;
};

/**
 * Legacy option format with id and options label.
 * Used in older question data structures.
 */
export type LegacyQuizOption = {
  id: string;
  answer: string;
  options?: string; // Optional label like "A", "B", "C", "D"
};

/**
 * Modern quiz question format used by MainQuizAiGen component.
 * This is the standard format for most quiz screens.
 */
export type QuizQuestion = {
  id: string | number;
  question: string;
  options: QuizOption[];
  correctAnswerIndex: number;
  img?: ImageSourcePropType | null;
};

/**
 * Battle quiz question format.
 * Used specifically for the BattleQuiz component.
 */
export type BattleQuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
};

/**
 * Legacy quiz question format with extended result information.
 * Used in older quiz data files with detailed explanations.
 */
export type LegacyQuizQuestion = {
  id: string | number;
  question: string;
  options: LegacyQuizOption[];
  correctAnswerIndex: number;
  img?: ImageSourcePropType | null;
  imgMap?: ImageSourcePropType | null;
  answer?: string; // Legacy field, kept for compatibility
  result1?: string; // Explanation for option 1
  result2?: string; // Explanation for option 2
  result3?: string; // Explanation for option 3
  result4?: string; // Explanation for option 4
};

/**
 * Union type for all question formats.
 * Use this when you need to accept any question format.
 */
export type AnyQuizQuestion = QuizQuestion | BattleQuizQuestion | LegacyQuizQuestion;

/**
 * Type guard to check if a question is a BattleQuizQuestion
 */
export function isBattleQuizQuestion(
  question: AnyQuizQuestion
): question is BattleQuizQuestion {
  return "correctAnswer" in question && !("correctAnswerIndex" in question);
}

/**
 * Type guard to check if a question is a QuizQuestion (modern format)
 */
export function isQuizQuestion(question: AnyQuizQuestion): question is QuizQuestion {
  return (
    "correctAnswerIndex" in question &&
    Array.isArray(question.options) &&
    question.options.length > 0 &&
    typeof question.options[0] === "object" &&
    "answer" in question.options[0]
  );
}

/**
 * Type guard to check if a question is a LegacyQuizQuestion
 */
export function isLegacyQuizQuestion(
  question: AnyQuizQuestion
): question is LegacyQuizQuestion {
  return (
    "correctAnswerIndex" in question &&
    "result1" in question &&
    Array.isArray(question.options)
  );
}

