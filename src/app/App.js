//React libs
import React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { IntlProvider } from 'react-intl';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

//App imports
import Header from './components/Header';
import Slider from './components/Home';
import HelmetIntl from './components/HelmetIntl';
import diasposhipApp from './reducers';
import { selectLanguage } from './actions/translation';

let store = createStore(diasposhipApp);

store.dispatch(selectLanguage(window.navigator.language.split('-')[0]));
const AppBody = ({ selectedLanguage, selectedTranslations }) => (
  <IntlProvider locale={selectedLanguage} messages={selectedTranslations}>
    <BrowserRouter>
      <div>
        <HelmetIntl messageId="pages.home.title" />
        <Header state={store.getState()} />
        <Slider />
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
