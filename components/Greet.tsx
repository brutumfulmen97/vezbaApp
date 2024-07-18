import React from 'react';
import {View, Text} from 'react-native';

const Greet = ({name}: {name: string}) => {
  return (
    <View
      style={{
        marginBottom: 10,
      }}>
      <Text>Greet {name}</Text>
    </View>
  );
};

export default Greet;
