/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const pizzaImg = require('./assets/pizza.png');

const MyIcon = () => <Icon name="rocket" size={30} color="#900" />;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isVisible, setIsVisible] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: backgroundStyle.backgroundColor,
      }}>
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          padding: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={true}>
        <ImageBackground source={pizzaImg} style={styles.backgroundImage}>
          <Text
            style={{
              ...styles.text,
              color: 'white',
              fontSize: 60,
              textAlign: 'center',
            }}>
            Djesi lesi
          </Text>
        </ImageBackground>
        <Button
          title="Button"
          onPress={() => console.log('Pressed')}
          color={'#900'}
        />
        <Text
          style={{
            fontSize: 40,
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          deleniti harum ut eum commodi voluptate, dignissimos dolor et adipisci
          aspernatur neque expedita amet. Maiores voluptate, dolores doloremque
          maxime totam voluptates.
        </Text>
        <Pressable
          onPress={() => setIsVisible(true)}
          onLongPress={() => console.log('Long Pressed')}>
          <Image source={pizzaImg} style={styles.image} />
        </Pressable>

        <Text style={styles.text}>
          Cao <Text style={styles.bold}>Svete</Text>
        </Text>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          deleniti harum ut eum commodi voluptate, dignissimos dolor et adipisci
          aspernatur neque expedita amet. Maiores voluptate, dolores doloremque
          maxime totam voluptates.
        </Text>
        <MyIcon />
        <Text
          style={{
            fontSize: 40,
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          deleniti harum ut eum commodi voluptate, dignissimos dolor et adipisci
          aspernatur neque expedita amet. Maiores voluptate, dolores doloremque
          maxime totam voluptates.
        </Text>
        <Text
          style={{
            fontSize: 40,
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          deleniti harum ut eum commodi voluptate, dignissimos dolor et adipisci
          aspernatur neque expedita amet. Maiores voluptate, dolores doloremque
          maxime totam voluptates.
        </Text>
        <Text
          style={{
            fontSize: 40,
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          deleniti harum ut eum commodi voluptate, dignissimos dolor et adipisci
          aspernatur neque expedita amet. Maiores voluptate, dolores doloremque
          maxime totam voluptates.
        </Text>
        <Text
          style={{
            fontSize: 40,
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          deleniti harum ut eum commodi voluptate, dignissimos dolor et adipisci
          aspernatur neque expedita amet. Maiores voluptate, dolores doloremque
          maxime totam voluptates.
        </Text>
        <Text
          style={{
            fontSize: 40,
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          deleniti harum ut eum commodi voluptate, dignissimos dolor et adipisci
          aspernatur neque expedita amet. Maiores voluptate, dolores doloremque
          maxime totam voluptates.
        </Text>
        <Modal
          visible={isVisible}
          onRequestClose={() => setIsVisible(false)}
          animationType="slide"
          presentationStyle="pageSheet">
          <View
            style={{
              margin: 20,
              borderRadius: 40,
              backgroundColor: 'slateblue',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}>
            <Text style={{fontSize: 40, color: 'white'}}>Hello</Text>
            <Pressable
              onPress={() => setIsVisible(false)}
              style={{
                position: 'absolute',
                top: 30,
                right: 30,
              }}>
              <Icon name="close" size={30} color="white" />
            </Pressable>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'plum',
    borderWidth: 5,
    flex: 1,
    gap: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    padding: 10,
    borderBottomColor: 'slateblue',
    borderBottomWidth: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    padding: 60,
  },
});

export default App;
