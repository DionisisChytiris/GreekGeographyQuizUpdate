import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Lock, LockIcon, Phone } from "lucide-react-native";

const CoverButton: React.FC<{
  iconTest1: React.ReactNode;
  titleTest1: string;
  amount: number;
  gradient: [string, string, ...string[]];
  testFunction: () => void;
}> = ({ iconTest1, titleTest1, gradient, testFunction, amount }) => {
  return (
    <View style={{ zIndex: 999 }}>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            // backgroundColor: "#cccccc80",
            borderRadius: 50,
            zIndex: 1
          }}
        >
          <Image
            source={require("../../assets/Photos/lockIconbg.png")}
            style={{ width: 90, height: 90 }}
          />
        </View>
      <View style={{ position: "absolute", top: 10, right: 10, zIndex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
        <Image
          source={require("../../assets/Photos/goldbg.png")}
          style={{ width: 25, height: 25 }}
        />
        <Text style={styles.categoryTitle}>{amount}</Text>
      </View>
      <Pressable
        onPress={testFunction}
        style={[styles.categoryCard, { opacity: 0.4 }]}
      >
        <LinearGradient colors={gradient} style={styles.categoryContent}>
          <Text>
            {iconTest1} {/* The icon passed as a prop */}
          </Text>
          <Text style={styles.categoryTitle}>{titleTest1}</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

export default CoverButton;

const styles = StyleSheet.create({
  categoryCard: {
    // width: "47.7%",
    width: "100%",
    aspectRatio: 1,
    borderRadius: 20,
    overflow: "hidden",
    // margin: 10,
    // padding: 20,
    // borderRadius: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: 250, // Customize based on your design
  },
  categoryContent: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  categoryTitle: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: "white",
  },
});
