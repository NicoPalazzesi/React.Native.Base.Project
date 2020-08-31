// @flow

import React, { PureComponent } from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';

import Config from 'react-native-config';

import NavBar from '../../components/nav.bar';
import Style from '../../stylesheet';
import GitHub from './github';

type Props = {};

type State = void;

const Version = (): React$Element<typeof Text> => {
  return(
    <Text>Version {
      Platform.OS === 'android'? 
        Config.ANDROID_BUILD_VERSION : 
        Config.IOS_BUILD_VERSION}
    </Text>
  );
}

const TestUser = (): React$Element<typeof View> => {
  const styles = StyleSheet.create({
    container: {
      marginVertical: 18
    },
    text: {
      textAlign: 'center',
      fontWeight: 'bold'
    }
  });

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Test user</Text>
      <Text>email: {Config.USERNAME_DEV}</Text>
      <Text>password: {Config.PASSWORD_DEV}</Text>
    </View>
  );
}

export default class Index extends PureComponent<Props,State>{

  render(){
    return(
      <SafeAreaView style={styles.container}>
        <NavBar menu={true} />
        <View style={styles.contentContainer}>
          <Text style={styles.nameProjectText}>React Native Base Project</Text>
          <Version />
          <TestUser />
          <GitHub />
          <Text>Developed by Nicolás Palazzesi</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    padding: 18,
    alignItems: 'center'
  },
  nameProjectText: {
    color: Style.blueColor,
    fontSize: Style.fontSizeHuge,
    fontWeight: 'bold'
  }
});