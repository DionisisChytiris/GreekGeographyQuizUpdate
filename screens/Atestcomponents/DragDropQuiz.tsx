import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";

export default function App() {
  const [quiz, setQuiz] = useState({
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  });

  const [droppedStates, setDroppedStates] = useState(
    quiz.options.map(() => false) // Track if each option is dropped
  );

  const positions = quiz.options.map(() => ({
    translateX: useSharedValue(0),
    translateY: useSharedValue(0),
  }));

  const checkDropZone = (index: number, option:any):boolean => {
    // Logic for checking if the item is dropped in the correct area
    if (
      positions[index].translateX.value >= -50 &&
      positions[index].translateX.value <= 50 &&
      positions[index].translateY.value >= -50 &&
      positions[index].translateY.value <= 50
    ) {
      return true;
    }
    return false;
  };

  const handleCheckAnswer = () => {
    // Check each option's drop zone and trigger the correct/wrong alert
    quiz.options.forEach((option, index) => {
      if (checkDropZone(index, option)) {
        if (option === quiz.correctAnswer) {
          Alert.alert("Correct!", "You got the right answer!", [
            { text: "Next Question", onPress: resetQuiz },
          ]);
        } else {
          Alert.alert("Wrong!", "Try again!");
        }
      } else {
        Alert.alert("Please drop the options in the correct area!");
      }
    });
  };

  const createGesture = (index:any) =>
    Gesture.Pan()
      .onUpdate((event) => {
        if (!droppedStates[index]) {
          positions[index].translateX.value = event.translationX;
          positions[index].translateY.value = event.translationY;
        }
      })
      .onEnd(() => {});

  const resetQuiz = () => {
    setQuiz({
      question: "What is the capital of Germany?",
      options: ["Berlin", "Paris", "Madrid"],
      correctAnswer: "Berlin",
    });

    setDroppedStates(quiz.options.map(() => false));
    positions.forEach((pos) => {
      pos.translateX.value = 0;
      pos.translateY.value = 0;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drag and Drop Quiz</Text>
      <Text style={styles.question}>{quiz.question}</Text>

      <View style={styles.targetArea}>
        <Text style={styles.targetText}>Drop Here</Text>
      </View>

      <View style={styles.optionsContainer}>
        {quiz.options.map((option, index) => {
          const animatedStyle = useAnimatedStyle(() => ({
            transform: [
              { translateX: positions[index].translateX.value },
              { translateY: positions[index].translateY.value },
            ],
            backgroundColor: droppedStates[index] ? "#4caf50" : "#007bff", // Change color if dropped
          }));

          return (
            <GestureDetector key={index} gesture={createGesture(index)}>
              <Animated.View style={[styles.draggable, animatedStyle]}>
                <Text style={styles.draggableText}>{option}</Text>
              </Animated.View>
            </GestureDetector>
          );
        })}
      </View>

      {/* Button to check the answer */}
      <View style={{paddingTop:70}}>

      <Button title="Check Answer" onPress={handleCheckAnswer}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: "center",
  },
  targetArea: {
    width: 150,
    height: 100,
    backgroundColor: "#e3e3e3",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#aaa",
    borderRadius: 10,
    marginBottom: 50,
  },
  targetText: {
    fontSize: 16,
    color: "#555",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  draggable: {
    width: 80,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 8,
  },
  draggableText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
