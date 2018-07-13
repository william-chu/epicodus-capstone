import React from 'react';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
 },
 {
   initialRouteName: 'Login',
 }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({

});
