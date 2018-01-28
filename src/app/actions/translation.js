// Redux
import { createAction } from 'redux-actions';

// Cookies
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setLanguage = createAction('SET_LANGUAGE');

export const selectLanguage = locale => {
  return dispatch => {
    if (!locale) locale = cookies.get('locale');

    if (!locale) locale = window.navigator.language.split('-')[0];

    cookies.set('locale', locale);
    return dispatch(setLanguage(locale));
  };
};
