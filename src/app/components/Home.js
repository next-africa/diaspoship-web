// React
import React from 'react';
import PropTypes from 'proptypes';
import { FormattedMessage } from 'react-intl';
//Material-UI
import { withStyles } from 'material-ui/styles';
//App Imports
import SearchForm from './SearchForm';
import OfferList from './OfferList';

const styles = theme => ({
  marketingMessage: {
    textAlign: 'center',
    margin: '50px 0',
    fontSize: '1.5em',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },

  offerList: {
    marginTop: '20px'
  }
});

const Home = function({ classes }) {
  return (
    <div>
      <div className={classes.marketingMessage}>
        <FormattedMessage id="pages.home.why-prompt" />
      </div>
      <SearchForm />
      <OfferList className={classes.offerList} />
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
