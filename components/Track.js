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
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from './styles';
import trackBtn from '../assets/images/trackbtn.png';

const compStyles = StyleSheet.create({
  // Component Specific Styles Go Here
  radioGroupBtn: {
    marginTop: 10,
  },
});

export default class Track extends React.Component {
  constructor(props) {
    super(props);
    this.defaultDate = new Date();
    this.defaultDateStr =
      (this.defaultDate.getMonth() + 1).toString() +
      '/' +
      this.defaultDate.getDate().toString() +
      '/' +
      this.defaultDate.getFullYear().toString();
    this.state = {
      isDateTimePickerVisible: false,
      selectedDate: this.defaultDate,
      selectedDateStr: this.defaultDateStr,
      selectedScaleInput: 4,
      selectedTimeInput: 'Morning',
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
          value: 'Morning',
          size: 20,
        },
        {
          label: 'Afternoon',
          value: 'Afternoon',
          size: 20,
        },
        {
          label: 'Evening',
          value: 'Evening',
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
  onSetScale = scale => this.setState({ scale });
  onSetSelectedScaleInput = scaleInput => {
    let newSelectedScaleInput = parseInt(scaleInput);
    this.setState({selectedScaleInput: newSelectedScaleInput});
  };
  onSetTime = time => this.setState({ time });
  onSetSelectedTimeInput = timeInput => {
    this.setState({selectedTimeInput: timeInput});
  }

  handleTrackSubmitPress = () => {
    let onTrackSubmit = this.props.screenProps.onTrackSubmit;
    onTrackSubmit(this.state.selectedDate, this.state.selectedScaleInput, this.state.selectedTimeInput);
  }

  render() {
    let selectedScale;
    let selectedTime;
    return (
      <LinearGradient
        colors={['#B0A1F2', '#FFF', '#FFF']}
        style={styles.gradient}>
        <View style={styles.container}>
          <View style={styles.flex}>
            <Image
              source={trackBtn}
              style={styles.headerImage}
            />
            <Text style={styles.h1}>
              Track BM
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
            <Text style={styles.h3}>
              Where on the scale?
            </Text>
            <RadioGroup
              radioButtons={this.state.scale}
              onPress={() => {
                this.onSetScale,
                selectedScale = this.state.scale.find(e => e.selected == true),
                selectedScale = selectedScale ? selectedScale.value : this.state.scale[0].label,
                this.onSetSelectedScaleInput(selectedScale)
              }}
              flexDirection='row'
            />
            <TouchableOpacity onPress={() => this.props.navigation.navigate('BristolScale')}>
              <Text style={[styles.btn, compStyles.radioGroupBtn]}>
                SEE SCALE
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.flex}>
            <Text style={styles.h3}>
              What time?
            </Text>
            <RadioGroup
              radioButtons={this.state.time}
              onPress={() => {
                this.onSetTime,
                selectedTime = this.state.time.find(e => e.selected == true),
                selectedTime = selectedTime ? selectedTime.value : this.state.time[0].label,
                this.onSetSelectedTimeInput(selectedTime)
              }}
            />
          </View>
          <TouchableOpacity onPress={() => {
            this.handleTrackSubmitPress(),
            this.props.navigation.navigate('TrackSubmit', {
              date: this.state.selectedDate,
              scaleInput: this.state.selectedScaleInput,
              timeInput: this.state.selectedTimeInput })}} >
            <Text style={styles.btnPurple}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}
