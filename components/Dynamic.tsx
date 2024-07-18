import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';

const Dynamic = () => {
  //IMA BOLJI NACIN
  // const [dimenstions, setDimensions] = useState({
  //   window: Dimensions.get('window'),
  //   screen: Dimensions.get('screen'),
  // });

  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener(
  //     'change',
  //     ({window, screen}) => {
  //       setDimensions({window, screen});
  //     },
  //   );

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  // const {window, screen} = dimenstions;
  // const windowWidth = window.width;
  // const windowHeight = window.height;
  // const screenWidth = screen.width;
  // const screenHeight = screen.height;

  // ovo je bolje
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? '50%' : '30%',
            height: windowHeight > 800 ? '30%' : '20%',
          },
        ]}>
        <Text style={[styles.text, {fontSize: windowWidth > 500 ? 30 : 20}]}>
          DINAMIKA
        </Text>
      </View>
    </View>
  );
};

// dimension ne apdejtuje na rotiranje uredjaja
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'plum',
  },
  box: {
    // width: windowWidth > 400 ? '50%' : '30%',
    // height: windowHeight > 800 ? '30%' : '20%',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // fontSize: windowWidth > 400 ? 30 : 20,
    color: 'darkblue',
    textAlign: 'center',
  },
});

export default Dynamic;
