import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ChevronLeft, Home } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import MessagesScreen from "./MessagesScreen";
import MessagesWrapper from "./MessagesWrapper";

type GenerQTProp = StackNavigationProp<RootStackParamList, "Quiz1">;

export default function Contact() {
  const navigation = useNavigation<GenerQTProp>();
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  // const [userMessage, setUserMessage] = useState<string[] | null>(null);
  const [userMessage, setUserMessage] = useState<
    { _id: string; message: string; createdAt: string }[]
  >([]);

  const [refresh, setRefresh] = useState(false);
  const [replies, setReplies] = useState<
    {
      reply: string;
      isAdminReply: boolean;
      createdAt: string;
      messageId: string;
    }[]
  >([]);

  // const fetchLastMessage = async () => {
  //   try {
  //     // Retrieve the client_id from AsyncStorage
  //     const client_id = await AsyncStorage.getItem("analytics_client_id");

  //     if (!client_id) {
  //       Alert.alert("Client ID is missing. Please log in again.");
  //       return;
  //     }

  //     // Fetch the last message for the current client_id from the backend
  //     const response = await fetch(
  //       `https://greek-geography-quiz-app-backend.vercel.app/messages?client_id=${client_id}`
  //     );
  //     const data = await response.json();

  //     if (response.ok) {
  //       setUserMessage(data);
  //     } else {
  //       Alert.alert(
  //         "Error fetching message",
  //         data.error || "Failed to fetch message"
  //       );
  //     }
  //   } catch (error) {
  //     Alert.alert("Failed to fetch message. Please try again.");
  //   }
  // };

  // const fetchLastMessage = async () => {
  //   try {
  //     const client_id = await AsyncStorage.getItem("analytics_client_id");

  //     if (!client_id) {
  //       Alert.alert("Client ID is missing. Please log in again.");
  //       return;
  //     }

  //     const response = await fetch(
  //       `https://greek-geography-quiz-app-backend.vercel.app/messages?client_id=${client_id}`
  //     );
  //     const data = await response.json();

  //     if (response.ok) {
  //       // Check the structure of the response
  //       console.log("Fetched message:", data);
  //       if (data.length > 0) {
  //         setUserMessage(data[0]); // Assuming data is an array and you're fetching the latest message
  //       } else {
  //         setUserMessage([]); // Empty response handling
  //       }
  //     } else {
  //       Alert.alert(
  //         "Error fetching message",
  //         data.error || "Failed to fetch message"
  //       );
  //     }
  //   } catch (error) {
  //     Alert.alert("Failed to fetch message. Please try again.");
  //   }
  // };

  // const handleSubmit = async () => {
  //   if (!message.trim()) {
  //     Alert.alert("Please enter a message");
  //     return;
  //   }

  //   // Optional: Validate email format only if it's not empty
  //   if (email.trim() && !email.includes("@")) {
  //     Alert.alert("Please enter a valid email");
  //     return;
  //   }

  //   // Retrieve the client_id from AsyncStorage
  //   const client_id = await AsyncStorage.getItem("analytics_client_id");

  //   if (!client_id) {
  //     Alert.alert("Client ID is required. Please try again.");
  //     return;
  //   }

  //   setIsSending(true);

  //   try {
  //     const response = await fetch(
  //       "https://greek-geography-quiz-app-backend.vercel.app/contact",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           client_id,
  //           name: name.trim() || undefined,
  //           email: email.trim() || undefined,
  //           message: message.trim(),
  //         }),
  //       }
  //     );

  //     const data = await response.json();

  //     if (response.ok) {
  //       setRefresh((prev) => !prev);
  //       Alert.alert("Message sent successfully!");
  //       setMessage("");
  //       setName("");
  //       setEmail("");
  //     } else {
  //       Alert.alert("Error", data.error || "Failed to send message");
  //     }
  //   } catch (error) {
  //     Alert.alert("Failed to send message. Please try again.");
  //   } finally {
  //     setIsSending(false);
  //   }
  //   // fetchLastMessage();
  // };

  const handleSubmit = async () => {
    if (!message.trim()) {
      Alert.alert("Παρακαλώ εισάγεται το μήνυμά σας");
      return;
    }

    if (email.trim() && !email.includes("@")) {
      Alert.alert("Παρακαλώ εισάγεται το email σας σωστά. Μην ξεχάσετε το @.");
      return;
    }

    const client_id = await AsyncStorage.getItem("analytics_client_id");

    if (!client_id) {
      Alert.alert("Client ID is required. Please try again.");
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch(
        "https://greek-geography-quiz-app-backend.vercel.app/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            client_id,
            name: name.trim() || undefined,
            email: email.trim() || undefined,
            message: message.trim(),
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setRefresh((prev) => !prev);
        Alert.alert("Το μήνυμά σας στάλθηκε με επιτυχία!");
        setMessage("");
        setName("");
        setEmail("");
      } else {
        Alert.alert("Error", data.error || "Η αποστολή του μηνύματος απέτυχε.");
      }
    } catch (error) {
      Alert.alert("Η αποστολή του μηνύματος απέτυχε.");
    } finally {
      setIsSending(false);
    }
  };


  // const handleDeleteMessage = async (message_Id: string) => {
  //   try {
  //     const client_id = await AsyncStorage.getItem("analytics_client_id");

  //     if (!client_id) {
  //       Alert.alert("Client ID is missing. Please log in again.");
  //       return;
  //     }

  //     const response = await fetch(
  //       `https://greek-geography-quiz-app-backend.vercel.app/messages/${message_Id}?client_id=${client_id}`,
  //       { method: "DELETE" }
  //     );

  //     const data = await response.json();

  //     if (response.ok) {
  //       setRefresh((prev) => !prev);
  //       Alert.alert("Το μήνυμά σας διαγράφηκε.");
  //     } else {
  //       Alert.alert("Error", data.error || "Η διαγραφή του μηνύματος απέτυχε.");
  //     }
  //   } catch (error) {
  //     Alert.alert("Η διαγραφή του μηνύματος απέτυχε.");
  //   }
  // };

  // const fetchReplies = async (message_id: string) => {
  //   try {
  //     const response = await fetch(
  //       `https://greek-geography-quiz-app-backend.vercel.app/messages/${message_id}/replies`
  //     );

  //     const rawText = await response.text(); // Get the raw response text
  //     // console.log("Raw Response:", rawText); // Log it out for inspection

  //     // Now try to parse it
  //     const data = JSON.parse(rawText);

  //     if (Array.isArray(data)) {
  //       setReplies(data); // this must be an array
  //     } else {
  //       console.warn("Replies is not an array", data);
  //       setReplies([]); // fallback to empty
  //     }
  //   } catch (err) {
  //     console.error("Fetch replies failed", err);
  //     setReplies([]);
  //   }
  // };

  // useEffect(() => {
  //   fetchLastMessage();
  // }, [refresh]);

  // useEffect(() => {
  //   if (userMessage && userMessage[0]?._id) {
  //     fetchReplies(userMessage[0]._id);
  //   }
  // }, [userMessage]);

  const handleNameChange = (text: string) => {
    // Allow letters, numbers, spaces, and emojis. Block other symbols.
    const filtered = text.replace(/[^\p{L}\p{N}\p{Emoji}\s]/gu, "");
    setName(filtered);
  };
  const handleEmailChange = (text: string) => {
    // Allow letters, numbers, spaces, emojis, and common email symbols
    const filtered = text.replace(/[^\p{L}\p{N}\p{Emoji}\s@._\-+]/gu, "");
    setEmail(filtered);
  };
  const handleMessageChange = (text: string) => {
    // Allow letters, numbers, spaces, and emojis. Block other symbols.
    const filtered = text.replace(/[^\p{L}\p{N}\p{Emoji}\s]/gu, "");
    setMessage(filtered);
  };

  return (
    <View style={styles.container}>
      {/* <ScrollView style={styles.scrollView}> */}
      {/* Hero Section */}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoid}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <LinearGradient
            colors={["#1e3a8a", "#3b82f6"]}
            style={styles.heroContainer}
          >
            <Image
              source={{
                uri: "https://api.a0.dev/assets/image?text=ancient%20greek%20parthenon%20temple%20at%20sunset%20minimalist%20illustration&aspect=16:9",
              }}
              style={styles.heroImage}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Quiz1");
              }}
              style={styles.homeButton}
            >
              <Home size={24} color="#dddbdb" />
            </TouchableOpacity>
            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>Γεωγραφία της Ελλάδας</Text>
              <Text style={styles.heroSubtitle}>
                Εξερευνήστε την ομορφιά της Ελλάδας
              </Text>
            </View>
          </LinearGradient>
          <View style={styles.header}>
            <MaterialIcons name="feedback" size={32} color="#007AFF" />
            <Text style={styles.title}>Επικοινωνίστε μαζί μας</Text>
          </View>

          <View style={styles.card}>
            <View
              style={{ flexDirection: "row", gap: 12, alignItems: "center" }}
            >
              <Text style={styles.label}>Όνομα</Text>
              <Text style={[styles.label, { fontSize: 12, fontWeight: "400" }]}>
                (προαιτερικά)
              </Text>
            </View>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={handleNameChange}
              placeholder="Εισάγεται το όνομά σας..."
              placeholderTextColor="#666"
            />

            <View
              style={{ flexDirection: "row", gap: 12, alignItems: "center" }}
            >
              <Text style={styles.label}>Email</Text>
              <Text style={[styles.label, { fontSize: 12, fontWeight: "400" }]}>
                (προαιτερικά)
              </Text>
            </View>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={handleEmailChange}
              placeholder="Εισάγεται το email σας..."
              placeholderTextColor="#666"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <View
              style={{ flexDirection: "row", gap: 12, alignItems: "center" }}
            >
              <Text style={styles.label}>Μήνυμα</Text>
              <Text
                style={[
                  styles.label,
                  { fontSize: 12, fontWeight: "400", color: "red" },
                ]}
              >
                **
              </Text>
            </View>
            <TextInput
              style={[styles.input, styles.messageInput]}
              value={message}
              onChangeText={handleMessageChange}
              placeholder="Γράψτε το μήνυμά σας..."
              placeholderTextColor="#666"
              multiline
              numberOfLines={5}
              textAlignVertical="top"
              maxLength={400}
            />

            <TouchableOpacity
              style={[styles.button, isSending && styles.buttonDisabled]}
              onPress={handleSubmit}
              disabled={isSending}
            >
              <Text style={styles.buttonText}>
                {isSending ? "Αποστολή..." : "Αποστολή Μηνύματος"}
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.userMessageContainer}> */}
          <View style={[styles.card, { marginVertical: 40 }]}>
            <Text style={[styles.label, { marginBottom: 20 }]}>
              Ιστορικό Μηνυμάτων 
            </Text>
            {/* <TouchableOpacity onPress={()=>setRefresh((prev)=>(!prev))} style={{position: 'absolute', top: 10, right: 20}}>
              <Text>Refresh</Text>
            </TouchableOpacity> */}
            <MessagesWrapper refresh={refresh}/>
{/* 
            {userMessage.length === 0 ? (
              <Text style={{ fontSize: 15, color: "#888" }}>
                Δεν υπάρχει ιστορικό μηνυμάτων.
              </Text>
            ) : (
              <>
                {userMessage.map((item) => {
                  const date = new Date(item.createdAt);
                  const formattedDate = date.toLocaleString(); // full local date+time

                  return (
                    <View key={item._id} style={{ marginBottom: 12 }}>
                      <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                        Το μήνυμάς σας
                      </Text>
                      <View style={styles.bubbleUser}>
                        <Text style={{ fontSize: 16, color: "white" }}>
                          {item.message}
                        </Text>
                        <Text style={styles.timeUser}>
                          {formattedDate}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => handleDeleteMessage(item._id)}
                      >
                        <Text style={{ color: "red", marginBottom: 10 }}>Διαγραφή</Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
                {replies.length === 0 ?
                 (
                  <View>
                    <Text style={{ fontWeight: "bold", fontSize: 12, position: 'absolute', top: -15, right: 0  }}>Aπάντηση Διαχειριστή:</Text>
                    <View style={styles.bubbleAdmin}>
                      <Text style={{ marginTop: 5, textAlign: 'right' }}>O διαχειριστής θα σας απαντήσει σύντομα.</Text>
                    </View>
                  </View>
                ) : (
                  <View>
                    <Text style={{ fontWeight: "bold",fontSize: 12, position: 'absolute', top: -15, right: 0 }}>Aπάντηση Διαχειριστή:</Text>
                    {replies.map((items, index) => {
                      const date = new Date(items.createdAt);
                      const formattedDate = date.toLocaleString(); // full local date+time
                      return (
                        <View style={styles.bubbleAdmin} key={items.reply}>
                          <Text key={index} style={{ marginTop: 5, textAlign: 'right' }}>
                            {items.reply}
                          </Text>
                          <Text style={styles.timeAdmin}>
                            {formattedDate}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                )}
                
              </>
            )}  */}
          </View>

          <View style={[styles.card, { marginBottom: 100 }]}>
            <Text style={styles.label}>
              Έχεις κάποια πρόταση ή εντόπισες κάποιο λάθος;
            </Text>
            <Text style={[styles.label, { marginTop: 10, fontWeight: "300" }]}>
              Μη διστάσεις να επικοινωνήσεις μαζί μας για να προτείνεις
              βελτιώσεις ή να αναφέρεις τυχόν προβλήματα στη λειτουργία της
              εφαρμογής.
            </Text>
          </View>
         
        </ScrollView>
      </KeyboardAvoidingView>

      {/* </ScrollView> */}
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  scrollView: {
    flex: 1,
  },
  homeButton: {
    position: "absolute",
    top: 10,
    left: 0,
    paddingVertical: 40,
    paddingLeft: 20,
    paddingRight: 50,
    // backgroundColor: 'yellow'
  },
  heroContainer: {
    height: 300,
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
  },
  heroContent: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  heroSubtitle: {
    fontSize: 18,
    color: "white",
    marginTop: 8,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  categoriesContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 20,
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryCard: {
    width: (width - 60) / 2,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#334155",
    marginTop: 12,
  },
  categoryCount: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 4,
  },
  startButton: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  gradientButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
  },
  startButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginRight: 8,
  },
  footer: {
    padding: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#64748b",
    fontSize: 14,
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 0,
  },
  header: {
    alignItems: "center",
    marginVertical: 24,
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  messageInput: {
    height: 120,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 8,
  },
  buttonDisabled: {
    backgroundColor: "#99c9ff",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  // userMessageContainer: {
  //   width: "90%",
  //   // height: 200,
  //   paddingTop: 20,
  //   paddingHorizontal: 20,
  //   paddingBottom: 50,
  //   margin: 20,
  //   backgroundColor: "yellow",
  // },
  // historyItem: {
  //   fontSize: 14,
  //   color: "#333",
  //   marginBottom: 8,
  // },
  // adminReply: {
  //   backgroundColor: "#e0f7fa",
  //   padding: 10,
  //   borderRadius: 8,
  //   marginBottom: 8,
  //   color: "#00796b",
  // },
  // userReply: {
  //   backgroundColor: "#fce4ec",
  //   padding: 10,
  //   borderRadius: 8,
  //   marginBottom: 8,
  //   color: "#880e4f",
  // },
  // bubbleUser: {
  //   backgroundColor: "#007AFF",
  //   padding: 10,
  //   paddingBottom: 15,
  //   borderTopLeftRadius: 0,
  //   borderTopRightRadius: 30,
  //   borderBottomLeftRadius: 30,
  //   borderBottomRightRadius: 30,
  //   marginVertical: 7,
  // },
  // bubbleAdmin: {
  //   backgroundColor: "#f0f0f0",
  //   padding: 10,
  //   paddingBottom: 15,
  //   borderTopLeftRadius: 30,
  //   borderTopRightRadius: 0,
  //   borderBottomLeftRadius: 30,
  //   borderBottomRightRadius: 30,
  //   marginVertical: 7,
  // },
  // timeUser: {
  //   fontSize: 12,
  //   color: "#dbd9d9",
  //   position: "absolute",
  //   bottom: 5,
  //   right: 20,
  // },
  // timeAdmin: {
  //   fontSize: 12,
  //   color: "#888",
  //   position: "absolute",
  //   bottom: 5,
  //   left: 20,
  // },
});
