//Redux
import { handleActions } from 'redux-actions';

//App Import
import { logoutUser, loginUser } from '../actions/session';

const INITIAL_STATE = {
  connected: false,
  userInfos: {
    email: null,
    name: null,
    picture: null
  }
};
export default handleActions(
  {
    [loginUser]: (state, { payload }) => {
      debugger;
      let connected = state.connected;
      if (connected) {
        return state;
      }
      return Object.assign({}, state, {
        connected: payload.isConnected,
        userInfos: payload.userInfos
      });
    },
    [logoutUser]: (state, { payload }) => {
      let infos = {
        email: null,
        name: null,
        picture: null
      };
      return Object.assign({}, state, {
        connected: false,
        userInfos: infos
      });
    }
  },
  INITIAL_STATE
);
