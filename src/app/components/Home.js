// React
import React from 'react';
import PropTypes from 'proptypes';
import { FormattedMessage } from 'react-intl';
//Material-UI
import { withStyles } from 'material-ui/styles';
//App Imports
import SearchForm from './SearchForm';

const styles = theme => ({
  root: {
    padding: '80px 5px 0',
    margin: '0 auto',
    maxWidth: '1140px'
  },

  marketingMessage: {
    textAlign: 'center',
    margin: '50px 0',
    fontSize: '1.5em',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
});

const Home = function({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.marketingMessage}>
        <FormattedMessage id="pages.home.why-prompt" />
      </div>
      <SearchForm />
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
