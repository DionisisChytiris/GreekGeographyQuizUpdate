import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import React from "react";

const { height } = Dimensions.get("window");

interface ProgressBarProps {
  index1: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  index1,
  totalQuestions,
}) => {
  return (
    <View
      style={[styles.progressBarBack, { marginTop: height > 900 ? 60 : 50 }]}
    >
      <View
        style={[
          styles.progressBar,
          { width: `${Math.floor((index1 / totalQuestions) * 100)}%` },
        ]}
      />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressBarBack: {
    backgroundColor: "white",
    width: height > 960 ? "80%" : "80%", // Dynamically adjust width based on screen height
    flexDirection: "row",
    alignItems: "center",
    height: 5,
    borderRadius: 20,
    position: "absolute",
    bottom: Platform.OS === "android"?height > 800 ? -65 :-20 : -20, 
    left: 35,
    justifyContent: "center",
  },
  progressBar: {
    backgroundColor: "#0059DF",
    borderRadius: 12,
    position: "absolute",
    left: 0,
    height: 6,
    right: 0,
  },
});
