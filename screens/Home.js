import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/meteora.jpg")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 30 }}>Γεωγραφία</Text>
          <Text style={{ color: "white", fontSize: 26 }}>της</Text>
          <Text style={{ color: "white", fontSize: 30 }}>Ελλάδας</Text>
        </View>

        <Pressable
          onPress={() => navigation.navigate("Introduction")}
          style={styles.button}
        >
          <View style={styles.button1} />
          <Text style={styles.btnText}>Είσοδος</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: "relative",
    width: 140,
    height: 45,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
  },
  button1: {
    position: "absolute",
    opacity: 0.3,
    backgroundColor: "magenta",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  btnText: {
    position: "absolute",
    bottom: 12,
    left: 37,
    color: "white",
    fontWeight: "600",
    fontSize: 17,
  },
});

export default Home;
