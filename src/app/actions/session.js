import { createAction } from 'redux-actions';
import { FB_APP_ID } from '../../config/environment';
export const resetUser = createAction('LOGOUT_USER');
export const isUserConnected = createAction('IS_USER_CONNECTED');
export const userIsConnecting = createAction('USER_IS_CONNECTING');
export const setUser = createAction('USER_FETCH_DATA_SUCCESS');
const FB_APP_ID = process.env.REACT_APP_SECRET_FB_APP_ID;

export function login() {
  return dispatch => {
    dispatch(userIsConnecting(true));
    window.FB.login(function(response) {
      if (response && !response.error) {
        dispatch(loadUserInfos());
      } else {
        dispatch(userIsConnecting(false));
      }
    });
  };
}

export function logout() {
  return dispatch => {
    window.FB.logout();
    dispatch(resetUser());
  };
}

export function loadUserInfos() {
  return dispatch => {
    window.FB.api('/me', { fields: 'id, name, email, picture' }, function(
      response
    ) {
      if (response && !response.error) {
        const { id, email, name, picture } = response;
        dispatch(
          setUser({
            id,
            email,
            name: name.split(' ')[0],
            picture: picture.data.url
          })
        );
      }
      dispatch(userIsConnecting(false));
    });
  };
}

export function updateUserLoginStatus() {
  return dispatch => {
    dispatch(userIsConnecting(true));
    window.FB.getLoginStatus(function(response) {
      if (response && response.status === 'connected') {
        dispatch(loadUserInfos());
      } else {
        dispatch(userIsConnecting(false));
        dispatch(resetUser());
      }
    });
  };
}

export function initializeFacebookSDK() {
  return dispatch => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: FB_APP_ID,
        cookie: true,
        autoLoad: true,
        xfbml: true,
        version: 'v2.10'
      });

      dispatch(updateUserLoginStatus());
    };

    // Load the SDK asynchronously
    (function(d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id) || !fjs) return;
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  };
}
