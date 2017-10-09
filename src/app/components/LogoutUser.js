//React
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

//App Imports
import { logoutUser } from '../actions/session';

// Material ui
import Button from 'material-ui/Button';

import { injectIntl, intlShape } from 'react-intl';

const onLogout = () => {};
export const LogoutButton = ({
  onLogout,
  intl: { formatMessage },
  messageId,
  ...props
}) => (
  <Button onClick={onLogout}>
    {formatMessage({
      id: messageId
    })}
  </Button>
);
LogoutButton.propType = {
  onLogout: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

const mapStateToProps = state => {
  return {
    onLogout: onLogout
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogout: profile => {
      dispatch(logoutUser());
    }
  };
};

const LogoutUser = connect(mapStateToProps, mapDispatchToProps)(
  injectIntl(LogoutButton)
);

export default LogoutUser;
