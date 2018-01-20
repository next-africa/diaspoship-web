// React
import React from 'react';
import { connect } from 'react-redux';

// App import
import { doSearch } from '../../actions/offers';
import SearchForm from '../../components/SearchForm';

const Search = ({ ...props }) => <SearchForm {...props} />;
const mapStateToProps = ({ offers: { offers } }) => ({ offers });

const mapDispatchToProps = dispatch => ({
  onSearch: data => dispatch(doSearch(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
