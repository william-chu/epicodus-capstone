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
    scale: [
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
    time: [
      {
        label: 'Morning',
        value: '1',
      },
      {
        label: 'Afternoon',
        value: '2',
      },
      {
        label: 'Evening',
        value: '3',
      },
    ],
  };

  // Radio Button Update State
  onSetScale = scale => this.setState({ scale });
  onSetTime = time => this.setState({ time });

  render() {
    let selectedScale = this.state.scale.find(e => e.selected == true);
    let selectedTime = this.state.time.find(e => e.selected == true);
    selectedScale = selectedScale ? selectedScale.value : this.state.scale[0].label;
    selectedTime = selectedTime ? selectedTime.value : this.state.time[0].label;
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
            <RadioGroup
              radioButtons={this.state.scale}
              onPress={this.onSetScale}
              flexDirection='row'
            />
          </View>
          <View style={styles.flex}>
            <Text style={styles.h3}>What time?</Text>
            <RadioGroup radioButtons={this.state.time} onPress={this.onSetTime} />
          </View>
          <Text style={styles.btn}>SUBMIT</Text>
          <Image source={footer} style={styles.footer} />
        </View>
      </LinearGradient>
    );
  }
}
