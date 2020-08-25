// @flow

import React, { PureComponent } from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';

import NavBar from '../../components/nav.bar';
import Style from '../../stylesheet';
import Navigator from '../../navigator';
import ScreenTitle from '../../components/screen.title';
import Preloader from '../../components/preloader';
import Header from './header';
import Date from '../../helpers/date';

import { type TUserDispatchers } from '../../store/actions/user';
import { type TUserStore } from '../../store/reducers/user';
import { type TLoginStore } from '../../store/reducers/login';

type Props = {
  user: TUserStore,
  login: TLoginStore,
  getUserData: $PropertyType<TUserDispatchers,'getUserData'>
};

type State = {
  showPreloader: bool
};

class Index extends PureComponent<Props,State>{

  state = {
    showPreloader: false
  }

  componentDidMount(props){
    this.getUserData();
  }

  UNSAFE_componentWillReceiveProps(props){
    //Start
    if(
      (!this.props.user.start && props.user.start) ||
      (!this.props.login.start && props.login.start)
    ){
      this.setState({showPreloader: true});
    }
    //Get user data Success
    if(!this.props.user.getUserDataSuccess && props.user.getUserDataSuccess){
      this.setState({showPreloader: false});
    }
    //Get user data Failure
    if(!this.props.user.getUserDataFailure && props.user.getUserDataFailure){
      this.setState({showPreloader: false});
      this.onGetUserDataFailure();
    }
  }

  onGetUserDataFailure = (): void => {
    Alert.alert(
      'Error',
      'An error ocurred while loading profile data. Please, try again later.',
      [{text: 'Cancel'},
      {text: 'Retry', onPress: this.getUserData}]
    );
  }

  getUserData = (): void => {
    this.props.getUserData(this.props.user.jwt);
  }

  render(){
    const {
      showPreloader
    } = this.state;
    const {
      firstName,
      lastName,
      email,
      birthdate
    } = this.props.user.userData;
    return(
      <SafeAreaView style={styles.container}>
        <NavBar menu={true} />
        <ScreenTitle text="MY PROFILE" />
        {this.props.user.userData && !showPreloader && <>
          <Header firstName={firstName} lastName={lastName} email={email}/>
          <View style={styles.birthdateContainer}>
            <Text style={styles.birthdateTitle}>Birthdate:</Text>
            <Text>{Date.getBirthdateFormat(birthdate)}</Text>
          </View>
        </>}
        {showPreloader && <Preloader />}
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  birthdateContainer:{
    flexDirection: 'row',
    paddingHorizontal: 18,
    marginTop: 18
  },
  birthdateTitle: {
    fontWeight: 'bold',
    marginRight: 5
  }
});

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import {type TStore} from '../../store';

import getUserData from '../../store/actions/user';

export const mapDispatchToProps = (dispatch: Dispatch<any>) => bindActionCreators(
    getUserData,
    dispatch
);

export const mapStateToProps = (
  {user, login}: TStore
) => ({user, login});
		
export default connect(mapStateToProps,mapDispatchToProps)(Index);