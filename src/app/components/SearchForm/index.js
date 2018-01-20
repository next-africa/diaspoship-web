// React
import React from 'react';
import { intlShape, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
//Material-ui
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';

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
      textFieldFrom: '',
      textFieldTo: ''
    };
    this._handleTextFieldFrom = this._handleTextFieldFrom.bind(this);
    this._handleTextFieldTo = this._handleTextFieldTo.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);
  }

  _handleTextFieldFrom(e) {
    const from = e.target.value;
    this.setState(prevState => {
      return {
        textFieldFrom: from,
        textFieldTo: prevState.textFieldTo
      };
    });
    this.handleSearch();
  }

  _handleTextFieldTo(e) {
    const to = e.target.value;
    this.setState(function(prevState) {
      return {
        textFieldFrom: prevState.textFieldFrom,
        textFieldTo: to
      };
    });
    this.handleSearch();
  }
  handleSearch() {
    if (this.state.textFieldFrom !== '') {
      let payload = {
        from: this.state.textFieldFrom,
        to: this.state.textFieldTo
      };
    }
  }

  render() {
    const classes = this.props.classes;
    const formatMessage = this.context.intl.formatMessage;

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
      <Card className={classes.root}>
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
          value={this.state.textFieldFrom}
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
          value={this.state.textFieldTo}
          onChange={this._handleTextFieldTo}
        />
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
