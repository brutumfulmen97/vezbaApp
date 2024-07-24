import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';

const Form = () => {
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.text}>Moje ime je: {name}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: StatusBar.currentHeight || 0,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  input: {
    padding: 10,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Form;
