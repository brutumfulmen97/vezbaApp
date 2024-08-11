import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {useRecoilState} from 'recoil';
import {todoListState} from '../RecoilProvider';

const TodoItem = ({
  id,
  text,
  isComplete,
}: {
  id: string;
  text: string;
  isComplete: boolean;
}) => {
  const [, setTodos] = useRecoilState(todoListState);

  const toggleComplete = () => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? {...todo, isComplete: !todo.isComplete} : todo,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Switch value={isComplete} onChange={toggleComplete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TodoItem;
