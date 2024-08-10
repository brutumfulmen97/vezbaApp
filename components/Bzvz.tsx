import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Greet from './Greet';
import StylesComponent from './StylesComponent';
const pizzaImg = require('../assets/pizza.png');

const MyIcon = () => <Icon name="rocket" size={30} color="#900" />;

function Bzvz({navigation}: {navigation: any}): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  useEffect(() => {
    const t = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(t);
    };
  }, []);

  return isLoading ? (
    <View style={{...styles.container, backgroundColor: 'lightblue'}}>
      <ActivityIndicator size="large" color="slateblue" />
    </View>
  ) : (
    <View
      style={{
        ...styles.container,
        backgroundColor: backgroundStyle.backgroundColor,
      }}>
      <StatusBar
        backgroundColor="lightpink"
        barStyle="dark-content"
        hidden={isHidden}
      />
      <ScrollView
        onScroll={event => {
          if (event.nativeEvent.contentOffset.y > 100) {
            setIsHidden(true);
          } else {
            setIsHidden(false);
          }
        }}
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          padding: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={true}>
        <Button title="Safe" onPress={() => navigation.navigate('Safe')} />
        <Button
          title="Networking"
          onPress={() =>
            navigation.navigate('Networking', {
              name: 'Vlatko',
              age: 27,
            })
          }
        />
        <Button
          title="PokeApp"
          onPress={() => navigation.navigate('PokeApp')}
        />
        <Button
          title="Form"
          onPress={() =>
            navigation.navigate('Form', {
              title: 'Ovo je forma bato moi',
            })
          }
        />
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <Button
          title="Layouts"
          onPress={() => navigation.navigate('Layouts')}
        />
        <Button
          title="Dynamic"
          onPress={() => navigation.navigate('Dynamic')}
        />
        <StylesComponent />
        <Greet name={'Vlatko'} />
        <View style={{marginBottom: 20}}>
          <Button
            title="Alert"
            onPress={() =>
              Alert.alert(
                'Hello',
                'World',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                  },
                  {
                    text: 'Ok',
                    onPress: () => console.log('Ok Pressed'),
                  },
                ],
                {
                  cancelable: true,
                  onDismiss: () => console.log('Dismissed'),
                },
              )
            }
          />
        </View>
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

export default Bzvz;
