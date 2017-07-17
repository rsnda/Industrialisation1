import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Animation from '../components/Animation';

export const ANIMATION_SCENE_NAME = 'ANIMATION_SCENE';

export default class AnimationScreen extends Component {

  static navigationOptions = {
    title: 'Animation',
  };

  render() {
    return (
      <Animation/>
    );
  }
}
