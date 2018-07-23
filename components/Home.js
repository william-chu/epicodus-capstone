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
  // Component Specific Styles Go Here
  userImg: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  actionSection: {
    marginTop: 20,
  },
  actionBtn: {
    width: 100,
    height: 100,
  },
  mealBtn: {
    marginRight: 50,
  },
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LinearGradient
        colors={['#B0A1F2', '#FFF', '#FFF']}
        style={styles.gradient}>
        <View style={styles.container}>
          <View style={styles.flex}>
            <Image source={userImg} style={compStyles.userImg} />
            <Text style={styles.h2}>
              What would you like to do?
            </Text>
          </View>
          <View style={[styles.flexRow, compStyles.actionSection]}>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate('LogMeal')} >
              <View style={compStyles.mealBtn}>
                <Image source={mealBtn} style={compStyles.actionBtn} />
                <Text style={styles.h1}>
                  Log Meal
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate('Track')} >
              <View>
                <Image source={trackBtn} style={compStyles.actionBtn} />
                <Text style={styles.h1}>
                  Track BM
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Analyze')} >
            <View>
              <Image source={analyzeBtn} style={compStyles.actionBtn} />
              <Text style={styles.h1}>
                Analyze
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <Image
            style={styles.fullWidthImagePadded}
            resizeMode='contain'
            source={footer}
          />
        </View>
      </LinearGradient>
    );
  }
}
