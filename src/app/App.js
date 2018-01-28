//React libs
import React from 'react';
import { IntlProvider } from 'react-intl';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
//App imports
import Header from './components/Header';
import Home from './components/Home';
import HelmetIntl from './components/HelmetIntl';
import { selectLanguage } from './actions/translation';
import configureStore from './store/configureStore';
import { initializeFacebookSDK } from './actions/session';
import Offer from './container/Offer';
//Material UI
import { withStyles } from 'material-ui/styles';
import { create as createJss } from 'jss';
import { JssProvider } from 'react-jss';
import jssExtend from 'jss-extend';
import jssPressetDefault from 'jss-preset-default';

const jss = createJss(jssPressetDefault());

jss.use(jssExtend());

const styles = () => ({
  root: {
    padding: '80px 5px 0',
    margin: '0 auto',
    maxWidth: '1140px',
    fontFamily: 'Roboto,sans-serif'
  }
});

const store = configureStore();

store.dispatch(selectLanguage());
store.dispatch(initializeFacebookSDK());

const AppBody = ({ selectedLanguage, selectedTranslations, classes }) => (
  <IntlProvider
    key={selectedLanguage}
    locale={selectedLanguage}
    messages={selectedTranslations}
  >
    <Router>
      <div>
        <HelmetIntl messageId="pages.home.title" />
        <Header />
        <div className={classes.root}>
          <Route exact={true} path="/" component={Home} />
          <Route path="/offers/:offerID" component={Offer} />
        </div>
      </div>
    </Router>
  </IntlProvider>
);

AppBody.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({
  translation: { selectedLanguage, selectedTranslations }
}) => ({
  selectedLanguage,
  selectedTranslations
});

const AppBodyWithState = connect(mapStateToProps)(withStyles(styles)(AppBody));

const App = () => (
  <JssProvider jss={jss}>
    <Provider store={store}>
      <AppBodyWithState />
    </Provider>
  </JssProvider>
);

export default App;
