//React
import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Button from 'material-ui/Button';
//App Import
import { loginUser, logoutUser } from '../actions/session';
import { FB_APP_ID } from '../constants';
import MenuProfile from './MenuProfile';

/*global FB*/
const Login = ({ userInfos, onClick }) => (
  <Button onClick={onClick}>
    <FormattedMessage id="components.header.buttons.login" />
  </Button>
);

const Logout = ({ userInfos, onClick }) => (
  <MenuProfile
    name={userInfos.name}
    pictureUrl={userInfos.picture}
    onLogout={onClick}
  />
);
export class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.checkLoginState = this.checkLoginState.bind(this);
    this.handleFBLogin = this.handleFBLogin.bind(this);
    this.statusChangeCallback = this.statusChangeCallback.bind(this);
    this.handleFBLogout = this.handleFBLogout.bind(this);
  }

  loadFbLoginApi() {
    window.fbAsyncInit = function() {
      FB.init({
        appId: FB_APP_ID,
        cookie: true,
        autoLoad: true,
        xfbml: true,
        version: 'v2.10'
      });
      FB.getLoginStatus(
        function(response) {
          this.statusChangeCallback(response);
        }.bind(this)
      );
    }.bind(this);

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  componentDidMount() {
    this.loadFbLoginApi();
  }

  testAPI() {
    FB.api(
      '/me',
      { fields: 'id, name, email, picture' },
      function(response) {
        const profile = {
          connected: true,
          userInfos: {
            email: response.email,
            name: response.name,
            picture: response.picture.data.url
          }
        };
        this.props.loginDiapoShip(profile);
      }.bind(this)
    );
  }

  statusChangeCallback(response) {
    if (response.status === 'connected') {
      this.testAPI();
    } else if (response.status === 'not_authorized') {
      console.log('Please log into this app.');
    } else {
      console.log('Please log into this facebook.');
    }
  }

  checkLoginState() {
    FB.getLoginStatus(
      function(response) {
        this.statusChangeCallback(response);
      }.bind(this)
    );
  }

  handleFBLogin() {
    FB.login(this.checkLoginState());
  }

  handleFBLogout() {
    FB.logout(function(response) {
      console.log('deconexion', response);
    });

    this.props.logoutDiapoShip();
  }

  render() {
    if (this.props.connected) {
      return (
        <div>
          <Logout
            userInfos={this.props.userInfos}
            onClick={this.handleFBLogout}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Login
            userInfos={this.props.userInfos}
            onClick={this.handleFBLogin}
          />
        </div>
      );
    }
  }
}
const mapStateToProps = ({ session: { connected, userInfos } }) => ({
  connected,
  userInfos
});

const mapDispatchToProps = dispatch => {
  return {
    loginDiapoShip: profile => {
      dispatch(loginUser(profile));
    },
    logoutDiapoShip: profile => {
      dispatch(logoutUser());
    }
  };
};

const Profile = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
export default Profile;
