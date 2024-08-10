import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Home from './components/Home';
import Notifications from './components/Notifications';
import {Text} from 'react-native';
import {DrawerStack} from './DrawerStack';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: 'below-icon',
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: '#ccc',
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Kuca',
            tabBarIcon: ({size, color}) => (
              <Text
                style={{
                  fontSize: size,
                  color: color,
                }}>
                K
              </Text>
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: 'Kuca',
            tabBarIcon: ({size, color}) => (
              <Text
                style={{
                  fontSize: size,
                  color: color,
                }}>
                N
              </Text>
            ),
            tabBarBadge: 1,
          }}
        />
        <Tab.Screen
          name="Drawer"
          component={DrawerStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Drawer',
            tabBarIcon: ({size, color}) => (
              <Text
                style={{
                  fontSize: size,
                  color: color,
                }}>
                ↕
              </Text>
            ),
            tabBarBadge: 1,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabStack;
