import React from 'react';
import Avatar from 'material-ui/Avatar';
import FacebookLogin from 'react-facebook-login';

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
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: false
    };
    this.userData = {};
    this.responseFacebook = this.responseFacebook.bind(this);
  }
  responseFacebook(response) {
    console.log(response);
    this.userData = response;
    this.setState(function() {
      return {
        connected: true
      };
    });
  }
  render() {
    if (!this.state.connected) {
      return <LoginButton responseFacebook={this.responseFacebook} />;
    } else {
      return <Avatar alt="Remy Sharp" src={this.userData.picture.data.url} />;
    }
  }
}

export default Profile;
