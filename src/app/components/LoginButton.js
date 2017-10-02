import React from 'react';
import FacebookLogin from 'react-facebook-login';
import Avatar from 'material-ui/Avatar';

import { FormattedMessage } from 'react-intl';
let LoginButton = function(props) {
  return (
    <FacebookLogin
      appId="503822979998360"
      autoLoad={true}
      fields="name,email,picture"
      scope="public_profile,user_friends,user_actions.books"
      callback={props.responseFacebook}
      textButton={<FormattedMessage id="components.header.buttons.login" />}
      icon="fa-facebook"
    />
  );
};

export default LoginButton;
