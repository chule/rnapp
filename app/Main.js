import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Svg
} from 'react-native';

import backgroundImage from '../images/background.jpg';

export default class Main extends Component {
  render() {
    return (
      <Image style={styles.backgroundImage} source={backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!!!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </View>
      </Image>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  }

});