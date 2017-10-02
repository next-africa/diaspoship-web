//React
import React from 'react';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

//Material-UI
import Select from 'material-ui/Select';
import Input from 'material-ui/Input';

//App Imports
import { selectLanguage } from '../actions/translation';
import { AVAILABLE_LANGUAGES } from '../constants';

export const LanguageSelector = ({ selectedLanguage, onSelectLanguage }) => (
  <Select
    native
    name="language-selector"
    value={selectedLanguage}
    onChange={event => onSelectLanguage(event.target.value)}
    input={<Input />}
  >
    {Object.keys(AVAILABLE_LANGUAGES).map(language => (
      <FormattedMessage key={language} id={`languages.${language}`}>
        {languageName => <option value={language}>{languageName}</option>}
      </FormattedMessage>
    ))}
  </Select>
);

LanguageSelector.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelectLanguage: PropTypes.func.isRequired
};

const mapStateToProps = ({ translation: { selectedLanguage } }) => ({
  selectedLanguage
});

const mapDispatchToProps = dispatch => ({
  onSelectLanguage: language => dispatch(selectLanguage(language))
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
