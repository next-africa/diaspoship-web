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
      dispatch(logoutUser({ isConnected, profile }));
    }
  };
};

const LogoutUser = connect(mapStateToProps, mapDispatchToProps)(LogoutButton);

export default LogoutUser;
