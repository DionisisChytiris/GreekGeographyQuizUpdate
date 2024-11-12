import { View,  ScrollView, Text, Pressable} from "react-native";
import React from "react";
import NomoiTemplate from "./NomoiTemplate";
import questions5 from "../../data/NomoiPoleis/questions5";
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

const Nomoi5R = () => {
  const navigation = useNavigation<NomoiInstructionsProp>();
  return (
    <SafeAreaView>
    <ScrollView bounces={false}>
      <View>
        <NomoiTemplateNoTime
          questions={questions5}
          nomoiResults={"NomoiResult5"}
          nomoiLoseScreen={'NomoiLoseScreen5R'}
          num={5}
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

export default Nomoi5R;
