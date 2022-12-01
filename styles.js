import { StyleSheet } from "react-native";

export default new StyleSheet.create({
    scrollview: {
      flex: 1,
      backgroundColor: "red"
    },
    container: {
      flex: 1,
      height: "100%",
      paddingVertical: 80,
      paddingHorizontal: 16,
      alignItems: "center"
    },
    image: {
      width: 300,
      height: 200
    },
    textInput: {
      backgroundColor: "yellow",
      borderWidth: 1,
      borderColor: "white",
      height: 48,
      width: "100%",
      marginTop: 16,
    }
  });