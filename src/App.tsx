import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';
import TodoList from './Components/TodoList';
import AddBar from './Components/AddBar';

function App() {
  const [counter, setCounter] = React.useState(0);
  const [task, setTask] = React.useState('');
  const [list, setList] = React.useState([]);

  function increaseCounter() {
    setCounter(counter + 1);
  }
  function decreaseCounter() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  const handleAddTask = () => {
    setList([...list, {text: task, completed: false}]);
    setTask('');
    increaseCounter();
  };
  const handleCompleteTask = index => {
    const newTaskItems = [...list];
    newTaskItems[index].completed = !newTaskItems[index].completed;

    if (newTaskItems[index].completed) {
      decreaseCounter();
    } else {
      increaseCounter();
    }

    setList(newTaskItems);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.counter}>{counter}</Text>
      </View>
      <TodoList list={list} handleCompleteTask={handleCompleteTask} />

      <View style={styles.bottom_container}>
        <AddBar task={task} setTask={setTask} handleAddTask={handleAddTask} />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e2a32',
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'orange',
    fontSize: 30,
    margin: 20,
    fontWeight: 'bold',
  },
  counter: {
    color: 'orange',
    fontSize: 30,
    margin: 20,
  },
  bottom_container: {justifyContent: 'flex-end'},
});
