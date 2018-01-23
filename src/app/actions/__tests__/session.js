import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import {
  logout,
  login,
  userIsConnecting,
  resetUser,
  setUser,
  updateUserLoginStatus,
  initializeFacebookSDK,
  loadUserInfos
} from '../session';
import { INITIAL_STATE } from '../../reducers/session';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('session actions', () => {
  let store;
  const setupFacebookAPI = {
    setup() {
      global.window.FB = {
        login: jest.fn(),
        logout: jest.fn(),
        getLoginStatus: jest.fn(),
        api: jest.fn(),
        init: jest.fn()
      };
      return global.window.FB;
    },

    teardown() {
      delete global.window.FB;
    }
  };
  beforeEach(() => {
    setupFacebookAPI.setup();
    store = mockStore({ session: INITIAL_STATE, translation: {} });
  });
  afterEach(() => {
    setupFacebookAPI.teardown();
  });

  describe('initialize Facebook SDK', () => {
    const dispatch = jest.fn();

    it('should dispatch updateUserLoginStatus action after window.fbAsyncInit has been called', () => {
      initializeFacebookSDK()(dispatch);
      window.fbAsyncInit();
      expect(dispatch).toBeCalledWith(updateUserLoginStatus());
    });
  });
  describe('update user Login status', () => {
    let response = {
      status: 'connected'
    };

    beforeEach(() => {
      global.window.FB.getLoginStatus = callback => callback(response);
    });

    it('should dispatch loadUserInfos if user is connected', () => {
      const dispatch = jest.fn();
      updateUserLoginStatus()(dispatch);
      expect(dispatch.mock.calls).toEqual([
        [userIsConnecting(true)],
        [loadUserInfos()]
      ]);
    });

    it('should dispatch userIsConnecting(false)  and resetUser if user is  not connected', () => {
      response.status = 'error';
      store.dispatch(updateUserLoginStatus());
      expect(store.getActions()).toEqual([
        userIsConnecting(true),
        userIsConnecting(false),
        resetUser()
      ]);
    });
  });
  describe('login user', () => {
    let response = {
      error: false
    };
    beforeEach(() => {
      global.window.FB.login = callback => callback(response);
    });

    it('should dispatch userIsConnecting(true) and  loadUserInfos if there is no error ', () => {
      const dispatch = jest.fn();
      login()(dispatch);
      expect(dispatch.mock.calls).toEqual([
        [userIsConnecting(true)],
        [loadUserInfos()]
      ]);
    });

    it('should dispatch userIsConnecting(true) and  loadUserInfos if there is an  error ', () => {
      response.error = true;
      store.dispatch(login());
      expect(store.getActions()).toEqual([
        userIsConnecting(true),
        userIsConnecting(false)
      ]);
    });
  });

  describe('load User Infos', () => {
    let { id, email, name, first_name, picture } = INITIAL_STATE;
    let User = {
      id: id,
      email: email,
      name: name,
      first_name: first_name,
      picture
    };
    let response = {
      error: false,
      picture: {
        data: {
          url: picture
        }
      }
    };

    beforeEach(() => {
      global.window.FB.api = (
        me,
        param = { fields: 'id, name,first_name, email, picture' },
        callback
      ) => {
        callback(response);
      };
    });

    it('should dispatch setUser and userIsConnecting(false) if there is no  error', () => {
      store.dispatch(loadUserInfos());
      expect(store.getActions()).toEqual([
        setUser(User),
        userIsConnecting(false)
      ]);
    });
    it('should dispatch userIsConnecting(false) if there is  an  error', () => {
      response.error = true;
      store.dispatch(loadUserInfos());
      expect(store.getActions()).toEqual([userIsConnecting(false)]);
    });
  });
  it('create USER_IS_CONNECTING when  login', () => {
    const expectedActions = [{ payload: true, type: 'USER_IS_CONNECTING' }];

    store.dispatch(login());
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('create LOGOUT_USER when  logout', () => {
    const expectedActions = [{ type: 'LOGOUT_USER' }];

    store.dispatch(logout());
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('create USER_IS_CONNECTING when  updateUserLoginStatus', () => {
    const expectedActions = [{ payload: true, type: 'USER_IS_CONNECTING' }];

    store.dispatch(updateUserLoginStatus());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
