import React from 'react';
import {View, Text, StyleSheet, Switch, FlatList} from 'react-native';
import {selector, useRecoilState, useRecoilValue} from 'recoil';
import {todoListFilterState, todoListState} from '../RecoilProvider';
import TodoItem from './TodoItem';

const FilteredTodos = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const filteredTodos = selector({
    key: 'filteredTodos',
    get: ({get}) => {
      const filter = get(todoListFilterState);
      const todos = get(todoListState);

      switch (filter) {
        case 'Show Completed':
          return todos.filter(todo => todo.isComplete);
        case 'Show Incomplete':
          return todos.filter(todo => !todo.isComplete);
        default:
          return todos;
      }
    },
  });

  const data = useRecoilValue(filteredTodos);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FilteredTodos</Text>
      <Switch
        value={filter === 'Show All'}
        onValueChange={() => setFilter('Show All')}
      />
      <Text>Show All</Text>
      <Switch
        value={filter === 'Show Completed'}
        onValueChange={() => setFilter('Show Completed')}
      />
      <Text>Show Complete</Text>
      <Switch
        value={filter === 'Show Incomplete'}
        onValueChange={() => setFilter('Show Incomplete')}
      />
      <Text>Show Incomplete</Text>
      {data?.length > 0 && (
        <FlatList
          data={data}
          renderItem={({item}) => <TodoItem {...item} />}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default FilteredTodos;
