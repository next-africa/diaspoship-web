// React
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import { FB_APP_ID } from '../constants';
import { injectIntl, intlShape } from 'react-intl';

export const LoginButton = ({
  onResponseFacebook,
  intl: { formatMessage },
  messageId,
  ...props
}) => (
  <FacebookLogin
    appId={FB_APP_ID}
    autoLoad={false}
    fields="name,email,picture"
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

export default injectIntl(LoginButton);
