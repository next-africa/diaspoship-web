import { handleActions } from 'redux-actions';
import { logoutUser, loginUser } from '../actions/session';

const INITIAL_STATE = {
  connected: false,
  userInfos: undefined
};
export default handleActions(
  {
    [loginUser]: (state, { payload }) => {
      let connected = state.connected;
      if (connected) {
        return state;
      }
      return Object.assign({}, state, {
        connected: payload.isConnected,
        userInfos: payload.profile
      });
    },
    [logoutUser]: (state, { payload }) => {
      return Object.assign({}, state, {
        connected: false,
        userInfos: undefined
      });
    }
  },
  INITIAL_STATE
);
