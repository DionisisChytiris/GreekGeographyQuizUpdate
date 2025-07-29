import { View, Text, Modal, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

type DailyBonusProps = {
  visible: boolean;
  onClose: () => void;
};

const ModalBrokenHeart: React.FC<DailyBonusProps> = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View
          style={{
            width: 250,
            height: 250,
            //   top: 0,
            //   right: -30,
          }}
        >
          <LottieView
            style={{ width: "100%", height: "100%" }}
            // source={require("../../../../assets/LottieAnimation/BrokenHeart.json")}
            source={require("../../assets/LottieAnimations/BrokenHeart.json")}
            autoPlay
            loop={true}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "rgba(0,0,0, 0.1)",
  },
  modalView: {
    width: "65%",
    height: "35%",
    backgroundColor: "gold",
    paddingHorizontal: 20,
    // paddingVertical: 20,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  modalMessage: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
  },
  currentQuestion: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#4A90E2",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ModalBrokenHeart;
