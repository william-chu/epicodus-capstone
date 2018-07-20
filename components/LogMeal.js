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
  // Component Specific Styles Go Here
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
      mealInputArr: [],
      selectedMealInput: 'Breakfast',
      meal: [
        {
          label: 'Breakfast',
          value: 'Breakfast',
          size: 20,
        },
        {
          label: 'Lunch',
          value: 'Lunch',
          size: 20,
        },
        {
          label: 'Dinner',
          value: 'Dinner',
          size: 20,
        },
      ],
    };
  }
  // DateTimePicker
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
  // RadioGroup
  onSetMeal = meal => this.setState({ meal });
  onSetSelectedMealInput = mealInput => {
    this.setState({selectedMealInput: mealInput});
  }

  handleLogMealSubmitPress = () => {
    let onLogMealSubmit = this.props.screenProps.onLogMealSubmit;
    onLogMealSubmit(this.state.selectedDate, this.state.mealInputArr, this.state.selectedMealInput);
  }
  handleMealInputToArr = (text) => {
    let newMealInputArr = text.split(',').map(function(item) {
      return item.trim().toLowerCase();
    });
    this.setState({ mealInputArr: newMealInputArr });
  }

  onComponentWillMount() {
    this.setSelectedDateStr();
  }

  render() {
    let selectedMeal;
    return (
      <LinearGradient
        colors={['#B0A1F2', '#FFF', '#FFF']}
        style={styles.gradient}>
        <View style={styles.container}>
          <View style={styles.flex}>
            <Image
              source={mealBtn}
              style={styles.headerImage}
            />
            <Text style={styles.h1}>
              Log Meal
            </Text>
          </View>
          {/* DateTimePicker Begin */}
          <View>
            <Text style={styles.h3}>{this.state.selectedDateStr}</Text>
            <TouchableOpacity onPress={this.showDateTimePicker}>
              <Text style={styles.btn}>
                CHANGE DATE
              </Text>
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
              underlineColorAndroid='transparent'
              editable={true}
              maxLength={40}
              placeholder={'Item1, Item2...'}
              onChangeText={(text) => this.handleMealInputToArr(text)}
            />
          </View>
          <View style={styles.flex}>
            <Text style={styles.h3}>
              Which meal?
            </Text>
            <RadioGroup
              radioButtons={this.state.meal}
              onPress={() => {
                this.onSetMeal,
                selectedMeal = this.state.meal.find(e => e.selected == true),
                selectedMeal = selectedMeal ? selectedMeal.value : this.state.meal[0].label,
                this.onSetSelectedMealInput(selectedMeal)}} />
          </View>
          <TouchableOpacity onPress={() => {
            this.handleLogMealSubmitPress(),
            this.props.navigation.navigate('LogMealSubmit') }}>
            <Text style={styles.btnPurple}>SUBMIT</Text>
          </TouchableOpacity>
          <Image
            source={footer}
            style={styles.footer}
          />
        </View>
      </LinearGradient>
    );
  }
}
