export default class Login {
  api;

  constructor(api){
    this.api = api;
  }

  async sendLogin(data){
    /*const url = this.api.buildUrl(Model.public_web,'citizens','login');
    try{
      return await this.api.post(url,undefined,dataFormatToSend);
    }catch(e){
      console.error('fail Login.sendLogin',e.status);
      return e;
    }*/
    return {success: true}
  }

  async sendLogout(data){
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