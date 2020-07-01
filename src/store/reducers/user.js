// @flow

export type TUserData = {
  firstName: string,
  lastName: string,
  email: string,
  birthdate: string
}

export type TUserStore = {
  jwt: null | string,
  userData: TUserData,
  start: bool,
  getUserDataSuccess: bool,
  getUserDataFailure: bool
};

import {type TUserActions } from '../actions/user';

export const userInitialState = {
  jwt: null,
  userData: {},
  start: false,
  getUserDataSuccess: false,
  getUserDataFailure: false
};

const _userReducer = (
  state: TUserStore = userInitialState,
  action: TUserActions
) => {
  switch(action.type){
    case 'USER/START':
      return {
        ...state,
        start: true,
        getUserDataSuccess: false,
        getUserDataFailure: false
      }
    case 'USER/GET_USER_DATA_SUCCESS':
      return {
        ...state,
        start: false,
        getUserDataSuccess: true,
        userData: action.payload
      }
    case 'USER/GET_USER_DATA_FAILURE':
      return {
        ...state,
        start: false,
        getUserDataFailure: true
      }
    case 'USER/SET_JWT':
      return {
        ...state,
        jwt: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: [
    'jwt'
  ]
};

export const userReducer = persistReducer<TUserStore, any>(
  userPersistConfig, _userReducer
);