//React
import React from 'react';
import PropTypes from 'prop-types';
//Material-UI
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 999,
    backgroundColor: 'rgba(0,0,0,0.3)'
  }
});

const LoadingLayer = ({ classes, isLoading }) => (
  <div className={classes.root} />
);

LoadingLayer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(LoadingLayer);
