// @flow

import React, { PureComponent } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Style from '../stylesheet';

type Props = {
  text: string
};

type State = void;

export default class ScreenTitle extends PureComponent<Props,State>{

  render(){
    const {
      text
    } = this.props;
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Style.blueLightColor
  },
  text:{
    fontSize: Style.fontSizeBig,
    fontWeight: 'bold',
    color: Style.whiteColor
  }
});