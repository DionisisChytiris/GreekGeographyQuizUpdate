import React, { useState } from "react";
import {
  View,
  Text,
  Share,
  Alert,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";
import { Share2 } from "lucide-react-native";

const ShareButton = () => {
  const [scale, setScale] = useState(1)

  const onShare = async () => {
    setScale(1)
    try {
      const appLink =
        Platform.OS === "ios"
          ? "https://apps.apple.com/app/id6504780092" // Replace with your iOS App Store link
          : "https://play.google.com/store/apps/details?id=com.greekgeographyquizapp.dion";

      const result = await Share.share({
        message: `Τέσταρε τις γνώσεις σου πάνω στην γεωγραφία της Ελλάδας μέσω αυτής της εφαρμογής! 🌍📍Κατέβασε την τώρα: ${appLink}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Shared via", result.activityType);
        } else {
          console.log("Shared successfully");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Share dismissed");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong while sharing.");
      console.error(error);
    }
  };

  return (
    <View style={{ margin: 0 }}>
      <Pressable 
          onPressIn={()=>{setScale(0.95)}}
          onPressOut={onShare}
          style={[styles.shareButton, {transform: [{scale: scale}]}]} 
      >
        <Share2 size={24} color="#fff" />
        <Text style={styles.shareText}>Μοιραστείτε την εφαρμογή</Text>
      </Pressable>
    </View>
  );
};

export default ShareButton;

const styles = StyleSheet.create({
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // This will horizontally center the text
    backgroundColor: "#464443",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    gap: 8,
  },
  shareText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center", // Ensures text is centered if there is any overflow or multiline text
  },
});
