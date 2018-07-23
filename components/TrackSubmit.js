import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo';
import styles from './styles';
import { genMealLogDateKey } from './helper';
import badResult from '../assets/images/badresult.png';
import goodResult from '../assets/images/goodresult.png';
import okayResult from '../assets/images/okayresult.png';

const compStyles = StyleSheet.create({
  // Component Specific Styles Go Here
});

export default function TrackSubmit(props) {
  let scaleInput = props.navigation.getParam('scaleInput');
  let time = props.navigation.getParam('timeInput');
  let date = props.navigation.getParam('date');
  let masterMealLog = props.screenProps.masterMealLog;
  let mealLogDateKey = genMealLogDateKey(date);
  let lookupMeal1;
  let lookupMeal2;
  let lookupMealIndex1;
  let lookupMealIndex2;
  let lookupMealDate1;
  let lookupMealDate2;
  let suspectHeader = <Text style={styles.h3}>Meals eaten 30-40 hours ago:</Text>;
  let resultSuspectMeals;
  let resultImage;
  let resultHeader;
  let resultText;
  let actionText = <Text style={styles.p}>Tap <Text style={styles.strong}>Analyze</Text> for additional information</Text>;
  let specialText = null;

  if ( scaleInput !== 3 && scaleInput !== 4) {
    if (time === 'Morning') {
      lookupMeal1 = 'Dinner';
      lookupMeal2 = 'Lunch';
      lookupMealIndex1 = (Object.keys(masterMealLog).indexOf(mealLogDateKey)) - 2;
      lookupMealIndex2 = lookupMealIndex1;
    } else if (time === 'Afternoon') {
      lookupMeal1 = 'Breakfast';
      lookupMeal2 = 'Dinner';
      lookupMealIndex1 = (Object.keys(masterMealLog).indexOf(mealLogDateKey)) - 1;
      lookupMealIndex2 = lookupMealIndex1 - 1 ;
    } else {
      lookupMeal1 = 'Lunch';
      lookupMeal2 = 'Breakfast';
      lookupMealIndex1 = (Object.keys(masterMealLog).indexOf(mealLogDateKey)) - 1;
      lookupMealIndex2 = lookupMealIndex1;
    }
    lookupMealDate1 = Object.keys(masterMealLog)[lookupMealIndex1];
    lookupMealDate2 = Object.keys(masterMealLog)[lookupMealIndex2];
    resultSuspectMeals =
      <View>
        <Text style={styles.h1}>{lookupMealDate1} - {lookupMeal1}</Text>
        <Text style={styles.h4}>{(masterMealLog[lookupMealDate1][lookupMeal1]).join(', ')}</Text>
        <Text style={styles.h1}>{lookupMealDate2} - {lookupMeal2}</Text>
        <Text style={styles.h4}>{(masterMealLog[lookupMealDate2][lookupMeal2]).join(', ')}</Text>
      </View>;
  }

  if (scaleInput === 1 || scaleInput === 7) {
    resultImage = <Image source={badResult} style={styles.headerImage} />;
    resultHeader = 'Sound the Alarm';
    resultText = <Text style={styles.h3}>Your symptoms are severe.</Text>;
    specialText = <Text style={styles.redText}>If your issues persist, please seek professional medical attention.</Text>
  } else if (scaleInput === 3 || scaleInput === 4) {
    resultImage = <Image source={goodResult} style={styles.headerImage} />;
    resultHeader = 'In the Zone';
    resultText = <Text style={styles.h3}>You are in the optimal range.</Text>;
    suspectHeader = null;
    resultSuspectMeals = <Text style={styles.h3}>Keep it up!</Text>;
  } else {
    resultImage = <Image source={okayResult} style={styles.headerImage} />;
    resultHeader = 'Room to Improve';
    resultText = <Text style={styles.h3}>Your symptoms are moderate.</Text>;
  }

  return (
    <LinearGradient
      colors={['#B0A1F2', '#FFF', '#FFF']}
      style={styles.gradient}>
      <View style={styles.container}>
        <View style={styles.flex}>
          {resultImage}
          <Text style={styles.h1}>{resultHeader}</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')} >
            <Text style={styles.btn}>GO BACK</Text>
          </TouchableOpacity>
        </View>
        {resultText}
        <View>
          {suspectHeader}
          {resultSuspectMeals}
        </View>
        {actionText}
        {specialText}
      </View>
    </LinearGradient>
  );
}
