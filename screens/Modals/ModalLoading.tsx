import {
  View,
  Text,
  Modal,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

type ModalLoadingProps = {
  isModalVisible: boolean;
  onClose: () => void;
};

const { height, width } = Dimensions.get("window");

const ModalLoading: React.FC<ModalLoadingProps> = ({
  isModalVisible,
  onClose,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ActivityIndicator size="large" color="#3498db" />
          <Text style={styles.loadingText}>Loading Quiz...</Text>
        </View>
        <View>
          <Pressable onPress={onClose}>
            <Text style={{ color: "#fafafa", marginTop: 60, backgroundColor: '#3498db50', padding: 20, borderRadius: 20, fontSize: 16 }}>Έξοδος</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ModalLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    width: width * 0.8,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
});
