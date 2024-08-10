import './gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Notifications from './components/Notifications';
import Home from './components/Home';

const Drawer = createDrawerNavigator();

export const DrawerStack = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Dom',
          drawerLabel: 'Kuca',
          drawerActiveBackgroundColor: 'lightblue',
          drawerActiveTintColor: 'black',
          drawerContentStyle: {
            backgroundColor: 'lightpink',
          },
        }}
      />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
};

const DrawerApp = () => {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
};

export default DrawerApp;
