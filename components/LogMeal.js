import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo';
import RadioGroup from 'react-native-radio-buttons-group';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from './styles';
import mealBtn from '../assets/images/mealbtn.png';
import footer from '../assets/images/footer.png';

const compStyles = StyleSheet.create({

});

export default class LogMeal extends React.Component {
  state = {
    isDateTimePickerVisible: false,
    selectedDate: new Date(),
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

  // DateTimePicker Update State
  selectedDateStr = (this.state.selectedDate.getMonth() + 1).toString() +
                    '/' +
                    this.state.selectedDate.getDate().toString() +
                    '/' +
                    this.state.selectedDate.getFullYear().toString();

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  handleDatePicked = (date) => {
    this.setState({ selectedDate: new Date(`${date}`) })
    this.hideDateTimePicker();
  };

  // Radio Button Update State
  onSetMeal = meal => this.setState({ meal });

  render() {
    let selectedMeal = this.state.meal.find(e => e.selected == true);
    selectedMeal = selectedMeal ? selectedMeal.value : this.state.meal[0].label;
    return (
      <LinearGradient
        colors={['#B0A1F2', '#FFF', '#FFF']}
        style={styles.gradient}>
        <View style={styles.container}>
          <View style={styles.flex}>
            <Image source={mealBtn} style={styles.headerImage} />
            <Text style={styles.h1}>Log Meal</Text>
          </View>
          {/* DateTimePicker Begin */}
          <View >
            <Text style={styles.h3}>{this.selectedDateStr}</Text>
            <TouchableOpacity onPress={this.showDateTimePicker}>
              <Text style={styles.btn}>CHANGE</Text>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
            />
          </View>
          {/* DateTimePicker End */}
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
