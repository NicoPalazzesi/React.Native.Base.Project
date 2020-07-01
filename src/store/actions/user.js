// @flow

import Api from '../../api/';
import User from '../../api/user';
import { Dispatch } from 'redux';

import {type TUserStore, type TUserData} from '../reducers/user';

export type TUserDispatchers = {
  getUserData: (jwt: $PropertyType<TUserStore,'jwt'>) => void
}

export type TUserActions = 
  | { type: 'USER/START' }
  | { type: 'USER/GET_USER_DATA_SUCCESS', payload: TUserData}
  | { type: 'USER/GET_USER_DATA_FAILURE' }
  | { type: 'USER/SET_JWT', payload: $PropertyType<TUserStore,'jwt'>}

export default {
  getUserData(jwt: $PropertyType<TUserStore,'jwt'>){
    return async function(dispatch: Dispatch<any>) {
      const api = new Api();
      const user = new User(api);
  
      dispatch({
        type: 'USER/START',
      });
      const response = await user.getUserData(jwt);
      if(response.success){
        dispatch({
          type: 'USER/GET_USER_DATA_SUCCESS',
          payload: response.json
          });
        }else{
          dispatch({
            type: 'USER/GET_USER_DATA_FAILURE'
          });
        }
    }
  }
}