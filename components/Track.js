import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo';
import RadioGroup from 'react-native-radio-buttons-group';
import styles from './styles';
import trackBtn from '../assets/images/trackbtn.png';
import footer from '../assets/images/footer.png';

const compStyles = StyleSheet.create({

});

export default class Track extends React.Component {
  state = {
    data: [
      {
        label: '1',
        value: '1',
        color: '#FF7A8C',
        layout: 'column',
      },
      {
        label: '2',
        value: '2',
        color: '#F7E289',
        layout: 'column',
      },
      {
        label: '3',
        value: '3',
        color: '#9ED8C5',
        layout: 'column',
      },
      {
        label: '4',
        value: '4',
        color: '#9ED8C5',
        layout: 'column',
        selected: true,
      },
      {
        label: '5',
        value: '5',
        color: '#F7E289',
        layout: 'column',
      },
      {
        label: '6',
        value: '6',
        color: '#F7E289',
        layout: 'column',
      },
      {
        label: '7',
        value: '7',
        color: '#FF7A8C',
        layout: 'column',
      },
    ],
  };

  // Radio Button Update State
  onPress = data => this.setState({ data });

  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
    return (
      <LinearGradient
        colors={['#B0A1F2', '#FFF', '#FFF']}
        style={styles.gradient}>
        <View style={styles.container}>
          <View style={styles.flex}>
            <Image source={trackBtn} style={styles.headerImage} />
            <Text style={styles.h1}>Track BM</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.h3}>Where on the scale?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('BristolScale')}>
              <Text style={styles.btn}>SEE SCALE</Text>
            </TouchableOpacity>
          </View>
          <RadioGroup
            radioButtons={this.state.data}
            onPress={this.onPress}
            flexDirection='row' />
          <Image source={footer} style={styles.footer} />
        </View>
      </LinearGradient>
    );
  }
}
