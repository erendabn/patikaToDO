import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import styles from './AddBar.style';

function AddBar({task, setTask, handleAddTask}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacak"
        placeholderTextColor={'gray'}
        value={task}
        onChangeText={setTask}
        color="white"
      />
      <View style={styles.save_button}>
        <Button title="Kaydet" color={'white'} onPress={handleAddTask} />
      </View>
    </View>
  );
}

export default AddBar;
