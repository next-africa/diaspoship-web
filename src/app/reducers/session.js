import { handleActions } from 'redux-actions';
import { logoutUser, loginUser } from '../actions/session';

const INITIAL_STATE = {
  connected: false,
  userInfos: undefined
};
export default handleActions(
  {
    [loginUser]: (state, action) => {
      let connected = state.connected;

      if (connected) {
        return state;
      }
      return Object.assign({}, state, {
        connected: action.payload.response.connected,
        userInfos: action.payload.response.userInfos
      });
    },
    [logoutUser]: (state, action) => {
      return Object.assign({}, state, {
        connected: false,
        userInfos: undefined
      });
    }
  },
  INITIAL_STATE
);
