// components/ConsentModal.tsx
import { BarChart, ChevronDown, ChevronUp } from "lucide-react-native";
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
import { deleteUserData } from "../../GoogleAnalytics/deleteUserData";
import { useAnalyticsConsent } from "../../GoogleAnalytics/useAnalyticsConsent";
// import { useScaleAnim } from "../screens/Utilities/useScaleAnim";

type PersonalDataProps = {
  visible: boolean;
//   onAccept: () => void;
//   onDecline: () => void;
  onClose: () => void;
};

const PersonalDataModal = ({
  visible,
//   onAccept,
//   onDecline,
  onClose,
}: PersonalDataProps) => {
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { acceptConsent, declineConsent, deleteGA4Consent } =
    useAnalyticsConsent();
    

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500, // fade in duration
        useNativeDriver: true,
      }).start();
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  //   const closeModal = () => {
  //     Animated.timing(fadeAnim, {
  //       toValue: 0,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }).start(onDecline);
  //   };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
    //   onRequestClose={onDecline}
    >
      <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={onClose}
            style={{ position: "absolute", top: 0, right: 0 }}
          >
            <Text style={{  padding: 10 }}>
              Έξοδος
            </Text>
          </TouchableOpacity>
          <View style={styles.imageHeader}>
            <View style={styles.imageBox}>
              <Image
                source={require("../../assets/adaptive-icon-test.png")}
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
                <View style={styles.ga4PopUp}>
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
              {!showMore ? (
                <Text onPress={() => setShowMore(true)} style={styles.readMore}>
                  Διαβάστε περισσότερα...
                </Text>
              ) : (
                <View>
                  <Text style={styles.modalText}>
                    Τα δεδομένα που συλλέγουμε μας βοηθούν να κατανοήσουμε πώς
                    οι χρήστες αλληλεπιδρούν με την εφαρμογή, γεγονός που μας
                    επιτρέπει να βελτιώσουμε την απόδοση και τα χαρακτηριστικά
                    της εφαρμογής.
                  </Text>
                  <Text style={styles.modalText}>
                    Καμία προσωπική πληροφορία δεν αποθηκεύεται ή κοινοποιείται.
                  </Text>
                  <Text style={styles.modalText}>
                    Οι πληροφορίες που συλλέγονται από το Google Analytics
                    μεταδίδονται και αποθηκεύονται στους διακομιστές της Google.
                    Μπορείτε να μάθετε περισσότερα για τις πρακτικές απορρήτου
                    της Google εδώ:{" "}
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
                    onPress={() => setShowMore(false)}
                    style={styles.readMore}
                  >
                    Δείτε λιγότερα...
                  </Text>
                </View>
              )}
              <Text style={styles.modalText}>
                Ζητάμε τη συναίνεσή σας για την χρήση{" "}
                <Text style={{ color: "#055af7" }}>Google Analytics 4.</Text>
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 20,
                  marginTop: -10,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert("Aφαίρεση Συγκατάθεσης GA4", "Έχετε αφαιρέσει επιτυχώς την συγκατάθεσή σας για καταγραφή δεδομένων μέσω Google Analytics 4.", [{ text: "ΕΝΤΑΞΕΙ" }]),

                    declineConsent();
                  }}
                  style={styles.button1}
                >
                  <Text style={styles.btnTxt1}>ΑΠΟΡΡΙΨΗ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert("Συγκατάθεση για GA4", "Ευχαριστούμε για την συγκατάθεσή σας. Τα δεδομένα από το GA4 θα μας βοηθήσει να βελτιώσουμε την εφαρμογή.", [{ text: "ΕΝΤΑΞΕΙ" }]),
                      acceptConsent();
                  }}
                  style={styles.button2}
                >
                  <Text style={styles.btnTxt2}>ΣΥΝΑΙΝΕΣΗ</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.analyticsBorder, { marginTop: 20 }]}>
              <View style={styles.analyticsBox}>
                <View style={styles.iconBox}>
                  <BarChart size={16} color="white" />
                </View>
                <Text
                  style={{ fontSize: 15, paddingBottom: 0, fontWeight: "bold" }}
                >
                  Διαγραφή Δεδομένων Google
                </Text>
              </View>
              <View
                style={{ marginTop: -18, marginLeft: 25, marginBottom: 20 }}
              >
                <Text
                  style={{ fontSize: 15, paddingBottom: 0, fontWeight: "bold" }}
                >
                  Analytics
                </Text>
              </View>

              <Text style={styles.modalText}>
                Εάν επιθυμείτε να διαγραφούν τα δεδομένα που έχουν συλλεχθεί
                μέσω του Google Analytics 4 (GA4) σχετικά με τη χρήση αυτής της
                εφαρμογής, μπορείτε να πατήσετε το κουμπί "Διαγραφή Δεδομένων GA4".
              </Text>
              {!showMore2 ? (
                <Text
                  onPress={() => setShowMore2(true)}
                  style={styles.readMore}
                >
                  Διαβάστε περισσότερα...
                </Text>
              ) : (
                <View>
                  <Text style={styles.modalText}>
                    Το Google Analytics συλλέγει ανώνυμα δεδομένα χρήσης από
                    προεπιλογή και δεν αποθηκεύει προσωπικά αναγνωρίσιμες
                    πληροφορίες, αλλά θα εξετάσουμε το αίτημά σας σύμφωνα με τη
                    σχετική νομοθεσία περί προστασίας προσωπικών δεδομένων.
                  </Text>
                  <Text style={styles.modalText}>
                    Μόλις παραλάβουμε το αίτημα, θα χρησιμοποιήσουμε το User
                    Deletion API του GA4 για να αφαιρέσουμε τα δεδομένα που
                    σχετίζονται με τον μοναδικό σας αναγνωριστικό χρήστη Ιd.
                  </Text>
                  <Text style={styles.modalText}>
                    Το Google Analytics διατηρεί τα δεδομένα χρήσης για μέγιστο
                    χρονικό διάστημα 2 μηνών, μετά το οποίο διαγράφονται
                    αυτόματα.
                  </Text>

                  <Text
                    onPress={() => setShowMore2(false)}
                    style={styles.readMore}
                  >
                    Δείτε λιγότερα...
                  </Text>
                </View>
              )}

              <TouchableOpacity
                onPress={async () => {
                  const success = await deleteUserData();
                  if (success) {
                    Alert.alert(
                      "Διαγραφή Δεδομένων",
                      "Η χρήση Google Analytics έχει απενεργοποιηθεί για τη συσκευή σας. Η Google θα αφαιρέσει τα δεδομένα σας βάσει της πολιτικής διατήρησής της.",
                      [{ text: "ΕΝΤΑΞΕΙ" }]
                    );
                  } else {
                    Alert.alert(
                      "Δεν υπάρχει καταγραφή δεδομένων ανάλυσης.",
                      "Είτε δεν έχετε δώσει αρχικά τη συναίνεσή σας για καταγραφή, είτε την ανακαλέσατε αργότερα.",
                      [{ text: "ΕΝΤΑΞΕΙ" }]
                    );
                  }
                  deleteGA4Consent();
                }}
                style={styles.button4}
              >
                <Text style={styles.btnTxt4}>ΔIΑΓΡΑΦΗ ΔΕΔΟΜΕΝΩΝ GA4</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View
            style={{
              width: "100%",
              height: "10%",
              paddingVertical: 20,
              gap: 10,
              //   backgroundColor: 'yellow'
            }}
          >
            {/* <TouchableOpacity onPress={onAccept} style={styles.button1}>
              <Text style={styles.btnTxt1}>ΣΥΝΑΙΝΕΣΗ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal} style={styles.button2}>
              <Text style={styles.btnTxt2}>ΑΡΓΟΤΕΡΑ</Text>
            </TouchableOpacity> */}
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
  ga4PopUp: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  readMore: {
    fontSize: 10,
    textAlign: "right",
    paddingBottom: 20,
    marginTop: -10,
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
    height: "85%",
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
    width: "45%",
    paddingVertical: 10,
    backgroundColor: "#e6e6e6",
    borderRadius: 15,
  },
  button2: {
    width: "45%",
    paddingVertical: 10,
    backgroundColor: "#055af7",
    borderRadius: 15,
  },
  button3: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    paddingBottom: 10,
    borderRadius: 20,
  },
  button4: {
    width: "100%",
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: "#055af7",
    borderRadius: 25,
  },
  btnTxt1: {
    color: "black",
    textAlign: "center",
    fontSize: 10,
  },
  btnTxt2: {
    color: "white",
    textAlign: "center",
    fontSize: 10,
  },
  btnTxt3: {
    color: "#055af7",
    textAlign: "center",
    fontSize: 10,
  },
  btnTxt4: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
  },
});

export default PersonalDataModal;
