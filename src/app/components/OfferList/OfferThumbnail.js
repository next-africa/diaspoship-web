// React
import React from 'react';
import PropTypes from 'prop-types';
//Material-UI
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import TrainIcon from 'material-ui-icons/Train';
import ArrowForward from 'material-ui-icons/ArrowForward';
import classNames from 'classnames';
//App
import OfferType from '../../types/offer';

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

const OfferThumbnail = ({ offer, classes, className, ...props }) => (
  <Card className={classNames(classes.root, className)} {...props}>
    <CardContent>
      <div className={classes.destinationRow}>
        <span className={classes.from}> {offer.from} </span>
        <ArrowForward />
        <span className={classes.to}> {offer.to} </span>
      </div>
      <div className={classes.contentRow}>
        <span className={classes.date}>{offer.departureDate}</span>
        <TrainIcon />
        <span className={classes.date}>{offer.arrivalDate}</span>
      </div>
      <div className={classes.pricingRow}>
        <span className={classes.pricingItem}>{offer.availableKg}</span>
        <span className={classes.pricingItem}> à </span>
        <span className={classes.priceItem}>
          {offer.pricePerKg} {offer.currencyUnit}/Kg
        </span>
      </div>
    </CardContent>
  </Card>
);

OfferThumbnail.propTypes = {
  classes: PropTypes.object.isRequired,
  offer: OfferType
};

export default withStyles(styles)(OfferThumbnail);
