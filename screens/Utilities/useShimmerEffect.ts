import { useEffect, useRef } from "react";
import { Animated } from "react-native";

// Custom Hook to handle the shimmer effect animation
const useShimmerEffect = () => {
  const shineAnim = useRef(new Animated.Value(-100)).current; // Start off-screen

  useEffect(() => {
    // Set a delay of 5 seconds before starting the shimmer animation
    const timer = setTimeout(() => {
      // Loop the animation to create the shimmering effect
      Animated.loop(
        Animated.timing(shineAnim, {
          toValue: 300, // Move the shimmer effect across the button
          duration: 1200,
          useNativeDriver: true,
        })
      ).start();
    }, 2000); // Delay for 5 seconds

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, [shineAnim]);


  return shineAnim;
};

export default useShimmerEffect;
