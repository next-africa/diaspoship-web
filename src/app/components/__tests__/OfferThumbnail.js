import React from 'react';
import ReactDOM from 'react-dom';
import '../../../test-util/enzyme-configuration';
import createComponentWithIntl from '../../../test-util/create-component-with-intl';
import OfferThumbnail from '../OfferList/OfferThumbnail';

describe('OfferThumbnail component', () => {
  it('should render correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(createComponentWithIntl(<OfferThumbnail />), div);
  });
});
