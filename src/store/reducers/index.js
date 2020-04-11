//@flow

import { combineReducers } from 'redux';

import {loginReducer, loginInitialState} from './login';

export default combineReducers(
  { 
    login: loginReducer
  }, 
  { 
    loginReducer: loginInitialState
  }
)