import React, { useRef, useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand";
import { Feather, Mail, Phone } from "lucide-react-native";
import { useSoundEffect } from "../Utilities/useSoundEffects";
import { useAppSelector } from "../../ReduxToolkit/store";

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
  const isSoundEnabled = useAppSelector((state) => state.sound.isSoundEnabled);
  const [showMessage, setShowMessage] = useState(true);
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

  useEffect(() => {
    setShowMessage(true); // Reset the state to true when modal is opened
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    // Clear the timer when the modal is closed or component unmounts
    return () => clearTimeout(timer);
  }, [visible, currentQuestion]);

  // Create a reference for the animated value
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // Reset and start the animation every time the modal is opened or component re-renders
      Animated.loop(
        Animated.sequence([
          Animated.timing(rotateValue, {
            toValue: 10, // Rotate slightly
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(rotateValue, {
            toValue: -10, // Rotate in the opposite direction
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(rotateValue, {
            toValue: 0, // Back to the original position
            duration: 100,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [visible]); // Dependency array ensures it runs on re-renders

  const rotation = rotateValue.interpolate({
    inputRange: [-10, 10],
    outputRange: ["-10deg", "10deg"],
  });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        {showMessage ? (
          <View
            style={{
              width: 250,
              height: 70,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
              }}
            >
              {/* Animated Phone Icon */}
              <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                <Phone size={24} color="green" />
              </Animated.View>
              {/* <Phone size={24} color="green" /> */}
              <View>
                <Text>... ... ...</Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.modalView}>
            <View style={{ marginTop: 20, transform: [{ rotate: "-25deg" }] }}>
              <Mail size={28} color="green" />
            </View>
            {currentQuestion?.imgMap ? (
              <View
                style={{
                  // backgroundColor: "yellow",
                  height: "80%",
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    // paddingVertical: 50,
                    height: "70%",
                  }}
                >
                  <Image
                    source={currentQuestion?.imgMap}
                    resizeMode="contain"
                    style={{ width: "100%", height: "100%" }}
                  />
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "grey",
                    // paddingTop: 10,
                  }}
                >
                  <Text
                    style={{
                      // color: "#22c200",
                      fontSize: 16,
                      textAlign: "center",
                      // fontFamily: "Poppins-SemiBold",
                      fontFamily: "Quicksand_400Regular",
                    }}
                  >
                    {currentQuestion?.result1}{" "}
                  </Text>
                </View>
              </View>
            ) : (
              <View style={{ height: '80%', paddingVertical: 20 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View
                    style={{
                      marginBottom: 20,
                      gap: 20,
                      backgroundColor: "white",
                      padding: 10,
                      borderRadius: 20,
                      height: '90%'
                    }}
                  >
                    <Text
                      style={{
                        color: "#22c200",
                        fontSize: 18,
                        textAlign: "center",
                        // fontFamily: "Poppins-SemiBold",
                        fontFamily: "Quicksand_400Regular",
                      }}
                    >
                      {currentQuestion?.result1}{" "}
                    </Text>
                    <Text
                      style={{
                        color: "black",
                        fontSize: 18,
                        textAlign: "center",
                        // fontFamily: "Poppins-SemiBold",
                        fontFamily: "Quicksand_400Regular",
                      }}
                    >
                      {currentQuestion?.result2}{" "}
                    </Text>
                    <Text
                      style={{
                        color: "#014acf",
                        fontSize: 18,
                        textAlign: "center",
                        // fontFamily: "Poppins-SemiBold",
                        fontFamily: "Quicksand_400Regular",
                      }}
                    >
                      {currentQuestion?.result3}{" "}
                    </Text>
                    <Text
                      style={{
                        color: "magenta",
                        fontSize: 18,
                        textAlign: "center",
                        // fontFamily: "Poppins-SemiBold",
                        fontFamily: "Quicksand_400Regular",
                      }}
                    >
                      {currentQuestion?.result4}{" "}
                    </Text>
                  </View>
                </ScrollView>
              </View>
            )}

            {/* <Text style={styles.modalMessage}>{message}</Text> */}
            <Pressable style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Έξοδος</Text>
            </Pressable>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "rgba(0,0,0,0.7)", // Semi-transparent background
  },
  modalView: {
    width: "85%",
    height: "65%",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 20,
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

export default ModalExplanationQuestion;
