import React from 'react';
import FacebookLogin from 'react-facebook-login';

// import { FacebookLogin } from 'react-facebook-login-component';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

class LoginButton extends React.Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <div>
        <FacebookLogin
          appId="503822979998360"
          autoLoad={true}
          fields="name,email,picture"
          xfbml={false}
          callback={this.props.onResponseFacebook}
          textButton={<FormattedMessage id="components.header.buttons.login" />}
          icon="fa-facebook"
        />
      </div>
    );
  }
}

LoginButton.propType = {
  onResponseFacebook: PropTypes.func.isRequired
};
export default LoginButton;
