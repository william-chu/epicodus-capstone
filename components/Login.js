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
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontWeight: '400',
    letterSpacing: .2,
    marginTop: -20,
    marginBottom: -10,
    fontSize: 16,
    // fontFamily: 'Oswald Regular',
  },
  loginInput: {
   marginBottom: 5,
   height: 25,
   width: 200,
   padding: 5,
   borderRadius: 5,
   backgroundColor: 'rgba(255,255,255,0.7)',
  },
  loginBtn: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    marginBottom: 10,
  }
});

export default class Login extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#B0A1F2', '#6F62AB']}
        style={styles.gradient}>
        <View style={styles.containerFluid}>
          <Image
            resizeMode={'cover'}
            source={stomachImg}
          />
          <Text style={compStyles.loginSlogan}>{`
Discover your dietary triggers
for better digestive health
          `}</Text>
          <View>
            <TextInput
              style={compStyles.loginInput}
              editable={true}
              maxLength={40}
              placeholder={'Username'}
            />
            <TextInput
              style={compStyles.loginInput}
              editable={true}
              maxLength={40}
              placeholder={'Password'}
              secureTextEntry={true}
            />
          </View>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Home')} >
            <Image source={loginBtn} style={compStyles.loginBtn} />
          </TouchableWithoutFeedback>
        </View>
      </LinearGradient>
    );
  }
}
