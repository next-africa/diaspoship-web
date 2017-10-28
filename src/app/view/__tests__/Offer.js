import React from 'react';
import ReactDOM from 'react-dom';
import createComponentWithIntl from '../../../test-util/create-component-with-intl';
import Offer from '../../view/Offer';

describe('Offer view', () => {
  it('should render correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(createComponentWithIntl(<Offer />), div);
  });
});
