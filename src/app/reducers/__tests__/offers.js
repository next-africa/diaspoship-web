import offers, { INITIAL_STATE } from '../offers';

import {
  fetchingOffers,
  receiveOffers,
  selectOffer,
  fetchOffer
} from '../../actions/offers';

describe('Offers reducer', () => {
  const initialFetchingState = {
    ...INITIAL_STATE,
    isFetching: true
  };

  const initialErroredState = {
    ...INITIAL_STATE,
    error: {}
  };

  it('should return the initial state', () => {
    expect(offers(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should create an action to get offer to the gevin id', () => {
    let selectedOffer = {
      id: 3,
      locationFrom: 'Senegal',
      locationTo: 'Kinshasa',
      kilo: '1 kg',
      address: 'Pikine SEFA ',
      date: '20170209'
    };

    let currentState = {
      ...INITIAL_STATE,
      offers: [
        selectedOffer,
        {
          id: 5,
          locationFrom: 'Montreal',
          locationTo: 'Kinshasa',
          kilo: '10 kg',
          address: 'Somewhere ',
          date: '20170209'
        }
      ]
    };

    const payload = 3;

    expect(offers(currentState, selectOffer(selectedOffer))).toEqual({
      ...currentState,
      selectedOffer: selectedOffer
    });
  });

  it('should set isFetching state when fetching offers', () => {
    expect(offers(INITIAL_STATE, fetchingOffers())).toEqual({
      ...INITIAL_STATE,
      isFetching: true
    });
  });

  it('should clear error when fetching offers', () => {
    expect(offers(initialErroredState, fetchingOffers())).toEqual({
      ...initialErroredState,
      error: null,
      isFetching: true
    });
  });

  it('it should set offers when receive offers', () => {
    const newOffers = [
      { from: 'Quebec', to: 'Kinshasa' },
      { from: 'Kinshasa', to: 'Quebec' }
    ];

    expect(offers(initialFetchingState, receiveOffers(newOffers))).toEqual({
      ...initialFetchingState,
      isFetching: false,
      offers: newOffers
    });
  });
});
