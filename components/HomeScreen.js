import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, Image, View } from 'react-native';
import { LinearGradient } from 'expo';
import userImg from '../assets/images/userimg.png';
import mealBtn from '../assets/images/mealbtn.png';
import trackBtn from '../assets/images/trackbtn.png';
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
  userImg: {
    width: 150,
    height: 150,
    marginTop: 40,
  },
  h1: {
    fontSize: 20,
    color: '#2B2B2B',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mealBtn: {
    marginRight: 50,
  },
  footer: {
    marginBottom: 20,
  }
});

export default class HomeScreen extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#B0A1F2', '#FFF', '#FFF']}
        style={styles.gradient}>
        <View style={styles.container}>
          <Image source={userImg} style={styles.userImg} />
          <Text style={styles.h1}>Let's Get Started...</Text>
          <View style={styles.flex}>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('LogMeal')} >
              <Image source={mealBtn} style={styles.mealBtn} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Track')} >
              <Image source={trackBtn} style={styles.trackBtn} />
            </TouchableWithoutFeedback>
          </View>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Analyze')} >
            <Image source={analyzeBtn} style={styles.analyzeBtn} />
          </TouchableWithoutFeedback>
            <Image source={footer} style={styles.footer} />
        </View>
      </LinearGradient>
    );
  }
}
