// Redux
import { handleActions } from 'redux-actions';

import { getOffer } from '../actions/offers';

export const INITIAL_STATE = {
  offersList: [
    {
      id: 1,
      locationFrom: 'Quebec',
      locationTo: 'Montreal',
      kilo: '5 kg',
      address: '2325 rue de la vie etudiante ',
      date: '20170204'
    },
    {
      id: 3,
      locationFrom: 'Senegal',
      locationTo: 'Kinshasa',
      kilo: '1 kg',
      address: 'Pikine SEFA ',
      date: '20170209'
    },
    {
      id: 4,
      locationFrom: 'Paris',
      locationTo: 'Montreal',
      kilo: '3 kg',
      address: '2325 rue de la vie etudiante ',
      date: '20170204'
    }
  ],
  selectedOffer: null
};

export default handleActions(
  {
    [getOffer]: (state, { payload }) => {
      let offer = state.offersList.filter(offer => {
        if (offer.id === payload) {
          return offer;
        }
        return 0;
      });
      return {
        ...state,
        selectedOffer: offer[0]
      };
    }
  },
  INITIAL_STATE
);
