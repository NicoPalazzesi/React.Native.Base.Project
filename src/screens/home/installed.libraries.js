// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LibraryButton from './library.button';

const REDUX_URL = "https://redux.js.org/";
const REACT_NAVIGATION_URL = "https://reactnavigation.org/";

function InstalledLibraries(): React$Element<typeof View> {
  const reduxSource = require('../../assets/redux_logo.png');
  const reactNavigationsource = require('../../assets/react_navigation_logo.png');

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-end',
      paddingBottom: 18
    },
    text: {
      textAlign: 'center',
      marginBottom: 10
    }
  });
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main installed libraries</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <LibraryButton 
        source={reduxSource}
        name="Redux"
        url={REDUX_URL} />
      <LibraryButton
        source={reactNavigationsource}
        name="React Navigation"
        url={REACT_NAVIGATION_URL} />
      </View>
    </View>
  )
}

export default InstalledLibraries;