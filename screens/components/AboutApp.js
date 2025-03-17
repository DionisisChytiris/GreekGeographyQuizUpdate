import {
  View,
  Text,
  Pressable,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";

const AboutApp = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/MorePhotos/ath.jpg")}
        // resizeMode="cover"
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Pressable
            onPress={() => {
              navigation.navigate("Quiz1");
              // alert("hey")}
            }}
            style={{ position: "absolute", top: 20, left: -10, padding: 30 }}
          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </Pressable>
          <View style={styles.scrollViewContainer}>
            <View>
              <Text style={styles.title1}>Γεωγραφία της Ελλάδας</Text>

              <View style={styles.title2Container}>
                <Text style={styles.title2}>
                  Τέσταρε τις γνώσεις σου πάνω στην γεωγραφία της Ελλάδας.
                </Text>
              </View>
            </View>
            <View style={styles.textContainer}>
              <View>
                <Text style={styles.text1}>Εξερεύνησε την Ελλάδα</Text>
                <Text style={styles.text2}>
                  Η εφαρμογή "Γεωγραφία της Ελλάδας" είναι μια διαδραστική και
                  εκπαιδευτική εφαρμογή για κινητά που έχει σχεδιαστεί για να
                  βοηθήσει τους χρήστες να ανακαλύψουν και να τεστάρουν τις
                  γνώσεις τους πάνω στην γεωγραφία της Ελλάδας. Αυτή η
                  διαδραστική εφαρμογή ερωτήσεων επικεντρώνεται σε ελληνικές
                  πόλεις, ποτάμια, λίμνες και βουνά, επιτρέποντας στους χρήστες
                  να εξερευνήσουν το πλούσιο μωσαϊκό αυτής της ιστορικά και
                  γεωγραφικά γοητευτικής χώρας.
                </Text>
              </View>
              <View style={{ position: "absolute", bottom: 20, right: 30 }}>
                <MaterialCommunityIcons
                  name="earth"
                  size={30}
                  color="#0054a7"
                />
              </View>
            </View>
            {/* Ενότητες */}
            <View style={styles.textContainer}>
              <View>
                <Text style={styles.text1}>Ενότητες</Text>
                <Text style={[styles.text1, { fontSize: 14, marginTop: 8 }]}>
                  1. Ποτάμια και λίμνες
                </Text>
                <Text
                  style={[styles.text2, { marginTop: 10, marginBottom: 20 }]}
                >
                  Ανακαλύψτε τα σημαντικότερα ποτάμια και λίμνες της Ελλάδας.
                  Βυθιστείτε στα μοναδικά χαρακτηριστικά, την οικολογική σημασία
                  και τον αντίκτυπο στις τοπικές κοινότητες.
                </Text>

                <Text style={[styles.text1, { fontSize: 14, marginTop: 8 }]}>
                  2. Βουνά
                </Text>
                <Text
                  style={[styles.text2, { marginTop: 10, marginBottom: 20 }]}
                >
                  Γνωρίστε τα επιβλητικά βουνά της χώρας, όπως ο Όλυμπος, η
                  Πίνδος και ο Ταΰγετος. Ανακαλύψτε τα βουνά με τον σημαντικό
                  ρόλο τους στην ελληνική μυθολογία και την βαθεία γεωλογική
                  τους σημασία, καθώς καλύπτουν το μεγαλύτερο μέρος της
                  ηπειρωτικής Ελλάδας.{" "}
                </Text>

                <Text style={[styles.text1, { fontSize: 14, marginTop: 8 }]}>
                  3. Πόλεις
                </Text>
                <Text
                  style={[styles.text2, { marginTop: 10, marginBottom: 20 }]}
                >
                  Τεστάρετε πόσο καλά γνωρίζετε τις πρωτεύουσες των νομών της
                  Ελλάδας. Με τη βοήθεια αυτης της διαδραστικής εφαρμογής και
                  μέσα από τις 60 ερωτήσεις και το πλούσιο φωτογραφικό υλικό
                  μπορείτε να μάθετε για τις ομορφόρετες πόλεις της Ελλάδας,
                  συμπεριλαμβανομένης της Αθήνας, της Θεσσαλονίκης και άλλων
                  ιστορικά σημαντικών πόλεων.
                </Text>

                <Text style={[styles.text1, { fontSize: 14, marginTop: 8 }]}>
                  4. Γενικές ερωτήσεις
                </Text>
                <Text
                  style={[styles.text2, { marginTop: 10, marginBottom: 20 }]}
                >
                  Δοκιμάστε τις γνώσεις σας σε ένα ευρύ φάσμα ερωτήσεων που
                  καλύπτουν θέματα όπως τοποθεσίες ιστορικών μνημείων,
                  αρχαιολογικών χώρων, σημαντικών ποταμών, λιμνών και οροσειρών.{" "}
                </Text>
                <View
                  style={{
                    position: "absolute",
                    bottom: -30,
                    left: 30,
                    flexDirection: "row",
                    gap: 50,
                  }}
                >
                  <MaterialCommunityIcons
                    name="earth"
                    size={30}
                    color="#0054a7"
                  />
                  <FontAwesome6 name="mountain-sun" size={30} color="#0054a7" />
                  <FontAwesome6 name="tree-city" size={30} color="#0054a7" />
                </View>
              </View>
            </View>
            {/* Χαρακτηριστικά */}
            <View style={styles.textContainer}>
              <View>
                <Text style={styles.text1}>Χαρακτηριστικά</Text>
                <Text style={[styles.text1, { fontSize: 14, marginTop: 8 }]}>
                  1. Εκπαιδευτικές πληροφορίες
                </Text>
                <Text
                  style={[styles.text2, { marginTop: 10, marginBottom: 20 }]}
                >
                  Λεπτομερείς εξηγήσεις και σημαντικά στοιχεία παρέχονται μετά
                  από κάθε ερώτηση κουίζ, διασφαλίζοντας ότι οι χρήστες αποκτούν
                  βαθύτερη κατανόηση της γεωγραφίας της Ελλάδας καθώς παίζουν.
                </Text>

                <Text style={[styles.text1, { fontSize: 14, marginTop: 8 }]}>
                  2. Οπτικό υλικό
                </Text>
                <Text
                  style={[styles.text2, { marginTop: 10, marginBottom: 20 }]}
                >
                  Υψηλής ποιότητας εικόνες πόλεων, ποταμών, λιμνών και βουνών
                  προσφέρουν μια οπτική εμπειρία που ενισχύει τη μάθηση και την
                  εκτίμηση της γεωγραφίας της Ελλάδας. Επίσης η χρήση χαρτών
                  βοηθάει τον χρήστη να προσανατολιστεί με την ακριβής τοποθεσία
                  της κάθε πόλης στον ελληνικό χώρο.
                </Text>

                <Text style={[styles.text1, { fontSize: 14, marginTop: 8 }]}>
                  3. Φιλική προς τον χρήστη εφαρμογή
                </Text>
                <Text
                  style={[styles.text2, { marginTop: 10, marginBottom: 20 }]}
                >
                  Ο διαισθητικός και φιλικός προς το χρήστη σχεδιασμός της
                  εφαρμογής την καθιστά κατάλληλη για χρήστες όλων των ηλικιών
                  και υποβάθρων. Είναι εύκολο να πλοηγηθείτε και να το
                  απολαύσετε με το δικό σας ρυθμό.
                </Text>

                <Text style={[styles.text1, { fontSize: 14, marginTop: 8 }]}>
                  4. Εκπαιδευτική εφαρμογή
                </Text>
                <Text
                  style={[styles.text2, { marginTop: 10, marginBottom: 20 }]}
                >
                  Η εφαρμογή "Γεωγραφία της Ελλάδας" χρησιμεύει επίσης ως
                  εκπαιδευτικός πόρος για μαθητές, εκπαιδευτικούς και ταξιδιώτες
                  που επιθυμούν να διευρίνουν τις γνώσεις τους για την ελληνική
                  γεωγραφία.
                </Text>
                <View
                  style={{
                    position: "absolute",
                    bottom: -30,
                    left: 30,
                    flexDirection: "row",
                    gap: 50,
                  }}
                >
                  <MaterialCommunityIcons
                    name="earth"
                    size={30}
                    color="#0054a7"
                  />
                  <MaterialCommunityIcons
                    name="earth"
                    size={30}
                    color="#0054a7"
                  />
                  <MaterialCommunityIcons
                    name="earth"
                    size={30}
                    color="#0054a7"
                  />
                 
                </View>
              </View>
            </View>
            <View style={styles.textContainer}>
              <View>
                <Text style={[styles.text2, { fontSize: 14, marginTop: 8 }]}>
                  Η εφαρμογή "Γεωγραφία της Ελλάδας" είναι το διαβατήριό σας για
                  να ανακαλύψετε τα όμορφα τοπία, τις πόλεις και τα υδάτινα
                  σώματα που κάνουν την Ελλάδα έναν μοναδικό και ιστορικά
                  πλούσιο προορισμό. Είτε είστε φοιτητής, λάτρης της γεωγραφίας
                  ή απλά κάποιος που ενδιαφέρεται για τον ελληνικό πολιτισμό και
                  τη γεωγραφία, αυτή η εφαρμογή είναι ο απόλυτος τρόπος για
                  εξερεύνηση και εκπαίδευση. Κατεβάστε το σήμερα και ξεκινήστε
                  ένα ταξίδι ανακάλυψης στην καρδιά της Ελλάδας!
                </Text>
              </View>
            </View>
            <View style={[styles.textContainer, { paddingBottom: 30}]}>
              <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>Καλή διασκέδαση!!!</Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default AboutApp;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
    marginVertical: 100,
  },
  title1: {
    fontSize: 22,
    textAlign: "center",
    color: "white",
  },
  title2Container: {
    width: "70%",
    // backgroundColor: "grey",
    marginLeft: "auto",
    marginRight: "auto",
  },
  title2: {
    // width: "80%",
    marginTop: 30,
    fontSize: 18,
    textAlign: "center",
    color: "#001428",
  },
  textContainer: {
    width: "80%",
    backgroundColor: "#cccccc",
    // backgroundColor: "#121a2490",
    borderRadius: 25,
    paddingTop: 30,
    paddingBottom: 60,
    paddingHorizontal: 20,
  },
  text1: {
    fontSize: 16,
    color: "white",
  },
  text2: {
    // color: "white",
    fontSize: 15,
    marginTop: 30,
    color: "#002142",
  },
});
