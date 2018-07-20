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
import footer from '../assets/images/footer.png';

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
        <Text style={[styles.h3, styles.textLeft]}>
          Establishing a habit of accurately logging your diet will increase the accuracy of our analysis.
        </Text>
        <Text style={styles.h3}>
          Keep it up!
        </Text>
        <Image
          source={footer}
          style={styles.footer}
        />
      </View>
    </LinearGradient>
  );
}
