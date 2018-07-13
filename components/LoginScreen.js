import React from 'react';
import { StyleSheet, Button, Text, Image, View } from 'react-native';
import { LinearGradient } from 'expo';
import stomachImg from '../assets/images/stomach.png';
import loginBtn from '../assets/images/loginbtn.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  slogan: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 10,
  }
});

export default class LoginScreen extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#B0A1F2', '#6F62AB']}
        style = {styles.container}>
        <View>
          <Image
            resizeMode={'cover'}
            source={stomachImg} />
          <Text style = {styles.slogan}>{`
            Discover your dietary triggers
            for better digestive health
          `}</Text>
          <Button title='Login' onPress={() => this.props.navigation.navigate('Home')} />
          <Image source={loginBtn} />
        </View>
      </LinearGradient>
    );
  }
}
