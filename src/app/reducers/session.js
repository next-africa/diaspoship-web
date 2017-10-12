//Redux
import { handleActions } from 'redux-actions';

//App Import
import {
  logoutUser,
  isUserConnected,
  userIsLoading,
  isUserAuthorized,
  userFetchDataSuccess
} from '../actions/session';

const INITIAL_STATE = {
  isConnected: false,
  isAuthorized: false,
  isLoading: false,
  userInfos: {
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
    [userIsLoading]: (state, action) => {
      switch (action.type) {
        case 'ITEMS_IS_LOADING':
          return Object.assign({}, state, {
            isLoading: action.payload
          });
        default:
          return state;
      }
    },
    [isUserAuthorized]: (state, action) => {
      switch (action.type) {
        case 'IS_USER_AUTHORIZED':
          return Object.assign({}, state, {
            isAuthorized: action.payload
          });
        default:
          return state;
      }
    },
    [userFetchDataSuccess]: (state, action) => {
      switch (action.type) {
        case 'USER_FETCH_DATA_SUCCESS':
          return Object.assign({}, state, {
            userInfos: action.payload
          });
        default:
          return state;
      }
    },
    [logoutUser]: () => INITIAL_STATE
  },
  INITIAL_STATE
);
