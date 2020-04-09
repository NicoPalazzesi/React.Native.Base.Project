import React, { PureComponent } from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';

import Navigator from '../../navigator';
import Button from '../../components/button';

class Index extends PureComponent{

  onPressGoToLoginScreen = () => {
    Navigator.pop();
  }

  render(){
    return(
      <SafeAreaView style={styles.container}>
        <Text>Home Screen</Text>
        <Button 
          text="Go to Login Screen"
          onPress={this.onPressGoToLoginScreen}
          style={styles.button}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  button:{
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginVertical: 10
  }
});

export default Index;