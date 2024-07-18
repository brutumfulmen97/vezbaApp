import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bzvz from './components/Bzvz';
import Layouts from './components/Layouts';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Bzvz} />
        <Stack.Screen name="Layouts" component={Layouts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
