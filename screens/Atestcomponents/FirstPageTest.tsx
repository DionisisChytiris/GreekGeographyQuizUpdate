import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
// import { Link } from 'expo-router';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useEffect } from 'react';
// import { SplashScreen } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Map, Mountain, Heater as Water, Globe, Share2 } from 'lucide-react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

// SplashScreen.preventAutoHideAsync();

const CATEGORIES = [
  {
    id: 'cities',
    title: 'Πόλεις',
    icon: Map,
    gradient: ['#FF6B6B', '#EE5D5D'],
  },
  {
    id: 'mountains',
    title: 'Βουνά',
    icon: Mountain,
    gradient: ['#4ECDC4', '#45B7AF'],
  },
  {
    id: 'lakes',
    title: 'Λίμνες',
    icon: Water,
    gradient: ['#6C5CE7', '#5B4BC7'],
  },
  {
    id: 'general',
    title: 'Γενικές Ερωτήσεις',
    icon: Globe,
    gradient: ['#FFA62E', '#EA9420'],
  },
];

export default function FirstPageTest() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Bold': Poppins_700Bold,
  });

//   useEffect(() => {
//     if (fontsLoaded || fontError) {
//       SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
      source={require("./test.jpg")}
      
        // source={{ uri: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&auto=format&fit=crop&q=80' }}
        style={styles.backgroundImage}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']}
        style={styles.overlay}
      />

      <View style={styles.content}>
        <Animated.View 
          entering={FadeInDown.delay(200).springify()} 
          style={styles.header}
        >
          <Text style={styles.title}>Γεωγραφία της</Text>
          <Text style={[styles.title, styles.titleBold]}>Ελλάδας</Text>
        </Animated.View>

        <Animated.View 
          entering={FadeInUp.delay(400).springify()}
          style={styles.categoriesContainer}
        >
          {CATEGORIES.map((category, index) => (
            // <Link
            //   href="/quiz"
            //   key={category.id}
            //   asChild
            // >
              <Pressable>
                <LinearGradient
                  colors={category.gradient}
                  style={styles.categoryButton}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <category.icon size={24} color="#fff" />
                  <Text style={styles.categoryText}>{category.title}</Text>
                </LinearGradient>
              </Pressable>
            // </Link>
          ))}
        </Animated.View>

        <Animated.View 
          entering={FadeInUp.delay(600).springify()}
          style={styles.footer}
        >
          <Pressable style={styles.shareButton}>
            <Share2 size={20} color="#fff" />
            <Text style={styles.shareText}>Μοιραστείτε την εφαρμογή</Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 60,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 36,
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  titleBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: 42,
  },
  categoriesContainer: {
    gap: 16,
    marginVertical: 40,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  categoryText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#fff',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    gap: 8,
  },
  shareText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#fff',
  },
});