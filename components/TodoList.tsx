import React from 'react';
import {View, StyleSheet} from 'react-native';
import TodoForm from './TodoForm';
import FilteredTodos from './FilteredTodos';

const TodoList = () => {
  return (
    <View style={styles.container}>
      <TodoForm />
      <FilteredTodos />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TodoList;
