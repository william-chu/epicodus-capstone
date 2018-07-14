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
    color: '#4A4A4A',
    textAlign: 'center',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionBtn: {
    width: 100,
    height: 100,
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
              <View style={styles.mealBtn}>
                <Image source={mealBtn} style={styles.actionBtn} />
                <Text style={styles.h1}>Log Meal</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Track')} >
              <View>
                <Image source={trackBtn} style={styles.actionBtn} />
                <Text style={styles.h1}>Track BM</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Analyze')} >
            <View>
              <Image source={analyzeBtn} style={styles.actionBtn} />
              <Text style={styles.h1}>Analyze</Text>
            </View>
          </TouchableWithoutFeedback>
            <Image source={footer} style={styles.footer} />
        </View>
      </LinearGradient>
    );
  }
}
