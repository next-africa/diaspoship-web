//React

import React from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

//App Import
import { loginUser } from '../actions/session';
import { FB_APP_ID } from '../constants';

export const LoginButton = ({
  onResponseFacebook,
  intl: { formatMessage },
  messageId,
  ...props
}) => (
  <FacebookLogin
    appId={FB_APP_ID}
    autoLoad={true}
    fields="name,email,picture"
    cookie={true}
    callback={onResponseFacebook}
    textButton={formatMessage({
      id: messageId,
      defaultMessage: props.defaultMessage
    })}
    icon="fa-facebook"
  />
);

LoginButton.propType = {
  onResponseFacebook: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

const mapStateToProps = ({ session: { connected, userInfos } }) => ({
  connected,
  userInfos,
  messageId: 'components.header.buttons.login'
});

const mapDispatchToProps = dispatch => {
  return {
    onResponseFacebook: profile => {
      if (profile.status !== 'unknown') {
        const isConnected = true;
        const userInfos = {
          email: profile.email,
          name: profile.name,
          picture: profile.picture
        };
        dispatch(loginUser({ isConnected, userInfos }));
      }
    }
  };
};

const LoginUser = connect(mapStateToProps, mapDispatchToProps)(
  injectIntl(LoginButton)
);

export default LoginUser;
