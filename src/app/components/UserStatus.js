//React
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';

//App Import
import { login, logout } from '../actions/session';
import MenuProfile from './MenuProfile';
import Login from './Login';

export const User = ({ user, onLogout }) => (
  <MenuProfile name={user.name} picture={user.picture} onLogout={onLogout} />
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }),
  onLogout: PropTypes.func.isRequired
};

export const LoginComponent = ({
  isConnected,
  isConnecting,
  user,
  onLogin,
  onLogout
}) => {
  if (isConnecting) {
    return <p>Loading…</p>;
  } else if (isConnected) {
    return <User user={user} onLogout={onLogout} />;
  } else {
    return <Login onLogin={onLogin} />;
  }
};

LoginComponent.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  isConnecting: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired
};

const mapStateToProps = ({ session: { isConnecting, user } }) => ({
  isConnecting,
  isConnected: user.id !== null,
  user
});

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch(login()),
    onLogout: () => dispatch(logout())
  };
};

const UserStatus = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
export default UserStatus;
