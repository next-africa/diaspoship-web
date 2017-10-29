//React
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { intlShape } from 'react-intl';

//Material UI
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Popover from 'material-ui/Popover';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  button: {
    padding: '0px'
  },
  displyaInMobile: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      margin: theme.spacing.unit / 2,
      textAlign: 'center'
    }
  },
  noDisplyaInMobile: {
    display: 'inline-flex',
    margin: theme.spacing.unit / 2,
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  avatar: {
    width: '30px',
    height: '30px'
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
        <Button className={classes.button} onClick={this.handleClickButton}>
          <Avatar
            className={classes.avatar}
            alt={this.props.name}
            src={this.props.picture}
          />
          <Typography className={classes.noDisplyaInMobile}>
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
          <Typography className={classes.displyaInMobile}>
            {this.props.name}
          </Typography>
          <Divider />
          <Typography>
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
MenuProfile.contextTypes = {
  intl: intlShape.isRequired
};

export default withStyles(styles)(MenuProfile);
