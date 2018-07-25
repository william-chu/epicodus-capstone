import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import LogMeal from './components/LogMeal';
import LogMealSubmit from './components/LogMealSubmit';
import Track from './components/Track';
import TrackSubmit from './components/TrackSubmit';
import BristolScale from './components/BristolScale';
import Analyze from './components/Analyze';
import { genMealLogDateKey, getSuspectMeals } from './components/helper';
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
        20180718: {
          'Breakfast': ['raspberry scone', 'orange juice'],
          'Lunch': ['pepperoni pizza', 'french fries'],
          'Dinner': ['pho', 'fried wontons'],
        },
        20180719: {
          'Breakfast': ['cinnamon raisin bread', 'milk'],
          'Lunch': ['lasagna', 'caesar salad'],
          'Dinner': ['chicken burrito', 'chips and salsa'],
        },
        20180720: {
          'Breakfast': ['eggs benedict', 'latte'],
          'Lunch': ['falafel', 'dolmas', 'yogurt sauce'],
          'Dinner': ['pad thai', 'thai iced tea'],
        },
      },
      suspectMeals: {},
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Oswald Regular': require('./assets/fonts/Oswald Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  // Logs meals under YYYYMMDD > Breakfast/Lunch/Dinner > Meal Array, branching prevents overwriting of existing objects
  handleLogMealSubmit = (date, mealArr, meal) => {
    let newMealLogDateKey = genMealLogDateKey(date);
    let newMasterMealLog;
    if (this.state.masterMealLog[newMealLogDateKey] === undefined) {
      newMasterMealLog = Object.assign({}, this.state.masterMealLog, {
        [newMealLogDateKey]: {
          ['Breakfast']: [] ,
          ['Lunch']: [] ,
          ['Dinner']: [] ,
          [meal]: mealArr
        }
      });
    } else if (this.state.masterMealLog[newMealLogDateKey][meal] === [] ) {
      newMasterMealLog = Object.assign({}, this.state.masterMealLog);
      newMasterMealLog[newMealLogDateKey][meal] = mealArr;
    } else {
      newMasterMealLog = Object.assign({}, this.state.masterMealLog);
      newMasterMealLog[newMealLogDateKey][meal] = newMasterMealLog[newMealLogDateKey][meal].concat(mealArr);
    }
    this.setState({ masterMealLog: newMasterMealLog });
  }

  // Tags meals correlated with sub-optimal wellness
  handleTrackSubmit = (date, scale, time) => {
    if (scale < 3 || scale > 4) {
      let lookupMealLogDateKey = genMealLogDateKey(date);
      // Generate empty meal log if missing
      if (this.state.masterMealLog[lookupMealLogDateKey] === undefined) {
        let newMasterMealLog = Object.assign({}, this.state.masterMealLog, {
          [lookupMealLogDateKey]: {}
        });
        this.setState({ masterMealLog: newMasterMealLog },
          () => {
            this.setState({ suspectMeals: getSuspectMeals(this.state.masterMealLog, this.state.suspectMeals, lookupMealLogDateKey, time) });
          }
        );
      } else {
        this.setState({ suspectMeals: getSuspectMeals(this.state.masterMealLog, this.state.suspectMeals, lookupMealLogDateKey, time) });
      }
    }
  }

  render() {
    console.log(this.state);
    return this.state.fontLoaded && <RootStack
      screenProps={{
        onTrackSubmit: this.handleTrackSubmit,
        onLogMealSubmit: this.handleLogMealSubmit,
        masterMealLog: this.state.masterMealLog,
        suspectMeals: this.state.suspectMeals,
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
