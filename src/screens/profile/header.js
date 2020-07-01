// @flow

const IMAGE_SIZE = 70;

import React, { PureComponent } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import Style from '../../stylesheet';

import {type TUserData} from '../../store/reducers/user';

type Props = {
  firstName: $PropertyType<TUserData,'firstName'>,
  lastName: $PropertyType<TUserData,'lastName'>,
  email: $PropertyType<TUserData,'email'>
};

type State = void;

export default class Header extends PureComponent<Props,State>{

  render(){
    const {
      firstName,
      lastName,
      email
    } = this.props;
    return(
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../images/empty.profile.picture.jpg')}
        />
        <Text style={styles.fullNameText}>{firstName} {lastName}</Text>
        <Text style={styles.emailText}>{email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    backgroundColor: Style.blueColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
    marginBottom: 10
  },
  fullNameText: {
    color: Style.whiteColor,
    fontWeight: 'bold'
  },
  emailText: {
    color: Style.whiteColor
  }
});