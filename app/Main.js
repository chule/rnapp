import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import backgroundImage from '../images/background.jpg';
import Todo from './Todo';



export default class Main extends Component {

  constructor () {
    super();
    this.state = {
      todoStarted: false
    };
  }  

  handlePress () {
    console.log("pressed");
    this.setState({todoStarted: true});
  }

  render() {
    if (this.state.todoStarted) {
      return (
        <Todo />
      );
    } else {
      return (
        <Image style={styles.backgroundImage} source={backgroundImage}>
          <View style={styles.container}>
            <Text style={styles.welcome} onPress={this.handlePress.bind(this)}>
              Press to start app!
            </Text>
          </View>
        </Image>  
      );      
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 60,
    color: '#ffffff',
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.7)',
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