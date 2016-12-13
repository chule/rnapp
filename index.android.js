import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Main from "./app/Main.js";

export default class rnapp extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('rnapp', () => rnapp);
