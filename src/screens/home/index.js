// @flow

import React, { PureComponent } from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  Alert
} from 'react-native';

import Button from '../../components/button';
import Style from '../../stylesheet';
import NavBar from '../../components/nav.bar';
import ScreenTitle from '../../components/screen.title';
import Preloader from '../../components/preloader';
import {
  confirmLogout,
  onLogoutSuccess,
  onLogoutFailure
} from '../../helpers/logout';

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
    //Send Logout Success
    if(!this.props.login.sendLogoutSuccess && props.login.sendLogoutSuccess){
      this.setState({showPreloader: false});
      onLogoutSuccess();
    }
    //Send Logout Failure
    if(!this.props.login.sendLogoutFailure && props.login.sendLogoutFailure){
      this.setState({showPreloader: false});
      onLogoutFailure();
    }
  }

  onPressLogout = (): void => {
    confirmLogout(this.props.sendLogout);
  }

  render(){
    const {
      showPreloader
    } = this.state;
    return(
      <SafeAreaView style={styles.container}>
        <NavBar 
          menu={true}
        />
        <ScreenTitle 
          text="HOME"
        />
        <View style={styles.content}>
          <Button 
            text="Logout"
            onPress={this.onPressLogout}
            style={styles.button}
          />
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
  content:{
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 18
  },
  button:{
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginVertical: 10
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