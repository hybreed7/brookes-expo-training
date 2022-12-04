import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Task from "./component/task";
import Task2 from './component/task2';
import Task3 from './component/task3';
import Task4 from './component/Task4';

export default function App() {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Today's Tasks</Text>
        <Task />
        <Task2 />
        <Task3 />
        <Task4 />
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
    color: "darkRed",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 28,
    marginBottom: 30
  },
});
