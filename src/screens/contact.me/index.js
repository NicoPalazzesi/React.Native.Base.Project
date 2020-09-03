// @flow

import React, { PureComponent } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import NavBar from '../../components/nav.bar';
import Style from '../../stylesheet';
import SocialNetworks from './social.networks';

type Props = {};

type State = void;

export default class Index extends PureComponent<Props,State>{

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <NavBar menu={true} title="Contact me" />
        <View style={styles.content}>
          <Text style={styles.title}>Contact me</Text>
          <Text style={styles.text}>
            {"I'm happy to help you and\nanswer your questions"}
          </Text>
          <SocialNetworks />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: Style.blueLightColor,
    fontSize: Style.fontSizeHuge,
    fontWeight: 'bold'
  },
  text: {
    textAlign: 'center'
  }
});