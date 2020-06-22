// @flow

import { type IAPI } from './index';

import { type TLoginInputData } from '../store/reducers/login';

export interface ILogin {
  +constructor: (IAPI) => any;

  +sendLogin: (data: TLoginInputData) => Promise<any>;

  +sendLogout: () => Promise<any>;
};

export default class Login implements ILogin {
  api: IAPI;

  constructor(api: IAPI){
    this.api = api;
  }

  async sendLogin(data: TLoginInputData){
    /*const url = this.api.buildUrl('users', 'login');
    try{
      return await this.api.post(url, data);
    }catch(e){
      console.error('fail Login.sendLogin',e.status);
      return e;
    }*/
    return {success: 
      data.username === "nicolas" &&
      data.password === "admin123"
    }
  }

  async sendLogout(){
    /*const url = this.api.buildUrl('users', 'logout');
    try{
      return await this.api.post(url);
    }catch(e){
      console.error('fail Login.sendLogout',e.status);
      return e;
    }*/
    return {success: true}
  }
}