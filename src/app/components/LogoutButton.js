import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

import { injectIntl, intlShape } from 'react-intl';

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

export default injectIntl(LogoutButton);
