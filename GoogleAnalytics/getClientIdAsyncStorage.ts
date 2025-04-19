import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Device from 'expo-device';

const CLIENT_ID_KEY = "analytics_client_id";

const generateRandomId = () => Math.random().toString(36).substring(2);

export const getClientId = async (): Promise<string> => {
  let clientId = await AsyncStorage.getItem(CLIENT_ID_KEY);
  if (!clientId) {
    const deviceId = Device.modelId || generateRandomId();
    clientId = deviceId;
    await AsyncStorage.setItem(CLIENT_ID_KEY, clientId || '');
  }
  return clientId || '';
};
