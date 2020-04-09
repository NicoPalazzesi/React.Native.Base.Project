import React, { PureComponent } from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

import Style from '../stylesheet';

export default class Button extends PureComponent{

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
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  container:{
    borderRadius: 15,
    backgroundColor: Style.blueLightColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    color: Style.whiteColor
  }
});