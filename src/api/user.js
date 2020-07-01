// @flow

import { type IAPI } from './index';

import {type TUserStore} from '../store/reducers/user';

export interface IUser {
  +constructor: (IAPI) => any;

  +getUserData: (jwt: $PropertyType<TUserStore,'jwt'>) => Promise<any>;
};

export default class User implements IUser {
  api: IAPI;

  constructor(api: IAPI){
    this.api = api;
  }

  async getUserData(jwt: $PropertyType<TUserStore,'jwt'>){
    /*const url = this.api.buildUrl('users', 'get_user_data');
    try{
      return await this.api.get(url, jwt);
    }catch(e){
      console.error('fail User.getUserData',e.status);
      return e;
    }*/
    await this.wait(2000);
    return {
      success: true,
      json: require('./user.data.json')
    }
  }

  async wait(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
}