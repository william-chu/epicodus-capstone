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
import mealBtn from '../assets/images/mealbtn.png';

const compStyles = StyleSheet.create({
  // Component Specific Styles Go Here
});

export default function LogMealSubmit(props) {
  return (
    <LinearGradient
      colors={['#B0A1F2', '#FFF', '#FFF']}
      style={styles.gradient}>
      <View style={styles.container}>
        <View style={styles.flex}>
          <Image
            source={mealBtn}
            style={styles.headerImage}
          />
          <Text style={styles.h1}>
            Meal Logged
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')} >
            <Text style={styles.btn}>
              GO BACK
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.h3}>
          Accurately log your diet every day to increase the accuracy of our analysis.
        </Text>
        <Text style={styles.h3}>
          Keep it up!
        </Text>
        <Text style={styles.p}>Use <Text style={styles.strong}>Track BM</Text> to find meals with possible triggers</Text>
      </View>
    </LinearGradient>
  );
}
