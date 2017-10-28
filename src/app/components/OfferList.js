// React
import React from 'react';
import PropTypes from 'proptypes';
//Material-UI
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
//App Imports
import OfferThumbnail from './OfferThumbnail';

const styles = theme => ({
  offerListContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },

  offerListHeader: {
    padding: '10px 20px'
  },

  offerThumbnail: {
    marginBottom: '1px',
    [theme.breakpoints.up('sm')]: {
      marginRight: '1px',
      flexBasis: '33%'
    }
  }
});

const OfferList = ({ classes, className }) => (
  <Paper className={classNames(classes.root, className)}>
    <div className={classes.offerListHeader}>
      <h4>Latest offers</h4>
    </div>
    <div className={classes.offerListContent}>
      <OfferThumbnail className={classes.offerThumbnail} />
      <OfferThumbnail className={classes.offerThumbnail} />
      <OfferThumbnail className={classes.offerThumbnail} />
      <OfferThumbnail className={classes.offerThumbnail} />
      <OfferThumbnail className={classes.offerThumbnail} />
      <OfferThumbnail className={classes.offerThumbnail} />
      <OfferThumbnail className={classes.offerThumbnail} />
      <OfferThumbnail className={classes.offerThumbnail} />
    </div>
  </Paper>
);

OfferList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OfferList);
