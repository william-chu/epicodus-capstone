import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import LogMeal from './components/LogMeal';
import LogMealSubmit from './components/LogMealSubmit';
import Track from './components/Track';
import TrackSubmit from './components/TrackSubmit';
import BristolScale from './components/BristolScale';
import Analyze from './components/Analyze';
import { Text, View } from 'react-native';
import styles from './components/styles';
import { createStackNavigator } from 'react-navigation';
import { Font } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      masterMealLog: {},
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Oswald Regular': require('./assets/fonts/Oswald Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  handleLogMealSubmit = (date, mealArr, meal) => {
    let newMealLogObjKey =
      date.getFullYear().toString() +
      (date.getMonth() + 1).toString() +
      date.getDate().toString();
    let newMasterMealLog = Object.assign({}, this.state.masterMealLog, {
      [newMealLogObjKey]: meal, mealArr
    });
    this.setState({ masterMealLog: newMasterMealLog });
  }
  handleTrackSubmit = () => {
    console.log('handleTrackSubmit fired');
  }

  render() {
    console.log(this.state.masterMealLog);
    return this.state.fontLoaded && <RootStack
      screenProps={{
        onTrackSubmit: this.handleTrackSubmit,
        onLogMealSubmit: this.handleLogMealSubmit
      }}
    />;
  }
}

const RootStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      headerStyle: {
        borderBottomWidth: 0,
      },
      headerTransparent: true,
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
      headerStyle: {
        borderBottomWidth: 0,
      },
      headerTransparent: true,
    }
  },
  LogMeal: {
    screen: LogMeal,
    navigationOptions: {
      headerStyle: {
        borderBottomWidth: 0,
      },
      headerTransparent: true,
    }
  },
  LogMealSubmit: {
    screen: LogMealSubmit,
    navigationOptions: {
      header: null,
      headerStyle: {
        borderBottomWidth: 0,
      },
      headerTransparent: true,
    }
  },
  Track: {
    screen: Track,
    navigationOptions: {
      headerStyle: {
        borderBottomWidth: 0,
      },
      headerTransparent: true,
    }
  },
  TrackSubmit: {
    screen: TrackSubmit,
    navigationOptions: {
      header: null,
      headerStyle: {
        borderBottomWidth: 0,
      },
      headerTransparent: true,
    }
  },
  BristolScale: {
    screen: BristolScale,
    navigationOptions: {
      headerStyle: {
        borderBottomWidth: 0,
      },
      headerTransparent: true,
    }
  },
  Analyze: {
    screen: Analyze,
    navigationOptions: {
      headerStyle: {
        borderBottomWidth: 0,
      },
      headerTransparent: true,
    }
  },
},
{
  initialRouteName: 'Login',
}
);
