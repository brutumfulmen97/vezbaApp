import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';
import data from '../api/data.json';

const List = () => {
  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      {/* ovo nije dobro */}
      {/* {data.map(item => {
          return (
            <View key={item.id}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        })} */}
      <FlatList
        style={{
          borderColor: 'black',
          borderWidth: 2,
          backgroundColor: 'orange',
        }}
        data={data}
        horizontal={true}
        renderItem={({item}) => (
          <View
            style={{
              padding: 20,
              margin: 10,
              backgroundColor: 'lightblue',
              borderColor: 'black',
              borderWidth: 2,
              borderRadius: 10,
              shadowColor: 'black',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.26,
              shadowRadius: 10,
              elevation: 5,
            }}>
            <Text style={styles.text}>{item.type}</Text>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
    padding: 20,
    marginTop: StatusBar.currentHeight || 0,
  },
  box: {
    padding: 20,
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default List;
