import React from 'react';
import {Text, Pressable} from 'react-native';

const CustomButton = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 10,
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
        }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
