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
import goodResult from '../assets/images/goodresult.png';
import okayResult from '../assets/images/okayresult.png';
import badResult from '../assets/images/badresult.png';
import footer from '../assets/images/footer.png';

const compStyles = StyleSheet.create({
  textLeft: {
    textAlign: 'left',
  },
});

export default function TrackSubmit(props) {
  let scaleInput = props.navigation.getParam('scaleInput');
  let resultImage;
  if (scaleInput === 1 || scaleInput === 7) {
    resultImage = badResult;
  } else if (scaleInput === 3 || scaleInput === 4) {
    resultImage = goodResult;
  } else {
    resultImage = okayResult;
  }

  return (
    <LinearGradient
      colors={['#B0A1F2', '#FFF', '#FFF']}
      style={styles.gradient}>
      <View style={styles.container}>
        <View style={styles.flex}>
          <Image source={resultImage} style={styles.headerImage} />
          <Text style={styles.h1}>Track Submit Text</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')} >
            <Text style={styles.btn}>GO BACK</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.h3, compStyles.textLeft]}>Establishing the habit of logging everything in your diet increases the accuracy of our analysis.</Text>
        <Text style={styles.h3}>Keep it up!</Text>
        <Image source={footer} style={styles.footer} />
      </View>
    </LinearGradient>
  );
}
