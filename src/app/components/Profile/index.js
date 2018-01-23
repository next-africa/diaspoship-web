import React from 'react';
import PropTypes from 'prop-types';

import Login from './Login';
import User from './User';
const UserStatus = ({ isConnected, isConnecting, user, onLogin, onLogout }) => {
  if (isConnecting) {
    return <p>Loading…</p>;
  } else if (isConnected) {
    return <User user={user} onLogout={onLogout} />;
  } else {
    return <Login onLogin={onLogin} />;
  }
};

UserStatus.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  isConnecting: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired
};

export default UserStatus;
