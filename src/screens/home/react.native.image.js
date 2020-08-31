// @flow

import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import { openLink } from '../../helpers/open.link';

const REACT_NATIVE_URL = "https://reactnative.dev/";
const IMAGE_WIDTH = 200;
const IMAGE_HEIGHT = 200;

function _Image(): React$Element<typeof TouchableOpacity> {
  const source = require('../../assets/react_logo.png');
  
  const onPressImage = (): void => {
    openLink(REACT_NATIVE_URL);
  }

  const styles = StyleSheet.create({
    container: {
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT
    },
    image: {
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      resizeMode: 'contain',
      alignSelf: 'center'
    }
  });
  
  return (
    <TouchableOpacity style={styles.container} onPress={onPressImage}>
      <Image source={source} style={styles.image}/>
    </TouchableOpacity>
  )
}

export default _Image;