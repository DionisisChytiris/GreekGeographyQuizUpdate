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
import NomoiTemplateNoTime from "./NomoiTemplateNoTime";

type NomoiInstructionsProp = StackNavigationProp<
  RootStackParamList,
  "Instructions"
>;


const Nomoi3R = () => {
  const navigation = useNavigation<NomoiInstructionsProp>();
  return (
    <SafeAreaView>
    <ScrollView bounces={false}>
      <View>
        <NomoiTemplate
          questions={questions3}
          nomoiResults={"NomoiResult3"}
          nomoiLoseScreen={'NomoiLoseScreen3R'}
          nomoiLoseScreenTime={'LoseScreenREndTime'}
          num={3}
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
