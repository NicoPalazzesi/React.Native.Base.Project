// @flow

import React, { PureComponent } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Icon, { type FontAwesomeGlyphs } from 'react-native-vector-icons/FontAwesome';

import { type TLoginStore } from '../../store/reducers/login';

type State = void;

type Props = {
  icon: FontAwesomeGlyphs,
  text: string,
  onPress: function
};

export default class Button extends PureComponent<Props,State>{

  render(){
    const {
      icon,
      text,
      onPress
    } = this.props;
    return(
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Icon name={icon} style={styles.icon}/>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center'
  },
  icon:{
    paddingHorizontal: 18,
    fontSize: 20
  },
  text:{
    fontSize: 14
  }
});