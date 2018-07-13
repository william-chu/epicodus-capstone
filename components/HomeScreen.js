import React from 'react';
import { StyleSheet, Button, Text, Image, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#6F62AB',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
