//Redux
import { handleActions } from 'redux-actions';

//App Import
import {
  resetUser,
  isUserConnected,
  userIsConnecting,
  setUser
} from '../actions/session';

const INITIAL_STATE = {
  isConnected: false,
  isConnecting: false,
  user: {
    id: null,
    email: null,
    name: null,
    picture: null
  }
};

export default handleActions(
  {
    [isUserConnected]: (state, { payload }) => {
      return Object.assign({}, state, {
        isConnected: payload
      });
    },
    [userIsConnecting]: (state, { payload }) => {
      return Object.assign({}, state, {
        isConnecting: payload
      });
    },
    [setUser]: (state, { payload }) => {
      return Object.assign({}, state, {
        user: payload
      });
    },
    [resetUser]: () => INITIAL_STATE
  },
  INITIAL_STATE
);
