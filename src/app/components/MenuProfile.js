//React
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

//Material UI
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Popover from 'material-ui/Popover';
import Avatar from 'material-ui/Avatar';

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
  handleClickButton = ({ currentTarget }) => {
    this.setState({
      open: true,
      anchorEl: currentTarget
    });
  };

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
        <Button onClick={this.handleClickButton}>
          <Avatar alt={this.props.name} src={this.props.pictureUrl} />
          <Typography className={classes.typography}>
            {this.props.name}
          </Typography>
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
            <Button onClick={this.props.onLogout}>
              <FormattedMessage id="components.header.buttons.logout" />
            </Button>
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
