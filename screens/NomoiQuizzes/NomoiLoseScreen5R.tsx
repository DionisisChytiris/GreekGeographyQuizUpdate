import { View } from 'react-native'
import React from 'react'
import LoseScreenR from '../LoseScreenR'

const NomoiLoseScreen5R = () => {
  return (
    <View>
      <LoseScreenR/>
    </View>
  )
}

export default NomoiLoseScreen5R

// import { View, Text, Pressable, ImageBackground } from "react-native";
// import React from "react";
// import { useNavigation } from "@react-navigation/native";
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from "../../Types/RootStackParamList";
// import { AntDesign } from "@expo/vector-icons";

// type NomoiLoseScr5RProp = StackNavigationProp<RootStackParamList, 'NomoiLoseScreen5'>

// const NomoiLoseScreen5R = () => {
//   const navigation = useNavigation<NomoiLoseScr5RProp>();

//   return (
//     <View style={{ height: "100%", backgroundColor: "darkblue" }}>
//       <ImageBackground
//         source={require("../../assets/generalQuestions/river.jpg")}
//         // resizeMode="cover"
//         style={{ height: "100%" }}
//       >
//         <View
//           style={{
//             width: "75%",
//             height: "45%",
//             marginLeft: "auto",
//             marginRight: "auto",
//             marginTop: 180,
//             borderRadius: 20,
//           }}
//         >
//           <View
//             style={{
//               width: "100%",
//               height: "100%",
//               backgroundColor: "#ccc",
//               borderRadius: 20,
//               opacity: 0.5,
//             }}
//           />
//           <View
//             style={{
//               position: "absolute",
//               top: "10%",
//               left: "10%",
//             }}
//           >
//             <View>
//               <Text
//                 style={{
//                   color: "magenta",
//                   fontSize: 25,
//                   fontWeight: "600",
//                   marginLeft: 10,
//                   marginBottom: 30
//                 }}
//               >
//                 Λυπάμαι Έχασες
//               </Text>
//               <Text
//                 style={{
//                   color: "white",
//                   fontSize: 20,
//                   fontWeight: "600",
//                   marginLeft: 35,
//                   marginTop: 30,
//                   marginBottom: 30,
//                 }}
//               >
//                 Τέλος χρόνου
//               </Text>

//               <View
//                 style={{
//                   flexDirection: "row",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Text
//                   style={{
//                     color: "black",
//                     fontSize: 16,
//                     fontWeight: "bold",
//                     marginHorizontal: 20,
//                   }}
//                 >
//                   Επιστροφή στην αρχική σελίδα{" "}
//                   <AntDesign name="home" size={16} color="white" />
//                 </Text>
//               </View>
//             </View>
           
//           </View>
//         </View>

//         <View style={{marginHorizontal: 40}}>
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "center",
//             marginTop: 60,
//           }}
//         >
//           <Pressable
//             onPress={() => navigation.navigate("Quiz")}
//             style={{
//               opacity: 1,
//               alignItems: "center",
//               width: 90,
//               height: 60}}
//           >
//             <View
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 backgroundColor: "magenta",               
//                 width: "100%",
//                 height: "100%",
//                 borderRadius: 20,
//                 opacity: 0.5,
//               }}
//             />
//             <View style={{ position: "absolute", top: 15 }}>
//               <AntDesign name="home" size={24} color="white" />
//             </View>
//           </Pressable>
         
//         </View>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

// export default NomoiLoseScreen5R;
