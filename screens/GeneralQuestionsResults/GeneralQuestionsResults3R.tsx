import React from 'react'
import { View } from 'react-native'
import GenerQueResultsTemplateR from './GenerQueResultsTemplateR'


const GeneralQuestionsResults3R = () => {
  return (
    <View style={{flex: 1}}>
      <GenerQueResultsTemplateR/>
    </View>
  )
}

export default GeneralQuestionsResults3R


// import {
//     View,
//     Text,
//     SafeAreaView,
//     StyleSheet,
//     Pressable,
//     ImageBackground,
//     Image,
//   } from "react-native";
//   import React from "react";
//   import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
//   import { StackNavigationProp } from "@react-navigation/stack";
//   import { RootStackParamList } from "../../Types/RootStackParamList";
//   import { AntDesign, MaterialIcons } from "@expo/vector-icons";
//   import AsyncStorage from "@react-native-async-storage/async-storage";
  
//   type GenQRProp = StackNavigationProp<
//     RootStackParamList,
//     "GeneralQuestionsResult3R"
//   >;
//   type GenQRRouteProp<RouteName extends keyof RootStackParamList> = RouteProp<
//     RootStackParamList,
//     RouteName
//   >;
  
//   const GeneralQuestionsResults3R = () => {
//     const route = useRoute<GenQRRouteProp<"GeneralQuestionsResult3R">>();
//     const navigation = useNavigation<GenQRProp>();
//     // const data= props.data
//     // const repeatQ = props.repeatQ
  
//     // const score = 60;
//     const scoreGeneral = (route.params.points * 100) / route.params.data.length;
  
//     const setData = async () => {
//       try {
//         var user = scoreGeneral;
//         await AsyncStorage.setItem("scoreGeneral", JSON.stringify(user));
//         console.log(user);
//       } catch (e) {
//         console.log(e);
//       }
//     };
  
//     return (
//       <SafeAreaView style={{ flex: 1, backgroundColor: "blue" }}>
//         <ImageBackground
//           source={require("../../assets/MorePhotos/Acropolis.jpg")}
//           // resizeMode="cover"
//           style={{ height: "100%" }}
//         >
//           <View>
//             <View style={stylesT.title}>
//               <Text
//                 style={{
//                   fontWeight: "600",
//                   fontSize: 20,
//                   color: "white",
//                   marginTop: 100,
//                   marginLeft: "auto",
//                   marginRight: "auto",
//                 }}
//               >
//                 Βαθμολογία
//               </Text>
//             </View>
  
//             <View style={stylesT.container}>
//               {scoreGeneral > 49 ? (
//                 <View>
//                   <View style={stylesT.score}>
//                     <Text
//                       style={{ fontSize: 50, fontWeight: "bold", color: "green" }}
//                     >
//                       {scoreGeneral}
//                     </Text>
//                     <Text style={{ fontSize: 20, color: "green" }}>%</Text>
//                   </View>
//                   <View style={{ alignItems: "center", marginHorizontal: 20 }}>
//                     {scoreGeneral === 100 ? (
//                       <View>
//                         <Text
//                           style={{
//                             textAlign: "center",
//                             fontSize: 14,
//                             color: "green",
//                             marginTop: 20,
//                           }}
//                         >
//                           Συγχαρητήρια!!! Οι γνώσεις σου στην γεωγραφία είναι
//                           φανταστικές!!!
//                         </Text>
//                         <Image
//                           source={require("../../assets/Photos/trophy.png")}
//                           resizeMode="cover"
//                           style={{
//                             marginVertical: 20,
//                             width: 80,
//                             height: 80,
//                             borderRadius: 50,
//                             marginLeft: "auto",
//                             marginRight: "auto",
//                           }}
//                         />
//                       </View>
//                     ) : (
//                       <View>
//                         <Text
//                           style={{
//                             textAlign: "center",
//                             fontSize: 14,
//                             color: "green",
//                             marginTop: 20,
//                           }}
//                         >
//                           Καλή προσπάθεια, αλλά πάντα υπάρχει περιθώριο βελτίωσης.
//                           Πήγαινε στην αρχική σελίδα για να ξεκινήσεις αυτό το
//                           κουίζ από την αρχή ή να επιλέξεις άλλη κατηγορία.
//                         </Text>
//                       </View>
//                     )}
//                   </View>
//                 </View>
//               ) : (
//                 <View>
//                   <View style={stylesT.score}>
//                     <Text
//                       style={{ fontSize: 50, fontWeight: "bold", color: "red" }}
//                     >
//                       {scoreGeneral}
//                     </Text>
//                     <Text style={{ fontSize: 20, color: "red" }}>%</Text>
//                   </View>
//                   <View style={{ alignItems: "center", marginHorizontal: 20 }}>
//                     <Text
//                       style={{
//                         textAlign: "center",
//                         fontSize: 14,
//                         color: "red",
//                         marginTop: 20,
//                       }}
//                     >
//                       Δεν ήταν άσχημη προσπάθεια, αλλά χρείαζεται να προσπαθήσεις
//                       περισσότερο για να βρεις τις σωστές απαντήσεις.
//                     </Text>
//                   </View>
//                 </View>
//               )}
//             </View>
  
//             <View style={stylesT.buttonBox}>
//               <Pressable
//                 onPress={() => {
//                   navigation.navigate("GeneralQuizMenu");
//                   setData();
//                 }}
//                 style={stylesT.button0}
//               >
//                 <View style={stylesT.button1} />
//                 <View style={stylesT.btnText}>
//                   <AntDesign name="home" size={24} color="white" />
//                 </View>
//               </Pressable>
//             </View>
//           </View>
//         </ImageBackground>
//       </SafeAreaView>
//     );
//   };
  
//   export default GeneralQuestionsResults3R;
  
//   const stylesT = StyleSheet.create({
//     title: {
//       // marginTop: "10%",
//       marginHorizontal: "auto",
//       marginBottom: "8%",
//     },
//     container: {
//       width: "70%",
//       backgroundColor: "#ccc",
//       borderRadius: 20,
//       marginVertical: 30,
//       marginLeft: "auto",
//       marginRight: "auto",
//       padding: 10,
//       paddingVertical: 60,
//     },
//     score: {
//       flexDirection: "row",
//       marginHorizontal: "auto",
//       alignItems: "baseline",
//       justifyContent: "center",
//     },
//     nextQueButton: {
//       backgroundColor: "green",
//       padding: 15,
//       alignItems: "center",
//       justifyContent: "center",
//       width: 180,
//       marginTop: 50,
//       borderRadius: 20,
//       marginHorizontal: "auto",
//     },
//     buttonBox: {
//       marginTop: 40,
//       flexDirection: "row",
//     },
//     button0: {
//       position: "relative",
//       width: 100,
//       height: 50,
//       borderRadius: 25,
//       marginLeft: "auto",
//       marginRight: "auto",
//       marginTop: 20,
//     },
//     button1: {
//       position: "absolute",
//       opacity: 0.4,
//       backgroundColor: "magenta",
//       width: "100%",
//       height: "100%",
//       borderRadius: 25,
//     },
//     btnText: {
//       position: "absolute",
//       bottom: 12,
//       left: 37,
//       color: "white",
//       fontWeight: "600",
//       fontSize: 20,
//     },
//   });
  