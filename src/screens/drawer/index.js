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
import { confirmLogout } from '../../helpers/logout';

import { type TLoginDispatchers } from '../../store/actions/login';
import { type TUserDispatchers } from '../../store/actions/user';
import { type TLoginStore } from '../../store/reducers/login';
import { type TUserStore } from '../../store/reducers/user';

type State = void;

type Props = {
  login: TLoginStore,
  user: TUserStore,
  sendLogout: $PropertyType<TLoginDispatchers, 'sendLogout'>,
  getUserData: $PropertyType<TUserDispatchers, 'getUserData'>
};

class Index extends PureComponent<Props,State>{

  constructor(props) {
    super(props);

    if(this.props.login.isLogged){
      this.props.getUserData(this.props.user.jwt);
    }
  };

  onPressMyProfile = (): void => {
    Navigator.push("Profile");
    Navigator.closeDrawer();
  }

  onPressAbout = (): void => {
    Navigator.push("About");
    Navigator.closeDrawer();
  }

  onPressContactMe = (): void => {
    Navigator.push("ContactMe");
    Navigator.closeDrawer();
  }

  onPressLogout = (): void => {
    confirmLogout(this.props.sendLogout);
  }

  render(){
    const {
      isLogged
    } = this.props.login;
    const {
      firstName
    } = this.props.user.userData;
    return(
      <SafeAreaView style={styles.container}>
        {isLogged &&
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              Hi {firstName ? firstName : ''}
            </Text>
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
          icon="phone"
          text="Contact me"
          onPress={this.onPressContactMe}
        />
        <Button
          icon="question-circle-o"
          text="About"
          onPress={this.onPressAbout}
        />
        <View style={styles.line} />
        {isLogged &&
          <View style={styles.footerContainer}>
            <Button icon="sign-out" text="Log out" onPress={this.onPressLogout}/>
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
import getDataUser from '../../store/actions/user';

export const mapDispatchToProps = (dispatch: Dispatch<any>) => bindActionCreators(
    Object.assign({},
    sendLogout,
    getDataUser),
    dispatch
);

export const mapStateToProps = (
  {login, user}: TStore
) => ({login, user});
		
export default connect(mapStateToProps, mapDispatchToProps)(Index);