import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
  Dimensions,
  Linking,
  Platform,
  Image,
  Pressable,
  Alert,
} from "react-native";
// import { useRouter } from 'expo-router';
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Settings as IconSettings,
  User,
  Bell,
  Globe,
  Flag,
  LogOut,
  TrendingUp,
  Activity,
  BarChart,
  Info,
  Check,
  Circle,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/RootStackParamList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import * as SecureStore from "expo-secure-store";
import { toggleLives } from "../ReduxToolkit/livesSlice";
import { toggleTimer } from "../ReduxToolkit/timerSlice";
import { toggleSound } from "../ReduxToolkit/soundSlice";
import { useAppSelector } from "../ReduxToolkit/store";
import ModalNameInput from "./Modals/ModalNameInput";
import { useSoundEffect } from "./Utilities/useSoundEffects";
import { useAnalyticsConsent } from "../GoogleAnalytics/useAnalyticsConsent";
import {
  hasAnalyticsConsent,
  setAnalyticsConsent,
} from "../GoogleAnalytics/analyticsConsent";
import { ScrollView } from "react-native-gesture-handler";
import { deleteUserData } from "../GoogleAnalytics/deleteUserData";
import { getClientId } from "../GoogleAnalytics/getClientIdAsyncStorage";
import PersonalDataModal from "./Modals/PersonalDataModal";

type GenerQTProp = StackNavigationProp<RootStackParamList, "Quiz1">;

const { height } = Dimensions.get("window");

export default function Settings() {
  const navigation = useNavigation<GenerQTProp>();
  const dispatch = useDispatch();
  const isTimerEnabled = useAppSelector((state) => state.timer.isTimerEnabled);
  const livesEnabled = useAppSelector((state) => state.lives.livesEnabled); // Get the livesEnabled state
  const isSoundEnabled = useAppSelector((state) => state.sound.isSoundEnabled);
  const { consentGiven, setConsent } = useAnalyticsConsent(); // Get consent status and setter from the hook
  const [isConsentGiven, setIsConsentGiven] = useState(consentGiven); // Sync the component's state with consent
  const [showPersonalData, setShowPersonalData] = useState(false);

  useEffect(() => {
    console.log("consentGiven from hook:", consentGiven);
    setIsConsentGiven(!consentGiven);
  }, []);

  const handleConsentToggle = async () => {
    const newConsentStatus = !isConsentGiven;
    setIsConsentGiven(newConsentStatus);

    try {
      await setConsent(newConsentStatus);
      const latest = await hasAnalyticsConsent();
      setIsConsentGiven(latest);
    } catch (error) {
      console.error("Error updating consent:", error);
      setIsConsentGiven(!newConsentStatus);
    }
  };

  const toggleLivesVisibility = () => {
    dispatch(toggleLives()); // Dispatch action to toggle the lives state
    if (isSoundEnabled) {
      imgPlaySound(); // Play sound if sound is enabled
    }
  };

  const handleToggleTimer = () => {
    dispatch(toggleTimer());
    if (isSoundEnabled) {
      imgPlaySound(); // Play sound if sound is enabled
    }
  };

  const handleToggleSound = () => {
    dispatch(toggleSound()); // Dispatch the action to toggle sound
    if (isSoundEnabled) {
      imgPlaySound(); // Play sound if sound is enabled
    }
  };

  // const removeName = async () => {
  //   try {
  //     await AsyncStorage.removeItem("UserData");
  //     navigation.navigate("SetUserName");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const imgPlaySound = useSoundEffect(
    require("../assets/sounds/popimg.mp3")
    // require("../.")
  );
  const fiftyPlaySound = useSoundEffect(require("../assets/sounds/popup.mp3"));

  const urlNewApp =
    Platform.OS === "ios"
      ? "https://apps.apple.com/app/id6670754535" // Replace with your iOS App Store link
      : "https://play.google.com/store/apps/details?id=com.worldwisetrivia.app";

  const [modalVisible, setModalVisible] = useState(false);
  const [clientId, setClientId] = useState<string | null>(null);
  const userId = getClientId();

  useEffect(() => {
    const fetchClientId = async () => {
      const id = await getClientId();
      setClientId(id);
    };
    fetchClientId();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}
        {/* <View style={styles.header}> */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Quiz1");
          }}
          style={styles.header}
        >
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.sectionHeaderTitle}>
          <Text
            style={[
              styles.sectionTitle,
              {
                fontWeight: "bold",
                fontSize: 28,
                color: "black",
                marginBottom: -15,
              },
            ]}
          >
            Ρυθμίσεις{" "}
          </Text>
          <View style={{ position: "absolute", bottom: 0, right: 5 }}>
            <Text style={{fontSize: 10}}>{clientId || "Loading..."}</Text>
          </View>
        </View>
        {/* <Text style={styles.title}>Ρυθμίσεις</Text> */}
        {/* </View> */}

        {/* Notifications Section */}
        <View style={styles.section1}>
          <View style={styles.sectionHeader}>
            <View style={styles.iconBackground}>
              <IconSettings size={18} color="#fffdfd" />
            </View>
            <Text style={styles.sectionTitle}>Εξατομίκευση</Text>
          </View>
        </View>

        <ModalNameInput
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />

        <View style={styles.section2}>
          <View style={styles.menuItemIcon}>
            <View style={{ flexDirection: "row", gap: 20 }}>
              {livesEnabled ? (
                <View
                  style={[styles.iconBackground, { backgroundColor: "red" }]}
                >
                  <Ionicons name="heart" size={18} color="#fff" />
                </View>
              ) : (
                <View
                  style={[styles.iconBackground, { backgroundColor: "red" }]}
                >
                  <Ionicons name="heart-dislike" size={18} color="#fff" />
                </View>
              )}
              <Text style={[styles.menuText]}>Ζωές</Text>
            </View>
            <Switch
              value={livesEnabled}
              onValueChange={toggleLivesVisibility}
              style={{
                transform: [
                  { scaleX: Platform.OS === "ios" ? 0.9 : 1 },
                  { scaleY: Platform.OS === "ios" ? 0.9 : 1 },
                ],
              }}
              // trackColor={{ false: '#767577', true: '#4CAF50' }}
            />
          </View>
          <View style={styles.menuItemIcon}>
            <View style={{ flexDirection: "row", gap: 20 }}>
              {isTimerEnabled ? (
                <View
                  style={[
                    styles.iconBackground,
                    { backgroundColor: "#a0a0a0" },
                  ]}
                >
                  <MaterialIcons name="timer" size={18} color="white" />
                </View>
              ) : (
                <View
                  style={[
                    styles.iconBackground,
                    { backgroundColor: "#a0a0a0" },
                  ]}
                >
                  <MaterialIcons name="timer-off" size={18} color="white" />
                </View>
              )}
              <Text style={styles.menuText}>Χρόνος</Text>
            </View>
            <Switch
              value={isTimerEnabled}
              onValueChange={handleToggleTimer}
              style={{
                transform: [
                  { scaleX: Platform.OS === "ios" ? 0.9 : 1 },
                  { scaleY: Platform.OS === "ios" ? 0.9 : 1 },
                ],
              }}
              // trackColor={{ false: '#767577', true: '#4CAF50' }}
            />
          </View>
          <View style={styles.menuItemIcon}>
            <View style={{ flexDirection: "row", gap: 20 }}>
              {isSoundEnabled ? (
                <View
                  style={[
                    styles.iconBackground,
                    { backgroundColor: "#459ef1" },
                  ]}
                >
                  <Ionicons name="volume-medium" size={18} color="#fff" />
                </View>
              ) : (
                <View
                  style={[
                    styles.iconBackground,
                    { backgroundColor: "#459ef1" },
                  ]}
                >
                  <MaterialIcons name="volume-off" size={18} color="#fff" />
                </View>
              )}
              <Text style={styles.menuText}>Ήχος</Text>
            </View>
            <Switch
              value={isSoundEnabled}
              onValueChange={handleToggleSound}
              style={{
                transform: [
                  { scaleX: Platform.OS === "ios" ? 0.9 : 1 },
                  { scaleY: Platform.OS === "ios" ? 0.9 : 1 },
                ],
              }}
              // trackColor={{ false: '#767577', true: '#4CAF50' }}
            />
          </View>
          <TouchableOpacity
            // onPress={removeName}
            onPress={() => {
              setModalVisible(true);
              if (isSoundEnabled) {
                fiftyPlaySound(); // Play sound if sound is enabled
              }
            }}
            style={[styles.menuItem, { paddingBottom: 10 }]}
          >
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View
                style={[styles.iconBackground, { backgroundColor: "#f53978" }]}
              >
                <EvilIcons name="user" size={22} color="#fff" />
              </View>
              <Text style={styles.menuText}>Αλλαγή Ονόματος</Text>
            </View>
            <ChevronRight size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* More Section */}
        <View style={[styles.section1, { marginTop: 20 }]}>
          <View style={styles.sectionHeader}>
            <View style={styles.iconBackground}>
              <Globe size={18} color="#fff" />
            </View>
            <Text style={styles.sectionTitle}>Περισσότερα</Text>
          </View>
        </View>
        <View style={styles.section2}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AboutApp");
            }}
            style={styles.menuItem}
          >
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View
                style={[styles.iconBackground, { backgroundColor: "#168652" }]}
              >
                <MaterialIcons name="bookmark" size={16} color="#fff" />
              </View>
              <Text style={styles.menuText}>Σχετικά</Text>
            </View>
            <ChevronRight size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://sites.google.com/view/geografiatiselladas"
              );
            }}
            style={styles.menuItem}
          >
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View
                style={[styles.iconBackground, { backgroundColor: "#db2fb0" }]}
              >
                <MaterialIcons name="privacy-tip" size={16} color="#fff" />
              </View>
              <Text style={styles.menuText}>Πολιτική Απορρήτου</Text>
            </View>
            <ChevronRight size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShowPersonalData(true)}
            style={styles.menuItem}
          >
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View
                style={[styles.iconBackground, { backgroundColor: "#1b56fa" }]}
              >
                <MaterialIcons name="policy" size={16} color="#fff" />
              </View>
              <Text style={styles.menuText}>Προσωπικά Δεδομένα</Text>
            </View>
            <ChevronRight size={20} color="#666" />
          </TouchableOpacity>
          <PersonalDataModal
            visible={showPersonalData}
            onClose={() => setShowPersonalData(false)}
          />
          <TouchableOpacity
             onPress={() => {
              navigation.navigate("Contact");
            }}
            style={styles.menuItem}
          >
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View
                style={[styles.iconBackground, { backgroundColor: "#1cf747" }]}
              >
                <MaterialIcons name="message" size={16} color="#fff" />
              </View>
              <Text style={styles.menuText}>Eπικοινωνία</Text>
            </View>
            <ChevronRight size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* More Apps */}
        <View style={[styles.section1, { marginTop: 20 }]}>
          <View style={styles.sectionHeader}>
            <View
              style={[styles.iconBackground, { backgroundColor: "#f3861f" }]}
            >
              <MaterialIcons name="apps" size={18} color="#fff" />
            </View>
            <Text style={styles.sectionTitle}>Νέα Εφαρμογή</Text>
          </View>
        </View>
        <View style={[styles.section2, { marginBottom: 30 }]}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(urlNewApp);
            }}
            style={styles.menuItem}
          >
            <View style={{ flexDirection: "row", gap: 20 }}>
              <Image
                source={require("../assets/Photos/WorldTrivia.png")}
                resizeMode="cover"
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 5,
                }}
              />

              <Text style={styles.menuText}>Παγκόσμια Γεωγραφία</Text>
            </View>
            <ChevronRight size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    width: "20%",
    borderRadius: 10,
    marginTop: Platform.OS === "android" ? -20 : height > 900 ? -30 : -10,
    // paddingHorizontal: 16,
    paddingVertical: 5,
    fontWeight: "bold",
    // backgroundColor: "#fff",
    // borderBottomWidth: 1,
    // borderBottomColor: "#e0e0e0",
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  section1: {
    backgroundColor: "#fff",
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  section2: {
    backgroundColor: "#fff",
    // backgroundColor: "#6ee287",
    marginTop: 12,
    borderRadius: 10,
  },
  sectionHeaderTitle: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 8,
    gap: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: "#f0f0f0",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "800",
    marginLeft: 8,
    color: "#444343",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    // borderBottomWidth: 1,
    // borderBottomColor: "#f0f0f0",
  },
  menuItemIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === "ios" ? 8 : 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuText: {
    fontSize: 15,
    color: "#333",
    // backgroundColor: 'green'
  },
  iconBackground: {
    width: 25,
    height: 25,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
