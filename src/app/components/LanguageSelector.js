//React
import React from 'react';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import { intlShape } from 'react-intl';
//Material-UI
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import LanguageIcon from 'material-ui-icons/Language';
import CheckedIcon from 'material-ui-icons/CheckCircle';
//App Imports
import { selectLanguage } from '../actions/translation';
import { AVAILABLE_LANGUAGES } from '../constants';

const ITEM_HEIGHT = 48;

const styles = theme => ({
  checkedIcon: {
    marginLeft: 'auto'
  }
});

class LanguageSelectorComponent extends React.Component {
  state = {
    anchorEl: null,
    isOpen: false
  };

  handleIconClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  handleLanguageSelection = language => {
    this.handleRequestClose();
    this.props.onSelectLanguage(language);
  };

  render() {
    return (
      <div>
        <IconButton
          aria-label={this.context.intl.formatMessage({
            id: 'components.language-selector.label'
          })}
          aria-owns={this.state.open ? 'language-selector-menu' : null}
          aria-haspopup="true"
          onClick={this.handleIconClick}
        >
          <LanguageIcon />
        </IconButton>

        <Menu
          id="language-selector-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200
            }
          }}
        >
          {Object.keys(AVAILABLE_LANGUAGES).map(language => (
            <MenuItem
              key={language}
              selected={language === this.props.selectedLanguage}
              onClick={() => this.handleLanguageSelection(language)}
            >
              <span>
                {this.context.intl.formatMessage({
                  id: `languages.${language}`
                })}
              </span>
              {language === this.props.selectedLanguage ? (
                <CheckedIcon className={this.props.classes.checkedIcon} />
              ) : (
                ''
              )}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

LanguageSelectorComponent.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelectLanguage: PropTypes.func.isRequired
};

LanguageSelectorComponent.contextTypes = {
  intl: intlShape.isRequired
};

const mapStateToProps = ({ translation: { selectedLanguage } }) => ({
  selectedLanguage
});

const mapDispatchToProps = dispatch => ({
  onSelectLanguage: language => dispatch(selectLanguage(language))
});

const LanguageSelector = withStyles(styles)(LanguageSelectorComponent);

export { LanguageSelector };

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
