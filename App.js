import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import Task from "./component/tas"
import Footer from "./component/footer"
import { useState } from 'react';


const TASK_DATA = [
  {title: "Like 👍", isComplete: false},
  {title: "Comment 📢", isComplete: true},
  {title: "Review 🙃", isComplete: false},
  {title: "Subscribe", isComplete: true},
]



// filter, find, map, reduce, sort, every, flatten

export default function App() {
  const [tasks, setTasks] = useState(TASK_DATA);
  const [title, setTitle] = useState("");
  
  const onPress = () => {
    if (title !== "") {
      setTasks(prev => [
        ...prev,
        {
          title: title,
          isComplete: false
        }
      ])
      setTitle("");
      Alert.alert("Task successfully created")
    } else {
      Alert.alert("No task is created")
    }
  };

  const onChangeText = (text) => {
    setTitle(text);
  };
  const onComplete = (title, complete) => {

  };
  

  // const sortedTasks = tasks.sort((a, b) => {
  //   if (a.completed && !b.completed) {
  //     return -1;
  //   } else if (!a.completed && b.completed) {
  //     return 1;
  //   }

  return (
    <>
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Today's Tasks</Text>
          {
            tasks.map((task, index) => (
              <Task title={task.title} key={index} onComplete={onComplete} />
            ))
          }
        </View>
      </ScrollView>
      <Footer onPress={onPress} onChangeText={onChangeText} title={title} />
    </>
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
    paddingHorizontal: 20,
  },
  headerText: {
    width: "100%",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 28,
    marginBottom: 30
  }
})