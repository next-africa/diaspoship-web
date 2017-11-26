//React libs
import React from 'react';
import { IntlProvider } from 'react-intl';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'proptypes';
//App imports
import Header from './components/Header';
import Home from './components/Home';
import HelmetIntl from './components/HelmetIntl';
import { selectLanguage } from './actions/translation';
import configureStore from './store/configureStore';
import { initializeFacebookSDK } from './actions/session';
import Offer from './components/Offer';
//Material UI
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    padding: '80px 5px 0',
    margin: '0 auto',
    maxWidth: '1140px'
  }
});
const store = configureStore();
store.dispatch(selectLanguage(window.navigator.language.split('-')[0]));
store.dispatch(initializeFacebookSDK());

const AppBody = ({ selectedLanguage, selectedTranslations, classes }) => (
  <IntlProvider locale={selectedLanguage} messages={selectedTranslations}>
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
  <Provider store={store}>
    <AppBodyWithState />
  </Provider>
);

export default App;
