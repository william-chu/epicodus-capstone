import React from 'react';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Font } from 'expo';

const RootStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  }
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

});
