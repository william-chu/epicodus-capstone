import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { LinearGradient } from 'expo';
import { createStackNavigator } from 'react-navigation';

import stomachImg from './assets/images/stomach.png';

class HomeScreen extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#6F62AB', '#B0A1F2']}
        style = { styles.container }>
        <View>
          <Image
            resizeMode={'cover'}
            source={stomachImg}
            style={styles.canvas} />
          <Text>Discover your dietary triggers</Text>
          <Text>for better digestive health</Text>
        </View>
      </LinearGradient>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
 },
 {
   initialRouteName: 'Home',
 }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6F62AB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
