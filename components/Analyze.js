import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, Image, View } from 'react-native';
import { LinearGradient } from 'expo';
import styles from './styles';
import analyzeBtn from '../assets/images/analyzebtn.png';
import footer from '../assets/images/footer.png';

const compStyles = StyleSheet.create({

});

export default class Analyze extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#B0A1F2', '#FFF', '#FFF']}
        style={styles.gradient}>
        <View style={styles.container}>
          <Image source={analyzeBtn} style={styles.headerImage} />
          <Image source={footer} style={styles.footer} />
        </View>
      </LinearGradient>
    );
  }
}
