import {
  View,
  Text,
  Pressable,
  TextInput,
  Alert,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/RootStackParamList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setNameInput } from "../ReduxToolkit/setUserNameSlice";
import { AntDesign } from "@expo/vector-icons";

type SetUserProp = StackNavigationProp<RootStackParamList, "SetUserName">;

const { width } = Dimensions.get("window");

const SetUserName = () => {
  const navigation = useNavigation<SetUserProp>();
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const setData = async () => {
    if (name.length == 0) {
      Alert.alert("", "Εισάγεται το όνομά σας");
    } else {
      try {
        const user = {
          Name:
            name.slice(-1) === "ς" || name.slice(-1) === "Σ"
              ? name[0].toUpperCase() + name.slice(1, -1)
              : name[0].toUpperCase() + name.slice(1),
        };
        await AsyncStorage.setItem("UserData", JSON.stringify(user));
        navigation.navigate("Quiz1");
        dispatch(setNameInput(name));
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/MorePhotos/ath.jpg")}
        resizeMode="cover"
        blurRadius={7}
        style={styles.mainContainer}
      >
        <Pressable
          style={styles.cancelBtn}
          onPress={() => {
            navigation.navigate("Quiz1");
            dispatch(setNameInput(""));
          }}
        >
          <AntDesign name="close-circle" size={34} color="white" />
        </Pressable>
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
              value={name}
              onChangeText={setName}
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
                  setName("");
                }}
              >
                <Text style={styles.text}>Είσοδος χωρίς όνομα</Text>
              </Pressable>
            </View>
            {name ? (
              <View style={styles.btnWithName}>
                <Pressable onPress={setData}>
                  <Text style={styles.text}>Aποθήκευση & Έξοδος</Text>
                </Pressable>
              </View>
            ) : null}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SetUserName;

const styles = StyleSheet.create({
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
