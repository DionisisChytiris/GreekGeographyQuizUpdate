import { View } from "react-native";
import React from "react";
import questions6 from "../../data/NomoiPoleis/questions6";
import NomoiResultTemplate from "./NomoiResultTemplate";

const NomoiResult6 = () => {
  return (
    <View style={{ flex: 1 }}>
      <NomoiResultTemplate
        dataQ={questions6}
        repeatQ={"Nomoi6"}
        nextQ={"Nomoi6Final"}
        img={require("../../assets/Photos/salonika.jpg")}
      />
    </View>
  );
};

export default NomoiResult6;
