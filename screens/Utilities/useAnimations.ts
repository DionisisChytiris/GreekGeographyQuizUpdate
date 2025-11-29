import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { useSoundEffect } from "./useSoundEffects";

/**
 * Hook that creates a slide-in animation from the left.
 * Animation resets and plays when the index changes.
 * 
 * @param index - The current question/item index (triggers animation on change)
 * @returns Animated.Value configured for horizontal slide animation
 */
export function useSlideAnimation(index: number) {
  const slideAnim = useRef(new Animated.Value(-300)).current;

  useEffect(() => {
    slideAnim.setValue(-300);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [index]);

  return slideAnim;
}

/**
 * Hook that creates a delayed slide-in animation with sound effect.
 * Used for "50/50" button animations with audio feedback.
 * Includes a 1.5 second delay before animation starts.
 * 
 * @param index - The current question/item index
 * @returns Animated.Value configured for delayed slide animation
 */
export function useSlideAnimationFiftyBtn(index: number) {
  const slideAnim = useRef(new Animated.Value(-300)).current;

  const fiftyPlaySound = useSoundEffect(
    require("../../assets/sounds/popimg.mp3")
  );

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      fiftyPlaySound();
    },1500);
    return () => clearTimeout(timeout1);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      slideAnim.setValue(-300);
      // fiftyPlaySound()
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }, 1500); // 3-second delay

    // Cleanup the timeout when the component unmounts or index changes
    return () => clearTimeout(timeout);
  }, []);

  return slideAnim;
}

/**
 * Hook that creates a scale-up animation from 0 to 1.
 * Animation resets and plays when the index changes.
 * 
 * @param index - The current question/item index (triggers animation on change)
 * @returns Animated.Value configured for scale animation
 */
export function useScaleAnimation(index: number) {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    scaleAnim.setValue(0);
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [index]);

  return scaleAnim;
}

/**
 * Hook that creates staggered scale animations for answer options.
 * Creates animations for 4 answer boxes with a 200ms delay between each.
 * 
 * @param index - The current question index (triggers animations on change)
 * @returns Array of 4 Animated.Value instances for staggered animations
 */
export function useAnswerAnimations(index: number) {
  const answerAnims = useRef([
    new Animated.Value(0), // Box 0
    new Animated.Value(0), // Box 1
    new Animated.Value(0), // Box 2
    new Animated.Value(0), // Box 3
  ]).current;

  useEffect(() => {
    answerAnims.forEach((anim) => anim.setValue(0));
    setTimeout(() => {
      Animated.stagger(
        200, // Delay between each animation
        answerAnims.map((anim) =>
          Animated.timing(anim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          })
        )
      ).start();
    }, 300);
  }, [index]);

  return answerAnims;
}
