import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart, ArrowLeft, Info } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const QuizScreen = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Bold': Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const answers = [
    'Σμόλικας',
    'Βόρας',
    'Όλυμπος',
    'Γράμμος'
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Percentage Indicator */}
      <View style={styles.percentageContainer}>
        <Text style={styles.percentageText}>50%</Text>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Pressable style={styles.iconButton}>
            <ArrowLeft size={24} color="#333" />
          </Pressable>
          <Text style={styles.progress}>1/15</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.livesContainer}>
            <Heart size={20} color="#FF4B4B" fill="#FF4B4B" />
            <Text style={styles.livesText}>3</Text>
          </View>
          <Pressable style={styles.iconButton}>
            <Info size={24} color="#333" />
          </Pressable>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>13</Text>
          </View>
        </View>
      </View>

      {/* Question Card */}
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80' }}
          style={styles.questionImage}
        />
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            Ποιο είναι το ψηλότερο βουνό της Ελλάδας;
          </Text>
        </View>

        {/* Answer Grid */}
        <View style={styles.answersGrid}>
          {answers.map((answer, index) => (
            <Pressable
              key={index}
              style={styles.answerButton}
            >
              <LinearGradient
                colors={['#4A90E2', '#357ABD']}
                style={styles.answerGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.answerText}>{answer}</Text>
              </LinearGradient>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '50%' }]} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  percentageContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#FF1493',
    borderRadius: 12,
    padding: 8,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  percentageText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  progress: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#333',
    backgroundColor: '#E8EDF3',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  livesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE8E8',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },
  livesText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#FF4B4B',
  },
  scoreContainer: {
    backgroundColor: '#E0F7FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  scoreText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#0088CC',
  },
  card: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  questionImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  questionContainer: {
    padding: 20,
  },
  questionText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: '#333',
    textAlign: 'center',
  },
  answersGrid: {
    padding: 16,
    gap: 12,
  },
  answerButton: {
    height: 56,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  answerGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  answerText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#fff',
  },
  progressBarContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E8EDF3',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4A90E2',
    borderRadius: 4,
  },
});

export default QuizScreen;