import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import LogMeal from './components/LogMeal';
import Track from './components/Track';
import Analyze from './components/Analyze';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Font } from 'expo';

const RootStack = createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      }
    },
    LogMeal: {
      screen: LogMeal,
      navigationOptions: {
      }
    },
    Track: {
      screen: Track,
      navigationOptions: {
      }
    },
    Analyze: {
      screen: Analyze,
      navigationOptions: {
      }
    },
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
