// @flow

import React, { PureComponent } from 'react';

import {
  SafeAreaView,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Alert
} from 'react-native';

import Config from 'react-native-config';

import Navigator from '../../navigator';
import Button from '../../components/button';
import Style from '../../stylesheet';
import NavBar from '../../components/nav.bar';
import StatusBar from '../../components/status.bar';
import Preloader from '../../components/preloader';
import Form from './form';
import Validator from '../../helpers/validator.login';

import { type TLoginDispatchers } from '../../store/actions/login';
import { type TLoginStore } from '../../store/reducers/login';
import { type TLoginInputData } from '../../store/reducers/login';

type Props = {
  login: TLoginStore,
  sendLogin: $PropertyType<TLoginDispatchers, 'sendLogin'>
};

type State = {
  showPreloader: bool,
  loginInputData: TLoginInputData
}

class Index extends PureComponent<Props,State>{

  constructor(props) {
    super(props);

    Navigator.setNavigator(props.navigation);

    if(props.login.isLogged){
      Navigator.replace('Home');
    }
  };

  state = {
    showPreloader: false,
    loginInputData:{
      username: process.env.NODE_ENV === 'production' ? '' : Config.USERNAME_DEV,
      password: process.env.NODE_ENV === 'production' ? '' : Config.PASSWORD_DEV
    }
  };

  UNSAFE_componentWillReceiveProps(props){
    //Start
    if(!this.props.login.start && props.login.start){
      this.setState({showPreloader: true});
    }
    //Send Login Success
    if(!this.props.login.sendLoginSuccess && props.login.sendLoginSuccess){
      this.setState({showPreloader: false});
      Navigator.replace('Home');
    }
    //Send Login Failure
    if(!this.props.login.sendLoginFailure && props.login.sendLoginFailure){
      this.setState({showPreloader: false});
      this.onSendLoginFailure();
    }
  }
  
  onSendLoginFailure = () => {
    Alert.alert(
			'Login failed',
			"Incorrect username or password.",
			[
				{	text: 'Accept' }
			]
		);

  }

  onChangeUsername = (
    username: $PropertyType<TLoginInputData, 'username'>
  ): void => {
    this.setState({
      loginInputData:{
        ...this.state.loginInputData,
        username
      }  
    });
  };

  onChangePassword = (
    password: $PropertyType<TLoginInputData, 'password'>
  ): void => {
    this.setState({
      loginInputData:{
        ...this.state.loginInputData,
        password
      }  
    });
  };

  onSubmit = () => {
    this.hideKeyboard();
    
    if(Validator.checkLoginInputData(this.state.loginInputData)){
      this.props.sendLogin(this.state.loginInputData);
    }
  }

  hideKeyboard = () => {
    Keyboard.dismiss();
  }

  render(){
    const {
      showPreloader
    } = this.state;
    const {
      username,
      password
    } = this.state.loginInputData;
    return(
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <NavBar menu={true} title="Login" />
        <View style={styles.formContainer}>
          <KeyboardAvoidingView 
            behavior="padding"
            keyboardVerticalOffset={10}>
            <Form
              username={username}
              password={password}
              onChangeUsername={this.onChangeUsername}
              onChangePassword={this.onChangePassword}
              onSubmitPassword={this.onSubmit} />
            <Button 
              text="Login"
              onPress={this.onSubmit}
              style={styles.button} />
          </KeyboardAvoidingView>
        </View>
        {showPreloader && <Preloader />}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  formContainer:{
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 18
  },
  button:{
    marginTop: 13
  }
});

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import {type TStore} from '../../store';

import sendLogin from '../../store/actions/login';

export const mapDispatchToProps = (dispatch: Dispatch<any>) => bindActionCreators(
    sendLogin,
    dispatch
);

export const mapStateToProps = (
  login: TStore
) => (login);
		
export default connect(mapStateToProps,mapDispatchToProps)(Index);