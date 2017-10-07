import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import LoginUser from '../container/LoginUser';
import MenuProfile from './MenuProfile';

const Profile = function({ connected, userInfos }) {
  if (!connected) {
    return (
      <div>
        <LoginUser />
      </div>
    );
  } else {
    return (
      <MenuProfile
        name={userInfos.name}
        pictureUrl={userInfos.picture.data.url}
      />
    );
  }
};

Profile.propTypes = {
  connected: PropTypes.bool.isRequired
};

const mapStateProfileToProps = ({ session: { connected, userInfos } }) => ({
  connected,
  userInfos
});

export default connect(mapStateProfileToProps)(Profile);
