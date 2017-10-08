//React
import { connect } from 'react-redux';

//App Import
import { loginUser } from '../actions/session';
import LoginButton from '../components/LoginButton';

const mapStateToProps = ({ session: { connected, userInfos } }) => ({
  connected,
  userInfos,
  messageId: 'components.header.buttons.login'
});
const mapDispatchToProps = dispatch => {
  return {
    onResponseFacebook: profile => {
      if (profile.status !== 'unknown') {
        const isConnected = true;
        const userInfos = {
          email: profile.email,
          name: profile.name,
          picture: profile.picture
        };
        const userData = { isConnected: isConnected, userInfos: userInfos };
        localStorage.setItem('userData', JSON.stringify(userData));
        dispatch(loginUser({ isConnected, userInfos }));
      }
    }
  };
};

const LoginUser = connect(mapStateToProps, mapDispatchToProps)(LoginButton);

export default LoginUser;
