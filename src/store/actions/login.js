// @flow

import Api from '../../api/';
import Login from '../../api/login';
import { Dispatch } from 'redux';

export type TLoginDispatchers = {
  sendLogin: (data?: any) => void,
  sendLogout: (data?: any) => void
}

export type TLoginActions = 
  | { type: 'LOGIN/START' }
  | { type: 'LOGIN/LOGIN_SUCCESS' }
  | { type: 'LOGIN/LOGIN_FAILURE' }
  | { type: 'LOGIN/LOGOUT_SUCCESS' }
  | { type: 'LOGIN/LOGOUT_FAILURE' }

export default {

  sendLogin(data?: any){
    return async function(dispatch: Dispatch<any>) {
      const api = new Api();
      const login = new Login(api);
  
      dispatch({
        type: 'LOGIN/START',
      });
      const response = await login.sendLogin(data);
      if(response.success){
        dispatch({
          type: 'LOGIN/LOGIN_SUCCESS'
          });
        }else{
          dispatch({
            type: 'LOGIN/LOGIN_FAILURE'
          });
        }
    }
  },

  sendLogout(data?: any){
    return async function(dispatch: Dispatch<any>) {
      const api = new Api();
      const login = new Login(api);
  
      dispatch({
        type: 'LOGIN/START',
      });
      const response = await login.sendLogout(data);
      if(response.success){
        dispatch({
          type: 'LOGIN/LOGOUT_SUCCESS'
          });
        }else{
          dispatch({
            type: 'LOGIN/LOGOUT_FAILURE'
          });
        }
    }
  }

}