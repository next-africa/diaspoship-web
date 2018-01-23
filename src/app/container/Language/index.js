//React
import React from 'react';
import { connect } from 'react-redux';
//App Imports
import { selectLanguage } from '../../actions/translation';
import LanguageSelector from '../../components/LanguageSelector';

const Language = ({ ...props }) => <LanguageSelector {...props} />;

const mapStateToProps = ({ translation: { selectedLanguage } }) => ({
  selectedLanguage
});

const mapDispatchToProps = dispatch => ({
  onSelectLanguage: language => dispatch(selectLanguage(language))
});

export default connect(mapStateToProps, mapDispatchToProps)(Language);
