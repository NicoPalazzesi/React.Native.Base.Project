// @flow

import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';

import Style from '../stylesheet';

function Preloader(){
  const styles = StyleSheet.create({
    loadIndicator:{
      ...StyleSheet.absoluteFillObject,
      backgroundColor: Style.preloaderOpacity
    }
  });

  return <ActivityIndicator 
    style={styles.loadIndicator} 
    color={Style.blueLightColor}
    size="large"/>
}

export default Preloader;