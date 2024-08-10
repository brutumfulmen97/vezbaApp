import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Home = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.jumpTo('Notifications')}
      />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
