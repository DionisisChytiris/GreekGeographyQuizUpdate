import { View,  ScrollView, Text, Pressable} from "react-native";
import React from "react";
import NomoiTemplate from "./NomoiTemplate";
import questions4 from "../../data/NomoiPoleis/questions4";
import { Entypo } from "@expo/vector-icons";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";

type NomoiInstructionsProp = StackNavigationProp<
  RootStackParamList,
  "Instructions"
>;

const Nomoi4R = () => {
  const navigation = useNavigation<NomoiInstructionsProp>();
  return (
    <ScrollView bounces={false}>
      <View style={{ backgroundColor: "darkblue" }}>
        <NomoiTemplate
          questions={questions4}
          nomoiResults={"NomoiResult4"}
          nomoiLoseScreen={'NomoiLoseScreen4R'}
          num={4}
          goBack={
            <View
              style={{
                width: "100%",
                height: 70,
                padding: 20,
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
              <Entypo name="star" size={16} color="gold" />
            </View>
          }
        />
      </View>
    </ScrollView>
  );
};

export default Nomoi4R;
