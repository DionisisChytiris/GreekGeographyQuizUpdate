import { View, Text, Pressable, Image, Alert } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

type NomoiInstructionsProp = StackNavigationProp<
  RootStackParamList,
  "Instructions"
>;

const NomoiInstructions = () => {
  const navigation = useNavigation<NomoiInstructionsProp>();
  const [color, setColor] = useState("#ff8000");

  return (
    <View style={{ flex: 1, backgroundColor: "lightblue" }}>
      <Image
        source={require("../../assets/Photos/salonika.jpg")}
        // resizeMode="cover"
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "24%",
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          // marginTop: "-20%",
        }}
      >
        <Pressable
           onPress={
             // () => Alert.alert("hey")
             ()=>{navigation.navigate("Quiz1");}
           }
           style={{ position: 'absolute', top: 60, left: 40 }}
         >
           <AntDesign name="arrowleft" size={24} color="white" />
         </Pressable>
        <Text
          style={{
            fontSize: 22,
            padding: 20,
            fontWeight: "600",
          }}
        >
          Νομοί / Πόλεις
        </Text>
        <Text style={{ fontSize: 16 }}> - Αυτή η κατηγορία ερωτήσεων</Text>
        <Text style={{ fontSize: 16 }}>αποτελείται από 6 επίπεδα.</Text>
        <Text style={{ fontSize: 16, paddingTop: 15 }}>
          - Το κάθε επίπεδο έχει 10 ερωτήσεις.
        </Text>
        <Text style={{ fontSize: 16, paddingTop: 15 }}>
          - Για να ανέβεις κατηγορία πρέπει
        </Text>
        <Text style={{ fontSize: 16 }}>να απαντήσεις τουλάχιστον</Text>
        <Text style={{ fontSize: 16, marginBottom: -10 }}>
          5 ερωτήσεις σωστά.
        </Text>
        <Pressable
          onPressIn={() => setColor("#ffb266")}
          onPressOut={() => {
            navigation.navigate("Nomoi1");
            setColor("#ff8000");
          }}
          style={{
            width: 120,
            backgroundColor: color,
            padding: 10,
            paddingBottom: 15,
            marginVertical: "8%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>Ερωτήσεις </Text>
        </Pressable>
        <View
          style={{ marginBottom: 10, marginTop: -15, marginHorizontal: 15 }}
        >
          <Text style={{ fontSize: 10 }}>
            Ο διοικητικός διαχωρισμός σε νομούς δεν ισχύει πλέον (από το 2011),
            αλλά έχει ιστορική αξία και είναι ακόμα χρήσιμος.
          </Text>
        </View>
        
      </View>

      <Image
        source={require("../../assets/Photos/athina.jpg")}
        // resizeMode="cover"
        style={{
          position: "absolute",
          bottom: 0,
          marginTop: 45,
          width: "100%",
          height: "24%",
          zIndex: 20,
        }}
      />
    </View>
  );
};

export default NomoiInstructions;
