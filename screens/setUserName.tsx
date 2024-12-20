import { View, Text, Pressable, TextInput,Alert } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../Types/RootStackParamList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setNameInput } from "../ReduxToolkit/setUserNameSlice";

type SetUserProp = StackNavigationProp<RootStackParamList, 'SetUserName'>

const SetUserName = () => {
  const navigation = useNavigation<SetUserProp>()
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const setData = async () => {
    if (name.length == 0) {
      Alert.alert("","Εισάγεται το όνομά σας");
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
        dispatch(setNameInput(name))
        // setName(' ');
      } catch (e) {
        console.log(e);
      }
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
      <Text style={{ color: "white", marginBottom: 30 }}>
        Εισάγεται το όνομά σας:
      </Text>

      <TextInput
        style={{
          width: 300,
          height: 50,
          backgroundColor: "#f5f5f5",
          borderRadius: 30,
          alignItems: "center",
          paddingLeft: 20,
        }}
        placeholder="Εισαγωγή ονόματος..."
        maxLength={12}
        value={name}
        onChangeText={setName}
      />

      <View style={{ flexDirection: "row", gap: 40, marginTop: 120 }}>
        <Pressable
          style={{
            width: 150,
            height: 50,
            // paddingVertical: 5,
            paddingHorizontal: 30,
            backgroundColor: "#ccc",
            borderRadius: 30,
            alignItems: 'center', 
            justifyContent: 'center',
            elevation: 15,
            shadowOffset: {width: 3, height: 3},
            shadowOpacity: 1.0,
            // borderRadius: 10,
          }}
          onPress={() => {
            navigation.navigate("Quiz1")
            dispatch(setNameInput(''))
          }}
        >
          <Text style={{fontSize: 12, textAlign: 'center', color: 'black', fontWeight: 'bold'}}>Είσοδος χωρίς όνομα</Text>
        </Pressable>
        <Pressable
          style={{
            width: 150,
            paddingVertical: 10,
            paddingHorizontal: 30,
            backgroundColor: "#ccc",
            borderRadius: 30,
            alignItems: 'center', 
            justifyContent: 'center',
            elevation: 15,
            shadowOffset: {width: 3, height: 3},
            shadowOpacity: 1.0,
          }}
          onPress={setData}
        >
          <Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}>Είσοδος με όνομα</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SetUserName;
