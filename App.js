import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import LogMeal from './components/LogMeal';
import Track from './components/Track';
import BristolScale from './components/BristolScale';
import Analyze from './components/Analyze';
import { Text, View } from 'react-native';
import styles from './components/styles';
import { createStackNavigator } from 'react-navigation';
import { Font } from 'expo';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Oswald Regular': require('./assets/fonts/Oswald Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return <RootStack />;
  }
}

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
  BristolScale: {
    screen: BristolScale,
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
