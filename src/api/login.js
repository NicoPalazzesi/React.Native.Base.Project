// @flow

import { type IAPI } from './index';

export interface ILogin {
  +constructor: (IAPI) => any;

  +sendLogin: (data?: any) => Promise<any>;

  +sendLogout: (data?: any) => Promise<any>;
};

export default class Login implements ILogin {
  api: IAPI;

  constructor(api: IAPI){
    this.api = api;
  }

  async sendLogin(data?: any){
    /*const url = this.api.buildUrl(Model.public_web,'citizens','login');
    try{
      return await this.api.post(url,undefined,dataFormatToSend);
    }catch(e){
      console.error('fail Login.sendLogin',e.status);
      return e;
    }*/
    return {success: true}
  }

  async sendLogout(data?: any){
    /*const url = this.api.buildUrl(Model.public_web,'citizens','logout');
    try{
      return await this.api.post(url,undefined,dataFormatToSend);
    }catch(e){
      console.error('fail Login.sendLogout',e.status);
      return e;
    }*/
    return {success: true}
  }
}