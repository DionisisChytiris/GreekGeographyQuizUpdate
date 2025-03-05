import React from "react";
import { View, Button, Share, Alert, Platform, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const ShareButton = () => {
  const onShare = async () => {
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
      {/* <Button title="Share this app" onPress={onShare} /> */}
      <Pressable
        onPress={onShare}
      >
        <Ionicons name="share-social-sharp" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default ShareButton;
