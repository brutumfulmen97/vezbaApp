import React from 'react';
import {Platform, View, Text, StyleSheet} from 'react-native';

const StylesComponent = () => {
  return (
    <View style={[styles.container]}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style inheritence <Text style={styles.bold}>BOLD</Text>
        </Text>
      </View>
      <View style={[styles.red, styles.box, styles.boxShadow]}>
        <Text style={styles.text}>RED</Text>
      </View>
      <View style={[styles.blue, styles.box, styles.boxShadow]}>
        <Text style={styles.text}>BLUE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkMode: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    //ovo nece da moze
    color: 'white',
  },
  darkModeText: {
    color: 'white',
  },
  bold: {
    // style inheritance radi samo od texta do texta
    fontWeight: 'bold',
  },
  box: {
    width: 250,
    height: 250,
    alignContent: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 6,
  },
  boxShadow:
    Platform.OS === 'ios'
      ? {
          shadowColor: '#333333',
          shadowOffset: {width: 6, height: 6},
          shadowOpacity: 1,
          shadowRadius: 3,
        }
      : {
          elevation: 15,
          shadowColor: 'black',
        },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 10,
    // ios na text ne radi borderRadius
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
  },
  red: {
    backgroundColor: 'red',
    padding: 10,
  },
  blue: {
    backgroundColor: 'blue',
    padding: 10,
  },
});

export default StylesComponent;
