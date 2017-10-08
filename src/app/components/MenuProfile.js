//React
import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';

//Material UI
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Popover from 'material-ui/Popover';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

//App Imports
import LogoutUser from '../container/LogoutUser';

const styles = theme => ({
  button: {
    marginBottom: theme.spacing.unit * 4
  },
  typography: {
    margin: theme.spacing.unit * 2
  }
});
class MenuProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
      anchorOriginVertical: 'bottom',
      anchorOriginHorizontal: 'center',
      transformOriginVertical: 'top',
      transformOriginHorizontal: 'center'
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };
  handleClickButton = () => {
    this.setState({
      open: true,
      anchorEl: findDOMNode(this.button)
    });
  };
  button = null;
  render() {
    const classes = this.props.classes;
    const {
      open,
      anchorEl,
      anchorOriginVertical,
      anchorOriginHorizontal,
      transformOriginVertical,
      transformOriginHorizontal
    } = this.state;
    return (
      <div>
        <Button
          ref={node => {
            this.button = node;
          }}
          onClick={this.handleClickButton}
        >
          <Avatar alt={this.props.name} src={this.props.pictureUrl} />
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onRequestClose={this.handleRequestClose}
          anchorOrigin={{
            vertical: anchorOriginVertical,
            horizontal: anchorOriginHorizontal
          }}
          transformOrigin={{
            vertical: transformOriginVertical,
            horizontal: transformOriginHorizontal
          }}
        >
          <Typography className={classes.typography}>
            {this.props.name}
          </Typography>

          <Divider />
          <Typography className={classes.typography}>
            <LogoutUser messageId="components.header.buttons.logout" />
          </Typography>
        </Popover>
      </div>
    );
  }
}
MenuProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuProfile);
