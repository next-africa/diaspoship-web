import React from 'react';
import ReactDOM from 'react-dom';
import '../../../test-util/enzyme-configuration';
import createComponentWithIntl from '../../../test-util/create-component-with-intl';
import OfferThumbnail from '../OfferList/OfferThumbnail';

describe('OfferThumbnail component', () => {
  it('should render correctly', () => {
    const offer = {
      id: 'quebec-montreal-10',
      from: 'Québec',
      to: 'Montréal',
      availableKg: '23',
      pricePerKg: '20',
      currencyUnit: 'CAD',
      departureDate: '2018-01-02',
      arrivalDate: '2018-01-03',
      type: ['ALL']
    };
    const div = document.createElement('div');
    ReactDOM.render(
      createComponentWithIntl(<OfferThumbnail offer={offer} />),
      div
    );
  });
});
