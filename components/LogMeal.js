import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { LinearGradient } from 'expo';
import RadioGroup from 'react-native-radio-buttons-group';
import styles from './styles';
import mealBtn from '../assets/images/mealbtn.png';
import footer from '../assets/images/footer.png';

const compStyles = StyleSheet.create({

});

export default class LogMeal extends React.Component {
  state = {
    meal: [
      {
        label: 'Breakfast',
        value: '1',
      },
      {
        label: 'Lunch',
        value: '2',
      },
      {
        label: 'Dinner',
        value: '3',
      },
    ],
  };

  // Radio Button Update State
  onSetMeal = meal => this.setState({ meal });

  render() {
    let selectedButton = this.state.meal.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.meal[0].label;
    return (
      <LinearGradient
        colors={['#B0A1F2', '#FFF', '#FFF']}
        style={styles.gradient}>
        <View style={styles.container}>
          <View style={styles.flex}>
            <Image source={mealBtn} style={styles.headerImage} />
            <Text style={styles.h1}>Log Meal</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.h3}>What did you eat?</Text>
            <TextInput
              style={styles.formInput}
              editable={true}
              maxLength={40}
              placeholder={'Item1, Item2...'}
            />
          </View>
          <View style={styles.flex}>
            <Text style={styles.h3}>Which meal?</Text>
            <RadioGroup radioButtons={this.state.meal} onPress={this.onSetMeal} />
          </View>
          <Text style={styles.btn}>SUBMIT</Text>
          <Image source={footer} style={styles.footer} />
        </View>
      </LinearGradient>
    );
  }
}
