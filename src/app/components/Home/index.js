// React
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
//Material-UI
import { withStyles } from 'material-ui/styles';
//App Imports
import Search from '../../container/Search';
import OfferList from '../OfferList/OfferList';

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
      <Search />
      <OfferList className={classes.offerList} />
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
