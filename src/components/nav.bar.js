// @flow

import React, { PureComponent } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  StyleSheet
} from 'react-native';

import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

import Style from '../stylesheet';
import Navigator from '../navigator';

type Props = {
  menu?: bool
};

type State = void;

export default class NavBar extends PureComponent<Props,State>{

  static defaultProps = {
    menu: false
  };

  onPressMenuButton = () => {
    this.hideKeyboard();
    Navigator.openDrawer();
  }

  hideKeyboard = () => {
    Keyboard.dismiss();
  }

  render(){
    const {
      menu
    } = this.props;
    return(
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          { menu &&
            <TouchableOpacity 
              style={styles.button}
              onPress={this.onPressMenuButton}
            >
              <IconMCI 
                name="menu"
                color={Style.blackColor}
                size={30}
              />
            </TouchableOpacity>
          }
        </View>
        <Text style={styles.text}>R. N. Base Project</Text>
        <View style={styles.buttonContainer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 55
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Style.fontSizeBig,
    color: Style.blueColor
  },
  buttonContainer:{
    width: '18%'
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10
  }
})