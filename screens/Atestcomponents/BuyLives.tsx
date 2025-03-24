import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';

const BuyLives = () => {
  const [lives, setLives] = useState(3); // Starting with 3 lives
  const [points, setPoints] = useState(0); // Starting with 0 points

  // Function to handle buying extra life
  const buyExtraLife = () => {
    if (points >= 50) {
      setLives(lives + 1);
      setPoints(points - 50); // Deduct 50 points for an extra life
      Alert.alert('Success!', 'You have bought 1 extra life!');
    } else {
      Alert.alert('Not enough points', 'You need 50 points to buy an extra life.');
    }
  };

  // Function to handle answering a question (example)
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setPoints(points + 10); // Add 10 points for a correct answer
    } else {
      setLives(lives - 1); // Deduct 1 life for a wrong answer
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Lives: {lives}</Text>
      <Text>Points: {points}</Text>

      {/* Example buttons for answering questions */}
      <Button title="Answer Correctly" onPress={() => handleAnswer(true)} />
      <Button title="Answer Incorrectly" onPress={() => handleAnswer(false)} />

      {/* Button for buying extra life */}
      <Button title="Buy Extra Life (50 Points)" onPress={buyExtraLife} />
    </View>
  );
};

export default BuyLives;

// To add a functionality where users can buy extra lives using points in your React Native Expo quiz app, you can follow these steps:

// Track Lives and Points: Keep track of the user's lives and points.
// Buy Extra Lives: Allow users to spend points to buy extra lives.

// Step 2: Explanation

// Lives and Points Tracking:
// lives is initialized to 3 and points to 0.
// Each time the user answers correctly, they get 10 points (setPoints), and each time they answer incorrectly, they lose 1 life (setLives).

// Buying Extra Life:
// buyExtraLife function checks if the user has 50 or more points. If so, it adds 1 extra life (setLives(lives + 1)) and deducts 50 points (setPoints(points - 50)).
// If they don't have enough points, an alert will notify them.


// Step 3: Customize
// You can add more complex UI components or styles for a better user experience.
// The handleAnswer function can be updated with the actual logic for answering questions in your quiz app.