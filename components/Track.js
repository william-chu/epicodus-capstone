import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, Image, View } from 'react-native';
import { LinearGradient } from 'expo';
import trackBtn from '../assets/images/trackbtn.png';
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
  trackBtn: {
    marginTop: 40,
  },
  footer: {
    marginBottom: 20,
  }
});

export default class Track extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#B0A1F2', '#FFF', '#FFF']}
        style={styles.gradient}>
        <View style={styles.container}>
          <Image source={trackBtn} style={styles.trackBtn} />

            <Image source={footer} style={styles.footer} />
        </View>
      </LinearGradient>
    );
  }
}