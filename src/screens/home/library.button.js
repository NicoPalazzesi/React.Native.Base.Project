// @flow

import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

import { openLink } from '../../helpers/open.link';

function LibraryButton(props: Object): React$Element<typeof TouchableOpacity> {
  const { source, name, url } = props;

  const onPressLibrary = (): void => {
    openLink(url);
  }

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingVertical: 5,
      width: 130
    },
    image: {
      width: 40,
      height: 40,
      resizeMode: 'cover'
    }
  });
  
  return (
    <TouchableOpacity style={styles.container} onPress={onPressLibrary}>
      <Image source={source} style={styles.image}/>
      <Text>{name}</Text>
    </TouchableOpacity>
  )
}

export default LibraryButton;