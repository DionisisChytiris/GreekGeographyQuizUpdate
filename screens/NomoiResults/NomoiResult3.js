import { View } from "react-native";
import React from "react";
import questions3 from "../../data/NomoiPoleis/questions3";
import NomoiResultTemplate from "./NomoiResultTemplate";

const NomoiResult3 = () => {
  return (
    <View style={{ flex: 1 }}>
      <NomoiResultTemplate
        dataQ={questions3}
        repeatQ={"Nomoi3R"}
        nextQ={"Nomoi4"}
        img={require("../../assets/salonika.jpg")}
      />
    </View>
  );
};

export default NomoiResult3;
