import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  Alert,
} from 'react-native';
import CustomButton from './CustomButton/CustomButton';

const Safe = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Safe</Text>
          <CustomButton
            title="Press me"
            onPress={() => Alert.alert('Hello', 'sta ima?')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum',
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  box: {
    padding: 20,
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 30,
    ...Platform.select({
      ios: {
        color: 'red',
        fontStyle: 'normal',
      },
      android: {
        fontStyle: 'italic',
        color: 'blue',
      },
    }),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Safe;
