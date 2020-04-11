// @flow

import React, { PureComponent } from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator
} from 'react-native';

import Navigator from '../../navigator';
import Button from '../../components/button';
import Style from '../../stylesheet';

import { type TLoginDispatchers } from '../../store/actions/login';
import { type TLoginStore } from '../../store/reducers/login';

type Props = {
  login: TLoginStore,
  sendLogout: $PropertyType<TLoginDispatchers, 'sendLogout'>
};

type State = {
  showPreloader: bool
}

class Index extends PureComponent<Props,State>{

  state = {
    showPreloader: false
  }

  UNSAFE_componentWillReceiveProps(props){
    //Start
    if(!this.props.login.start && props.login.start){
      this.setState({showPreloader: true});
    }
    //Send Login Success
    if(!this.props.login.sendLogoutSuccess && props.login.sendLogoutSuccess){
      this.setState({showPreloader: false});
      Navigator.replace('Login');
    }
    //Send Login Failure
    if(!this.props.login.sendLogoutFailure && props.login.sendLogoutFailure){
      this.setState({showPreloader: false});
      this.onSendLogoutFailure();
    }
  }
  
  onSendLogoutFailure = () => {
    Alert.alert(
			'Error al cerrar sesión',
			'No se ha podido cerrar sesión. Por favor, intente nuevamente.',
			[
				{	text: 'Cancelar' },
				{	text: 'Reintentar', onPress: this.onPressLogout }
			]
		);

  }

  onPressLogout = () => {
    this.props.sendLogout();
  }

  render(){
    const {
      showPreloader
    } = this.state;
    return(
      <SafeAreaView style={styles.container}>
        <Text>Home Screen</Text>
        <Button 
          text="Logout"
          onPress={this.onPressLogout}
          style={styles.button}
        />
        { showPreloader && 
          <ActivityIndicator 
            style={styles.loadIndicator} 
            color={Style.blueColor}
            size="large"
          />
        }
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  button:{
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginVertical: 10
  },
  loadIndicator:{
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(0,0,0,0.5)',
	}
});

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import {type TStore} from '../../store';

import sendLogout from '../../store/actions/login';

export const mapDispatchToProps = (dispatch: Dispatch<any>) => bindActionCreators(
    sendLogout,
    dispatch
);

export const mapStateToProps = (
  login: TStore
) => (login);
		
export default connect(mapStateToProps,mapDispatchToProps)(Index);