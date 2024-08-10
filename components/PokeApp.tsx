import React, {useLayoutEffect} from 'react';
import {StyleSheet, SafeAreaView, Platform, FlatList} from 'react-native';
import PokemonCard from './PokemonCard';
import {useNavigation} from '@react-navigation/native';

const PokeApp = () => {
  const charmanderData = {
    name: 'Charmander',
    image: require('../assets/charmander.png'),
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weaknesses: ['Water', 'Rock'],
  };

  const squirtleData = {
    name: 'Squirtle',
    image: require('../assets/squirtle.png'),
    type: 'Water',
    hp: 44,
    moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Withdraw'],
    weaknesses: ['Electric', 'Grass'],
  };

  const bulbasaurData = {
    name: 'Bulbasaur',
    image: require('../assets/bulbasaur.png'),
    type: 'Grass',
    hp: 45,
    moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  };

  const pikachuData = {
    name: 'Pikachu',
    image: require('../assets/pikachu.png'),
    type: 'Electric',
    hp: 35,
    moves: ['Quick Attack', 'Thunderbolt', 'Tail Whip', 'Growl'],
    weaknesses: ['Ground'],
  };

  const pokemons = [charmanderData, squirtleData, bulbasaurData, pikachuData];

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'POKEMONOVI',
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemons}
        renderItem={({item}) => <PokemonCard {...item} />}
        keyExtractor={item => item.name}
      />
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
