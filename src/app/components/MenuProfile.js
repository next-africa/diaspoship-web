import React from 'react';

import Menu, { MenuItem } from 'material-ui/Menu';
import Avatar from 'material-ui/Avatar';

import Button from 'material-ui/Button';

const options = ['Profile', 'Deconnexion'];
const ITEM_HEIGHT = 48;
class MenuProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      open: false
    };
  }
  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>
          <Avatar alt={this.props.name} src={this.props.pictureUrl} />;
        </Button>
        <div>
          <Menu
            id="long-menu"
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200
              }
            }}
          >
            {options.map(option => (
              <MenuItem
                key={option}
                selected={option === 'Pyxis'}
                onClick={this.handleRequestClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    );
  }
}
export default MenuProfile;
