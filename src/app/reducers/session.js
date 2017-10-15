//Redux
import { handleActions } from 'redux-actions';

//App Import
import {
  resetUser,
  isUserConnected,
  userIsConnecting,
  userFetchDataSuccess
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
    [isUserConnected]: (state, action) => {
      switch (action.type) {
        case 'IS_USER_CONNECTED':
          return Object.assign({}, state, {
            isConnected: action.payload
          });
        default:
          return state;
      }
    },
    [userIsConnecting]: (state, action) => {
      switch (action.type) {
        case 'ITEMS_IS_LOADING':
          return Object.assign({}, state, {
            isConnecting: action.payload
          });
        default:
          return state;
      }
    },
    [userFetchDataSuccess]: (state, action) => {
      switch (action.type) {
        case 'USER_FETCH_DATA_SUCCESS':
          return Object.assign({}, state, {
            user: action.payload
          });
        default:
          return state;
      }
    },
    [resetUser]: () => INITIAL_STATE
  },
  INITIAL_STATE
);
