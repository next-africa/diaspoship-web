import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import { loginUser } from '../actions/session';
import LoginButton from './LoginButton';

export const Profile = function({ state, connected, onResponseFacebook }) {
  console.log('test', state);
  console.log('connected', connected);
  console.log('onResponseFacebook', onResponseFacebook);
  if (!state.connected) {
    return <LoginButton onResponseFacebook={onResponseFacebook} />;
  } else {
    return <h3> test </h3>;
  }
};

Profile.propTypes = {
  connected: PropTypes.bool.isRequired,
  onResponseFacebook: PropTypes.func.isRequired
};

const mapStateProfileToProps = ({ session: { connected, response } }) => ({
  connected,
  response
});

const mapDispatchProfileToProps = dispatch => ({
  onResponseFacebook: response => dispatch(loginUser({ response }))
});
export default connect(mapStateProfileToProps, mapDispatchProfileToProps)(
  Profile
);
