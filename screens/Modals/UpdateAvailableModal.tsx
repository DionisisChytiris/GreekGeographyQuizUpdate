import React from "react";
import { Modal, View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface UpdateModalProps {
  visible: boolean;
  onUpdate: () => void;
  onDismiss: () => void;
}

export default function UpdateAvailableModal({
  visible,
  onUpdate,
  onDismiss,
}: UpdateModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onDismiss}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <MaterialIcons name="system-update" size={48} color="#4CAF50" />
          <Text style={styles.modalTitle}>Διαθέσιμη Ενημέρωση!</Text>
          <Text style={styles.modalText}>
            Μια νέα έκδοση της εφαρμογής είναι διαθέσιμη. Παρακαλούμε
            επανεκκινήστε την εφαρμογή για να ενημερωθεί.
          </Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, styles.buttonOutline]}
              onPress={onDismiss}
            >
              <Text style={styles.buttonOutlineText}>Αργότερα</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonFilled]}
              onPress={onUpdate}
            >
              <Text style={styles.buttonFilledText}>Επανεκκίνηση</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "85%",
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
    textAlign: "center",
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 20,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },
  button: {
    flex: 1,
    borderRadius: 12,
    padding: 12,
    elevation: 2,
  },
  buttonFilled: {
    backgroundColor: "#4CAF50",
  },
  buttonOutline: {
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#4CAF50",
  },
  buttonFilledText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  buttonOutlineText: {
    color: "#4CAF50",
    fontWeight: "600",
    textAlign: "center",
  },
});
