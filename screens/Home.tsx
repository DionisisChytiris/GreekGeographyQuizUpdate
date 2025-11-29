import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/RootStackParamList";
import { trackEvent } from "../GoogleAnalytics/trackEvent";
import { trackEventsOrganized } from "../GoogleAnalytics/trackEventsOrganized";

type HomeProp = StackNavigationProp<RootStackParamList, "Quiz1">;

const { height } = Dimensions.get("window");

/**
 * Home screen component - the landing page of the app.
 * Displays app introduction, features, and navigation to quiz categories.
 * 
 * @returns JSX.Element - The home screen component
 */
export default function HomeScreen() {
  const navigation = useNavigation<HomeProp>();

  /**
   * Handles the quiz start button press.
   * Tracks analytics event when user starts a quiz.
   */
  const handlePress = () => {
    trackEvent(trackEventsOrganized.QUIZ_START);
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <ImageBackground
        source={require("../assets/Photos/meteora.jpg")}
        style={styles.container}
      >
        <View style={styles.overlay}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Γεωγραφία της Ελλάδας</Text>
            <Text style={styles.subtitle}>Τέσταρε τις Γνώσεις σου</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.description}>
              Εξερευνήστε την συναρπαστική γεωγραφία της Ελλάδας μέσα από αυτό
              το διαδραστικό κουίζ. Μάθετε για τα όμορφα νησιά, τις ιστορικές
              πόλεις, τα μεγαλοπρεπή βουνά και τα εντυπωσιακά τοπία.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.startButton}
            onPress={() => {
              navigation.navigate("Quiz1");
              handlePress();
            }}
          >
            <MaterialCommunityIcons
              name="flag-checkered"
              size={24}
              color="white"
            />
            <Text style={styles.buttonText}>Έναρξη Κουίζ</Text>
          </TouchableOpacity>

          <View style={styles.featuresContainer}>
            <View style={styles.featureItem}>
              <MaterialCommunityIcons
                name="map-marker-question"
                size={24}
                color="white"
              />
              <Text style={styles.featureText}>Πολλαπλές Κατηγορίες</Text>
            </View>
            <View style={styles.featureItem}>
              <MaterialCommunityIcons name="star" size={24} color="white" />
              <Text style={styles.featureText}>Μάθηση & Πρόκληση</Text>
            </View>
            <View style={styles.featureItem}>
              <MaterialCommunityIcons name="brain" size={24} color="white" />
              <Text style={styles.featureText}>
                Δοκίμασε τις Ικανότητές σου
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    justifyContent: "center",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 40,
    marginTop: Platform.OS === "android" ? (height > 800 ? 50 : 50) : 0,
  },
  title: {
    marginHorizontal: Platform.OS === "android" ? (height > 800 ? 50 : 30) : 0,
    fontSize:
      Platform.OS === "android"
        ? height > 800
          ? 40
          : 25
        : height < 900
        ? 30
        : 50,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize:
      Platform.OS === "android"
        ? height > 800
          ? 18
          : 16
        : height < 900
        ? 20
        : 30,
    color: "white",
    marginTop: 10,
    textShadowColor: "rgba(0,0,0,0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  infoContainer: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
  },
  description: {
    color: "white",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  startButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  featuresContainer: {
    marginTop: 20,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  featureText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
});
