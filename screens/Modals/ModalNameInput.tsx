import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Dimensions,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setNameInput } from "../../ReduxToolkit/setUserNameSlice";
import { useAppSelector } from "../../ReduxToolkit/store";
import { ScrollView } from "react-native-gesture-handler";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand";

type SetUserProp = StackNavigationProp<RootStackParamList, "SetUserName">;

type ModalComponentProps = {
  visible: boolean;
  onClose: () => void;
};
const { width } = Dimensions.get("window");

const ModalNameInput: React.FC<ModalComponentProps> = ({
  visible,
  onClose,
}) => {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": Poppins_400Regular,
    "Poppins-SemiBold": Poppins_600SemiBold,
    "Poppins-Bold": Poppins_700Bold,
    Quicksand_400Regular,
  });

  const navigation = useNavigation<SetUserProp>();
  const [nameT, setNameT] = useState("");
  const dispatch = useDispatch();
  const nameAsync = useAppSelector((state) => state.user.name);

  const setData = async () => {
    if (nameT.length == 0) {
      Alert.alert("", "Εισάγεται το όνομά σας");
    } else {
      try {
        const user = {
          NameT:
            nameT.slice(-1) === "ς" || nameT.slice(-1) === "Σ"
              ? nameT[0].toUpperCase() + nameT.slice(1, -1)
              : nameT[0].toUpperCase() + nameT.slice(1),
        };
        await AsyncStorage.setItem("UserData", JSON.stringify(user));
        navigation.navigate("Quiz1");
        dispatch(setNameInput(nameT));
      } catch (e) {
        console.log(e);
      }
    }
  };

  const sanitizeNameInput = (text: string) => {
    // Allow only Greek letters, English letters, and spaces
    const sanitized = text.replace(/[^a-zA-Zα-ωΑ-ΩάέίόύήώΆΈΊΌΎΉΏ\s]/g, "");

    // Optional: Remove multiple spaces
    const singleSpaced = sanitized.replace(/\s+/g, " ");

    // Optional: Trim start and end spaces
    return singleSpaced.trimStart();
  };

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
        {/* <View style={styles.modalView}> */}
        {/* <Text style={styles.modalTitle}>Hello</Text> */}

        <View style={styles.popupContainer}>
          <Text style={styles.text}>
            Προαιρετικά, μπορείτε να εισαγάγετε το όνομά σας για μια πιο
            εξατομικευμένη εμπειρία.
          </Text>
          <View style={styles.nameInput}>
            <TextInput
              style={{ paddingLeft: 20, fontSize: 12 }}
              placeholder="Εισαγωγή ονόματος..."
              placeholderTextColor="#7090f8"
              maxLength={12}
              value={nameT}
              onChangeText={(text) => setNameT(sanitizeNameInput(text))}
              // onChangeText={setNameT}
            />
          </View>
          <View style={{ height: 50 }} />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.btnNoName}>
              <Pressable
                onPress={() => {
                  navigation.navigate("Quiz1");
                  dispatch(setNameInput(""));
                  setNameT("");
                }}
              >
                {nameAsync ? (
                  <Text style={styles.text}>Διαγραφή Ονόματος</Text>
                ) : (
                  <Text style={styles.text}>Είσοδος χωρίς όνομα</Text>
                )}
                {/* <Text style={styles.text}>Είσοδος χωρίς όνομα</Text> */}
              </Pressable>
            </View>
            {nameT ? (
              <View style={styles.btnWithName}>
                <Pressable onPress={setData}>
                  <Text style={styles.text}>Aποθήκευση & Έξοδος</Text>
                </Pressable>
              </View>
            ) : null}
          </View>

          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Έξοδος</Text>
          </Pressable>
        </View>
        {/* </View> */}
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
  mainContainer: {
    // position: "absolute",
    // zIndex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#1a4efa90",
    justifyContent: "center",
    alignItems: "center",
    // opacity: 0.8,
  },
  popupContainer: {
    width: Math.max(width * 0.23, 300), // Equivalent to max(23vw, 330px)
    backgroundColor: "white",
    marginTop: -60,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: "column",
    gap: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Adds shadow for Android
  },
  text: {
    fontSize: 12,
    color: "#5f5f5f",
    textAlign: "center",
  },
  cancelBtn: {
    position: "absolute",
    top: 50,
    right: 30,
  },
  nameInput: {
    width: "100%",
    height: 50,
    borderColor: "lightgrey",
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderRadius: 9,
    justifyContent: "center",
  },
  btnNoName: {
    width: "45%",
    height: 50,
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 9,
    justifyContent: "center",
    backgroundColor: "#efeef0",
  },
  btnWithName: {
    width: "45%",
    height: 50,
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 9,
    justifyContent: "center",
    backgroundColor: "#c7fdd3",
  },
});

export default ModalNameInput;
