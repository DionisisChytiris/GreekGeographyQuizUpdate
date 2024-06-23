import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Pressable,
    ImageBackground,
    Image,
    Dimensions
  } from "react-native";
  import React from "react";
  import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
  import { StackNavigationProp } from "@react-navigation/stack";
  import { RootStackParamList } from "../../Types/RootStackParamList";
  import { AntDesign, MaterialIcons } from "@expo/vector-icons";
  import AsyncStorage from "@react-native-async-storage/async-storage";

  
const { height } = Dimensions.get("window");

  
  type MountainResultsRepeatProp = StackNavigationProp<RootStackParamList,'MountainResults'>
  type MountainRepeatRouteProp<RouteName extends keyof RootStackParamList> = RouteProp<RootStackParamList, RouteName>
  
  const MountainResultsRepeat = () => {
    const route = useRoute<MountainRepeatRouteProp<'MountainResultsRepeat'>>();
    const navigation = useNavigation<MountainResultsRepeatProp>();
  
    // const score = 60;
    const scoreMountain = Math.floor((route.params.points * 100) / route.params.data.length);

    const setData= async () => {
      try {
        var userM = scoreMountain;
        await AsyncStorage.setItem("scoreMountain", JSON.stringify(userM));
        // console.log(userM);
      } catch (e) {
        console.log(e);
      }
    };
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "darkblue" }}>
        <ImageBackground
          source={require("../../assets/MorePhotos/mountain1vikos.jpg")}
          // resizeMode="cover"
          style={{ height: "100%" }}
        >
          <View>
            <View style={styles.title}>
              <Text
                style={{
                  color: "darkgreen",
                  fontWeight: "600",
                  fontSize: height>900? 30:25,
                  marginTop: 110,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Βαθμολογία
              </Text>
            </View>
            <View style={styles.container}>
              {scoreMountain > 49 ? (
                <View>
                  <View style={styles.score}>
                    <Text
                      style={{ fontSize: 50, fontWeight: "bold", color: "green" }}
                    >
                      {scoreMountain}
                    </Text>
                    <Text style={{ fontSize: 20, color: "green" }}>%</Text>
                  </View>
                  <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                    {scoreMountain === 100 ? (
                      <View>
                        <Text
                          style={{
                            textAlign: "center",
                            fontSize: height>900? 18:14,
                            color: "green",
                            marginTop: 20,
                          }}
                        >
                          Συγχαρητήρια!!! Οι γνώσεις σου στην γεωγραφία είναι
                          φανταστικές!!!
                        </Text>
                        <Image
                          source={require("../../assets/trophy.png")}
                          resizeMode="cover"
                          style={{
                            marginVertical: 20,
                            width: 80,
                            height: 80,
                            borderRadius: 50,
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                        />
                      </View>
                    ) : (
                      <View>
                        <Text
                          style={{
                            textAlign: "center",
                            fontSize: height>900? 18:14,
                            color: "green",
                            marginTop: 20,
                          }}
                        >
                          Καλή προσπάθεια, αλλά πάντα υπάρχει περιθώριο βελτίωσης.
                          Πήγαινε στην αρχική σελίδα για να ξεκινήσεις αυτό το κουίζ από την αρχή ή να επιλέξεις άλλη
                          κατηγορία.
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              ) : (
                <View>
                  <View style={styles.score}>
                    <Text
                      style={{ fontSize: 60, fontWeight: "bold", color: "red" }}
                    >
                      {scoreMountain}
                    </Text>
                    <Text style={{ fontSize: 20, color: "red" }}>%</Text>
                  </View>
                  <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize:height>900? 18: 14,
                        color: "red",
                        marginTop: 20,
                      }}
                    >
                      Δεν ήταν άσχημη προσπάθεια, αλλά χρείαζεται να σκεφτείς
                      περισσότερο για να βρεις τις σωστές απαντήσεις. 
                    </Text>
                  </View>
                </View>
              )}
            </View>
            <View style={styles.buttonBox}>
              <Pressable
                onPress={() => {
                  navigation.navigate("Quiz1")
                  setData()
                }}
                style={styles.button0}
              >
                <View style={styles.button1} />
                <View style={styles.btnText}>
                  <AntDesign name="home" size={24} color="white" />
                </View>
              </Pressable>
              {/* <Pressable
                  onPress={() => navigation.navigate("Mountain")}
                  style={styles.button0}
                >
                  <View style={styles.button1} />
                  <View style={styles.btnText}>
                    <MaterialIcons name="replay" size={24} color="white" />
                  </View>
                </Pressable> */}
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  };
  
  export default MountainResultsRepeat;
  
  const styles = StyleSheet.create({
    title: {
      // marginTop: "10%",
      marginHorizontal: "auto",
      marginBottom: "8%",
    },
    container: {
      width: "70%",
      backgroundColor: "#ccc",
      borderRadius: 20,
      marginVertical: 30,
      marginLeft: "auto",
      marginRight: "auto",
      padding: 10,
      paddingVertical: 60,
    },
    score: {
      flexDirection: "row",
      marginHorizontal: "auto",
      alignItems: "baseline",
      justifyContent: "center",
    },
    nextQueButton: {
      backgroundColor: "green",
      padding: 15,
      alignItems: "center",
      justifyContent: "center",
      width: 180,
      marginTop: 50,
      borderRadius: 20,
      marginHorizontal: "auto",
    },
    buttonBox: {
      // marginTop: 30,
      flexDirection: "row",
    },
    button0: {
      position: "relative",
      width: 100,
      height: 50,
      borderRadius: 25,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 20,
    },
    button1: {
      position: "absolute",
      opacity: 0.4,
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
      fontSize: 20,
    },
  });
  