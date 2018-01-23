// React
import React from 'react';
import { connect } from 'react-redux';

// App import
import SearchForm from '../../components/SearchForm';

const Search = ({ ...props }) => <SearchForm {...props} />;
const mapStateToProps = ({ offers: { offers } }) => ({ offers });

export default connect(mapStateToProps)(Search);
