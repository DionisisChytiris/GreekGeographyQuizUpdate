import { View, Text, Pressable, Alert } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";

type QuizScreenProp = StackNavigationProp<RootStackParamList, "Quiz1">;

const ContactButton = () => {
  const navigation = useNavigation<QuizScreenProp>();
  return (
    <View>
      <Pressable
        onPress={() => {
          Alert.alert(
            "Έχεις κάποια πρόταση ή εντόπισες κάποιο λάθος;",
            "Μη διστάσεις να επικοινωνήσεις μαζί μας για να προτείνεις βελτιώσεις ή να αναφέρεις τυχόν προβλήματα στη λειτουργία της εφαρμογής.",
            [
              {
                text: "Πισω",
                style: "cancel",
              },
              {
                text: "Επικοινωνια",
                onPress: () => {navigation.navigate("Contact")},
              },
            ],
            { cancelable: true }
          );
        }}
      >
        <Text>
          <MaterialIcons name="feedback" size={32} color="#007AFF" />
        </Text>
      </Pressable>
    </View>
  );
};

export default ContactButton;
