import React from 'react';
import {StyleSheet, SafeAreaView, Platform} from 'react-native';
import PokemonCard from './PokemonCard';

const PokeApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: '#f5f5f5',
  },
});

export default PokeApp;
