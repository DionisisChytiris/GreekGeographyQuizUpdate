import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const mockPlayers = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "Frank",
  "Grace",
  "Hannah",
  "Ian",
  "Jack",
  "Kelly",
  "Liam",
  "Mia",
  "Nathan",
  "Olivia",
  "Peter",
  "Quinn",
  "Rachel",
  "Steve",
  "Tina",
];

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is 5 + 7?",
    options: ["10", "12", "14", "15"],
    answer: "12",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Hemingway", "Tolkien", "Orwell"],
    answer: "Shakespeare",
  },
];

export default function BattleQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userScore, setUserScore] = useState<number>(0);
  const [mockPlayerScore, setMockPlayerScore] = useState<number | null>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [mockPlayerAnswer, setMockPlayerAnswer] = useState<string | null>(null);
  const [isMockTurn, setIsMockTurn] = useState(false);
  const [userResults, setUserResults] = useState<Array<boolean | null>>([null, null, null]);
  const [mockResults, setMockResults] = useState([null, null, null]);
  const [mockPlayer, setMockPlayer] = useState("");
  const [quiz, setQuiz] = useState([...quizData]);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [usedQuestions, setUsedQuestions] = useState<number[]>([])

  // Initial setup of the mock player
  useEffect(() => {
    setMockPlayer(mockPlayers[Math.floor(Math.random() * mockPlayers.length)]);
  }, []);

  // Handle user answer submission
  useEffect(() => {
    if (selectedAnswer !== null && !isMockTurn && quiz[currentQuestion]) {
      const isCorrect = quiz[currentQuestion].answer === selectedAnswer;
      if (isCorrect) {
        setUserScore((prev) => prev + 1);
        console.log("userScore: ", userScore);
      }
      setUserResults((prev) => {
        const newResults = [...prev];
        newResults[currentQuestion] = isCorrect;
        return newResults;
      });

      // User has answered, now wait for mock player
      setIsMockTurn(true);
      setTimeout(mockPlayerTurn, 1000); // Mock player's turn after 2 seconds
    }
  }, [selectedAnswer]);

  // Handle mock player's answer
  const mockPlayerTurn = () => {
    if (!quiz[currentQuestion]) return;

    const options = quiz[currentQuestion].options;
    const correctAnswer = quiz[currentQuestion].answer;

    let randomAnswer;
    if (Math.random() < 1) {
      // 100% chance of correct answer
      randomAnswer = correctAnswer;
    } else {
      const wrongOptions = options.filter((option) => option !== correctAnswer);
      randomAnswer =
        wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
    }

    setMockPlayerAnswer(randomAnswer);

    const isCorrect = randomAnswer === correctAnswer;
    if (isCorrect) {
      setMockPlayerScore((prev) => (prev ?? 0) + 1);
      console.log("mockPlayerScore: ", mockPlayerScore);
    }
    setMockResults((prev) => {
      const newResults:any = [...prev];
      newResults[currentQuestion] = isCorrect;
      return newResults;
    });

    // After mock player's turn, check if it's time to move to the next question
    setTimeout(() => {
      if (currentQuestion < quiz.length - 1) {
        // This ensures it doesn't go out of bounds
        console.log("Moving to next question");
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
        setMockPlayerAnswer(null);
        setIsMockTurn(false);
      } else {
        // console.log('Game over, checking for winner');
        // Ensure the game waits for 1 second after the 3rd question before moving to the extra question
        // setGameOver(true);
        setTimeout(() => {
          checkForWinner();
        }, 1000); // Wait for 1 second before checking the winner or moving to the extra question
      }
    }, 1000); // Wait before moving to the next question
  };

  // Check for winner logic
  const checkForWinner = () => {
    console.log("userScore: ", userScore);
    // console.log("mockPlayerScore: ", mockPlayerScore);
    if (userScore !== mockPlayerScore) {
      setGameOver(true);
      console.log('Game over, checking for winner')
      setWinner(
        userScore > (mockPlayerScore ?? 0) ? "You win! 🎉" : `${mockPlayer} wins! 🏆`
      );
    } else {
      addExtraQuestion(); // Tie case, so add a tie-breaker
      console.log('Add extra question')
    }
  };

  // Add extra question in case of a tie
  const addExtraQuestion = () => {
    // Prevent further rounds if the game is already over
    if (gameOver) {
      console.log("Game is already over, not adding extra question");
      return;
    }

    const extraQuestion = generateTieBreaker();
    setQuiz((prev) => {
      const newQuiz = [...prev, extraQuestion];
      return newQuiz;
    });

    // Move to the new tie-breaker question
    setTimeout(() => {
      setCurrentQuestion((prev) => prev + 1); // Proceed to the tie-breaker question
      setSelectedAnswer(null);
      setMockPlayerAnswer(null);
      setIsMockTurn(false);
    }, 1000); // Wait before moving to tie-breaker question
  };

  // Generate a random tie-breaker question
  const generateTieBreaker = () => {
    const questions = [
      {
        question: "What is 12 x 8?",
        options: ["92", "96", "104", "88"],
        answer: "96",
      },
      {
        question: "What is 15 x 7?",
        options: ["105", "110", "90", "100"],
        answer: "105",
      },
      {
        question: "What is 18 x 6?",
        options: ["108", "120", "100", "102"],
        answer: "108",
      },
      {
        question: "What is 25 x 4?",
        options: ["100", "90", "120", "110"],
        answer: "100",
      },
      {
        question: "What is 30 x 3?",
        options: ["90", "100", "95", "85"],
        answer: "90",
      },
    ];
  
  // Filter out used questions to avoid repeating
  const unusedQuestions = questions.filter(
    (q, index) => !usedQuestions.includes(index)
  );

  if (unusedQuestions.length === 0) {
    // All questions have been used, reset the usedQuestions state
    setUsedQuestions([]); // Reset after all questions are used
    return questions[Math.floor(Math.random() * questions.length)];
  }

  // Select a random question from the unused questions
  const randomIndex = Math.floor(Math.random() * unusedQuestions.length);
  const selectedQuestion = unusedQuestions[randomIndex];

  // Track the used question index
  setUsedQuestions((prev) => [...prev, questions.indexOf(selectedQuestion)]);
  
    return selectedQuestion;
  };
  

  // Monitor the game status and check for winner at the end of each round
  useEffect(() => {
    if (!gameOver && currentQuestion === quiz.length) {
      checkForWinner();
    }
  }, [currentQuestion, userScore, mockPlayerScore, gameOver]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.mockPlayerText}>
          Competing against: {mockPlayer}
        </Text>
        {/* <View style={styles.card}>
        <Text style={styles.question}>{quizData[currentQuestion].question}</Text>
        {quizData[currentQuestion].options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[styles.option, selectedAnswer === option && styles.selectedOption]}
            onPress={() => !isMockTurn && setSelectedAnswer(option)}
            disabled={isMockTurn}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View> */}
        {quiz[currentQuestion] ? (
          <View style={styles.card}>
            <Text style={styles.question}>
              {quiz[currentQuestion].question}
            </Text>
            {quiz[currentQuestion].options.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.option,
                  selectedAnswer === option && styles.selectedOption,
                ]}
                onPress={() => !isMockTurn && setSelectedAnswer(option)}
                disabled={isMockTurn}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <Text style={styles.question}>No more questions available.</Text>
        )}
        <View style={styles.resultsContainer}>
          <View style={styles.column}>
            {userResults.map((result, index) => (
              <View
                key={index}
                style={[
                  styles.resultBox,
                  result === true
                    ? styles.correct
                    : result === false
                    ? styles.wrong
                    : null,
                ]}
              />
            ))}
          </View>
          <View style={styles.column}>
            {mockResults.map((result, index) => (
              <View
                key={index}
                style={[
                  styles.resultBox,
                  result === true
                    ? styles.correct
                    : result === false
                    ? styles.wrong
                    : null,
                ]}
              />
            ))}
          </View>
        </View>
        <Text style={styles.answerText}>
          Your Answer: {selectedAnswer || "-"}
        </Text>
        <Text style={styles.answerText}>
          {mockPlayer}'s Answer: {mockPlayerAnswer || "-"}
        </Text>
        <Text style={{ marginTop: 20 }}> {winner}</Text>
        <Text style={styles.leaderboardTitle}>Leaderboard:</Text>
        <View style={styles.leaderboard}>
          <Text style={styles.leaderboardText}>You: {userScore} points</Text>
          <Text style={styles.leaderboardText}>
            {mockPlayer}: {mockPlayerScore} points
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 50,
  },
  mockPlayerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    padding: 20,
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    width: "70%",
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  option: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
  },
  selectedOption: {
    borderColor: "blue",
  },
  optionText: {
    fontSize: 16,
  },
  resultsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 20,
  },
  column: {
    flexDirection: "column",
  },
  resultBox: {
    width: 30,
    height: 30,
    margin: 5,
    backgroundColor: "gray",
    borderRadius: 5,
  },
  correct: {
    backgroundColor: "green",
  },
  wrong: {
    backgroundColor: "red",
  },
  answerText: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
  },
  leaderboardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  leaderboard: {
    width: "100%",
    padding: 15,
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginTop: 10,
  },
  leaderboardText: {
    fontSize: 16,
  },
});
