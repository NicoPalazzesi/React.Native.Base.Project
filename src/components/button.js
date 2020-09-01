// @flow

import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import Style from '../stylesheet';

type Props = {
  text: string,
  style?: Object,
  onPress: () => void
};

type State = void;

export default class Button extends PureComponent<Props,State>{

  static defaultProps = {
    title: '',
    style:{}
  };

  render(){
    const {
      text,
      style,
      onPress
    } = this.props;
    return(
      <TouchableOpacity 
        style={[styles.container, style]}
        onPress={onPress}
        activeOpacity={0.4}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  container:{
    paddingVertical: 10,
    backgroundColor: Style.blueLightColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    color: Style.whiteColor
  }
});