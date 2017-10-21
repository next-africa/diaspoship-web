import session from '../session';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';

const middlewares = [thunk];
import { FB_APP_ID } from '../../../config/environment';

const mockStore = configureMockStore(middlewares);
import {
  isUserConnected,
  userIsConnecting,
  setUser,
  resetUser,
  logout,
  login,
  loadUserInfos,
  updateUserLoginStatus,
  initializeFacebookSDK
} from '../../actions/session';
import { INITIAL_STATE } from '../session';

describe('Session reduicer', () => {
  it('should return the initial state', () => {
    expect(session(undefined, {})).toEqual(INITIAL_STATE);
  });
  it('it should create an action to set the user connexion status', () => {
    const payload = true;
    expect(session(undefined, isUserConnected(payload))).toEqual({
      ...INITIAL_STATE,
      isConnected: payload
    });
  });
  it('it should create an action to set the user connecting status', () => {
    const payload = true;
    expect(session(undefined, userIsConnecting(payload))).toEqual({
      ...INITIAL_STATE,
      isConnecting: payload
    });
  });
  it('it should create an action to set the existing user infos', () => {
    const payload = {
      id: '3141412214124',
      email: 'test@hotmail.fr',
      name: 'Patrice Diouf',
      picture: 'path'
    };

    expect(session(undefined, setUser(payload))).toEqual({
      ...INITIAL_STATE,
      user: payload
    });
  });
  it('it should create an action to reset the existing user status', () => {
    expect(session(undefined, resetUser())).toEqual(INITIAL_STATE);
  });
});
describe('assync actions', () => {
  const setupFacebookAPI = {
    setup() {
      global.window.FB = {
        login: sinon.stub(),
        logout: sinon.stub(),
        getLoginStatus: sinon.stub(),
        api: sinon.stub()
      };
      return global.window.FB;
    },

    teardown() {
      delete global.window.FB;
    }
  };
  beforeEach(() => {
    setupFacebookAPI.setup();
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: FB_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v2.10'
      });
    };
  });
  afterEach(() => {
    setupFacebookAPI.teardown();
  });

  it('create IS_USER_CONNECTED isConnected', () => {
    const store = mockStore({ session: INITIAL_STATE, translation: {} });
    const expectedActions = [{ payload: true, type: 'IS_USER_CONNECTED' }];

    store.dispatch(isUserConnected(true));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('create USER_IS_CONNECTING when  login', () => {
    const store = mockStore({ session: INITIAL_STATE, translation: {} });
    const expectedActions = [{ payload: true, type: 'USER_IS_CONNECTING' }];

    store.dispatch(login());
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('create LOGOUT_USER when  logout', () => {
    const store = mockStore({ session: INITIAL_STATE, translation: {} });
    const expectedActions = [{ type: 'LOGOUT_USER' }];

    store.dispatch(logout());
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('create USER_IS_CONNECTING when  updateUserLoginStatus', () => {
    const store = mockStore({ session: INITIAL_STATE, translation: {} });
    const expectedActions = [{ payload: true, type: 'USER_IS_CONNECTING' }];

    store.dispatch(updateUserLoginStatus());
    console.log('storee', store.getState());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
