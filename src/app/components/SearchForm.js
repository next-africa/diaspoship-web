// React
import React from 'react';
import { intlShape, injectIntl } from 'react-intl';
import PropTypes from 'proptypes';
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

    this.initializeAutocomplete = this.initializeAutocomplete.bind(this);
  }

  initializeAutocomplete(id) {
    var element = document.getElementById(id);

    if (element) {
      var autocomplete = new window.google.maps.places.Autocomplete(element, {
        types: ['geocode']
      });
      window.google.maps.event.addListener(
        autocomplete,
        'place_changed',
        function() {
          var place = autocomplete.getPlace();
          debugger;
          console.log(place);
          for (var i in place.address_components) {
            var component = place.address_components[i];
            for (var j in component.types) {
              var type_element = document.getElementById(component.types[j]);
              if (type_element) {
                type_element.value = component.long_name;
              }
            }
          }
        }
      );
    }
  }

  componentDidMount() {
    window.google.maps.event.addDomListener(
      window,
      'load',
      function() {
        this.initializeAutocomplete('origin-input');
        this.initializeAutocomplete('destination-input');
      }.bind(this)
    );
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
