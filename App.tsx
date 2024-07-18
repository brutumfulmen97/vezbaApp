import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bzvz from './components/Bzvz';
import Layouts from './components/Layouts';
import Dynamic from './components/Dynamic';
import Safe from './components/Safe';
import PokeApp from './components/PokeApp';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Bzvz} />
        <Stack.Screen name="Layouts" component={Layouts} />
        <Stack.Screen name="Dynamic" component={Dynamic} />
        <Stack.Screen name="Safe" component={Safe} />
        <Stack.Screen name="PokeApp" component={PokeApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
