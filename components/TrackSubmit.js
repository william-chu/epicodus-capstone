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

});

export default function TrackSubmit(props) {
  let scaleInput = props.navigation.getParam('scaleInput');
  let resultImage;
  let resultHeader;
  let resultText;
  let actionText = <Text>Select Analyze from the main page for further information.</Text>;
  let specialText = null;
  if (scaleInput === 1 || scaleInput === 7) {
    resultImage = badResult;
    resultHeader = 'Sound the Alarm';
    resultText = <Text>When you report 1 or 7 your symptoms are severe. Here are the meals you ate in the last 12 - 24 hours.</Text>;
    specialText = <Text style={styles.redText}>If your issues persist, please seek professional medical attention.</Text>
  } else if (scaleInput === 3 || scaleInput === 4) {
    resultImage = goodResult;
    resultHeader = 'In the Zone';
    resultText = <Text style={[styles.h3, styles.textLeft]}>When you report 3 or 4 this means you’re in a healthy range.</Text>;
    actionText = null;
    specialText = <Text style={styles.h3}>Keep it up!</Text>;
  } else {
    resultImage = okayResult;
    resultHeader = 'Room for Improvement';
    resultText = <Text>When you report 2, 5 or 6 your symptoms are moderate. Here are the meals you ate in the last 12 - 24 hours.</Text>;
  }

  return (
    <LinearGradient
      colors={['#B0A1F2', '#FFF', '#FFF']}
      style={styles.gradient}>
      <View style={styles.container}>
        <View style={styles.flex}>
          <Image source={resultImage} style={styles.headerImage} />
          <Text style={styles.h1}>{resultHeader}</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')} >
            <Text style={styles.btn}>GO BACK</Text>
          </TouchableOpacity>
        </View>
        {resultText}
        {actionText}
        {specialText}
        <Image source={footer} style={styles.footer} />
      </View>
    </LinearGradient>
  );
}
