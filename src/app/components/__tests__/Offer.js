import React from 'react';
import ReactDOM from 'react-dom';
import createComponentWithIntl from '../../../test-util/create-component-with-intl';
import Offer from '../Offer';

describe('Offer', () => {
  it('should render correctly', () => {
    const offer = {
      locationFrom: 'Quebec',
      locationTo: 'Montreal',
      kilo: '5 kg',
      address: '2325 rue de la vie ètudiante'
    };
    const div = document.createElement('div');
    ReactDOM.render(createComponentWithIntl(<Offer offer={offer} />), div);
  });
});
