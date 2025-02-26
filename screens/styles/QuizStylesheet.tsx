import { StyleSheet, Dimensions, Platform } from "react-native";
const { height } = Dimensions.get("window");

export const stylesM = StyleSheet.create({
  image: {
    borderRadius: 10,
    marginBottom: 20,
    width: height > 1100 ? "100%" : "90%",
    margin: "auto",
    marginLeft: height > 960 ? (height > 1000 ? 30 : 20) : null,
    height:
      Platform.OS === "android"
        ? height < 800
          ? 190
          : height > 1100
          ? 320
          : 210
        : Platform.OS === "ios"
        ? height > 960
          ? 290
          : 190
        : 190,
  },
  textAnswer: {
    marginHorizontal: "auto",
    fontWeight: "600",
    color: "white",
    fontSize: height > 800 ? 16 : 14,
  },

  section2Container: {
    // backgroundColor: "lightblue",
    marginVertical: 0,
    paddingHorizontal: height > 1000 ? 120 : 25,
    marginTop: 20,
    // marginBottom: -100,
  },
  answersContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    paddingTop: 5,
    // backgroundColor: 'yellow'
  },
  question: {
    // marginLeft: 20,
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: height > 960 ? (height > 1100 ? 24 : 19) : 16,
    fontWeight: "bold",
    height: 70,
  },
  answerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "47%",
    height: height > 960 ? 120 : 100,
    borderRadius: 6,
    margin: "0.8%",
  },
  lottieCorrect: {
    position: "absolute",
    width: "100%",
    height: "70%",
    top: 0,
    right: -30,
  },
  lottieWrong: {
    position: "absolute",
    width: "100%",
    height: "70%",
    top: 0,
    right: -30,
  },
  BtmModalView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    width: "95%",
  },
  btmMdlView: {
    paddingBottom: 20,
    paddingHorizontal: 15,
    gap: 10,
    backgroundColor: "#f5f5f5",
    height: 300,
    borderRadius: 20,
    padding: 10,
  },
  btmMdlText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  nextQueButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  nextQueButton1: {
    marginTop: height < 900 ? -30 : 20,
    marginLeft: Platform.OS === "android" ? (height > 800 ? 300 : 230) : 240,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  nextQueButton2: {
    marginTop: height < 900 ? -30 : 20,
    marginLeft: Platform.OS === "android" ? (height > 800 ? 300 : 230) : 240,
    backgroundColor: "#dd0530",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  correctAnswer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    width: "100%",
    height: height > 960 ? 120 : 100,
    borderRadius: 6,
    // margin: "0.8%",
  },
  wrongAnswer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dd0530",
    width: "100%",
    height: height > 960 ? 120 : 100,
    borderRadius: 6,
    // margin: "0.8%",
  },
  borderAnswer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#006cfa",
    width: "100%",
    height: height > 960 ? 120 : 100,
    borderRadius: 6,
    // margin: 10,
  },
  ActivityIndicatorBox: {
    width: 200,
    height: 200,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -100 }, { translateY: -100 }],
  },
  ActivityIndText: {
    color: "#ffffff",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 10,
  },
  fiftyBtn: {
    position: "absolute",
    top: 60,
    left: 5,
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderRadius: 6,
    backgroundColor: "#615f5f95",
  },
  infoIcon: {
    position: "absolute",
    top: 44,
    left: 20,
    opacity: 1,
    backgroundColor: 'orange',
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 4
  },
});
