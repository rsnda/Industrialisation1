import React, { Component } from 'react';
import { Animated, Dimensions, StyleSheet, View, Image, Easing } from 'react-native';

export default class Animation extends Component {
  
  constructor () {
    super()
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount () {
    this.spin();
  }

  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 2500,
        easing: Easing.linear,
        useNativeDriver: true
      },
    ).start(() => this.spin());
  }

  render() {
    var { height } = Dimensions.get('window');

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: [ -height/2, height/2 ]
    })

    return (
      <View style={styles.container}>
        <Animated.Image style={{
            width: SQUARE_DIMENSIONS, height: SQUARE_DIMENSIONS,
            transform: [{
                translateY: spin,
            }] 
          }}
          source={require('../../assets/react_native_firebase.png')}
        />
      </View>
    );
  }
}

const SQUARE_DIMENSIONS = 64;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  }
});
