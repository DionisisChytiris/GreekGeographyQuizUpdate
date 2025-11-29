import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import { logError } from '../../utils/logger';

/**
 * Custom hook for playing looping drum/background sounds.
 * Manages sound state and provides play/stop controls with automatic cleanup.
 * 
 * @param soundFile - URI string of the sound file to play
 * @returns Object with playSound function, stopSound function, and isPlaying state
 * 
 * @example
 * const { playSound, stopSound, isPlaying } = useSoundDrumLoopPlayer('https://example.com/sound.mp3');
 */
const useSoundDrumLoopPlayer = (soundFile: string) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Load sound and handle cleanup on unmount
  useEffect(() => {
    const loadSound = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          { uri: soundFile },
          { shouldPlay: false, isLooping: true } // Set looping to true, and don't play immediately
        );
        setSound(sound);
      } catch (error) {
        logError('Error loading sound:', error);
      }
    };

    loadSound();

    // Cleanup when the component is unmounted
    return () => {
      if (sound) {
        sound.unloadAsync();
        // console.log('Sound unloaded');
      }
    };
  }, [soundFile]);

  // Play sound function
  const playSound = async () => {
    if (sound && !isPlaying) {
      try {
        await sound.playAsync(); // Play the sound
        setIsPlaying(true); // Update isPlaying after the sound starts
      } catch (error) {
        logError('Error playing sound:', error);
      }
    }
  };

  // Stop sound function
  const stopSound = async () => {
    if (sound && isPlaying) {
      try {
        await sound.stopAsync(); // Stop the sound
        setIsPlaying(false); // Update isPlaying to false
      } catch (error) {
        logError('Error stopping sound:', error);
      }
    }
  };

  return { playSound, stopSound, isPlaying };
};

export default useSoundDrumLoopPlayer;
