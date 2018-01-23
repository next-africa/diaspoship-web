import React from 'react';
import { Helmet } from 'react-helmet';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';

export const HelmetIntl = ({
  intl: { formatMessage },
  messageId,
  ...props
}) => (
  <Helmet
    title={formatMessage({
      id: messageId,
      defaultMessage: props.defaultMessage
    })}
    {...props}
  />
);

HelmetIntl.propTypes = {
  intl: intlShape.isRequired,
  messageId: PropTypes.string.isRequired
};

export default injectIntl(HelmetIntl);
