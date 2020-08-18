import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Config from 'react-native-config';

import Style from '../../stylesheet';
import { openLink } from '../../helpers/open.link';

const goToGitHubRepository = (): void => {
  openLink(Config.GITHUB_REPOSITORY);
}

function GitHub(): React$Element<typeof TouchableOpacity> {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 18,
      flexDirection: 'row',
      alignItems: 'center'
    },
    text: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
  });

  return(
    <TouchableOpacity style={styles.container} onPress={goToGitHubRepository}>
      <Text style={styles.text}>See project on </Text>
      <Icon name="github" size={Style.fontSizeBig}/>
    </TouchableOpacity>
  );
}

export default GitHub;