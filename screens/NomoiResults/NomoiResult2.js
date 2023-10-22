import { View } from "react-native";
import React from "react";
import questions2 from "../../data/NomoiPoleis/questions2";
import NomoiResultTemplate from "./NomoiResultTemplate";

const NomoiResult2 = () => {
  return (
    <View style={{ flex: 1 }}>
      <NomoiResultTemplate
        dataQ={questions2}
        repeatQ={"Nomoi2R"}
        nextQ={"Nomoi3"}
        img={require("../../assets/salonika.jpg")}
      />
    </View>
  );
};

export default NomoiResult2;
