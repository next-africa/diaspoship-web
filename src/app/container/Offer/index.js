// React
import React from 'react';
import 'react-rater/lib/react-rater.css';
import { connect } from 'react-redux';

// App imports
import { fetchOffer } from '../../actions/offers';
import OfferComponent from '../../components/Offer';

const Offer = ({ ...props }) => <OfferComponent {...props} />;
const mapStateToProps = ({ offers: { selectedOffer } }) => ({
  offer: selectedOffer
});
const mapDispatchToProps = dispatch => {
  return {
    fetchOffer: id => dispatch(fetchOffer(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
