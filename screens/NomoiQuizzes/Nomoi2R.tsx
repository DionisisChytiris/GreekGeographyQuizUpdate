import { View,  ScrollView, Text, Pressable } from "react-native";
import React from "react";
import NomoiTemplate from "./NomoiTemplate";
import questions2 from "../../data/NomoiPoleis/questions2";
import { Entypo } from "@expo/vector-icons";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import { SafeAreaView } from "react-native-safe-area-context";
import NomoiTemplateNoTime from "./NomoiTemplateNoTime";

type NomoiInstructionsProp = StackNavigationProp<
  RootStackParamList,
  "Instructions"
>;


const Nomoi2R = () => {
  const navigation = useNavigation<NomoiInstructionsProp>();
  return (
    <ScrollView bounces={false}>
      <View>
        <NomoiTemplate
          questions={questions2}
          nomoiResults={"NomoiResult2"}
          nomoiLoseScreen={'LoseScreenREndTime'}
          nomoiLoseScreenTime={'LoseScreenREndTime'}
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

export default Nomoi2R;
