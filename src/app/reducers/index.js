import { combineReducers } from 'redux';
import translation from './translation';
import session from './session';
import offers from './offers';

export default combineReducers({
  offers,
  session,
  translation,
  offers
});
