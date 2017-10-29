// React
import React from 'react';
import PropTypes from 'proptypes';
//Material-UI
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import TrainIcon from 'material-ui-icons/Train';
import ArrowForward from 'material-ui-icons/ArrowForward';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'column',
    lineHeight: '20px',
    color: 'rgba(0, 0, 0, 0.87)'
  },

  contentRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    whiteSpace: 'nowrap',
    fontSize: '12px',
    marginBottom: '10px',
    '&:first-child': {
      paddingTop: 0
    },
    '&:last-child': {
      marginBottom: 0
    }
  },

  destinationRow: {
    extend: 'contentRow',
    fontSize: '14px'
  },

  pricingRow: {
    extend: 'contentRow',
    justifyContent: 'flex-end'
  },

  pricingItem: {
    marginRight: '5px',
    '&:last-child': {
      marginRight: '0px'
    }
  },

  priceItem: {
    extend: 'pricingItem',
    color: 'green'
  }
});

const OfferThumbnail = ({ classes, className }) => (
  <Card className={classNames(classes.root, className)}>
    <CardContent>
      <div className={classes.destinationRow}>
        <span className={classes.from}> Québec </span>
        <ArrowForward />
        <span className={classes.to}> Montréal </span>
      </div>
      <div className={classes.contentRow}>
        <span className={classes.date}>23 Novembre 2017</span>
        <TrainIcon />
        <span className={classes.date}>23 Novembre 2017</span>
      </div>
      <div className={classes.pricingRow}>
        <span className={classes.pricingItem}>24 Kg</span>
        <span className={classes.pricingItem}> à </span>
        <span className={classes.priceItem}>25 USD/Kg</span>
      </div>
    </CardContent>
  </Card>
);

OfferThumbnail.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OfferThumbnail);
