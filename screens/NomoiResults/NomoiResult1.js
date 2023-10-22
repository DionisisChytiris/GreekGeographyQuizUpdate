import { View } from "react-native";
import React from "react";
import questions1 from "../../data/NomoiPoleis/questions1";
import NomoiResultTemplate from "./NomoiResultTemplate";

const NomoiResult1 = () => {
  return (
    <View style={{ flex: 1 }}>
      <NomoiResultTemplate
        dataQ={questions1}
        img={require("../../assets/salonika.jpg")}
        repeatQ={"Nomoi1R"}
        nextQ={"Nomoi2"}
      />
    </View>
  );
};

export default NomoiResult1;
