import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bzvz from './components/Bzvz';
import Layouts from './components/Layouts';
import Dynamic from './components/Dynamic';
import Safe from './components/Safe';
import PokeApp from './components/PokeApp';
import Form from './components/Form';
import Login from './components/Login';
import Networking from './components/Networking';

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
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Networking" component={Networking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
