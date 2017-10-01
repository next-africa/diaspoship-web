import React from 'react';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LANGUAGE, AVAILABLE_LANGUAGES } from '../app/constants';

const createComponentWithIntl = (
  children,
  props = {
    locale: DEFAULT_LANGUAGE,
    messages: AVAILABLE_LANGUAGES[DEFAULT_LANGUAGE]
  }
) => {
  return <IntlProvider {...props}>{children}</IntlProvider>;
};

export default createComponentWithIntl;
