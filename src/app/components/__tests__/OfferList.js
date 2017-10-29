import React from 'react';
import ReactDOM from 'react-dom';
import '../../../test-util/enzyme-configuration';
import createComponentWithIntl from '../../../test-util/create-component-with-intl';
import OfferList from '../OfferList';

describe('OfferList component', () => {
  it('should render correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(createComponentWithIntl(<OfferList />), div);
  });
});
