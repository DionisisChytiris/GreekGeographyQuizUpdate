import {
    View,
    Text,
    StyleSheet,
    Pressable,
    ScrollView,
    Platform,
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  // import { useRouter } from 'expo-router';
  import {
    Award,
    ArrowLeft,
    Share2,
    Trophy,
    Target,
    Clock,
    Repeat,
    Home,
    Brain,
    Medal,
    Lightbulb,
  } from "lucide-react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { StackNavigationProp } from "@react-navigation/stack";
  import { RootStackParamList } from "../../Types/RootStackParamList";
  import { PieChart } from "react-native-gifted-charts";
  import questions from "../../data/LakeRiver/questions";
  
  type LakeRiverProp = StackNavigationProp<RootStackParamList, "Quiz1">;
  
  export default function ResultsScreen() {
    //   const router = useRouter();
    const navigation = useNavigation<LakeRiverProp>();
    const route = useRoute();
    const {
      resetQuiz,
      index,
      totalQuestions,
      userAnswers,
      points,
      seconds,
      minutes,
    }: any = route.params as {
      resetQuiz: any;
      totalQuestions: number;
      index: number;
      points: number;
      userAnswers: {
        question: string;
        userChoice: string;
        correctAnswer: string;
      }[];
      seconds: number;
      minutes: number;
    };
  
    const percentage = Math.round((points / 10 / totalQuestions) * 100);
    // const percentage = Math.round((1 / 15) * 100);
  
    const answered = index + 1;
    // const correctAnswers = points
    // const wrongAnswers = answered - points
    // const unanswered = totalQuestions - answered
    const correctAnswers = points / 10;
    const wrongAnswers = index + 1 - points / 10;
    const unanswered = totalQuestions - answered;
  
    const dataT = [
      {
        value: correctAnswers,
        label: "Correct",
        color: "#2bc779",
      },
      {
        value: unanswered,
        label: "No answer",
        color: "#8b8a8a80",
      },
      {
        value: wrongAnswers,
        label: "Wrong",
        color: "#fc5858",
      },
    ];
  
    const getFeedbackMessage = () => {
      if (percentage < 50) {
        return {
          title: "Συνέχισε την προσπάθεια!",
          message:
            "Μην τα παρατάς! Κάθε προσπάθεια είναι ένα βήμα προς την επιτυχία. Επανέλαβε τα θέματα και προσπάθησε ξανά - μπορείς να τα καταφέρεις! 💪",
            colors: {
            gradient: ["#4A90E2", "#357ABD"] as [string, string],
            // gradient: ["#fc5858", "#ca2a2a"] as [string, string],
            primary: "#fc5858",
            secondary: "#FEE2E2",
            text: "#FFFFFF",
            statsText: "#ca2a2a",
          },
          icon: "Brain",
        };
      } else if (percentage < 75) {
        return {
          title: "Μπράβο!",
          message:
            "Κάνεις σπουδαία πρόοδο! Συνέχισε να προσπαθείς για ακόμα καλύτερα αποτελέσματα! 🌟",
          colors: {
            gradient: ["#4A90E2", "#357ABD"] as [string, string],
            primary: "#4A90E2",
            secondary: "#72a3e2",
            text: "#FFFFFF",
            statsText: "#357ABD",
          },
          icon: "Medal",
        };
      } else {
        return {
          title: "Εξαιρετικά!",
          message:
            "Εκπληκτική επίδοση! Η σκληρή δουλειά σου αποδίδει καρπούς! 🏆",
          colors: {
            gradient: ["#2bc779", "#0eaa7e"] as [string, string],
            primary: "#2bc779",
            secondary: "#9cceb4",
            text: "#FFFFFF",
            statsText: "#0eaa7e",
          },
          icon: "Trophy",
        };
      }
    };
  
    const renderIcon = (iconName: string) => {
      switch (iconName) {
        case 'Brain':
          return <Brain color="#fff" size={64} />;
        case 'Medal':
          return <Medal color="#fff" size={64} />;
        case 'Trophy':
          return <Trophy color="#fff" size={64} />;
        default:
          return null;
      }
    };
  
    const feedback = getFeedbackMessage();
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          {/* <View style={styles.header}>
            <Pressable
              style={styles.backButton}
              onPress={() => navigation.navigate("Quiz1")}
            >
              <ArrowLeft size={24} color="#333" />
            </Pressable>
          </View> */}
          <View style={styles.header}>
            <Pressable
              style={styles.backButton}
              onPress={() => navigation.navigate("Quiz1")}
              // onPress={() => router.push('/quiz')}
            >
              {/* <ArrowLeft size={24} color="#333" /> */}
              <Home size={24} color="#666" />
            </Pressable>
            <Pressable
              onPress={() => {
                resetQuiz();
                navigation.navigate("LakeRiver");
              }}
              style={styles.shareButton}
            >
              <Repeat size={20} color="#666" />
            </Pressable>
          </View>
  
          {/* Score Card */}
          <LinearGradient
            // colors={["#4A90E2", "#357ABD"]}
            colors={feedback.colors.gradient}
            style={styles.scoreCard}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
             {renderIcon(feedback.icon)}
            {/* <Brain
              size={64}
              color={feedback.colors.text}
            /> */}
            <Text
              style={[styles.scoreTitle,{color: feedback.colors.text}]}
           >
              {feedback.title}
            </Text>
            <Text
              style={[styles.scoreText, {color: feedback.colors.text }]}
            >
              {correctAnswers}/{totalQuestions}
            </Text>
            <Text
              style={{ fontSize: 12, marginBottom: 0,color: feedback.colors.text }}
            >
              Σωστές Απαντήσεις
            </Text>
            <Text
              style={[styles.scoreSubtext,{color: feedback.colors.text, fontSize: 14, marginTop: 10}]}
            >
              {feedback.message}
            </Text>
            {/* <Trophy size={48} color="#FFF" /> */}
            {/* <Text style={styles.scoreTitle}>Συγχαρητήρια!</Text>
            <Text style={styles.scoreText}>
              {points / 10}/{totalQuestions}
            </Text>
            <Text style={styles.scoreSubtext}>Σωστές Απαντήσεις</Text>
            */}
            
             <Text style={[styles.scoreSubtext, { fontSize: 15, marginTop: 20 }]}>
              Απάντησες σε {index + 1} ερωτήσεις
            </Text>
          </LinearGradient>
  
          {/* Stats Grid */}
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              {/* <View style={[styles.statCard, {backgroundColor: feedback.colors.third}]}> */}
              <Target size={24} color={feedback.colors.primary} />
              <Text
                style={[styles.statValue, { color: feedback.colors.statsText }]}
              >
                {percentage}%
              </Text>
              <Text
                style={[styles.statLabel, { color: feedback.colors.statsText }]}
              >
                Ακρίβεια
              </Text>
              {/* <Target size={24} color="#4A90E2" />
              <Text style={styles.statValue}>{percentage}%</Text>
              <Text style={styles.statLabel}>Ακρίβεια</Text> */}
            </View>
            <View style={styles.statCard}>
              <Clock size={24} color={feedback.colors.primary} />
              <Text style={[styles.statValue, { color: feedback.colors.statsText }]}>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </Text>
              <Text style={[styles.statLabel, { color: feedback.colors.statsText }]}>Χρόνος</Text>
            </View>
            <View style={styles.statCard}>
              <Award size={24} color={feedback.colors.primary} />
              <Text style={[styles.statValue, { color: feedback.colors.statsText }]}>{points}</Text>
              <Text style={[styles.statLabel, { color: feedback.colors.statsText }]}>Πόντοι</Text>
            </View>
          </View>
  
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <PieChart
              data={dataT}
              // showText={true}
              // showValuesAsLabels={true}
              radius={120}
              textSize={28}
              textColor="#fff"
              donut
              // innerCircleColor={{ color: "red" }}
              // radius={80}
              innerRadius={80}
              centerLabelComponent={() => {
                return (
                  <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                    <Text
                      style={{
                        fontSize: 30,
                        color: percentage > 50 ? "green" : "red",
                      }}
                    >
                      {percentage}
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        color: percentage > 50 ? "green" : "red",
                        marginTop: 8,
                      }}
                    >
                      %
                    </Text>
                  </View>
                );
              }}
            />
  
            <View
              style={{
                marginTop: 10,
                marginVertical: 20,
                flexDirection: "row",
                gap: 50,
              }}
            >
              <View style={{ alignItems: "center", gap: 5 }}>
                <Text style={{ fontSize: 18, color: "#fc5858" }}>
                  {wrongAnswers}
                </Text>
                <View
                  style={{
                    width: 60,
                    height: 8,
                    backgroundColor: "#fc5858",
                    borderRadius: 10,
                  }}
                />
                <Text style={{ color: "black", fontSize: 10 }}>Λάθος</Text>
                <Text style={{ color: "black", fontSize: 10, marginTop: -5 }}>
                  Απαντήσεις{" "}
                </Text>
              </View>
              <View style={{ alignItems: "center", gap: 5 }}>
                <Text style={{ fontSize: 18, color: "#2bc779" }}>
                  {correctAnswers}
                </Text>
                <View
                  style={{
                    width: 60,
                    height: 8,
                    backgroundColor: "#2bc779",
                    borderRadius: 10,
                  }}
                />
                <Text style={{ color: "black", fontSize: 10 }}>Σωστές </Text>
                <Text style={{ color: "black", fontSize: 10, marginTop: -5 }}>
                  Απαντήσεις{" "}
                </Text>
              </View>
              <View style={{ alignItems: "center", gap: 5 }}>
                <Text style={{ fontSize: 18, color: "#8b8a8a" }}>
                  {unanswered}
                </Text>
                <View
                  style={{
                    width: 60,
                    height: 8,
                    backgroundColor: "#8b8a8a80",
                    borderRadius: 10,
                  }}
                />
                <Text style={{ color: "black", fontSize: 10 }}>Μη</Text>
                <Text style={{ color: "black", fontSize: 10, marginTop: -5 }}>
                  Απαντημένες{" "}
                </Text>
              </View>
            </View>
          </View>
  
          {/* Wrong Answers Review */}
          <View style={styles.reviewSection}>
            <Text style={styles.reviewTitle}>Ανασκόπηση Λαθών</Text>
            {/* {results.wrongAnswers.map((answer, index) => (
              <View key={index} style={styles.reviewCard}>
              <Text style={styles.questionText}>{answer.question}</Text>
              <View style={styles.answerRow}>
              <Text style={styles.answerLabel}>Η απάντησή σας:</Text>
              <Text style={styles.wrongAnswer}>{answer.userAnswer}</Text>
              </View>
              <View style={styles.answerRow}>
              <Text style={styles.answerLabel}>Σωστή απάντηση:</Text>
              <Text style={styles.correctAnswer}>{answer.correctAnswer}</Text>
              </View>
              </View>
              ))} */}
            {userAnswers && userAnswers.length > 0 ? (
              userAnswers.map((answer: any, index: number) => (
                <View key={`${answer.question}-${index}`} style={styles.reviewCard}>
                  <Text style={styles.questionText}>{answer.question}</Text>
                  <View style={styles.answerRow}>
                    <Text style={styles.answerLabel}>Η απάντησή σας:</Text>
                    <Text
                      style={[
                        styles.wrongAnswer,
                        answer.userChoice === answer.correctAnswer
                          ? { color: "green" }
                          : { color: "red" },
                      ]}
                    >
                      {answer.userChoice}
                    </Text>
                  </View>
                  {answer.userChoice === answer.correctAnswer ? (
                    <Text style={{ color: "green" }}>
                      ✅ {""}Δώσατε Σωστή Απάντηση
                    </Text>
                  ) : (
                    <Text style={{ color: "red" }}>❌ Δώσατε Λάθος Απάντηση</Text>
                  )}
                  <View style={[styles.answerRow, { marginTop: 10 }]}>
                    <Text style={styles.answerLabel}>Σωστή απάντηση:</Text>
                    <Text style={styles.correctAnswer}>
                      {answer.correctAnswer}
                    </Text>
                  </View>
                </View>
              ))
            ) : (
              <Text>No answers available.</Text>
            )}
  
            {/* {userAnswers && userAnswers.length > 0 ? (
              userAnswers.map((answer: any, idx: number) => (
                <View key={idx} style={{ marginBottom: 10 }}>
                  <Text>❓ Question: {answer.question}</Text>
                  <Text>👤 Your Choice: {answer.userChoice}</Text>
                  <Text>✅ Correct Answer: {answer.correctAnswer}</Text>
                  {answer.userChoice === answer.correctAnswer ? (
                    <Text style={{ color: "green" }}>✅ Correct</Text>
                  ) : (
                    <Text style={{ color: "red" }}>❌ Incorrect</Text>
                  )}
                </View>
              ))
            ) : (
              <Text>No answers available.</Text>
            )} */}
          </View>
  
          {/* Action Buttons */}
          <View style={styles.actions}>
            <Pressable
              onPress={() => {
                resetQuiz();
                navigation.navigate("LakeRiver");
              }}
              // onPress={() => router.push('/quiz')}
              style={styles.retryButton}
            >
              <LinearGradient
                colors={["#4A90E2", "#357ABD"]}
                style={styles.buttonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.buttonText}>Δοκιμάστε Ξανά</Text>
              </LinearGradient>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F7FA",
    },
    scrollContent: {
      paddingVertical: Platform.OS === "android" ? 10 : 0,
      paddingHorizontal: 16,
    },
    header: {
      // position: "absolute",
      // top: 10,
      // left: 20,
      // zIndex: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14,
      // marginTop: Platform.OS === 'android'? 0: 30
    },
    backButton: {
      padding: 8,
      borderRadius: 12,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    shareButton: {
      padding: 12,
      borderRadius: 12,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    scoreCard: {
      alignItems: "center",
      padding: 32,
      borderRadius: 24,
      // marginTop: 20,
      marginBottom: 24,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 12,
      elevation: 8,
    },
    scoreTitle: {
      fontFamily: "Poppins-Bold",
      fontSize: 24,
      color: "#fff",
      marginTop: 16,
    },
    scoreText: {
      fontFamily: "Poppins-Bold",
      fontSize: 48,
      color: "#fff",
      marginTop: 8,
    },
    scoreSubtext: {
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      color: "#fff",
      opacity: 0.9,
    },
    statsGrid: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 24,
      gap: 12,
    },
    statCard: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 16,
      borderRadius: 16,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    statValue: {
      fontFamily: "Poppins-Bold",
      fontSize: 20,
      color: "#333",
      marginTop: 8,
    },
    statLabel: {
      fontFamily: "Poppins-Regular",
      fontSize: 14,
      color: "#666",
      marginTop: 4,
    },
    reviewSection: {
      marginTop: 50,
      marginBottom: 24,
    },
    reviewTitle: {
      fontFamily: "Poppins-SemiBold",
      fontSize: 20,
      color: "#333",
      marginBottom: 16,
    },
    reviewCard: {
      backgroundColor: "#fff",
      padding: 16,
      borderRadius: 16,
      marginBottom: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    questionText: {
      fontFamily: "Poppins-SemiBold",
      fontSize: 16,
      color: "#333",
      marginBottom: 12,
    },
    answerRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8,
    },
    answerLabel: {
      fontFamily: "Poppins-Regular",
      fontSize: 14,
      color: "#666",
    },
    wrongAnswer: {
      fontFamily: "Poppins-SemiBold",
      fontSize: 14,
      color: "#FF4B4B",
    },
    correctAnswer: {
      fontFamily: "Poppins-SemiBold",
      fontSize: 14,
      color: "#4CAF50",
    },
    actions: {
      marginTop: 8,
    },
    retryButton: {
      overflow: "hidden",
      borderRadius: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    buttonGradient: {
      paddingVertical: 16,
      alignItems: "center",
    },
    buttonText: {
      fontFamily: "Poppins-SemiBold",
      fontSize: 18,
      color: "#fff",
    },
  });
  