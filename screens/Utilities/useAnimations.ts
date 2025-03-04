import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { useSoundEffect } from "./useSoundEffects";

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
