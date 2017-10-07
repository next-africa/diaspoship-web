import { connect } from 'react-redux';
import { loginUser } from '../actions/session';
import LoginButton from '../components/LoginButton';

const mapStateToProps = ({ session: { connected, userInfos } }) => ({
  connected,
  userInfos
});
const mapDispatchToProps = dispatch => {
  return {
    onResponseFacebook: profile => {
      let isConnected = true;
      dispatch(loginUser({ isConnected, profile }));
    }
  };
};

const LoginUser = connect(mapStateToProps, mapDispatchToProps)(LoginButton);

export default LoginUser;
