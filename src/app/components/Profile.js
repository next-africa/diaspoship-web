//React
import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
// Material Ui
import Button from 'material-ui/Button';
//App Import
import { fetchUserDataFromFB } from '../actions/session';
import MenuProfile from './MenuProfile';

/*global FB*/
const Login = ({ userInfos, onClick }) => (
  <Button onClick={onClick}>
    <FormattedMessage id="components.header.buttons.login" />
  </Button>
);

const User = ({ userInfos, onClick }) => (
  <MenuProfile
    name={userInfos.name}
    pictureUrl={userInfos.picture}
    onLogout={onClick}
  />
);
export class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleFBLogin = this.handleFBLogin.bind(this);
    this.handleFBLogout = this.handleFBLogout.bind(this);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  handleFBLogin() {
    FB.login();
    this.props.fetchData();
  }

  handleFBLogout() {
    FB.logout(function(response) {
      console.log('deconexion', response);
    });
    this.props.fetchData();
  }

  render() {
    if (this.props.isConnected) {
      return (
        <User userInfos={this.props.userInfos} onClick={this.handleFBLogout} />
      );
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return <Login onClick={this.handleFBLogin} />;
  }
}
const mapStateToProps = ({
  session: { isConnected, isAuthorized, isLoading, userInfos }
}) => ({
  isConnected,
  isAuthorized,
  isLoading,
  userInfos
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchUserDataFromFB())
  };
};

const Profile = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
export default Profile;
