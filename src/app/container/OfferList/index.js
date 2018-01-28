// React
import { connect } from 'react-redux';
//App
import { fetchOffers } from '../../actions/offers';
import OfferList from '../../components/OfferList';

const mapStateToProps = ({
  offers: { error, isFetching, filters, offers, filteredOffers }
}) => {
  const offerList =
    filters.from !== null && filters.to !== null ? filteredOffers : offers;
  return {
    error,
    isFetching,
    offers: offerList
  };
};

const mapDispatchToProps = dispatch => ({
  onFetchOffers: () => dispatch(fetchOffers())
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
