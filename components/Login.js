import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { LinearGradient } from 'expo';
import styles from './styles';
import stomachImg from '../assets/images/stomach.png';
import loginBtn from '../assets/images/loginbtn.png';

const compStyles = StyleSheet.create({
  loginSlogan: {
    marginBottom: 10,
  },
  loginSloganText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontWeight: '400',
    letterSpacing: .2,
    fontSize: 18,
    fontFamily: 'Oswald Regular',
    textAlign: 'center',
    alignSelf: 'center',
  },
  loginInput: {
   marginBottom: 5,
   height: 25,
   width: 200,
   padding: 5,
   borderRadius: 5,
   backgroundColor: 'rgba(255,255,255,0.8)',
  },
  loginBtn: {
    marginBottom: 10,
    width: 36,
    height: 36,
  }
});

export default function Login(props) {
  return (
    <LinearGradient
      colors={['#B0A1F2', '#6F62AB']}
      style={styles.gradient}>
      <View style={styles.containerFluid}>
        <Image
          style={{flex:1}}
          resizeMode='contain'
          source={stomachImg}
        />
        <View style={compStyles.loginSlogan}>
          <Text style={compStyles.loginSloganText}>Discover Your Dietary Triggers</Text>
          <Text style={compStyles.loginSloganText}>for Better Digestive Health</Text>
        </View>
        <View>
          <TextInput
            style={compStyles.loginInput}
            underlineColorAndroid='transparent'
            editable={true}
            maxLength={40}
            placeholder={'username'}
          />
          <TextInput
            style={compStyles.loginInput}
            underlineColorAndroid='transparent'
            editable={true}
            maxLength={40}
            placeholder={'password'}
            secureTextEntry={true}
          />
        </View>
        <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Home')} >
          <Image source={loginBtn} style={compStyles.loginBtn} />
        </TouchableWithoutFeedback>
      </View>
    </LinearGradient>
  );
}
