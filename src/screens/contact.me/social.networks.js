// @flow

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import Icon, {type FontAwesomeGlyphs} from 'react-native-vector-icons/FontAwesome';

import Style from '../../stylesheet';
import { openLinkedin, openMail } from '../../helpers/open.link';

type TSocialNetworkProps = {
  icon: FontAwesomeGlyphs,
  onPress: function,
  backgroundColor: string
};

function SocialNetwork(props: TSocialNetworkProps): React$Element<typeof TouchableOpacity> {
  const { icon, onPress, backgroundColor } = props;
  const styles = StyleSheet.create({
    container: {
      width: 40,
      height: 40,
      borderRadius: 20,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor
    },
    icon: {
      color: Style.whiteColor,
      fontSize: Style.fontSizeHuge
    }
  });
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={icon} style={styles.icon} />
    </TouchableOpacity>
  );
}

function SocialNetworks(): React$Element<typeof View> {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row'
    }
  });

  return (
    <View style={styles.container}>
      <SocialNetwork 
        icon="linkedin"
        backgroundColor={Style.linkedinColor}
        onPress={openLinkedin} />
      <SocialNetwork 
        icon="envelope"
        backgroundColor={Style.mailColor}
        onPress={openMail} />
    </View>
  );
}

export default SocialNetworks;