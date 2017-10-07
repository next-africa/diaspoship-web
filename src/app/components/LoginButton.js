import React from 'react';
// import FacebookLogin from 'react-facebook-login';

import { FacebookLogin } from 'react-facebook-login-component';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const LoginButton = ({ onResponseFacebook }) => (
  <div>
    <FacebookLogin
      socialId="503822979998360"
      scope="public_profile,email"
      responseHandler={onResponseFacebook}
      xfbml={true}
      fields="id,email,name, picture"
      version="v2.5"
      buttonText={<FormattedMessage id="components.header.buttons.login" />}
    />
  </div>
);

LoginButton.propType = {
  onResponseFacebook: PropTypes.func.isRequired
};
export default LoginButton;
