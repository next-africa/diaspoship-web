import { handleActions } from 'redux-actions';
import { DEFAULT_LANGUAGE, AVAILABLE_LANGUAGES } from '../constants';

import { selectLanguage } from '../actions/translation';

const INITIAL_STATE = {
  selectedLanguage: DEFAULT_LANGUAGE,
  selectedTranslations: AVAILABLE_LANGUAGES[DEFAULT_LANGUAGE]
};

export default handleActions(
  {
    [selectLanguage]: (state, { payload }) => {
      const languageToSelect = payload.toLowerCase();
      if (!AVAILABLE_LANGUAGES[languageToSelect]) {
        return state;
      }

      return {
        selectedLanguage: payload,
        selectedTranslations: AVAILABLE_LANGUAGES[payload]
      };
    }
  },
  INITIAL_STATE
);
