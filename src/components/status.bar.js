// @flow

import React from 'react';
import { StatusBar } from 'react-native';

import Style from '../stylesheet';

function _StatusBar(): React$Element<typeof StatusBar> {
  return (
    <StatusBar backgroundColor={Style.grayDarkColor} barStyle="light-content"/>
  );
}

export default _StatusBar;