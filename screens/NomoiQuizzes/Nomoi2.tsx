import { View, ScrollView, Text, Pressable} from "react-native";
import React from "react";
import questions2 from "../../data/NomoiPoleis/questions2";
import { Entypo } from "@expo/vector-icons";
import NomoiTemplate from "./NomoiTemplate";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";

type NomoiInstructionsProp = StackNavigationProp<
  RootStackParamList,
  "Instructions"
>;

const Nomoi2 = () => {
  const navigation = useNavigation<NomoiInstructionsProp>();
  return (
    <ScrollView bounces={false}>
      <View>
        <NomoiTemplate
          questions={questions2}
          nomoiResults={"NomoiResult2"}
          nomoiLoseScreen={"NomoiLoseScreen2"}
          nomoiLoseScreenTime={'NomoiLoseScreen2Time'}
          num={2}
          star={
            <View style={{ flexDirection: "row" }}>
              <Entypo name="star" size={16} color="gold" />
              <Entypo name="star" size={16} color="gold" />
            </View>
          }
        />
      </View>
    </ScrollView>
  );
};

export default Nomoi2;
