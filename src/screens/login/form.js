// @flow

import React, { PureComponent } from 'react';

import {
  StyleSheet
} from 'react-native';

import Style from '../../stylesheet';
import FormInput from '../../components/form.input';

import { type TLoginInputData } from '../../store/reducers/login';

type Props = {
  username: $PropertyType<TLoginInputData, 'username'>,
  password: $PropertyType<TLoginInputData, 'password'>,
  onChangeUsername: (username: $PropertyType<TLoginInputData, 'username'>) => void,
  onChangePassword: (password: $PropertyType<TLoginInputData, 'password'>) => void,
  onSubmitPassword: () => void
};

type State = void;

export default class Form extends PureComponent<Props,State>{

  fields: {
    username: FormInput | null,
    password: FormInput | null
  } = {
    username: null,
    password: null
  };

  onRefUsername = (elem: FormInput | null): void => {
    this.fields['username'] = elem;
  };

  onChangeUsername = (username: $PropertyType<TLoginInputData, 'username'>): void => {
    this.props.onChangeUsername(username);
  };

  onChangePassword = (password: $PropertyType<TLoginInputData, 'password'>): void => {
    this.props.onChangePassword(password);
  };

  onSubmitUsername = (): void => {
    if(this.fields['username'] !== null) {
      this.fields['username'].focus();
    }
  };

  render(){
    const {
      username,
      password,
      onSubmitPassword
    } = this.props;
    return(
      <>
        <FormInput
          ref={this.onRefUsername}
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
          placeholderTextColor={Style.grayColor}
          keyboardType="default"
          returnKeyType="next"
          autoCapitalize="none"
          icon="account"
          autoCorrect={false}
          onSubmit={this.onSubmitUsername}
          style={styles.input}
        />
        <FormInput
          placeholder="Password"
          placeholderTextColor={Style.grayColor}
          value={password}
          onChange={this.onChangePassword}
          keyboardType="default"
          returnKeyType="next"
          autoCorrect={false}
          icon="lock"
          secureTextEntry={true}
          onSubmit={onSubmitPassword}
          style={styles.input}
        />
      </>
    );
  };

}

const styles = StyleSheet.create({
  input:{
    height: 50,
    marginBottom: 5,
  }
});