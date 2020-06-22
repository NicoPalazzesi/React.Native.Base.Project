// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import Style from '../stylesheet';

type Props = {
  show: bool,
  label: string,
  style?: any,
};

type State = void;

export default class FloatingLabel extends PureComponent<Props, State> {

  render() {
    const {
      show,
      label,
      style,
    } = this.props;
    if(!show) {
      return null;
    }
    return (
<Animatable.Text
  animation="fadeInLeft"
  duration={100}
  style={[styles.floatingLabelText, style]}
>
  {label}
</Animatable.Text>
    );
  }
}

const styles = StyleSheet.create({
  floatingLabelText: {
    position: 'absolute',
    top: 0,
    left: 1,
    color: Style.blueLightColor,
    fontSize: Style.fontSizeSmall,
  },
});