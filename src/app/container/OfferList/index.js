// React
import React from 'react';
import { connect } from 'react-redux';
//App
import { fetchOffers } from '../../actions/offers';
import OfferList from '../../components/OfferList';

const Offers = ({ ...props }) => <OfferList {...props} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(Offers);
