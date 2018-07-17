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

  constructor(props) {
    super(props);
    this.defaultDate = new Date();
    this.defaultDateStr = (this.defaultDate.getMonth() + 1).toString() +
    '/' +
    this.defaultDate.getDate().toString() +
    '/' +
    this.defaultDate.getFullYear().toString();
    this.state = {
      isDateTimePickerVisible: false,
      selectedDate: this.defaultDate,
      selectedDateStr: this.defaultDateStr,
      meal: [
        {
          label: 'Breakfast',
          value: '1',
          size: 20,
        },
        {
          label: 'Lunch',
          value: '2',
          size: 20,
        },
        {
          label: 'Dinner',
          value: '3',
          size: 20,
        },
      ],
    };
  }

  // DateTimePicker Update State
  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  setSelectedDateStr = (date) => {
    let newSelectedDateStr = (date.getMonth() + 1).toString() +
    '/' +
    date.getDate().toString() +
    '/' +
    date.getFullYear().toString();
    this.setState({ selectedDateStr: newSelectedDateStr });
  }
  handleDatePicked = (date) => {
    this.setState({ isDateTimePickerVisible: false, selectedDate: date });
    this.setSelectedDateStr(date);
  }

  // Radio Button Update State
  onSetMeal = meal => this.setState({ meal });

  onComponentWillMount() {
    this.setSelectedDateStr();
  }

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
          <View>
            <Text style={styles.h3}>{this.state.selectedDateStr}</Text>
            <TouchableOpacity onPress={this.showDateTimePicker}>
              <Text style={styles.btn}>SET DATE</Text>
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
          <Text style={styles.btnPurple}>SUBMIT</Text>
          <Image source={footer} style={styles.footer} />
        </View>
      </LinearGradient>
    );
  }
}
