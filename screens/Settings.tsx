import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Linking,
  Image,
  Platform
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types/RootStackParamList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

type GenerQTProp = StackNavigationProp<
  RootStackParamList,
  "GenerQuestTemplate"
>;

const { height } = Dimensions.get('window');

const Settings = () => {
  const navigation = useNavigation<GenerQTProp>();
  const [scale1, setScale1] = React.useState(1);
  const [scale2, setScale2] = React.useState(1);
  const [scale3, setScale3] = React.useState(1);
  const [scale4, setScale4] = React.useState(1);

  const removeName = async () => {
    try {
      await AsyncStorage.removeItem("UserData");
      navigation.navigate("SetUserName");
    } catch (error) {
      console.log(error);
    }
  };

  const url = Platform.OS === 'ios'
  ? 'https://apps.apple.com/app/id6504780092'  // Replace with your iOS App Store link
  : 'https://play.google.com/store/apps/details?id=com.greekgeographyquizapp.dion';

  const urlNewApp= Platform.OS === 'ios'
  ? 'https://apps.apple.com/app/id6670754535'  // Replace with your iOS App Store link
  : 'https://play.google.com/store/apps/details?id=com.worldwisetrivia.app';


  return (
    <View style={{ flex: 1 }}>
      <ScrollView bounces={false}>
        <ImageBackground
          source={require("../assets/romaikiAgora.jpg")}
          resizeMode="cover"
          blurRadius={3}
          style={{
            flex: 1,
            // justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: height> 900? 960: 820,
          }}
        >
          <Pressable
            style={{
              position: "absolute",
              top: 30,
              right: 30,
              // padding: 30,
            }}
            onPress={() => {
              navigation.navigate("Quiz1");
            }}
          >
            <AntDesign name="closecircle" size={34} color="white" />
          </Pressable>
          <View style={{ marginTop: 150, gap: 20 }}>
            <Pressable
          
              onPressIn={() => setScale1(1.1)}
              onPressOut={() => {
                removeName(), setScale1(1);
              }}
              style={[styles.button, { transform: [{ scale: scale1 }] }]}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <EvilIcons name="user" size={32} color="white" />
                {/* <AntDesign name="user" size={20} color="white" /> */}
                <Text style={styles.text1}>Αλλαγη Ονόματος</Text>
              </View>
            </Pressable>

            <Pressable
              onPressIn={() => setScale2(1.1)}
              onPressOut={() => {
                Linking.openURL(
                  "https://sites.google.com/view/geografiatiselladas"
                ),
                  setScale2(1);
              }}
              style={[styles.button, { transform: [{ scale: scale2 }] }]}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <MaterialIcons name="policy" size={24} color="white" />
                <Text style={styles.text}>Πολιτική Απορρήτου</Text>
              </View>
            </Pressable>
            <Pressable
              onPressIn={() => setScale3(1.1)}
              onPressOut={() => {
                navigation.navigate("AboutApp"),
                // Linking.openURL(url),
                  setScale3(1);
              }}
              style={[
                styles.button,
                { transform: [{ scale: scale3 }], paddingVertical: 5, flexDirection: 'row', gap: 10 },
              ]}
            >
              <FontAwesome5 name="book-open" size={20} color="white" />
              <Text style={styles.text1}>Σχετικά</Text>
              {/* <Image
                source={require("../assets/MorePhotos/rating.png")}
                resizeMode="cover"
                style={{
                  flex: 1,
                  alignItems: "center",
                  width: "40%",
                  marginTop: -5,
                }}
              /> */}
            </Pressable>
            <View
              style={{
                marginTop: 70,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.text2}>Δοκιμάστε την νέα μας</Text>
              <Text style={styles.text2}>εφαρμογή.</Text>
              <Pressable
                onPressIn={() => setScale4(1.1)}
                onPressOut={() => {
                  Linking.openURL(urlNewApp
                    // "https://play.google.com/store/apps/details?id=com.worldwisetrivia.app"
                  ),
                    setScale4(1);
                }}
              >
                <Image
                  source={require("../assets/WorldTrivia.png")}
                  resizeMode="cover"
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 20,
                    marginTop: 20,
                    transform: [{ scale: scale4 }],
                  }}
                />
              </Pressable>
              <Text style={styles.text3}>World Wise Trivia</Text>
            </View>
          </View>
          {/* <Pressable
            onPress={()=>navigation.navigate("DragDrop")}
            style={{position: 'absolute',bottom: 50, right: 20, backgroundColor: 'green', padding: 10, borderRadius: 10}}
          >
            <Text style={{color: 'white'}}>Drag & Drop</Text>
          </Pressable> */}
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  button: {
    width: 240,
    height: 60,
    borderRadius: 20,
    backgroundColor: "#738297",
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    width: 240,
    height: 60,
    borderRadius: 30,
    //   backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  text1: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  text2: {
    color: "#dfebf7",
    fontSize: 14,
    fontWeight: "bold",
  },
  text3: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 20,
  },
});
