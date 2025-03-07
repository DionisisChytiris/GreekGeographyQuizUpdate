import { View } from "react-native";
import React from "react";
import questions5 from "../../data/NomoiPoleis/questions5";
import NomoiResultTemplate from "./NomoiResultTemplate";

const NomoiResult5 = () => {
  return (
    <View style={{ flex: 1 }}>
      <NomoiResultTemplate
        dataQ={questions5}
        repeatQ={"Nomoi5"}
        nextQ={"Nomoi6"}
        img={require("../../assets/Photos/salonika.jpg")}
      />
    </View>
  );
};

export default NomoiResult5;
