// @flow

import React, { PureComponent } from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';

import Style from '../../stylesheet';
import NavBar from '../../components/nav.bar';
import StatusBar from '../../components/status.bar';
import Preloader from '../../components/preloader';
import ReactNativeImage from './react.native.image';
import InstalledLibraries from './installed.libraries';
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
    // start logout
    if(!this.props.login.start && props.login.start){
      this.setState({showPreloader: true});
    }
    // finish logout
    if(this.props.login.start && !props.login.start){
      this.setState({showPreloader: false});
    }
    // logout success
    if(!this.props.login.sendLogoutSuccess && props.login.sendLogoutSuccess){
      onLogoutSuccess();
    }
    // logout failure
    if(!this.props.login.sendLogoutFailure && props.login.sendLogoutFailure){
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
        <StatusBar />
        <NavBar menu={true} title="Welcome" />
        <View style={styles.content}>
          <View style={styles.rnbpContainer}>
            <ReactNativeImage />
            <Text>Thanks for use</Text>
            <Text style={styles.rnbpText}>{'React Native\nBase Proyect'}</Text>
          </View>
          <InstalledLibraries />
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
    paddingHorizontal: 18
  },
  rnbpContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rnbpText: {
    color: Style.blueLightColor,
    fontSize: Style.fontSizeHuge,
    fontWeight: 'bold'
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