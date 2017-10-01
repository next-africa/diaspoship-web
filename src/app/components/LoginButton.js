import React from 'react';
import FacebookLogin from 'react-facebook-login';
import Avatar from 'material-ui/Avatar';
class LoginButton extends React.Component {
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
      return (
        <FacebookLogin
          appId="503822979998360"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,user_friends,user_actions.books"
          callback={this.responseFacebook}
          textButton="se connecter avec Facebook"
          icon="fa-facebook"
        />
      );
    } else {
      return <Avatar alt="Remy Sharp" src={this.userData.picture.data.url} />;
    }
  }
}

export default LoginButton;
