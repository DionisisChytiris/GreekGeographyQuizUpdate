import { Image, Pressable, StyleSheet, Text, View, Alert, Dimensions, Linking, ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/RootStackParamList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";

type QuizScreenProp = StackNavigationProp<RootStackParamList, "Quiz1">;

const { height } = Dimensions.get('window');

const QuizScreen1 = () => {
  const navigation = useNavigation<QuizScreenProp>();
  const [scale1, setScale1] = React.useState(1);
  const [scale2, setScale2] = React.useState(1);
  const [scale3, setScale3] = React.useState(1);
  const [scale4, setScale4] = React.useState(1);

  // const removeData = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //     navigation.navigate("UpdateUserName");
  //     // setName('')
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const removeName = async () => {
    try {
      await AsyncStorage.removeItem("UserData");
      navigation.navigate("SetUserName");
    } catch (error) {
      console.log(error);
    }
  };

  const alertTest = () => {
    Alert.alert("", "", [
      { text: "Ακυρωση     ", onPress: () => {} },
      // { text: " ", onPress: () => {} },
      // { text: "Διαγραφη Δεδομενων", onPress: removeData },
      {
        text: "Αλλαγη ονοματος",
        onPress: removeName,
      },
    ]);
  };

  return (
    <View style={styles.container}>
        {/* <ImageBackground
        source={require("../assets/MorePhotos/alley.jpg")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}}
      > */}
       <Pressable
          style={{ position: "absolute", top: -20, right: -10, padding: 30 }}
          onPress={alertTest}
        >
          <AntDesign name="edit" size={24} color="white" />
        </Pressable>
      <View style={styles.title}>
        <Text style={{ color: "white", fontSize: height>900? 32: 22, fontWeight: "bold" }}>
          Επέλεξε κατηγορία
        </Text>
        {/* <Text>{name}</Text> */}
      </View>
      <View style={styles.buttonBox}>
        <Pressable
          onPressIn={() => setScale1(0.95)}
          onPressOut={() => {
            navigation.navigate("GeneralQuizMenu");
            setScale1(1);
          }}
          style={[styles.button, { transform: [{ scale: scale1 }] }]}
        >
          <View style={styles.btnContentView}>
            <View style={styles.btnTop}>
              <Image
                source={require("../assets/MorePhotos/monumentsAnimation.jpg")}
                style={styles.img}
              />
            </View>
            <View style={{height: 2, backgroundColor: '#0b7fcc'}}/>
            <View style={styles.btnBottom}>
              <Text style={styles.text}>Γενικές</Text>
              <Text style={styles.text1}>Eρωτήσεις</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          onPressIn={() => setScale2(0.95)}
          onPressOut={() => {
            navigation.navigate("LakeRiver");
            setScale2(1);
          }}
          style={[styles.button, { transform: [{ scale: scale2 }] }]}
        >
          <View style={styles.btnContentView}>
            <View style={styles.btnTop}>
              <Image
                source={require("../assets/MorePhotos/lakeAnimation.jpg")}
                style={styles.img}
              />
            </View>
            <View style={styles.btnBottom}>
              <Text style={styles.text}>Λίμνες/Ποτάμια</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          onPressIn={() => setScale3(0.95)}
          onPressOut={() => {
            navigation.navigate("Instructions");
            setScale3(1);
          }}
          style={[styles.button, { transform: [{ scale: scale3 }] }]}
        >
        <View style={styles.btnContentView}>
            <View style={styles.btnTop}>
              <Image
                source={require("../assets/MorePhotos/cityAnimation.jpg")}
                style={styles.img}
              />
            </View>
            <View style={styles.btnBottom}>
              <Text style={styles.text}>Πόλεις/Νομοί</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          onPressIn={() => setScale4(0.95)}
          onPressOut={() => {
            navigation.navigate("Mountain");
            setScale4(1);
          }}
          style={[styles.button, { transform: [{ scale: scale4 }] }]}
        >
          <View style={styles.btnContentView}>
            <View style={styles.btnTop}>
              <Image
                source={require("../assets/MorePhotos/mountainAnimation.jpg")}
                style={styles.img}
                resizeMode="cover"
              />
            </View>
            <View style={styles.btnBottom}>
              <Text style={styles.text}>Βουνά</Text>
            </View>
          </View>
        </Pressable>
      </View>
      
      {/* </ImageBackground> */}
    </View>
  );
};

export default QuizScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b7fcc",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 0,
  },
  title: {
    position: "absolute",
    top: height>900? 90: 70,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text1: {
    marginTop: -5,
    fontSize: 16,
    fontWeight: "bold",
  },
  btnContentView: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 20,
  },
  btnTop: {
    height: "70%",
    backgroundColor: "green",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
},
btnBottom: {
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: '#f5f5f5',
    // borderBottomRightRadius: 20,
    // borderBottomLeftRadius: 20,
  },
  buttonBox: {
    width: "95%",
    height: height>900? 650 :500,
    paddingTop: 50,
    flexWrap: "wrap",
    // backgroundColor: "yellow",
    // alignItems: "center",
    // justifyContent: "center",
    gap: 7,
  },
  button: {
    width: "49%",
    height: "48%",
    backgroundColor: "lightgray",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
