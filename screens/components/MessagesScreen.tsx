import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert, ScrollView, StyleSheet } from "react-native";

interface MessagesScreenProps {
  id: string;
}

interface Message {
  _id: string;
  message: string;
  createdAt: string;
  replies: Reply[];
}

interface Reply {
  _id: string;
  reply: string;
  createdAt: string;
}

const MessagesScreen: React.FC<MessagesScreenProps> = ({ id }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `https://greek-geography-quiz-app-backend.vercel.app/messages?client_id=${id}`
      );

      if (!response.ok) throw new Error("Failed to fetch messages");
      const data = await response.json();

      // Fetch replies for each message
      const messagesWithReplies = await Promise.all(
        data.map(async (message: Message) => {
          try {
            const repliesResponse = await fetch(
              `https://greek-geography-quiz-app-backend.vercel.app/messages/${message._id}/replies`
            );
            if (!repliesResponse.ok) {
              console.warn(`Failed to fetch replies for message ${message._id}`);
              return { ...message, replies: [] };
            }
            const replies = await repliesResponse.json();
            return { ...message, replies };
          } catch (err) {
            console.error("Error fetching replies:", err);
            return { ...message, replies: [] };
          }
        })
      );

      setMessages(messagesWithReplies);
    } catch (error) {
      Alert.alert("Failed to load messages");
    }
  };

  const handleDeleteMessage = async (messageId: string) => {
    try {
      await fetch(
        `https://greek-geography-quiz-app-backend.vercel.app/messages/${messageId}`,
        { method: "DELETE" }
      );
      setMessages((prev) => prev.filter((msg) => msg._id !== messageId));
    } catch (error) {
      Alert.alert("Αποτυχία διαγραφής μηνύματος");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {messages.map((item) => {
        const date = new Date(item.createdAt).toLocaleString();

        return (
          <View key={item._id} style={styles.messageBlock}>
            <Text style={styles.sectionLabel}>Το μήνυμά σας</Text>
            <View style={styles.bubbleUser}>
              <Text style={styles.userText}>{item.message}</Text>
              <Text style={styles.timeUser}>{date}</Text>
            </View>
            <TouchableOpacity onPress={() => handleDeleteMessage(item._id)}>
              <Text style={styles.deleteText}>Διαγραφή</Text>
            </TouchableOpacity>

            <Text style={styles.replyLabel}>Απάντηση Διαχειριστή:</Text>

            {item.replies.length === 0 ? (
              <View style={styles.bubbleAdmin}>
                <Text style={styles.adminText}>
                  Ο διαχειριστής θα σας απαντήσει σύντομα.
                </Text>
              </View>
            ) : (
              item.replies.map((reply) => (
                <View style={styles.bubbleAdmin} key={reply._id}>
                  <Text style={styles.adminText}>{reply.reply}</Text>
                  <Text style={styles.timeAdmin}>
                    {new Date(reply.createdAt).toLocaleString()}
                  </Text>
                </View>
              ))
            )}
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  messageBlock: {
    marginBottom: 20,
  },
  sectionLabel: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 4,
  },
  bubbleUser: {
    backgroundColor: "#3b82f6",
    padding: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom:6,
  },
  userText: {
    fontSize: 16,
    color: "white",
  },
  timeUser: {
    fontSize: 10,
    color: "white",
    textAlign: "right",
    marginTop: 4,
  },
  deleteText: {
    color: "red",
    marginBottom: 20,
  },
  replyLabel: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 4,
  },
  bubbleAdmin: {
    backgroundColor: "#e5e7eb",
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  adminText: {
    textAlign: "right",
    fontSize: 14,
    color: "#111827",
  },
  timeAdmin: {
    fontSize: 10,
    color: "#6b7280",
    textAlign: "right",
    marginTop: 4,
  },
});

export default MessagesScreen;
