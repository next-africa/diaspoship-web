// React
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
//Material-UI
import { LinearProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
//App
import OfferType from '../../types/offer';
import OfferThumbnail from './OfferThumbnail';

const styles = theme => ({
  root: {
    position: 'relative'
  },

  offerListContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },

  offerListHeader: {
    padding: '10px 20px'
  },

  offerThumbnailButton: {
    margin: '5px',
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      flex: '1 1 280px',
      minWidth: '280px'
    }
  }
});

const LoadingIndicator = props => {
  if (props.isVisible) {
    return <LinearProgress mode="query" />;
  }

  return null;
};

class OfferListComponent extends React.Component {
  constructor(props) {
    super(props);
    if (!props.isFetching) {
      props.onFetchOffers();
    }
  }

  render() {
    const {
      classes,
      className,
      isFetching,
      isSearching,
      offers,
      filteredOffers,
      error,
      history
    } = this.props;
    const offerList = isSearching ? filteredOffers : offers;
    return (
      <div className={classNames(classes.root, className)}>
        <div className={classes.offerListHeader}>
          <h4>
            <FormattedMessage id="components.offer-list.header.noFilters" />
          </h4>
          <LoadingIndicator isVisible={isFetching} />
        </div>
        {error ? (
          <FormattedMessage id="components.offer-list.header.error" />
        ) : (
          <div className={classes.offerListContent}>
            {offers.map(offer => (
              <Button
                raised
                key={offer.id}
                onClick={() => history.push(`/offers/${offer.id}`)}
                className={classes.offerThumbnailButton}
              >
                <OfferThumbnail offer={offer} />
              </Button>
            ))}
          </div>
        )}
      </div>
    );
  }
}

OfferListComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  isSearching: PropTypes.bool.isRequired,
  offers: PropTypes.arrayOf(OfferType).isRequired,
  filteredOffers: PropTypes.arrayOf(OfferType).isRequired,
  onFetchOffers: PropTypes.func.isRequired
};

export const OfferList = withStyles(styles)(OfferListComponent);
export default withRouter(OfferList);
