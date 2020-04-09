import Api from '../../api/';
import Login from '../../api/login';

export default {

  sendLogin(data){
    return async function(dispatch) {
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

  sendLogout(data){
    return async function(dispatch) {
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