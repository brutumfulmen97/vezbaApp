import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Switch,
} from 'react-native';

const Form = () => {
  const [name, setName] = useState('');
  const [message, setMesasge] = useState('');
  const [bool, setBool] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Unesite ime"
        secureTextEntry={false}
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardAppearance="dark"
      />
      <TextInput
        style={[styles.input, styles.multiLineText]}
        value={message}
        onChangeText={setMesasge}
        placeholder="Unesite poruku"
        secureTextEntry={false}
        keyboardType="default"
        autoCapitalize="sentences"
        autoCorrect={false}
        keyboardAppearance="dark"
        multiline={true}
        numberOfLines={4}
      />
      <View style={styles.switchContainer}>
        <Text>Moze?</Text>
        <Switch
          value={bool}
          onValueChange={() => setBool(prev => !prev)}
          trackColor={{false: 'red', true: 'green'}}
          thumbColor="#f4f3f4"
        />
      </View>
      <Text style={styles.text}>Moje ime je: {name}</Text>
      <Text style={styles.text}>Moja poruka je: {message}</Text>
      <Text style={styles.text}>Moze? {bool ? 'Moze' : 'Ne moze'}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingTop: StatusBar.currentHeight || 0,
  },
  multiLineText: {
    textAlignVertical: 'top',
    minHeight: 100,
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
  switchContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default Form;
