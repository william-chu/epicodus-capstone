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
import footer from '../assets/images/footer.png';

const compStyles = StyleSheet.create({

});

export default class Track extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#B0A1F2', '#FFF', '#FFF']}
        style={styles.gradient}>
        <View style={styles.container}>
          <View style={styles.flex}>
            <Image source={trackBtn} style={styles.headerImage} />
            <Text style={styles.h1}>Track BM</Text>
          </View>
          <Text style={styles.h3}>Where on the scale?</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.btn}>SEE SCALE</Text>
          </TouchableOpacity>
          <Image source={footer} style={styles.footer} />
        </View>
      </LinearGradient>
    );
  }
}
