import React, { PureComponent } from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert
} from 'react-native';

import Navigator from '../../navigator';
import Button from '../../components/button';
import Style from '../../stylesheet';

class Index extends PureComponent{

  constructor(props) {
    super(props);

    Navigator.setNavigator(props.navigation);

    if(props.login.isLogged){
      Navigator.replace('Home');
    }
  }

  state = {
    showPreloader: false
  }

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
			'Error al iniciar sesión',
			'No se ha podido iniciar sesión. Por favor, intente nuevamente.',
			[
				{	text: 'Cancelar' },
				{	text: 'Reintentar', onPress: this.onPressLogin }
			]
		);

  }

  onPressLogin = () => {
    this.props.sendLogin();
  }

  render(){
    const {
      showPreloader
    } = this.state;
    return(
      <SafeAreaView style={styles.container}>
        <Text>Login Screen</Text>
        <Button 
          text="Login"
          onPress={this.onPressLogin}
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

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import sendLogin from '../../store/actions/login';

export const mapDispatchToProps = (dispatch) => bindActionCreators(
    sendLogin,
    dispatch
);

export const mapStateToProps = (
  login
) => (login);
		
export default connect(mapStateToProps,mapDispatchToProps)(Index);