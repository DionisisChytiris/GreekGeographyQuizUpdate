import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from '@expo/vector-icons';

const QuizScreen = () => {
  const navigation = useNavigation();
  const [color1, setColor1] = useState('#0080ff')
  const [color2, setColor2] = useState('#00ff00')
  const [color3, setColor3] = useState('#ff8000')
  const [color4, setColor4] = useState('magenta')
  const [name, setName] = useState('')

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setName(user.Name);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };


  const removeData = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("UpdateUserName");
      // setName('')
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/romaikiAgora.jpg")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <View style={{position: 'absolute',top: 0, width:'100%', height: 92, backgroundColor: '#f5f5f5'}}>
        <View style={{position: 'absolute', top: 50, left: 20}}>
        {/* <View style={{}}> */}
          <Text style={{color: '#006f96', fontSize: 16, fontWeight: 'bold'}}>Γεία σου {name}!!! </Text>
        </View>
          <Pressable
            style={{position: 'absolute', top: 20, right: 0, padding: 30}}
            onPress={removeData}
          >
            <AntDesign name="edit" size={24} color="black" />
          </Pressable>
          </View>
        <Text style={{ textAlign: "center", color: "white", fontSize: 24, fontWeight: '600', marginBottom: 40}}>
          Επέλεξε κατηγορία
        </Text>
        <Pressable
          onPressIn={() => setColor1('#00abff')}
          onPressOut={() => {
            navigation.navigate("LakeRiver")
            setColor1('#0080ff')
          }}
          style={styles.buttonA}>
          <View style={[styles.button1, {backgroundColor: color1}]}/>
          <Text style={styles.buttonTxt1}>Λίμνες / Ποτάμια</Text>
        </Pressable>
        <Pressable
          onPressIn={() => setColor2('#56ff34')}
          onPressOut={() => {
            navigation.navigate("Mountain")
            setColor2('#00ff00')
          }}
          style={styles.buttonB}>
          <View style={[styles.button2, {backgroundColor: color2}]}/>
          <Text style={styles.buttonTxt2}>Βουνά</Text>
        </Pressable>
        <Pressable
          onPressIn={() => setColor3('#ffab00')}
          onPressOut={() => {
            navigation.navigate("Instructions")
            setColor3('#ff8000')
          }}
          style={styles.buttonC}>
          <View style={[styles.button3,{backgroundColor: color3}]}/>
          <Text style={styles.buttonTxt3}>Νομοί / Πόλεις</Text>
        </Pressable>
        <Pressable
          onPressIn={() => setColor4('purple')}
          onPressOut={() => {
            navigation.navigate("GeneralQuestions1")
            setColor4('magenta')
          }}
          style={styles.buttonD}>
          <View style={[styles.button4, {backgroundColor: color4}]}/>
          <Text style={styles.buttonTxt4}>Γενικές Ερωτήσεις</Text>
        </Pressable>
        
      </ImageBackground>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonA: {
    position: "relative",
    // width: 215,
    width: 250,
    // height: 60,
    height: 55,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
    elevation: 24,
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 1.0,
  },
  button1: {
    position: "absolute",
    opacity: 0.5,
    // backgroundColor: "red",
    backgroundColor: "#0080ff",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  buttonTxt1: {
    position: "absolute",
    bottom: 18,
    left: 54,
    color: "white",
    fontWeight: "600",
    // textAlign: "center",
    fontSize: 16,
  },
  buttonB: {
    position: "relative",
    width: 250,
    height: 50,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
    elevation: 24,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1.0,
  },
  button2: {
    position: "absolute",
    opacity: 0.4,
    backgroundColor: "#00ff00",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  buttonTxt2: {
    position: "absolute",
    bottom: 15,
    left: 97,
    color: "white",
    fontWeight: "600",
    // textAlign: "center",
    fontSize: 16,
  },
  buttonC: {
    position: "relative",
    width: 250,
    height: 50,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
    elevation: 24,
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 1.0,
  },
  button3: {
    position: "absolute",
    opacity: 0.4,
    backgroundColor: "#ff8000",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  buttonTxt3: {
    position: "absolute",
    bottom: 15,
    left: 61,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
  },
  buttonD: {
    position: "relative",
    width: 250,
    height: 50,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
    elevation: 24,
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 1.0,
  },
  button4: {
    position: "absolute",
    opacity: 0.4,
    backgroundColor: "magenta",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  buttonTxt4: {
    position: "absolute",
    bottom: 15,
    left: 47,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
  },
});


