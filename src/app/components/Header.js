import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
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
          <Button>S'inscrire</Button>
          <Button>Se conneceter</Button>
          <Button>Comment ça marche</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
