import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Pressable,
    ImageBackground,
    Dimensions
  } from "react-native";
  import React from "react";
  import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
  import { StackNavigationProp } from "@react-navigation/stack";
  import { RootStackParamList } from "../../Types/RootStackParamList";
  import { AntDesign, MaterialIcons } from "@expo/vector-icons";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import LottieView from "lottie-react-native";

  const { height } = Dimensions.get("window");


  type NomoiResultTemplate = StackNavigationProp<RootStackParamList,'Quiz'>

  type NomoiResultRouteProp<RouteName extends keyof RootStackParamList>=RouteProp<RootStackParamList, RouteName>

  
  const NomoiResultTemplate = (props:any) => {
    const route = useRoute<NomoiResultRouteProp<'NomoiResult1'>>();
    const navigation = useNavigation<NomoiResultTemplate>();
    const dataQ = props.dataQ;
    const repeatQ = props.repeatQ;
    const nextQ = props.nextQ;
    const img = props.img;
  
    
  const scores = route.params.points;
  const data = route.params.data;
  const scoreNomoi = Math.floor((scores * 100) / data.length);

  
  const setData = async () => {
    try {
      var user = scoreNomoi;
      await AsyncStorage.setItem("scoreNomoi", JSON.stringify(user));
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };

    return (
      <View style={{ flex: 1, backgroundColor: "blue" }}>
        <ImageBackground
          source={img}
          // resizeMode="cover"
          style={{ height: "100%" }}
        >
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.title}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: height>960? 26:20,
                  // marginTop: height> 960? 80: 140,
                  // marginLeft: "auto",
                  // marginRight: "auto",
                }}
              >
                Βαθμολογία
              </Text>
            </View>
  
            <View style={{ marginHorizontal: 25 }}>
              <View style={styles.container}>
                {scoreNomoi > 49 ? (
                  <View>
                    <View style={styles.score}>
                      <Text
                        style={{
                          marginTop: 20,
                          fontSize: 44,
                          fontWeight: "bold",
                          color: "green",
                        }}
                      >
                        {scoreNomoi}
                      </Text>
                      <Text style={{ fontSize: 20, color: "green" }}>%</Text>
                    </View>
                    <View style={styles.feedback}>
                      <Text
                        style={{
                          color: "green",
                          fontSize: height>960? 20: 18,
                          fontWeight: "bold",
                          marginTop: 30,
                          textAlign: 'center'
                        }}
                      >
                        Συγχαρητήρια!!! 
                      </Text>
                      <Text
                         style={{
                          color: "green",
                          fontSize: height>960? 16:12,
                          fontWeight: "bold",
                          marginTop: 30,
                          margin: 20,
                          textAlign: 'center'
                        }}
                      >
                        Πέτυχες την απαιτούμενη βαθμολογία για να
                        προχωρήσεις στο επόμενο επίπεδο.
                      </Text>
                    </View>
                  </View>
                ) : (
                  <View>
                    <View style={styles.score}>
                      <Text
                        style={{ fontSize: 50, fontWeight: "bold", color: "red" }}
                      >
                        {scoreNomoi}
                      </Text>
                      <Text style={{ fontSize: 20, color: "red" }}>%</Text>
                    </View>
                    <View style={styles.feedback}>
                      <Text
                        style={{
                          color: "red",
                          fontSize: height>960? 18:15,
                          fontWeight: "bold",
                          textAlign: "center",
                          margin: 20,
                        }}
                      >
                        Δυστυχώς δεν πέτυχες την απαιτούμενη βαθμολογία για να
                        προχωρήσεις στο επόμενο επίπεδο.
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Text
                        style={{
                          color: "red",
                          fontSize: height>960? 16:12,
                          fontWeight: "bold",
                          marginVertical: 20,
                        }}
                      >
                        Επανέλαβε το κουίζ{" "}
                      </Text>
                      <View>
                        <MaterialIcons name="replay" size={24} color="white" />
                      </View>
                    </View>
  
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "red",
                          fontSize: height>960? 16:12,
                          fontWeight: "bold",
                          marginHorizontal: 20,
                        }}
                      >
                        Επιστροφή στην αρχική σελίδα{" "}
                        <AntDesign name="home" size={20} color="white" />
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            </View>
  
            {scoreNomoi < 50 ? (
              <View style={{marginHorizontal: 35}}>
                <View style={styles.buttonBox}>
                  <Pressable
                    // onPress={() => navigation.navigate("Quiz")}
                    onPress={() => {
                      navigation.navigate("Quiz1");
                      setData();
                    }}
                    style={styles.button}
                  >
                    <AntDesign name="home" size={24} color="white" />
                  </Pressable>
                  <Pressable
                    // onPress={() => navigation.navigate(repeatQ)}
                    onPress={() => {
                      navigation.navigate(repeatQ);
                      setData();
                    }}
                    style={styles.button}
                  >
                    <MaterialIcons name="replay" size={24} color="white" />
                  </Pressable>
                </View>
              </View>
            ) : (
              <View style={styles.buttonBox1}>
                <Pressable
                  // onPress={() => navigation.navigate(nextQ)}
                  onPress={() => {
                    navigation.navigate(nextQ);
                    setData();
                  }}
                  style={styles.nextQueButton}
                >
                  <Text style={{ fontSize: 14, color: "white" }}>Επόμενο Επίπεδο</Text>
                </Pressable>
              </View>
            )}
          </View>
          {/* <View
          style={{
            flex: 1,
            margin: 0,
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <LottieView
            style={{
              position: "absolute",
              bottom: 150,
              width: "100%",
              height: "500%",
            }}
            source={require("../../assets/LottieAnimations/confeti.json")}
            autoPlay
            loop={false}
          />
        </View> */}
        </ImageBackground>
      </View>
    );
  };
  
  export default NomoiResultTemplate;
  
  const styles = StyleSheet.create({
    title: {
      // marginTop: "10%",
      paddingBottom: "10%",
    },
    container: {
      width: "90%",
      backgroundColor: "#ccc",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: 20,
      padding: 10,
      paddingTop: 30,
      paddingBottom: 60,
    },
    score: {
      flexDirection: "row",
      marginHorizontal: "auto",
      alignItems: "baseline",
      justifyContent: "center",
    },
    nextQueButton: {
      backgroundColor: "green",
      padding: 12,
      alignItems: "center",
      justifyContent: "center",
      width: 170,
      marginTop: 40,
      borderRadius: 20,
      marginHorizontal: "auto",
    },
    buttonBox: {
      marginTop: 60,
      marginHorizontal: 20,
      flexDirection: "row",
      justifyContent: 'space-around',
    },
    buttonBox1: {
      marginTop: 20,
      flexDirection: "row",
      justifyContent: 'space-around',
    },
    button: {
      backgroundColor: "magenta",
      padding: 10,
      alignItems: "center",
      width: 80,
      borderRadius: 6,
      marginHorizontal: "auto",
    },
    feedback: {
      textAlign: "center",
      width: "100%",
      marginHorizontal: "auto",
    }
  });
  