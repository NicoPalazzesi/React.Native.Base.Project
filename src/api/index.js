// @flow

import Config from 'react-native-config';

const WS_TIMEOUT = 30000;

const error = TypeError('Timeout');

export type TPayload = Object;

export const host = process.env.NODE_ENV === 'production' ? 
    Config.API_PROD_HOST 
  :
    Config.API_DEV_HOST;

export const Model = {
  public_web: 'public_web',
  backoffice: 'backoffice'
};

export const WSErrors = {
  WS_BAD_REQUEST: 400,
  WS_UNPROCESSABLE_ENTITY: 422,
  WS_INTERNAL_ERROR: 500
};

export interface IAPI {
  lastStatusCode: number;
  STATUS_CODES: {[string]: number},
  buildUrl(ws: string, ...segments: Array<string>): string;
  buildPayload(
    method: 'GET' | 'HEAD' | 'PUT' | 'PATCH' | 'POST' | 'DELETE',
    token: string,
    data?: Object
  ): TPayload;
  getPayload(Object): TPayload;
  get(url: string, token: string): Promise<any>;
  post(url: string, token: string, data: Object): Promise<any>;
  put(url: string, token: string, data?: Object): Promise<any>;
  fetch(url: string, payloadBody?: Object): Promise<any>;
  delete(url: string, token: string, data?: Object): Promise<any>;
}

export default class API implements IAPI {

  lastStatusCode: number = 0;

  STATUS_CODES = {
    REQUEST_TIMEOUT: 408,
    UNAUTHORIZED: 401,
    BAD_REQUEST: 400,
  };

  buildUrl(ws: 'public_web' | 'backoffice', ...segments: Array<string>) {
    return `${host}/${ws}/${segments.join('/')}`;
  }
  
  buildPayload(
    method: 'GET' | 'HEAD' | 'PUT' | 'PATCH' | 'POST' | 'DELETE',
    token: string,
    data?: Object
  ): TPayload {
    return {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: typeof data !== 'undefined' ? JSON.stringify(data) : undefined,
    };
  }

  getPayload(payloadBody: Object): TPayload {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payloadBody),
    };
  }

  async get(url: string, token: string) {
    const payload = this.buildPayload('GET', token);
    console.log(url, payload);
    const response = await Promise.race([
      fetch(url, payload),
      new Promise (
        (resolve,reject) => {
          setTimeout(() => {
            reject(error);
          }, WS_TIMEOUT);
        }
      )
    ]);
    if(!response.ok) {
      this.lastStatusCode = response.status;
      throw response;
    }
    const json = await response.json();
    return json;
  }

  async post(url: string, token: string, data: Object) {
    const payload = this.buildPayload('POST', token, data);
    console.log(url, payload);
    const response = await Promise.race([
      fetch(url, payload),
      new Promise (
        (resolve,reject) => {
          setTimeout(() => {
            reject(error);
          }, WS_TIMEOUT);
        }
      )
    ]);
    if(!response.ok) {
      this.lastStatusCode = response.status;
      throw response;
    }
    const json = await response.json();
    return json;
  }

  async put(url: string, token: string, data?: Object) {
    const payload = this.buildPayload('PUT', token, data);
    console.log(url, payload);
    const response = await Promise.race([
      fetch(url, payload),
      new Promise (
        (resolve,reject) => {
          setTimeout(() => {
            reject(error);
          }, WS_TIMEOUT);
        }
      )
    ]);
    if(!response.ok) {
      this.lastStatusCode = response.status;
      throw response;
    }
    const json = await response.json();
    return json;
  }

  async fetch(url: string, payloadBody?: Object): Promise<any> {
    const payload = (
      typeof payloadBody !== 'undefined' ?
        this.getPayload(payloadBody)
      :
        undefined
    );
    console.log(url, payload);
    const response = await Promise.race([
      fetch(url, payload),
      new Promise (
        (resolve,reject) => {
          setTimeout(() => {
            reject(error);
          }, 30000);
        }
      )
    ]);
    if(!response.ok) {
      this.lastStatusCode = response.status;
      throw response;
    }
    const json = await response.json();
    return json;
  }

  async delete(url: string, token: string, data?: Object) {
    const payload = this.buildPayload('DELETE', token, data);
    console.log(url, payload);
    const response = await Promise.race([
      fetch(url, payload),
      new Promise (
        (resolve,reject) => {
          setTimeout(() => {
            reject(error);
          }, WS_TIMEOUT);
        }
      )
    ]);
    if(!response.ok) {
      this.lastStatusCode = response.status;
      throw response;
    }
    const json = await response.json();
    return json;
  }
}