import { View } from 'react-native'
import React from 'react'
import LoseScreenR from '../LoseScreenR'
// import LoseScreenREndTime from '../LoseScreenREndTime'

const MountainLoseScreen = () => {
  return (
    <LoseScreenR/>
  )
}

export default MountainLoseScreen

// import { View, Text, Pressable, ImageBackground } from "react-native";
// import React, {useState, useEffect} from "react";
// import { useNavigation } from "@react-navigation/native";
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from "../../Types/RootStackParamList";
// import { AntDesign } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// type MountLoseScRProp = StackNavigationProp<RootStackParamList, 'MountainLoseScreenR'>

// const MountainLoseScreenR = () => {
//   const navigation = useNavigation<MountLoseScRProp>()
//   const [name, setName] = useState('')

//   useEffect(()=>{
//     getData()
//   },[])

//   const getData = ()=>{
//     try{
//       AsyncStorage.getItem('UserData')
//         .then((value)=>{
//           if(value !=null){
//             let user = JSON.parse(value)
//             setName(user.Name)
//           }
//         })
//     }catch(e){
//       console.log(e)
//     }
//   }

//   return (
//     <View style={{ height: "100%", backgroundColor: "darkblue" }}>
//       <ImageBackground
//         source={require("../../assets/Photos/meteora.jpg")}
//         style={{ height: "100%" }}
//       >
//         <View
//           style={{
//             width: "75%",
//             height: "45%",
//             marginLeft: "auto",
//             marginRight: "auto",
//             marginTop: 150,
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
//               top: "20%",
//               left: "10%",
//             }}
//           >
//             <View>
//             <Text
//                 style={{
//                   color: "white",
//                   fontSize: 23,
//                   fontWeight: "600",
//                   marginLeft: 10,
//                   marginBottom: 10
//                 }}
//               >
//                 Λυπάμαι  {name ? name : "Έχασες"}
//               </Text>
//               <Text
//                 style={{
//                   color: "white",
//                   fontSize: 23,
//                   fontWeight: "600",
//                   textAlign: 'center',
//                   // marginLeft: 10,
//                   marginBottom: 30
//                 }}
//               >
//                 {name ? "Έχασες" : null}
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

//         <View
//           style={{
//             marginLeft: "auto",
//             marginRight: "auto",
//             marginTop: 80,
//           }}
//         >
//           <Pressable
//             onPress={() => navigation.navigate("Quiz1")}
//             style={{
//               alignItems: "center",
//               width: 90,
//               height: 60,
//             }}
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
//       </ImageBackground>
//     </View>
//   );
// };

// export default MountainLoseScreenR;
