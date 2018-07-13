import React from 'react';
import { StyleSheet, TouchableHighlight, Button, Text, Image, View } from 'react-native';
import { LinearGradient } from 'expo';
import stomachImg from '../assets/images/stomach.png';
import loginBtn from '../assets/images/loginbtn.png';

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slogan: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: '400',
    letterSpacing: .2,
  },
  loginBtn: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
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
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')} >
            <Image source={loginBtn} style={styles.loginBtn} />
          </TouchableHighlight>
        </View>
      </LinearGradient>
    );
  }
}
