// React
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
//Material-UI
import Paper from 'material-ui/Paper';
import { LinearProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
//App
import OfferType from '../../types/offer';
import OfferThumbnail from './OfferThumbnail';
import { fetchOffers } from '../../actions/offers';

const styles = theme => ({
  root: {
    position: 'relative'
  },

  offerListContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '5px',
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },

  offerListHeader: {
    padding: '10px 20px'
  },

  offerThumbnail: {
    margin: '5px',
    [theme.breakpoints.up('sm')]: {
      flexBasis: '30%'
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
      offers,
      error,
      history
    } = this.props;

    return (
      <Paper className={classNames(classes.root, className)}>
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
              <OfferThumbnail
                className={classes.offerThumbnail}
                onClick={() => history.push(`/offers/${offer.id}`)}
                key={offer.id}
                offer={offer}
              />
            ))}
          </div>
        )}
      </Paper>
    );
  }
}

OfferListComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  offers: PropTypes.arrayOf(OfferType).isRequired,
  onFetchOffers: PropTypes.func.isRequired
};

const mapStateToProps = ({
  offers: { error, isFetching, filters, offers }
}) => ({
  error,
  isFetching,
  filters,
  offers
});

const mapDispatchToProps = dispatch => ({
  onFetchOffers: () => dispatch(fetchOffers())
});

export const OfferList = withStyles(styles)(withRouter(OfferListComponent));

export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
