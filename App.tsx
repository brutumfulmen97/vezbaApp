// import './gesture-handler';
import {BSON} from 'realm';
import React, {useCallback, useEffect} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Bzvz from './components/Bzvz';
// import Layouts from './components/Layouts';
// import Dynamic from './components/Dynamic';
// import Safe from './components/Safe';
// import PokeApp from './components/PokeApp';
// import Form from './components/Form';
// import Login from './components/Login';
// import Networking from './components/Networking';
import {
  // Alert,
  Text,
  TouchableOpacity,
  // Pressable,
  FlatList,
  View,
} from 'react-native';
import {Task} from './models/Task';
import {useRealm, useQuery} from '@realm/react';
import {storage} from './storage';
import TodoList from './components/TodoList';

// const Stack = createNativeStackNavigator();

const App = () => {
  const tasks = useQuery(Task);
  storage.set('key', 'value');

  const realm = useRealm();

  const addTask = useCallback(() => {
    realm.write(() => {
      realm.create(Task, {
        _id: new BSON.ObjectId(),
        title: 'Task',
        description: 'Description',
      });
    });
  }, [realm]);

  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(realm.objects(Task));
    });
  }, [realm]);

  return (
    <View style={{flex: 1}}>
      <TodoList />
      <Text>Realmno</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
        }}
        onPress={addTask}>
        <Text>Add Task</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <Text>
            {item.title} - {item.description}
          </Text>
        )}
        keyExtractor={item => item._id.toString()}
      />
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen
    //       name="Home"
    //       component={Bzvz}
    //       options={{
    //         title: 'djesi lesi',
    //         headerStyle: {
    //           backgroundColor: '#521322',
    //         },
    //         headerTitleStyle: {
    //           fontWeight: 'bold',
    //         },
    //         headerTintColor: 'white',
    //         headerLeft: () => (
    //           <Pressable onPress={() => Alert.alert('cao')}>
    //             <Text
    //               style={{
    //                 color: 'white',
    //                 marginHorizontal: 10,
    //                 fontWeight: 'bold',
    //               }}>
    //               Left
    //             </Text>
    //           </Pressable>
    //         ),
    //         headerRight: () => (
    //           <Pressable onPress={() => console.log(123)}>
    //             <Text
    //               style={{
    //                 color: 'white',
    //                 marginHorizontal: 10,
    //                 fontWeight: 'bold',
    //               }}>
    //               Right
    //             </Text>
    //           </Pressable>
    //         ),
    //       }}
    //     />
    //     <Stack.Screen
    //       options={{
    //         headerShown: false,
    //       }}
    //       name="Layouts"
    //       component={Layouts}
    //     />
    //     <Stack.Screen name="Dynamic" component={Dynamic} />
    //     <Stack.Screen name="Safe" component={Safe} />
    //     <Stack.Screen name="PokeApp" component={PokeApp} />
    //     <Stack.Screen
    //       name="Form"
    //       component={Form}
    //       options={({route}) => {
    //         return {
    //           // @ts-ignore
    //           title: route.params?.title ?? 'Form',
    //         };
    //       }}
    //     />
    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //       initialParams={{
    //         name: 'John Doe',
    //       }}
    //     />
    //     <Stack.Screen name="Networking" component={Networking} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
