import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, Image, View } from 'react-native';
import { LinearGradient } from 'expo';
import analyzeBtn from '../assets/images/analyzebtn.png';
import footer from '../assets/images/footer.png';

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  analyzeBtn: {
    marginTop: 40,
    width: 100,
    height: 100,
  },
  footer: {
    marginBottom: 20,
  }
});

export default class Analyze extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#B0A1F2', '#FFF', '#FFF']}
        style={styles.gradient}>
        <View style={styles.container}>
          <Image source={analyzeBtn} style={styles.analyzeBtn} />
          <Image source={footer} style={styles.footer} />
        </View>
      </LinearGradient>
    );
  }
}
