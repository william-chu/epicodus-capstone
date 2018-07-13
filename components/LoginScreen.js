import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Button, Text, TextInput, Image, View } from 'react-native';
import { LinearGradient } from 'expo';
import stomachImg from '../assets/images/stomach.png';
import loginBtn from '../assets/images/loginbtn.png';

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slogan: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontWeight: '400',
    letterSpacing: .2,
  },
  textInput: {
   margin: 5,
   height: 25,
   width: 200,
   padding: 5,
   borderRadius: 5,
   backgroundColor: 'rgba(255,255,255,0.7)',
  },
  loginBtn: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    marginBottom: 20,
  }
});

export default class LoginScreen extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#B0A1F2', '#6F62AB']}
        style={styles.gradient}>
        <View style={styles.container}>
          <Image
            resizeMode={'cover'}
            source={stomachImg} />
          <Text style={styles.slogan}>{`
Discover your dietary triggers
for better digestive health
          `}</Text>
          <View>
            <TextInput
              style={styles.textInput}
              editable={true}
              maxLength={40}
              placeholder={'Username'} />
            <TextInput
              style={styles.textInput}
              editable={true}
              maxLength={40}
              placeholder={'Password'} />
          </View>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Home')} >
            <Image source={loginBtn} style={styles.loginBtn} />
          </TouchableWithoutFeedback>
        </View>
      </LinearGradient>
    );
  }
}
