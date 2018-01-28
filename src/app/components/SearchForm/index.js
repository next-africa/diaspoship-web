// React
import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
// Material-ui
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
// React-intl
import { FormattedMessage } from 'react-intl';
// Services
import GooglePlacesService from '../../services/google-places';

const styles = theme => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    padding: '0px 15px',
    justifyContent: 'space-between'
  },

  inputField: {
    backgroundColor: 'white',
    paddingLeft: '5px'
  },

  labelClassName: {
    paddingLeft: '5px'
  },

  paper: {
    marginTop: 0,
    padding: 4,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 10,
    boxShadow:
      '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px -2px rgba(0, 0, 0, 0.12)'
  },

  TextField: {
    marginTop: 0
  }
});

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingGooglePlacesLibrary: true,
      isGooglePlacesLibraryAvailable: false,
      from: '',
      to: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this._handleTextFieldFrom = this._handleTextFieldFrom.bind(this);
    this._handleTextFieldTo = this._handleTextFieldTo.bind(this);
  }
  _handleTextFieldFrom(e) {
    const from = e.target.value;
    if (from === '') {
      this.setState(prevState => ({
        ...prevState,
        from
      }));
      this.handleSearch();
    }
  }

  _handleTextFieldTo(e) {
    const to = e.target.value;
    if (to === '') {
      this.setState(prevState => ({
        ...prevState,
        to
      }));

      this.handleSearch();
    }
  }

  handleSearch() {
    if (this.state.from !== '' && this.state.to !== '') {
      this.props.onSearch(this.state.from, this.state.to);
    } else {
      this.props.onResetFilters();
    }
  }

  componentDidMount() {
    // TODO: Refactor this to use classes instead of ids when we will move away from Material UI React
    GooglePlacesService.loadGooglePlacesLibrary(this.context.intl.locale)
      .then(() => {
        GooglePlacesService.initializeAutocompleteField(
          window.document.getElementById('origin-input'),
          location => {
            this.setState(prevState => ({
              ...prevState,
              from: location.name
            }));

            this.handleSearch();
          }
        );
        GooglePlacesService.initializeAutocompleteField(
          window.document.getElementById('destination-input'),
          location => {
            this.setState(prevState => ({
              ...prevState,
              to: location.name
            }));
            this.handleSearch();
          }
        );

        this.setState({
          isLoadingGooglePlacesLibrary: false,
          isGooglePlacesLibraryAvailable: true
        });
      })
      .catch(() => {
        this.setState({
          isLoadingGooglePlacesLibrary: false,
          isGooglePlacesLibraryAvailable: false
        });
      });
  }

  render() {
    const classes = this.props.classes;
    const formatMessage = this.context.intl.formatMessage;
    const isSearchNotPossible =
      !this.state.isLoadingGooglePlacesLibrary &&
      !this.state.isGooglePlacesLibraryAvailable;

    const searchFromLabel = formatMessage({
      id: 'components.search-form.from.label'
    });

    const searchFromPlaceholder = formatMessage({
      id: 'components.search-form.from.placeholder'
    });

    const searchToLabel = formatMessage({
      id: 'components.search-form.to.label'
    });

    const searchToPlaceholder = formatMessage({
      id: 'components.search-form.to.placeholder'
    });

    return (
      <Card>
        <div className={classes.root}>
          <TextField
            label={searchFromLabel}
            className={classes.inputField}
            labelClassName={classes.labelClassName}
            InputProps={{
              id: 'origin-input',
              placeholder: searchFromPlaceholder
            }}
            fullWidth
            margin="normal"
            onChange={this._handleTextFieldFrom}
          />

          <TextField
            label={searchToLabel}
            className={classes.inputField}
            labelClassName={classes.labelClassName}
            InputProps={{
              id: 'destination-input',
              placeholder: searchToPlaceholder
            }}
            fullWidth
            margin="normal"
            onChange={this._handleTextFieldTo}
          />
        </div>

        {isSearchNotPossible ? (
          <p>
            <FormattedMessage id="components.search-form.unavailable" />
          </p>
        ) : (
          ''
        )}
      </Card>
    );
  }
}

SearchForm.contextTypes = {
  intl: intlShape.isRequired
};

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(injectIntl(SearchForm));
