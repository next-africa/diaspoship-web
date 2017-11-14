import offers from '../offers';

import { getOffer } from '../../actions/offers';

import { INITIAL_STATE } from '../offers';

describe('offers reduicer', () => {
  it('should return the initial state', () => {
    expect(offers(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should create an action to get offer to the gevin id', () => {
    const parload = 3;
    let selectedOffer = {
      id: 3,
      locationFrom: 'Senegal',
      locationTo: 'Kinshasa',
      kilo: '5',
      address: '2325 rue de la vie etudiante ',
      date: '20170204'
    };
    expect(offers(undefined, getOffer(parload))).toEqual({
      ...INITIAL_STATE,
      selectedOffer: selectedOffer
    });
  });
});
