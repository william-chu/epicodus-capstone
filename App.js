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
  // Logs meals under YYYYMMDD > Breakfast/Lunch/Dinner > Meal Array, branching prevents overwriting of existing objects
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
  // Logs suspect meals under YYYYMMDD > Breakfast/Lunch/Dinner > Meal Array, branching prevents overwriting of existing objects
  getSuspectMeals = (mealLogDateKey, time) => {
    let lookupMeal1;
    let lookupMeal2;
    let lookupMealIndex1;
    let lookupMealIndex2;
    let lookupMealDate1;
    let lookupMealDate2;
    if (time === 'Morning') {
      lookupMeal1 = 'Dinner';
      lookupMeal2 = 'Lunch';
      lookupMealIndex1 = (Object.keys(this.state.masterMealLog).indexOf(mealLogDateKey)) - 2;
      lookupMealIndex2 = lookupMealIndex1;
    } else if (time === 'Afternoon') {
      lookupMeal1 = 'Breakfast';
      lookupMeal2 = 'Dinner';
      lookupMealIndex1 = (Object.keys(this.state.masterMealLog).indexOf(mealLogDateKey)) - 1;
      lookupMealIndex2 = lookupMealIndex1 - 1 ;
    } else {
      lookupMeal1 = 'Lunch';
      lookupMeal2 = 'Breakfast';
      lookupMealIndex1 = (Object.keys(this.state.masterMealLog).indexOf(mealLogDateKey)) - 1;
      lookupMealIndex2 = lookupMealIndex1;
    }
    lookupMealDate1 = Object.keys(this.state.masterMealLog)[lookupMealIndex1];
    lookupMealDate2 = Object.keys(this.state.masterMealLog)[lookupMealIndex2];
    if (lookupMealDate1 === lookupMealDate2 && this.state.suspectMeals[lookupMealDate1] === undefined) {
      newSuspectMeals = Object.assign({}, this.state.suspectMeals, {
        [lookupMealDate1]: { [lookupMeal1]: this.state.masterMealLog[lookupMealDate1][lookupMeal1] },
      });
      newSuspectMeals[lookupMealDate2][lookupMeal2] = this.state.masterMealLog[lookupMealDate2][lookupMeal2];
    } else if (this.state.suspectMeals[lookupMealDate1] === undefined && this.state.suspectMeals[lookupMealDate2] === undefined) {
      newSuspectMeals = Object.assign({}, this.state.suspectMeals, {
        [lookupMealDate1]: { [lookupMeal1]: this.state.masterMealLog[lookupMealDate1][lookupMeal1] },
        [lookupMealDate2]: { [lookupMeal2]: this.state.masterMealLog[lookupMealDate2][lookupMeal2] }
      });
    } else if (lookupMealDate1 !== lookupMealDate2 && this.state.suspectMeals[lookupMealDate1] === undefined) {
      newSuspectMeals = Object.assign({}, this.state.suspectMeals, {
        [lookupMealDate1]: { [lookupMeal1]: this.state.masterMealLog[lookupMealDate1][lookupMeal1] },
      });
      newSuspectMeals[lookupMealDate2][lookupMeal2] = this.state.masterMealLog[lookupMealDate2][lookupMeal2];
    } else if (lookupMealDate1 !== lookupMealDate2 && this.state.suspectMeals[lookupMealDate2] === undefined) {
      newSuspectMeals = Object.assign({}, this.state.suspectMeals, {
        [lookupMealDate2]: { [lookupMeal2]: this.state.masterMealLog[lookupMealDate2][lookupMeal2] },
      });
      newSuspectMeals[lookupMealDate1][lookupMeal1] = this.state.masterMealLog[lookupMealDate1][lookupMeal1];
    } else {
      newSuspectMeals = Object.assign({}, this.state.suspectMeals);
      newSuspectMeals[lookupMealDate1][lookupMeal1] = this.state.masterMealLog[lookupMealDate1][lookupMeal1];
      newSuspectMeals[lookupMealDate2][lookupMeal2] = this.state.masterMealLog[lookupMealDate2][lookupMeal2];
    }
    this.setState({ suspectMeals: newSuspectMeals });
  }
  // Tags meals correlated with sub-optimal wellness
  handleTrackSubmit = (date, scale, time) => {
    if (scale < 3 || scale > 4) {
      let lookupMealLogDateKey = this.genMealLogDateKey(date);
      // Generate empty meal log if missing
      if (this.state.masterMealLog[lookupMealLogDateKey] === undefined) {
        newMasterMealLog = Object.assign({}, this.state.masterMealLog, {
          [lookupMealLogDateKey]: {}
        });
        this.setState({ masterMealLog: newMasterMealLog },
          () => {
            this.getSuspectMeals(lookupMealLogDateKey, time);
          }
        );
      } else {
        this.getSuspectMeals(lookupMealLogDateKey, time);
      }
    }
  }

  render() {
    console.log(this.state.suspectMeals);
    return this.state.fontLoaded && <RootStack
      screenProps={{
        onTrackSubmit: this.handleTrackSubmit,
        onLogMealSubmit: this.handleLogMealSubmit,
        masterMealLog: this.state.masterMealLog,
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
