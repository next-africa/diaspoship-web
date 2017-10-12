import { createAction } from 'redux-actions';
import { FB_APP_ID } from '../constants';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = createAction(LOGIN_USER);
export const logoutUser = createAction(LOGOUT_USER);
export const isUserConnected = createAction('IS_USER_CONNECTED');
export const userIsLoading = createAction('ITEMS_IS_LOADING');
export const isUserAuthorized = createAction('IS_USER_AUTHORIZED');
export const userFetchDataSuccess = createAction('USER_FETCH_DATA_SUCCESS');

/*global FB*/
export function fetchUserDataFromFB() {
  return dispatch => {
    dispatch(userIsLoading(true));
    dispatch(isUserAuthorized(false));
    window.fbAsyncInit = function() {
      FB.init({
        appId: FB_APP_ID,
        cookie: true,
        autoLoad: true,
        xfbml: true,
        version: 'v2.10'
      });
      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          dispatch(isUserConnected(true));
          console.log('user is connected');
          FB.api('/me', { fields: 'id, name, email, picture' }, function(
            response
          ) {
            const userInfos = {
              email: response.email,
              name: response.name,
              picture: response.picture.data.url
            };
            console.log('userInfos', userInfos);
            dispatch(userIsLoading(false));
            dispatch(isUserAuthorized(true));
            dispatch(userFetchDataSuccess(userInfos));
          });
        } else if (response.status === 'not_authorized') {
          dispatch(isUserAuthorized(false));
        } else {
          console.log('Please log into this facebook.');
          dispatch(isUserAuthorized(false));
          dispatch(isUserConnected(false));
          dispatch(userIsLoading(false));
        }
      });
    };
    // Load the SDK asynchronously
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  };
}
