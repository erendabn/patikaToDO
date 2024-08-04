import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import styles from './TodoList.style';

function TodoList({list, handleCompleteTask}) {
  return (
    <ScrollView>
      {list.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleCompleteTask(index)}
          style={[styles.task, item.completed ? styles.taskCompleted : null]}>
          <Text
            style={item.completed ? styles.taskTextCompleted : styles.taskText}>
            {item.text}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default TodoList;
