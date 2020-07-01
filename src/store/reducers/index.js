//@flow

import { combineReducers } from 'redux';

import {loginReducer, loginInitialState} from './login';
import {userReducer, userInitialState} from './user';

export default combineReducers(
  { 
    login: loginReducer,
    user: userReducer
  }, 
  { 
    loginReducer: loginInitialState,
    userReducer: userInitialState
  }
)