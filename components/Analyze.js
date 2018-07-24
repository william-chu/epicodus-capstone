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
import analyzeBtn from '../assets/images/analyzebtn.png';

const compStyles = StyleSheet.create({
  // Component Specific Styles Go Here
});

function getSuspectMealsArr(suspectMealsList) {
    let output = [];
    suspectMealsList.forEach(function(dateKey) {
        (Object.values(dateKey)).forEach(function(meal) {
          output.push(meal.join(', '));
        });
    });
    return output;
}

export default function Analyze(props) {
  let suspectMealsArr = getSuspectMealsArr(Object.values(props.screenProps.suspectMeals));
  console.log(suspectMealsArr);
  return (
    <LinearGradient
      colors={['#B0A1F2', '#FFF', '#FFF']}
      style={styles.gradient}>
      <View style={styles.container}>
        <View style={styles.flex}>
          <Image
            source={analyzeBtn}
            style={styles.headerImage}
          />
          <Text style={styles.h1}>
            Our Analysis
          </Text>
        </View>
        <Text style={styles.h4}>
          These are the logged meals that correlated with you not feeling well in the last 30 days:
        </Text>
        <View>
          {suspectMealsArr.map((meal, index) => (
            <Text key={index} style={styles.h4}><Text style={styles.h1}>Meal {index + 1} :</Text> {meal}</Text>)
          )}
        </View>
        <Text style={styles.h3}>
          Possible dietary triggers:
        </Text>
        <Text style={styles.p}>
          [Yummly API Content Will Go Here]
        </Text>
      </View>
    </LinearGradient>
  );
}
