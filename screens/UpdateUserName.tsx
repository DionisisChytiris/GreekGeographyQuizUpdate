import { View, Text, Pressable, TextInput,Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../Types/RootStackParamList";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UpdateNameProp = StackNavigationProp<RootStackParamList, 'UpdateUserName'>

const UpdateUserName = () => {
  const navigation = useNavigation<UpdateNameProp>();
  const [name, setName] = useState("");

  useEffect(()=>{
    UpDateName()
  },[])

  const UpDateName = async () => {
    // if (name === '') {
    //   Alert.alert("","Εισάγεται το όνομά σας");
    // } else {
    // }
    try {
      const user = {
        Name: 
          name.slice(-1) === "ς" || name.slice(-1) === "Σ"  
            ? name[0].toUpperCase() + name.slice(1, -1)
            : name[0].toUpperCase() + name.slice(1),
      };
      await AsyncStorage.setItem("UserData", JSON.stringify(user));
      navigation.navigate("Home");
      // setName(' ');
    } catch (e) {
      console.log(e);
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
            paddingHorizontal: 30,
            backgroundColor: "#ccc",
            borderRadius: 30,
            alignItems: 'center', 
            justifyContent: 'center',
            elevation: 15,
            shadowOffset: {width: 3, height: 3},
            shadowOpacity: 1.0,
          }}
          onPress={() => navigation.navigate("Home")}
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
          onPress={UpDateName}
        >
          <Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}>Είσοδος με όνομα</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UpdateUserName;
