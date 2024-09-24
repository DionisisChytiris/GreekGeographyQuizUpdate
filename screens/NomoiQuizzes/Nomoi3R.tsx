import { View,  ScrollView, Text, Pressable} from "react-native";
import React from "react";
import NomoiTemplate from "./NomoiTemplate";
import questions3 from "../../data/NomoiPoleis/questions3";
import { Entypo } from "@expo/vector-icons";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import { SafeAreaView } from "react-native-safe-area-context";

type NomoiInstructionsProp = StackNavigationProp<
  RootStackParamList,
  "Instructions"
>;


const Nomoi3R = () => {
  const navigation = useNavigation<NomoiInstructionsProp>();
  return (
    <SafeAreaView>
    <ScrollView bounces={false}>
      <View style={{ backgroundColor: "darkblue" }}>
        <NomoiTemplate
          questions={questions3}
          nomoiResults={"NomoiResult3"}
          nomoiLoseScreen={'NomoiLoseScreen3R'}
          num={3}
          goBack={
            <View
              style={{
                width: "100%",
                height: 45,
                paddingBottom: 20,
                paddingLeft: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <Pressable
                onPress={() => {
                  navigation.navigate("Quiz1");
                }}
                style={{paddingLeft: 10}}
              >
                <AntDesign name="arrowleft" size={24} color="white" />
              </Pressable>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: "white",
                  paddingLeft: 40,
                }}
              >
                Νομοί / Πόλεις
              </Text>
            </View>
          }
          star={
            <View style={{ flexDirection: "row" }}>
              <Entypo name="star" size={16} color="gold" />
              <Entypo name="star" size={16} color="gold" />
              <Entypo name="star" size={16} color="gold" />
            </View>
          }
        />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Nomoi3R;
