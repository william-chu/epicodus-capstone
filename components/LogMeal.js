import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, Image, View } from 'react-native';
import { LinearGradient } from 'expo';
import styles from './styles';
import mealBtn from '../assets/images/mealbtn.png';
import footer from '../assets/images/footer.png';

const compStyles = StyleSheet.create({

});

export default class LogMeal extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#B0A1F2', '#FFF', '#FFF']}
        style={styles.gradient}>
        <View style={styles.container}>
          <Image source={mealBtn} style={styles.headerImage} />
          <Text style={styles.h1}>What did you eat?</Text>
          <Image source={footer} style={styles.footer} />
        </View>
      </LinearGradient>
    );
  }
}
