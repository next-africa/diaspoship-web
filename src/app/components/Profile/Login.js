// React
import React from 'react';
import PropTypes from 'prop-types';
import { intlShape, injectIntl } from 'react-intl';
// Material Ui
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AccountIcon from 'material-ui-icons/AccountCircle';
import IconButton from 'material-ui/IconButton';

const styles = theme => ({
  toolbarButtonWithText: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },

  toolbarButtonWithoutText: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inline-flex'
    }
  }
});
const Login = function({ classes, intl: { formatMessage }, ...props }) {
  const loginButtonText = formatMessage({
    id: 'components.header.buttons.login'
  });

  return (
    <div>
      <IconButton
        color="inherit"
        onClick={props.onLogin}
        aria-label={loginButtonText}
        className={classes.toolbarButtonWithoutText}
      >
        <AccountIcon />
      </IconButton>
      <Button
        color="inherit"
        onClick={props.onLogin}
        aria-label={loginButtonText}
        className={classes.toolbarButtonWithText}
      >
        <AccountIcon />
        <span>{loginButtonText}</span>
      </Button>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(Login));
