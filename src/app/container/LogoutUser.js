//React
import { connect } from 'react-redux';

//App Imports
import { logoutUser } from '../actions/session';
import LogoutButton from '../components/LogoutButton';

const onLogout = response => {
  console.log(response);
};

const mapStateToProps = state => {
  return {
    onLogout: onLogout
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogout: profile => {
      const isConnected = false;
      const userData = {
        isConnected: isConnected,
        userInfos: { name: null, email: null, picture: null }
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      dispatch(logoutUser({ isConnected, profile }));
    }
  };
};

const LogoutUser = connect(mapStateToProps, mapDispatchToProps)(LogoutButton);

export default LogoutUser;
