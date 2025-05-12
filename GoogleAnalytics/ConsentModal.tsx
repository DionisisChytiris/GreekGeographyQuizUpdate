// components/ConsentModal.tsx
import {
  ArrowRight,
  BarChart,
  ChevronDown,
  ChevronUp,
  Menu,
} from "lucide-react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  Alert,
  Animated,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import { useScaleAnim } from "../screens/Utilities/useScaleAnim";

type ConsentModalProps = {
  visible: boolean;
  onAccept: () => void;
  onDecline: () => void;
};

const ConsentModal = ({ visible, onAccept, onDecline }: ConsentModalProps) => {
  const [showAnalytics, setShowAnalytics] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500, // fade in duration
        useNativeDriver: true,
      }).start();
    }, 600); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(onDecline);
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onDecline}
    >
      <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
        <View style={styles.modalContent}>
          <View style={styles.imageHeader}>
            <View style={styles.imageBox}>
              <Image
                source={require("../assets/adaptive-icon-test.png")}
                style={{ width: 70, height: 70 }}
              />
            </View>
            <View style={{ paddingTop: 5 }}>
              <Text
                style={{ fontSize: 16, paddingBottom: 20, fontWeight: "bold" }}
              >
                Γεωγραφία της Ελλάδας
              </Text>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.analyticsBorder}>
              <View style={styles.analyticsBox}>
                <View style={styles.iconBox}>
                  <BarChart size={16} color="white" />
                </View>
                <Text
                  style={{ fontSize: 15, paddingBottom: 0, fontWeight: "bold" }}
                >
                  Google Analytics
                </Text>
                <TouchableOpacity
                  onPress={() => setShowAnalytics(!showAnalytics)}
                  style={styles.arrowButton}
                >
                  <View style={{ paddingLeft: 20 }}>
                    {showAnalytics ? (
                      <ChevronUp size={16} color="grey" />
                    ) : (
                      <ChevronDown size={16} color="grey" />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
              {showAnalytics ? (
                <View
                  style={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: 10,
                    marginBottom: 10,
                    padding: 10,
                  }}
                >
                  <Text style={styles.modalText}>
                    Το Google Analytics 4 (GA4) είναι ένα εργαλείο της Google
                    που βοηθά τους κατόχους εφαρμογών και ιστοσελίδων να
                    παρακολουθούν τη συμπεριφορά των χρηστών και να αποκτούν
                    πληροφορίες όπως:
                  </Text>
                  <View style={{ paddingLeft: 10, marginTop: -10 }}>
                    <Text style={styles.modalText}>
                      👥 Πόσα άτομα χρησιμοποιούν την εφαρμογή
                    </Text>
                    <Text style={styles.modalText}>⏱️ Πόση ώρα παραμένουν</Text>
                    <Text style={styles.modalText}>🎯 Ποια κουμπιά πατάνε</Text>
                    <Text style={styles.modalText}>
                      🌍 Από πού προέρχονται (γεωγραφικά ή μέσω παραπομπών)
                    </Text>
                  </View>
                </View>
              ) : null}
              <Text style={styles.modalText}>
                Χρησιμοποιούμε Google Analytics για να συλλέγουμε ανώνυμα
                δεδομένα σχετικά με τις αλληλεπιδράσεις σας με την εφαρμογή
                (όπως κλικ κουμπιών, προβολές οθονών και στατιστικά χρήσης).
              </Text>
              <Text style={styles.modalText}>
                Τα δεδομένα που συλλέγουμε μας βοηθούν να κατανοήσουμε πώς οι
                χρήστες αλληλεπιδρούν με την εφαρμογή, γεγονός που μας επιτρέπει
                να βελτιώσουμε την απόδοση και τα χαρακτηριστικά της εφαρμογής.
              </Text>
              <Text style={styles.modalText}>
                Καμία προσωπική πληροφορία δεν αποθηκεύεται ή κοινοποιείται.
              </Text>
              <Text style={styles.modalText}>
                Οι πληροφορίες που συλλέγονται από το Google Analytics
                μεταδίδονται και αποθηκεύονται στους διακομιστές της Google.
                Μπορείτε να μάθετε περισσότερα για τις πρακτικές απορρήτου της
                Google εδώ:{" "}
                <Text
                  onPress={() =>
                    Linking.openURL("https://policies.google.com/privacy")
                  }
                  style={{ color: "#055af7" }}
                >
                  Google Privacy & Terms
                </Text>
              </Text>
              <Text
                style={{ fontSize: 12, paddingBottom: 15, fontWeight: "bold" }}
              >
                Εάν επιθυμείτε να διαγραφούν τα δεδομένα που σχετίζονται με το
                Google Analytics ή να αποσύρετε τη συγκατάθεσή σας μπορείτε να
                το κάνετε στις ρυθμίσεις.
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5, marginLeft: 20 }}
              >
                <View style={styles.menuBtn}>
                  <Menu size={12} color="grey" />
                </View>

                <ArrowRight size={12} color="grey" />
                <Text
                  style={{ fontSize: 12, paddingBottom: 0, fontWeight: "bold" }}
                >
                  Προσωπικά Δεδομένα
                </Text>
              </View>
              {/* <View style={{flexDirection: 'row'}}>
            </View> */}
            </View>
          </ScrollView>
          <View
            style={{
              width: "100%",
              height: "24%",
              paddingVertical: 20,
              gap: 10,
            }}
          >
            <TouchableOpacity onPress={onAccept} style={styles.button1}>
              <Text style={styles.btnTxt1}>ΣΥΝΑΙΝΕΣΗ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal} style={styles.button2}>
              <Text style={styles.btnTxt2}>ΑΡΓΟΤΕΡΑ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://sites.google.com/view/geografiatiselladas"
                )
              }
              style={styles.button3}
            >
              <Text style={styles.btnTxt3}>Πολιτική Απορρήτου</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  imageHeader: {
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 20,
    // borderBottomWidth: 0.5,
    // borderColor: "grey",
  },
  menuBtn: {
    padding: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageBox: {
    width: 55,
    height: 55,
    backgroundColor: "#055af7",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 4,
  },
  analyticsBorder: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#dadada",
    borderRadius: 5,
  },
  analyticsBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingBottom: 20,
  },
  arrowButton: {
    position: "absolute",
    top: -5,
    right: 80,
    padding: 10,
  },
  iconBox: {
    width: 20,
    height: 20,
    backgroundColor: "#b3b2b2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  modalContent: {
    width: "85%",
    height: "79%",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 20,
    fontSize: 12,
  },
  button1: {
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "#055af7",
    borderRadius: 25,
  },
  button2: {
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "#ccc10010",
    borderRadius: 20,
  },
  button3: {
    width: "100%",
    paddingBottom: 10,
    borderRadius: 20,
  },
  btnTxt1: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
  },
  btnTxt2: {
    color: "black",
    textAlign: "center",
    fontSize: 12,
  },
  btnTxt3: {
    color: "#055af7",
    textAlign: "center",
    fontSize: 10,
  },
});

export default ConsentModal;
