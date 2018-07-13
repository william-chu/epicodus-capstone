import React from 'react';
import { StyleSheet, Button, Text, Image, View } from 'react-native';
import { LinearGradient } from 'expo';
import stomachImg from '../assets/images/stomach.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6F62AB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class LoginScreen extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#6F62AB', '#B0A1F2']}
        style = { styles.container }>
        <View>
          <Image
            resizeMode={'cover'}
            source={stomachImg}
            style={styles.canvas} />
          <Text>Discover your dietary triggers</Text>
          <Text>for better digestive health</Text>
          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </LinearGradient>
    );
  }
}
