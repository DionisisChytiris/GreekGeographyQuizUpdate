import { useEffect } from "react";
import { useSharedValue, withSequence, withSpring, useAnimatedStyle } from "react-native-reanimated";

/**
 * Hook that creates a scale animation using Reanimated.
 * Performs a scale-up then scale-down sequence with spring physics after a delay.
 * 
 * @param delay - Delay in milliseconds before animation starts
 * @param scaleUp - Target scale value for the up animation (default: 1.2)
 * @param scaleDown - Target scale value for the down animation (default: 1)
 * @returns Animated style object with transform scale property
 */
export const useScaleAnim = (delay: number, scaleUp: number = 1.2, scaleDown: number = 1) => {
  const scaleValue = useSharedValue(1);

  // Reset the animation and run on each render
  useEffect(() => {
    // Reset scale value before starting new animation sequence
    // scaleValue.value = 1;

    const timer = setTimeout(() => {
      scaleValue.value = withSequence(
        withSpring(scaleUp, { damping: 10, stiffness: 200 }), // Scale up
        withSpring(scaleDown) // Scale back down
      );
    }, delay);

    return () => {
      clearTimeout(timer); // Cleanup timer
    };
  }, [delay, scaleUp, scaleDown]); // Dependency array ensures it runs again if these values change

  // Return the animated style
  return useAnimatedStyle(() => ({
    transform: [{ scale: scaleValue.value }],
  }));
};
