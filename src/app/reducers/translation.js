import { handleActions } from 'redux-actions';
import { DEFAULT_LANGUAGE, AVAILABLE_LANGUAGES } from '../constants';

import { setLanguage } from '../actions/translation';

const INITIAL_STATE = {
  selectedLanguage: DEFAULT_LANGUAGE,
  selectedTranslations: AVAILABLE_LANGUAGES[DEFAULT_LANGUAGE]
};

export default handleActions(
  {
    [setLanguage]: (state, { payload }) => ({
      selectedLanguage: payload,
      selectedTranslations: AVAILABLE_LANGUAGES[payload]
    })
  },
  INITIAL_STATE
);
