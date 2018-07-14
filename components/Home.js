import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
 } from 'react-native';
import { LinearGradient } from 'expo';
import styles from './styles';
import userImg from '../assets/images/userimg.png';
import mealBtn from '../assets/images/mealbtn.png';
import trackBtn from '../assets/images/trackbtn.png';
import analyzeBtn from '../assets/images/analyzebtn.png';
import footer from '../assets/images/footer.png';

const compStyles = StyleSheet.create ({
  userImg: {
    width: 150,
    height: 150,
    marginTop: 40,
  },
  actionBtn: {
    width: 100,
    height: 100,
  },
  mealBtn: {
    marginRight: 50,
  },
});

export default class HomeScreen extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#B0A1F2', '#FFF', '#FFF']}
        style={styles.gradient}>
        <View style={styles.container}>
          <Image source={userImg} style={compStyles.userImg} />
          <Text style={styles.h1}>What would you like to do?</Text>
          <View style={styles.flexRow}>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('LogMeal')} >
              <View style={compStyles.mealBtn}>
                <Image source={mealBtn} style={compStyles.actionBtn} />
                <Text style={styles.h1}>Log Meal</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Track')} >
              <View>
                <Image source={trackBtn} style={compStyles.actionBtn} />
                <Text style={styles.h1}>Track BM</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Analyze')} >
            <View>
              <Image source={analyzeBtn} style={compStyles.actionBtn} />
              <Text style={styles.h1}>Analyze</Text>
            </View>
          </TouchableWithoutFeedback>
            <Image source={footer} style={styles.footer} />
        </View>
      </LinearGradient>
    );
  }
}
