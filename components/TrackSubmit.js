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
import { genMealLogDateKey, displaySuspectMeals } from './helper';
import badResult from '../assets/images/badresult.png';
import goodResult from '../assets/images/goodresult.png';
import okayResult from '../assets/images/okayresult.png';

const compStyles = StyleSheet.create({
  // Component Specific Styles Go Here
});

export default function TrackSubmit(props) {
  let scaleInput = props.navigation.getParam('scaleInput');
  let time = props.navigation.getParam('timeInput');
  let mealLogDateKey = genMealLogDateKey(props.navigation.getParam('date'));
  let resultImage;
  let resultHeader;
  let resultText;
  let suspectHeader = <Text style={styles.h3}>Meals eaten 30-40 hours ago:</Text>;
  let resultSuspectMeals;
  let actionText = <Text style={styles.p}>View <Text style={styles.strong}>Analyze</Text> screen for additional information</Text>;
  let specialText = null;

  if (scaleInput !== 3 && scaleInput !== 4) {
    let suspectMealsToDisplay = displaySuspectMeals(props.screenProps.masterMealLog, mealLogDateKey, time);
    resultSuspectMeals =
    <View>
      <Text style={styles.h1}>{suspectMealsToDisplay[0]} - {suspectMealsToDisplay[1]}</Text>
      <Text style={styles.h4}>{suspectMealsToDisplay[2].join(', ')}</Text>
      <Text style={styles.h1}>{suspectMealsToDisplay[3]} - {suspectMealsToDisplay[4]}</Text>
      <Text style={styles.h4}>{suspectMealsToDisplay[5].join(', ')}</Text>
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
    suspectHeader = <Text style={styles.h3}>Keep it up!</Text>;
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
        </View>
        {resultText}
        <View>
          {suspectHeader}
          {resultSuspectMeals}
        </View>
        {actionText}
        {specialText}
        <TouchableOpacity onPress={() => {
            props.navigation.navigate('Home')
        }}>
          <Text style={styles.btnPurple}>DONE</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
