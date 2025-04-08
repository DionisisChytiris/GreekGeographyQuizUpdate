import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

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
        // console.log('Sound loaded successfully!');
      } catch (error) {
        console.error('Error loading sound:', error);
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
        // console.log('Sound is playing');
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    }
  };

  // Stop sound function
  const stopSound = async () => {
    if (sound && isPlaying) {
      try {
        await sound.stopAsync(); // Stop the sound
        setIsPlaying(false); // Update isPlaying to false
        console.log('Sound stopped');
      } catch (error) {
        console.error('Error stopping sound:', error);
      }
    }
  };

  return { playSound, stopSound, isPlaying };
};

export default useSoundDrumLoopPlayer;
