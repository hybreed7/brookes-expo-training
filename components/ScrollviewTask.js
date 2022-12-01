import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Task from "./Task"

export default function App() {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Today's Tasks</Text>
        <Task />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: "#E8EAED"
  },
  container: {
    flex: 1,
    height: "100%",
    paddingTop: 94,
    paddingHorizontal: 20
  },
  headerText: {
    width: "100%",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 28,
    marginBottom: 30
  }
});