// React
import React from 'react';
import { connect } from 'react-redux';

// App import
import SearchForm from '../../components/SearchForm';
import { handleSearch, resetFilters } from '../../actions/offers';

const Search = ({ ...props }) => <SearchForm {...props} />;
const mapStateToProps = ({ offers: { offers } }) => ({
  offers
});
const mapDispatchToProps = dispatch => ({
  onSearch: (from, to) => dispatch(handleSearch(from, to)),
  onResetFilters: () => dispatch(resetFilters())
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
