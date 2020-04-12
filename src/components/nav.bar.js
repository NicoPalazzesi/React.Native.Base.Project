// @flow

import React, { PureComponent } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet
} from 'react-native';

import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

import Style from '../stylesheet';

type Props = {
  menu?: bool,
  back?: bool
};

type State = void;

export default class NavBar extends PureComponent<Props,State>{

  static defaultProps = {
    menu: false,
    back: false
  };

  onPressBackButton = () => {

  }

  onPressMenuButton = () => {
    
  }

  render(){
    const {
      menu,
      back
    } = this.props;
    return(
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          { back &&
            <TouchableOpacity 
              style={styles.button}
              onPress={this.onPressBackButton}
            >
              <IconMCI 
                name={ Platform.OS === "ios" ? "chevron-left" : "arrow-left" }
                color={Style.blackColor} 
                size={Style.fontSizeHuge}
              />
            </TouchableOpacity>
          }
        </View>
        <Text style={styles.text}>R. N. Base Project</Text>
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