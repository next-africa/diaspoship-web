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
      let connected = state.connected;
      if (connected) {
        return state;
      }
      return Object.assign({}, state, {
        connected: payload.connected,
        userInfos: payload.userInfos
      });
    },

    [logoutUser]: () => INITIAL_STATE
  },
  INITIAL_STATE
);
