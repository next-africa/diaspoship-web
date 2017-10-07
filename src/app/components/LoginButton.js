// React
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

class LoginButton extends React.Component {
  render() {
    let text = <FormattedMessage id="components.header.buttons.login" />;

    return (
      <FacebookLogin
        appId="503822979998360"
        autoLoad={false}
        fields="name,email,picture"
        xfbml={true}
        callback={this.props.onResponseFacebook}
        textButton={text}
        icon="fa-facebook"
      />
    );
  }
}

LoginButton.propType = {
  onResponseFacebook: PropTypes.func.isRequired
};
export default LoginButton;
