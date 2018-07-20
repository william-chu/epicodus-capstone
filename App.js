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
      masterMealLog: {
        20180719: {
          'Breakfast': ['cinnamon raison bread', 'milk'],
        },
      },
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Oswald Regular': require('./assets/fonts/Oswald Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  genMealLogDateKey = (date) => {
    let dateNum = date.getDate();
    let monthNum = (date.getMonth() + 1);
    let dateStr;
    let monthStr;
    if (dateNum > 9) {
      dateStr = dateNum.toString();
    } else {
      dateStr = '0' + dateNum.toString();
    }
    if (monthNum > 9) {
      monthStr = monthNum.toString();
    } else {
      monthStr = '0' + monthNum.toString();
    }
    return (
      date.getFullYear().toString() +
      monthStr +
      dateStr
    );
  }

  handleLogMealSubmit = (date, mealArr, meal) => {
    let newMealLogDateKey = this.genMealLogDateKey(date);
    let newMasterMealLog;
    if (this.state.masterMealLog[newMealLogDateKey] === undefined) {
      newMasterMealLog = Object.assign({}, this.state.masterMealLog, {
        [newMealLogDateKey]: { [meal]: mealArr }
      });
    } else if (this.state.masterMealLog[newMealLogDateKey][meal] === undefined ) {
      newMasterMealLog = Object.assign({}, this.state.masterMealLog);
      newMasterMealLog[newMealLogDateKey][meal] = mealArr;
    } else {
      newMasterMealLog = Object.assign({}, this.state.masterMealLog);
      newMasterMealLog[newMealLogDateKey][meal] = newMasterMealLog[newMealLogDateKey][meal].concat(mealArr);
    }
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
