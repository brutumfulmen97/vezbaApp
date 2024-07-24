import React from 'react';
import {
  // ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  SectionList,
} from 'react-native';
import data from '../api/data.json';
import groupedData from '../api/grouped-data.json';

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
      <SectionList
        sections={groupedData}
        style={{
          borderColor: 'black',
          borderWidth: 2,
          backgroundColor: 'orange',
          padding: 20,
          marginBottom: 30,
        }}
        SectionSeparatorComponent={() => (
          <View style={{height: 10, width: '100%', backgroundColor: 'red'}} />
        )}
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
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <Text style={[styles.text, {textAlign: 'left'}]}>{section.type}</Text>
        )}
      />
      <FlatList
        style={{
          borderColor: 'black',
          borderWidth: 2,
          backgroundColor: 'orange',
        }}
        ItemSeparatorComponent={() => <View style={{height: 10, width: 50}} />}
        ListEmptyComponent={() => <Text>Empty</Text>}
        ListHeaderComponent={() => (
          <Text style={styles.headerText}>Header</Text>
        )}
        ListFooterComponent={() => (
          <Text style={styles.footerText}>Footer</Text>
        )}
        data={data}
        horizontal={false}
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
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'lightgreen',
  },
  footerText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'lightgreen',
  },
});

export default List;
