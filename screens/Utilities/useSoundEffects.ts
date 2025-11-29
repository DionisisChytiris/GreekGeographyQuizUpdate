import { useEffect, useState } from "react";
import { Audio } from "expo-av";

/**
 * Type for sound file sources accepted by useSoundEffect.
 * - number: Local asset via require() (e.g., require('./sound.mp3'))
 * - { uri: string }: Remote URI (e.g., { uri: 'https://example.com/sound.mp3' })
 */
export type SoundSource = number | { uri: string };

/**
 * Custom hook for playing sound effects.
 * Creates and manages audio sound instances with automatic cleanup.
 * 
 * @param soundFile - The sound file to play (require() statement or URI object)
 * @returns Function to play the sound effect
 * 
 * @example
 * const playSound = useSoundEffect(require('../assets/sounds/coin.wav'));
 * playSound(); // Plays the sound
 * 
 * @example
 * const playSound = useSoundEffect({ uri: 'https://example.com/sound.mp3' });
 */
export function useSoundEffect(soundFile: SoundSource) {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return playSound;
}
