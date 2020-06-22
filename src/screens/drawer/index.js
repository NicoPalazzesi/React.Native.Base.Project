// @flow

import React, { PureComponent } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  StyleSheet
} from 'react-native';

import Button from './button';
import Style from '../../stylesheet';
import Navigator from '../../navigator';

import { type TLoginDispatchers } from '../../store/actions/login';
import { type TLoginStore } from '../../store/reducers/login';

type State = void;

type Props = {
  login: TLoginStore,
  sendLogout: $PropertyType<TLoginDispatchers, 'sendLogout'>
};

class Index extends PureComponent<Props,State>{

  onPressMyProfile = (): void => {

  }

  onPressAbout = (): void => {

  }

  onPressLogOut = (): void => {
    Alert.alert(
      'Confirm log out',
      'Do you want to log out?',
      [ {text: 'Cancel'},
        {text: 'Confirm', onPress: this.onConfirmLogOut}]
    );
  }

  onConfirmLogOut = (): void => {
    this.props.sendLogout();
    Navigator.closeDrawer();
  }

  render(){
    const {
      isLogged
    } = this.props.login;
    return(
      <SafeAreaView style={styles.container}>
        {isLogged &&
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Hi Nicolas</Text>
          </View>
        }
        <View style={styles.bodyContainer}>
          {isLogged && 
            <Button
              icon="user-o"
              text="My profile"
              onPress={this.onPressMyProfile}
            />
          }
        </View>
        <View style={styles.line} />
        <Button
          icon="question-circle-o"
          text="About"
          onPress={this.onPressAbout}
        />
        <View style={styles.line} />
        {isLogged &&
          <View style={styles.footerContainer}>
            <Button icon="sign-out" text="Log out" onPress={this.onPressLogOut}/>
          </View>
        }
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    width: '100%',
    height: 100,
    paddingHorizontal: 18,
    justifyContent: 'center',
    backgroundColor: Style.blueLightColor
  },
  headerText: {
    justifyContent: 'center',
    color: Style.whiteColor,
    fontSize: Style.fontSizeBig
  },
  bodyContainer: {
    flex: 1
  },
  footerContainer:{
    width: '100%'
  },
  line:{
    width: '100%',
    paddingTop: StyleSheet.hairlineWidth,
    backgroundColor: Style.blackColor
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
		
export default connect(mapStateToProps, mapDispatchToProps)(Index);