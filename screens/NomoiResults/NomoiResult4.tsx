import { View } from "react-native";
import React from "react";
import questions4 from "../../data/NomoiPoleis/questions4";
import NomoiResultTemplate from "./NomoiResultTemplate";

const NomoiResult4 = () => {
  return (
    <View style={{ flex: 1 }}>
      <NomoiResultTemplate
        dataQ={questions4}
        repeatQ={"Nomoi4"}
        nextQ={"Nomoi5"}
        img={require("../../assets/Photos/salonika.jpg")}
      />
    </View>
  );
};

export default NomoiResult4;
