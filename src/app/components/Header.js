// React
import React from 'react';
import PropTypes from 'proptypes';
import { FormattedMessage } from 'react-intl';

//Material-UI
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

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
  }
});

function Header(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            DIASPOSHIP
          </Typography>
          <LanguageSelector />
          <Button>
            <FormattedMessage id="components.header.buttons.signup" />
          </Button>
          <Button>
            <FormattedMessage id="components.header.buttons.login" />
          </Button>
          <Button>
            <FormattedMessage id="components.header.buttons.help" />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
