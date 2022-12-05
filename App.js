import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import {FAB} from 'react-native-paper'
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
        <FAB style={styles.fab} icon="plus"/>
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
  fab: {
    position: 'absolute',
    borderRadius: 52,
    right: 20,
    bottom: 1,
    width: 60,
    height: 60,
    justifyContent: "center",
    backgroundColor: "blue"
  },
  headerText: {
    width: "100%",
    color: 'blue',
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 28,
    marginBottom: 30
  },
});
