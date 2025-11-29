import React, { useEffect, useState } from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logError } from "../../utils/logger";

interface UserData {
  Name: string;
}

/**
 * Custom alert component that displays a congratulatory message
 * when the user achieves over 90% score.
 */
const CustomAlert: React.FC = () => {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async (): Promise<void> => {
    try {
      const value = await AsyncStorage.getItem("UserData");
      if (value != null) {
        const user: UserData = JSON.parse(value);
        setName(user.Name);
      }
    } catch (e) {
      logError("Error loading user data:", e);
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        transparent
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.alertText}>Καλή δουλειά! Πέτυχες πάνω από 90%.</Text>
            <Text style={styles.alertText}>
            Μπράβο  {name}!
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomAlert;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  alertText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  closeButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
