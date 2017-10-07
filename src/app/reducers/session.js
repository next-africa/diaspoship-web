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
      if (payload.profile.status === 'unknown' || connected) {
        return state;
      }
      localStorage.setItem('isConnected', true);
      return Object.assign({}, state, {
        connected: true,
        userInfos: payload.profile
      });
    },
    [logoutUser]: (state, { payload }) => {
      localStorage.setItem('isConnected', false);
      return Object.assign({}, state, {
        connected: false,
        userInfos: undefined
      });
    }
  },
  INITIAL_STATE
);
