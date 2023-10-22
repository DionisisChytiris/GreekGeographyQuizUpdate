import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Pressable,
    ImageBackground,
  } from "react-native";
  import React from "react";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { AntDesign, MaterialIcons } from "@expo/vector-icons";
  
  const NomoiResultTemplate = (props) => {
    const route = useRoute();
    const navigation = useNavigation();
    const dataQ = props.dataQ;
    const repeatQ = props.repeatQ;
    const nextQ = props.nextQ;
    const img = props.img;
  
    const score = Math.floor(
      (route.params.points * 100) / route.params.data.length
    );
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "blue" }}>
        <ImageBackground
          source={img}
          // resizeMode="cover"
          style={{ height: "100%" }}
        >
          <View>
            <View style={styles.title}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: 22,
                  marginTop: 80,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Βαθμολογία
              </Text>
            </View>
  
            <View style={{ marginHorizontal: 25 }}>
              <View style={styles.container}>
                {score > 49 ? (
                  <View>
                    <View style={styles.score}>
                      <Text
                        style={{
                          marginTop: 20,
                          fontSize: 50,
                          fontWeight: "bold",
                          color: "green",
                        }}
                      >
                        {score}
                      </Text>
                      <Text style={{ fontSize: 20, color: "green" }}>%</Text>
                    </View>
                    <View
                      style={{
                        textAlign: "center",
                        width: "100%",
                        marginHorizontal: "auto",
                      }}
                    >
                      <Text
                        style={{
                          color: "green",
                          fontSize: 20,
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
                          fontSize: 14,
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
                        {score}
                      </Text>
                      <Text style={{ fontSize: 20, color: "red" }}>%</Text>
                    </View>
                    <View
                      style={{
                        textAlign: "center",
                        width: "100%",
                        marginHorizontal: "auto",
                      }}
                    >
                      <Text
                        style={{
                          color: "red",
                          fontSize: 15,
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
                          fontSize: 12,
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
                          fontSize: 12,
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
  
            {score < 50 ? (
              <View style={{marginHorizontal: 35}}>
                <View style={styles.buttonBox}>
                  <Pressable
                    onPress={() => navigation.navigate("Quiz")}
                    style={styles.button}
                  >
                    <AntDesign name="home" size={24} color="white" />
                  </Pressable>
                  <Pressable
                    onPress={() => navigation.navigate(repeatQ)}
                    style={styles.button}
                  >
                    <MaterialIcons name="replay" size={24} color="white" />
                  </Pressable>
                </View>
              </View>
            ) : (
              <View style={styles.buttonBox1}>
                <Pressable
                  onPress={() => navigation.navigate(nextQ)}
                  style={styles.nextQueButton}
                >
                  <Text style={{ fontSize: 14, color: "white" }}>Επόμενο Επίπεδο</Text>
                </Pressable>
              </View>
            )}
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  };
  
  export default NomoiResultTemplate;
  
  const styles = StyleSheet.create({
    title: {
      marginTop: "10%",
      marginBottom: "10%",
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
      justifyContent: 'space-around'
    },
    buttonBox1: {
      marginTop: 20,
      flexDirection: "row",
      justifyContent: 'space-around'
    },
    button: {
      backgroundColor: "magenta",
      padding: 10,
      alignItems: "center",
      width: 80,
      borderRadius: 6,
      marginHorizontal: "auto",
    },
  });
  