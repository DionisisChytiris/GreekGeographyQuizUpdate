import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Types/RootStackParamList";
import { AntDesign } from "@expo/vector-icons";

type GenerQTProp = StackNavigationProp<
  RootStackParamList,
  "GenerQuestTemplate"
>;

// Define the Greek locale configuration
LocaleConfig.locales["gr"] = {
  monthNames: [
    "Ιανουάριος",
    "Φεβρουάριος",
    "Μάρτιος",
    "Απρίλιος",
    "Μάιος",
    "Ιούνιος",
    "Ιούλιος",
    "Αύγουστος",
    "Σεπτέμβριος",
    "Οκτώβριος",
    "Νοέμβριος",
    "Δεκέμβριος",
  ],
  monthNamesShort: [
    "Ιαν.",
    "Φεβ.",
    "Μάρ.",
    "Απρ.",
    "Μάι.",
    "Ιούν.",
    "Ιούλ.",
    "Αύγ.",
    "Σεπ.",
    "Οκτ.",
    "Νοέ.",
    "Δεκ.",
  ],
  dayNames: [
    "Κυριακή",
    "Δευτέρα",
    "Τρίτη",
    "Τετάρτη",
    "Πέμπτη",
    "Παρασκευή",
    "Σάββατο",
  ],
  dayNamesShort: ["Κυρ.", "Δευ.", "Τρί.", "Τετ.", "Πέμ.", "Παρ.", "Σάβ."],
  today: "Σήμερα",
};

// Set the default locale to Greek
LocaleConfig.defaultLocale = "gr";

const CalendarComponent = () => {
  const navigation = useNavigation<GenerQTProp>();
  const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    const loadUsageDates = async () => {
      try {
        const storedDates = await AsyncStorage.getItem("usedDates");
        if (storedDates) {
          setMarkedDates(JSON.parse(storedDates));
        }
      } catch (error) {
        console.error("Error loading usage dates:", error);
      }
    };
    loadUsageDates();
  }, []);

  // useEffect(() => {
  //   AsyncStorage.removeItem("usedDate");
  // }, []);

  return (
    <View style={{ flex: 1, marginTop: 100, marginHorizontal: 20 }}>
      <Pressable
        style={{
          position: "absolute",
          top: -40,
          right: 10,
          // backgroundColor: 'red'
          // padding: 30,
        }}
        onPress={() => {
          navigation.navigate("Quiz1");
        }}
      >
        <AntDesign name="close-circle" size={34} color="white" />
      </Pressable>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          marginBottom: 20,
          fontWeight: 500,
          color: "#0a3557",
        }}
      >
        Iχνηλάτης Εφαρμογής
      </Text>
      <View
      // style={{ borderRadius: 20, overflow: "hidden", marginHorizontal: 20 }}
      >
        <Calendar
          markedDates={markedDates}
          // markedDates={{}}
          theme={{
            // backgroundColor: "#ffffff",
            calendarBackground: "#90b6e7",
            textSectionTitleColor: "#13cf2d",
            selectedDayBackgroundColor: "#ff6347", // Change selected date background
            selectedDayTextColor: "#ffffff", // Change selected date text color
            todayTextColor: "#ff6347", // Change today's text color
            dayTextColor: "#2d4150",
            textDisabledColor: "#d9e1e8", // Disabled dates color
            dotColor: "#30eb4f10'", // Change dot color under marked dates
            selectedDotColor: "#3760e610",
            arrowColor: "#ff6347", // Change arrow color
            monthTextColor: "#2d4150", // Change month name color
            textMonthFontSize: 16,
            textMonthFontWeight: "bold",
            textDayFontSize: 16,
            textDayHeaderFontSize: 14,
            textDayHeaderFontWeight: "bold",
          }}
          style={{
            // borderWidth: 1,
            // borderColor: "green",
            height: 400,
            // backgroundColor: "white",
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
};

export default CalendarComponent;
