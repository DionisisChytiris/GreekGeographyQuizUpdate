import React, { useEffect } from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Quicksand_400Regular } from '@expo-google-fonts/quicksand';

type ModalComponentProps = {
  visible: boolean;
  onClose: () => void;
  title: string;
  // message: string;
  currentQuestion: any;
};

const ModalExplanationQuestion: React.FC<ModalComponentProps> = ({
  visible,
  onClose,
  title,
  // message,
  currentQuestion,
}) => {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": Poppins_400Regular,
    "Poppins-SemiBold": Poppins_600SemiBold,
    "Poppins-Bold": Poppins_700Bold,
    Quicksand_400Regular,
  });

  useEffect(() => {
    if (!fontsLoaded || fontError) {
      return;
    }
  }, [fontsLoaded, fontError]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{title}</Text>
          {/* <Text style={styles.modalMessage}>{message}</Text> */}
          <View style={{ height: 350, paddingBottom: 20 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  marginBottom: 20,
                  gap: 20,
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    color: "#22c200",
                    fontSize: 18,
                    textAlign: 'center',
                    // fontFamily: "Poppins-SemiBold",
                    fontFamily: 'Quicksand_400Regular'
                  }}
                >
                  {currentQuestion?.result1}{" "}
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 18,
                    textAlign: 'center',
                    // fontFamily: "Poppins-SemiBold",
                    fontFamily: 'Quicksand_400Regular'
                  }}
                >
                  {currentQuestion?.result2}{" "}
                </Text>
                <Text
                  style={{
                    color: "#014acf",
                    fontSize: 18,
                    textAlign: 'center',
                    // fontFamily: "Poppins-SemiBold",
                    fontFamily: 'Quicksand_400Regular'
                  }}
                >
                  {currentQuestion?.result3}{" "}
                </Text>
                <Text
                  style={{
                    color: "magenta",
                    fontSize: 18,
                    textAlign: 'center',
                    // fontFamily: "Poppins-SemiBold",
                    fontFamily: 'Quicksand_400Regular'
                  }}
                >
                  {currentQuestion?.result4}{" "}
                </Text>
              </View>
            </ScrollView>
          </View>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Έξοδος</Text>
          </Pressable>
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
    backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent background
  },
  modalView: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
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

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(1, 231, 51, 0.8)",
//     // backgroundColor: "rgba(0,0,0,0.8)",
//   },
//   modalView: {
//     width: "80%",
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 12,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#333",
//   },
//   modalMessage: {
//     fontSize: 16,
//     textAlign: "center",
//     marginBottom: 20,
//     color: "#555",
//   },
//   closeButton: {
//     backgroundColor: "#4A90E2",
//     // marginLeft: 200,
//     padding: 12,
//     borderRadius: 8,
//     width: "100%",
//     alignItems: "center"
//   },
//   closeButtonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
// });

export default ModalExplanationQuestion;
