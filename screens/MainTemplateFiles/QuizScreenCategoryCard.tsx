import React, { useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

// Define types for the props
interface QuizScreenCategoryCardProps {
  id1: string;
  link1: string;
  title1: string;
  icon1: React.ReactNode; // This can be any React element (like a component or an icon)
  gradient1: [string, string, ...string[]]; // Gradient colors for LinearGradient
}

const QuizScreenCategoryCard: React.FC<QuizScreenCategoryCardProps> = ({
  id1,
  link1,
  title1,
  icon1,
  gradient1,
}) => {
  const navigation = useNavigation<{
    navigate: (screen: string) => void;
  }>();
  const [scale, setScale] = useState(1);

  return (
    // <View style={{ flex: 1 }}>
    <Pressable
      key={id1}
      style={[styles.categoryCard, { transform: [{ scale: scale }] }]}
      onPressIn={() => setScale(0.95)} // Scale down on press
      onPressOut={() => {
        setScale(1); // Scale back up
        navigation.navigate(link1); // Navigate to the linked screen
      }}
    >
      <LinearGradient colors={gradient1} style={styles.categoryContent}>
        <Text>
          {icon1} {/* The icon passed as a prop */}
        </Text>
        <Text style={styles.categoryTitle}>{title1}</Text>
      </LinearGradient>
    </Pressable>
    // </View>
  );
};

// Add some styles
const styles = StyleSheet.create({
  categoryCard: {
    // width: "47.7%",
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20,
    overflow: "hidden",
    // margin: 10,
    // padding: 20,
    // borderRadius: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: 250, // Customize based on your design
  },
  categoryContent: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  categoryTitle: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    color: "white",
  },
});

export default QuizScreenCategoryCard;
