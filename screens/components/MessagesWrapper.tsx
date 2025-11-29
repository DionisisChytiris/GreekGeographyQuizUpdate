// MessagesWrapper.tsx
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MessagesScreen from "./MessagesScreen"; // adjust the import path
import { logError } from "../../utils/logger";

interface MessagesWrapperProps {
  refresh?: boolean;
}

const MessagesWrapper = ({refresh}: MessagesWrapperProps) => {
  const [clientId, setClientId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadClientId = async () => {
      try {
        const storedId = await AsyncStorage.getItem("analytics_client_id");
        if (storedId) {
          setClientId(storedId);
        }
      } catch (error) {
        logError("Error loading client_id:", error);
      } finally {
        setLoading(false);
      }
    };

    loadClientId();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!clientId) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Δεν βρέθηκε το αναγνωριστικό χρήστη.</Text>
      </View>
    );
  }

  return <MessagesScreen id={clientId} app_id="greek-geography" refresh={refresh} />;
};

export default MessagesWrapper;
