// @flow

import React from 'react';
import { Text, StyleSheet } from 'react-native'

import Style from '../stylesheet';

function Author(): React$Element<typeof Text> {
  const styles = StyleSheet.create({
    text: {
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center',
      fontSize: Style.fontSizeSmall
    }
  });
  
  return (
    <Text style={styles.text}>Developed by Nicolás Palazzesi</Text>
  );
}

export default Author;