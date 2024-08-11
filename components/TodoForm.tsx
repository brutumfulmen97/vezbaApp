import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text, Pressable} from 'react-native';
import {useRecoilState} from 'recoil';
import {todoListState} from '../RecoilProvider';

const TodoForm = () => {
  const [input, setInput] = useState('');

  const [todos, setTodos] = useRecoilState(todoListState);

  return (
    <View style={styles.container}>
      <Text>Add a todo</Text>
      <TextInput
        style={styles.input}
        value={input}
        placeholder="Enter a todo"
        onChangeText={text => {
          setInput(text);
        }}
      />
      <Pressable
        style={styles.submitButton}
        onPress={() => {
          setTodos(prev => [
            ...prev,
            {id: (todos.length + 1).toString(), text: input, isComplete: false},
          ]);
          setInput('');
        }}>
        <Text style={{color: 'white'}}>Add todo</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
});

export default TodoForm;
