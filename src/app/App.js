//React libs
import React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { IntlProvider } from 'react-intl';
import { connect, Provider } from 'react-redux';
//App imports
import Header from './components/Header';
import Home from './components/Home';
import HelmetIntl from './components/HelmetIntl';
import { selectLanguage } from './actions/translation';
import configureStore from './store/configureStore';
import { initializeFacebookSDK } from './actions/session';

const store = configureStore();
store.dispatch(selectLanguage(window.navigator.language.split('-')[0]));
store.dispatch(initializeFacebookSDK());

const AppBody = ({ selectedLanguage, selectedTranslations }) => (
  <IntlProvider locale={selectedLanguage} messages={selectedTranslations}>
    <BrowserRouter>
      <div>
        <HelmetIntl messageId="pages.home.title" />
        <Header />
        <Home />
      </div>
    </BrowserRouter>
  </IntlProvider>
);

const mapStateToProps = ({
  translation: { selectedLanguage, selectedTranslations }
}) => ({
  selectedLanguage,
  selectedTranslations
});

const AppBodyWithState = connect(mapStateToProps)(AppBody);

const App = () => (
  <Provider store={store}>
    <AppBodyWithState />
  </Provider>
);

export default App;
