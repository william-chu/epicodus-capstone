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
import trackBtn from '../assets/images/trackbtn.png';
import bristolScale from '../assets/images/bristolscale.png';
import footer from '../assets/images/footer.png';

const compStyles = StyleSheet.create({
  chart: {
    marginBottom: 20,
  },
});

export default class BristolScale extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#B0A1F2', '#FFF', '#FFF']}
        style={styles.gradient}>
        <View style={styles.container}>
          <View style={styles.flex}>
            <Image source={trackBtn} style={styles.headerImage} />
            <Text style={styles.h1}>Bristol Scale</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Track')}>
            <Text style={styles.btn}>GO BACK</Text>
          </TouchableOpacity>
          <Image source={bristolScale} style={compStyles.chart}/>
         </View>
      </LinearGradient>
    );
  }
}
