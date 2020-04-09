export const loginInitialState = {
  start: false,
  isLogged: false,
  sendLoginSuccess: false,
  sendLoginFailure: false,
  sendLogoutSuccess: false,
  sendLogoutFailure: false
};

const _loginReducer = (
  state = loginInitialState,
  action
) => {
  switch(action.type){
    case 'LOGIN/START':
      return {
        ...state,
        start: true,
        sendLoginSuccess: false,
        sendLoginFailure: false,
        sendLogoutSuccess: false,
        sendLogoutFailure: false
      }
    case 'LOGIN/LOGIN_SUCCESS':
      return {
        ...state,
        start: false,
        isLogged: true,
        sendLoginSuccess: true
      }
    case 'LOGIN/LOGIN_FAILURE':
      return {
        ...state,
        start: false,
        sendLoginFailure: true
      }
    case 'LOGIN/LOGOUT_SUCCESS':
      return {
        ...state,
        start: false,
        isLogged: false,
        sendLogoutSuccess: true
      }
    case 'LOGIN/LOGOUT_FAILURE':
      return {
        ...state,
        start: false,
        sendLogoutFailure: true
      }
    default:
      return {
        ...state
      }
  }
}

import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const loginPersistConfig = {
  key: 'login',
  storage: AsyncStorage,
  whitelist: [
    'isLogged'
  ]
};

export const loginReducer = persistReducer(
  loginPersistConfig, _loginReducer
);