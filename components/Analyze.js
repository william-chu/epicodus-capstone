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
import analyzeBtn from '../assets/images/analyzebtn.png';
import footer from '../assets/images/footer.png';

const compStyles = StyleSheet.create({
  // Component Specific Styles Go Here
});

export default function Analyze(props) {
  return (
    <LinearGradient
      colors={['#B0A1F2', '#FFF', '#FFF']}
      style={styles.gradient}>
      <View style={styles.container}>
        <View style={styles.flex}>
          <Image
            source={analyzeBtn}
            style={styles.headerImage}
          />
          <Text style={styles.h1}>
            Our Analysis
          </Text>
        </View>
        <Text>
          These are the logged meals that correlated with you not feeling well in the last 30 days.
        </Text>
        <Text>
          Possible dietary triggers:
        </Text>
        <Image
          source={footer}
          style={styles.footer}
        />
      </View>
    </LinearGradient>
  );
}
