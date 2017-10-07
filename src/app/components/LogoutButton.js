import React from 'react';
// import FacebookLogin from 'react-facebook-login';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const LogoutButton = ({ onLogout }) => (
  <Button onClick={onLogout}>
    <FormattedMessage id="components.header.buttons.logout" />
  </Button>
);
LogoutButton.propType = {
  onLogout: PropTypes.func.isRequired
};
export default LogoutButton;
