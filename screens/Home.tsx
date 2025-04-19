import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/RootStackParamList";
import { trackEvent } from "../GoogleAnalytics/trackEvent";
import { trackEventsOrganized } from "../GoogleAnalytics/trackEventsOrganized";
import AsyncStorage from "@react-native-async-storage/async-storage";

type HomeProp = StackNavigationProp<RootStackParamList, "Quiz1">;

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const navigation = useNavigation<HomeProp>();

  const handlePress = () => {
    // Your button logic
    // Alert.alert('Button Clicked!');
    trackEvent(trackEventsOrganized.QUIZ_START);
    // trackEvent(trackEventsOrganized.QUIZ_START, { quiz_start: "ClickMe" });

    // Track the event
    // trackEvent('button_click', {
    //   screen: 'ExampleScreen',
    //   button_name: 'ClickMe',
    // });
  };

  const resetFirstLaunch = async () => {
    try {
      await AsyncStorage.removeItem('isFirstLaunch');
      console.log("First launch key removed.");
    } catch (error) {
      console.error("Error removing first launch key:", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <ImageBackground
        // source={{
        //   uri: "https://api.a0.dev/assets/image?text=stunning%20aerial%20view%20of%20greek%20islands%20with%20dramatic%20coastline%20crystal%20clear%20waters%20and%20ancient%20ruins&aspect=9:16",
        // }}
        source={require("../assets/Photos/meteora.jpg")}
        style={styles.container}
      >
        {/* <ScrollView contentContainerStyle={styles.scrollContent}> */}
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
              navigation.navigate("Quiz1"), handlePress()
              // navigation.navigate("Quiz1"), handlePress(),resetFirstLaunch()
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
        {/* </ScrollView> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
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
    // fontSize: height < 900 ? 30: 50,
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
