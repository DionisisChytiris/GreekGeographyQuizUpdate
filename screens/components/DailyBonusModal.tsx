import { View, Text, Modal, StyleSheet, Pressable, Image } from "react-native";
import React from "react";

type DailyBonusProps = {
  visible: boolean;
  onClose: () => void;
};

const DailyBonusModal: React.FC<DailyBonusProps> = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <View style={{position: 'absolute', top: -60, right: -20, transform: [{rotate: '35deg'}]}}>
          <Image
            source={require("../../assets/Photos/goldbg.png")}
            style={{ width: 55, height: 55 }}
          />
        </View>
          <Text
            style={{ fontSize: 20, color: "white", fontFamily: "Poppins-Bold", textShadowColor: 'grey',
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 3, }}
          >
            Συγχαρητήρια!!!
          </Text>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 40,
              // marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins-Bold",
                textAlign: "center",
                
              }}
            >
              Μόλις συνέλεξες το καθημερινό μπόνους!!!
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 30,
                gap: 10,
              }}
            >
              <Image
                source={require("../../assets/Photos/goldbg.png")}
                style={{ width: 35, height: 35 }}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  fontFamily: "Poppins-Bold",
                  textShadowColor: 'grey',
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 3,
                }}
              >
                50
              </Text>
            </View>
          </View>
        </View>

        {/* <Pressable onPress={onClose}>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                color: "red",
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
              }}
            >
              Έξοδος
            </Text>
          </View>
        </Pressable> */}
      </View>
    </Modal>
  );
};

export default DailyBonusModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "rgba(0,0,0, 0.3)",
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
