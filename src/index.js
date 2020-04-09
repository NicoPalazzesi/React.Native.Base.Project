import React, { PureComponent } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/lib/integration/react';

//import {store, persistor} from './store';
import Login from './screens/login';
import Home from './screens/home';

const Stack = createStackNavigator();

export default class App extends PureComponent{
  render() {
    return (
      //<Provider store={store}>
        //<PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" headerMode="none">
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
          </NavigationContainer>
        //</PersistGate>
      //</Provider>
    );
  }
}