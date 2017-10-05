import React from 'react';
import FacebookLogin from 'react-facebook-login';

let LoginButton = onResponseFacebook => {
  return (
    <FacebookLogin
      appId="503822979998360"
      autoLoad={true}
      fields="name,email,picture"
      scope="public_profile,user_friends,user_actions.books"
      callback={function(userInfos) {
        let connected = true;
        onResponseFacebook({ connected, userInfos });
      }}
      textButton={<FormattedMessage id="components.header.buttons.login" />}
      icon="fa-facebook"
    />
  );
};
