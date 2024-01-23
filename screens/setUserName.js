import { View, Text, Pressable, TextInput,Alert } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SetUserName = ({ navigation }) => {
  const [name, setName] = useState("");

  const setData = async () => {
    if (name.length == 0) {
      Alert.alert("","Εισάγεται το όνομά σας ή πατήστε το κουμπί ''Εξοδος'");
    } else {
      try {
        const user = {
          Name: 
            name.slice(-1) === "ς" || name.slice(-1) === "Σ"  
              ? name[0].toUpperCase() + name.slice(1, -1)
              : name[0].toUpperCase() + name.slice(1),
        };
        await AsyncStorage.setItem("UserData", JSON.stringify(user));
        navigation.navigate("Quiz");
        setName("");
      } catch (e) {
        console.log(e);
      }
    }
  };

  
  const removeData = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("Quiz");
      // setName('')
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0b7fcc",
      }}
    >
      <Text style={{ color: "#ccc", marginBottom: 20 }}>
        Εισάγεται το όνομά σας:
      </Text>

      <TextInput
        style={{
          width: 200,
          height: 50,
          backgroundColor: "#ccc",
          borderRadius: 30,
          alignItems: "center",
          paddingLeft: 20,
        }}
        placeholder="Εισαγωγή ονόματος..."
        maxLength={12}
        // autoCompleteType='off'
        value={name}
        onChangeText={setName}
      />

      <View style={{ flexDirection: "row", gap: 40, marginTop: 80 }}>
        <Pressable
          style={{
            paddingVertical: 10,
            paddingHorizontal: 30,
            backgroundColor: "#ccc",
            borderRadius: 30,
          }}
          onPress={() => navigation.navigate("Quiz")}
          // onPress={removeData}
        >
          <Text>Έξοδος </Text>
        </Pressable>
        <Pressable
          style={{
            paddingVertical: 10,
            paddingHorizontal: 30,
            backgroundColor: "#ccc",
            borderRadius: 30,
          }}
          onPress={setData}
        >
          <Text>Προσθήκη </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SetUserName;
