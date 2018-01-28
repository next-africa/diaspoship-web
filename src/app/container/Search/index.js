// React
import React from 'react';
import { connect } from 'react-redux';

// App import
import SearchForm from '../../components/SearchForm';
import { doSearch, handleSearch } from '../../actions/offers';

const Search = ({ ...props }) => <SearchForm {...props} />;
const mapStateToProps = ({ offers: { offers, filteredOffers } }) => ({
  offers,
  filteredOffers
});
const mapDispatchToProps = dispatch => ({
  onSearch: (from, to) => dispatch(handleSearch(from, to))
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
