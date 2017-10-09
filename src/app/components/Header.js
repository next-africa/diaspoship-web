// React
import React from 'react';
import PropTypes from 'proptypes';
import { intlShape, injectIntl } from 'react-intl';
//Material-UI
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import HelpIcon from 'material-ui-icons/Help';
import AccountIcon from 'material-ui-icons/AccountCircle';
//App Imports
import LanguageSelector from './LanguageSelector';

const styles = theme => ({
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },

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

function Header({ classes, intl: { formatMessage }, ...props }) {
  const helpButtonText = formatMessage({
    id: 'components.header.buttons.help'
  });
  const loginButtonText = formatMessage({
    id: 'components.header.buttons.login'
  });
  return (
    <div className={classes.root} {...props}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            DIASPOSHIP
          </Typography>
          <IconButton
            aria-label={loginButtonText}
            className={classes.toolbarButtonWithoutText}
          >
            <AccountIcon />
          </IconButton>
          <Button
            aria-label={loginButtonText}
            className={classes.toolbarButtonWithText}
          >
            <AccountIcon />
            <span>{loginButtonText}</span>
          </Button>
          <IconButton
            aria-label={helpButtonText}
            className={classes.toolbarButtonWithoutText}
          >
            <HelpIcon />
          </IconButton>
          <Button
            aria-label={helpButtonText}
            className={classes.toolbarButtonWithText}
          >
            <HelpIcon />
            <span>{helpButtonText}</span>
          </Button>
          <LanguageSelector />
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(Header));
