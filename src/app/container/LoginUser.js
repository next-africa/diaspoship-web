import { connect } from 'react-redux';
import { loginUser } from '../actions/session';
import LoginButton from '../components/LoginButton';

const responseFacebook = response => {
  let localUserInfo = {
    connect: true,
    name: response.name
  };
  localStorage.setItem('UserInfo', localUserInfo);
};

const mapStateToProps = state => {
  return {
    onResponseFacebook: responseFacebook
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onResponseFacebook: profile => {
      dispatch(loginUser({ profile }));
    }
  };
};

const LoginUser = connect(mapStateToProps, mapDispatchToProps)(LoginButton);

export default LoginUser;
