import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

type FeedbackBottomSheetProps = {
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
  snapPoints: string[];
  answerStatus: boolean | null;
  currentQuestion?: {
    result1: string;
    result2: string;
    result3: string;
    result4: string;
  }
};

const FeedbackBottomSheet: React.FC<FeedbackBottomSheetProps> = ({
  bottomSheetModalRef,
  snapPoints,
  answerStatus,
  currentQuestion,
}) => {
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      enableContentPanningGesture={false} 
      backgroundStyle={{
        borderRadius: 30,
        borderWidth: 3,
        borderTopColor: "grey",
        backgroundColor: "#eeeded", // Light gray background for better contrast
        shadowColor: "#000", // Shadow color
        shadowOffset: { width: 0, height: 4 }, // Offset the shadow
        shadowOpacity: 0.3, // Shadow transparency
        shadowRadius: 4, // Blur radius
        elevation: 5,
      }}
    >
      <View style={{ flex: 1, alignItems: "center" }}>
        {answerStatus !== null && (
          <View style={{ alignItems: "center" }}>
            {!!answerStatus ? (
              <View style={{ width: "85%", marginTop: 20 }}>
                {/* <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "green", fontSize: 20, padding: 10 }}>
                    Σωστή Απάντηση
                  </Text>
                  <Image
                    source={require("../../assets/Photos/thumbUp.jpg")}
                    resizeMode="cover"
                    style={{ width: 50, height: 50 }}
                  />
                </View> */}
                <ScrollView contentContainerStyle={{margin: 0}}>
                  <View style={{ marginBottom: 20, gap: 20, backgroundColor: 'white', padding: 20, borderRadius: 20 }}>
                    <Text style={{ color: "#22c200", fontSize: 18 }}>
                      {currentQuestion?.result1}{" "}
                    </Text>
                    <Text style={{ color: "black", fontSize: 18 }}>
                      {currentQuestion?.result2}{" "}
                    </Text>
                    <Text style={{ color: "#014acf", fontSize: 18 }}>
                      {currentQuestion?.result3}{" "}
                    </Text>
                    <Text style={{ color: "magenta", fontSize: 18 }}>
                      {currentQuestion?.result4}{" "}
                    </Text>
                    {/* <Text>hdaf asdfff ffffffffffffffffff fffffffffffff ffffffffff</Text>
                    <Text>hdaf asdfff ffffffffffffffffff fffffffffffff ffffffffff</Text>
                    <Text>hdaf asdfff ffffffffffffffffff fffffffffffff ffffffffff</Text>
                    <Text>hdaf asdfff ffffffffffffffffff fffffffffffff ffffffffff</Text>
                    <Text>hdaf asdfff ffffffffffffffffff fffffffffffff ffffffffff</Text>
                    <Text>hdaf asdfff ffffffffffffffffff fffffffffffff ffffffffff</Text>
                    <Text>hdaf asdfff ffffffffffffffffff fffffffffffff ffffffffff</Text>
                    <Text>hdaf asdfff ffffffffffffffffff fffffffffffff ffffffffff</Text> */}
                  </View>
                </ScrollView>
              </View>
            ) : (
              <View style={{ width: "90%" }}>
                {/* <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "red", fontSize: 20, padding: 10 }}>
                    Λάθος Απάντηση
                  </Text>
                  <Image
                    source={require("../../assets/Photos/sadFace.jpg")}
                    resizeMode="cover"
                    style={{ marginVertical: 20, width: 50, height: 50 }}
                  />
                </View> */}
                <View>
                  <Text style={{ color: "#22c200" }}>
                    {currentQuestion?.result1}{" "}
                  </Text>
                  <Text style={{ color: "black" }}>
                    {currentQuestion?.result2}{" "}
                  </Text>
                  <Text style={{ color: "#014acf" }}>
                    {currentQuestion?.result3}{" "}
                  </Text>
                  <Text style={{ color: "magenta" }}>
                    {currentQuestion?.result4}{" "}
                  </Text>
                </View>
              </View>
            )}
          </View>
        )}
      </View>
    </BottomSheetModal>
  );
};

export default FeedbackBottomSheet;
