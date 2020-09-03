import React, { PureComponent } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import {store, persistor} from './store';
import Login from './screens/login';
import Home from './screens/home';
import DrawerMenu from './screens/drawer';
import Profile from './screens/profile';
import About from './screens/about';
import ContactMe from './screens/contact.me';

const ScreensStack = createStackNavigator();
const ScreenStackNavigator = () => (
  <ScreensStack.Navigator headerMode="none">
    <ScreensStack.Screen name="Login" component={Login} />
    <ScreensStack.Screen name="Home" component={Home} />
    <ScreensStack.Screen name="Profile" component={Profile} />
    <ScreensStack.Screen name="About" component={About} />
    <ScreensStack.Screen name="ContactMe" component={ContactMe} />
  </ScreensStack.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={() => <DrawerMenu />}>
    <Drawer.Screen name="ScreensStack" component={ScreenStackNavigator} />
  </Drawer.Navigator>
);

const MainStack = createStackNavigator();
const MainStackNavigator = () => (
  <MainStack.Navigator headerMode="none">
    <MainStack.Screen name="MainApp" component={DrawerNavigator} />
  </MainStack.Navigator>
);

export default class App extends PureComponent<{},void>{
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <MainStackNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}