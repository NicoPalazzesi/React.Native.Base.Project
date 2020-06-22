// @flow

import {Alert} from 'react-native';

import Validator from './validator';

import { type TLoginInputData } from '../store/reducers/login';

export default {
  checkLoginInputData(loginInputData: TLoginInputData): bool {
    let {
      username,
      password,
    } = loginInputData;
    //Username
    if(Validator.isEmpty(username)) {
      Alert.alert(
        'Login failed',
        'Please, enter a username.',
        [{ text: 'Accept' }]
      );
      return false;
    }
    //Password
    if(Validator.isEmpty(password)) {
      Alert.alert(
        'LOgin failed',
        'Please, enter a password.',
        [{ text: 'Accept' }]
      );
      return false;
    }
    return true;
  }
}