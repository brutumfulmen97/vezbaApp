import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Layouts = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
      </View>
      <Box boxStyle={{backgroundColor: 'lightgreen', flex: 1, flexGrow: 1}}>
        <Text style={styles.boxText}>Box 1</Text>
      </Box>
      <Box boxStyle={{backgroundColor: 'coral'}}>
        <Text style={styles.boxText}>Box 2</Text>
      </Box>
      <Box boxStyle={{backgroundColor: 'pink', top: -50}}>
        <Text style={styles.boxText}>Box 3</Text>
      </Box>
      <Box boxStyle={{backgroundColor: 'yellow', flexGrow: 0}}>
        <Text style={styles.boxText}>Box 4</Text>
      </Box>
      <Box
        boxStyle={{backgroundColor: 'lime', alignSelf: 'flex-start', top: 20}}>
        <Text style={styles.boxText}>Box 5</Text>
      </Box>
      <Box boxStyle={{backgroundColor: 'orange', flexBasis: 300}}>
        <Text style={styles.boxText}>Box 6</Text>
      </Box>
      <Box
        boxStyle={{
          backgroundColor: 'lightblue',
          flex: 1,
        }}>
        <Text style={styles.boxText}>Box 7</Text>
      </Box>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'baseline',
    alignContent: 'center',
    rowGap: 50,
    columnGap: 5,
    position: 'relative',
  },
  buttonContainer: {
    position: 'absolute',
    top: 30,
    right: 30,
  },
  box: {
    maxWidth: 350,
    width: 250,
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 6,
  },
  boxText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Layouts;

function Box({
  boxStyle = {backgroundColor: '#000'},
  children,
}: {
  boxStyle: Record<string, any>;
  children: React.ReactNode;
}) {
  return <View style={[styles.box, boxStyle]}>{children}</View>;
}
