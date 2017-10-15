import { combineReducers } from 'redux';
import translation from './translation';
import session from './session';

export default combineReducers({
  session,
  translation
});
