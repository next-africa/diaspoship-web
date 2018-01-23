//Redux
import { handleActions } from 'redux-actions';

//App Imports
import { fetchingOffers, receiveOffers, selectOffer } from '../actions/offers';

export const INITIAL_STATE = {
  error: null,
  isFetching: false,
  offers: [],
  filters: {
    from: null,
    to: null
  },
  selectedOffer: null
};

export default handleActions(
  {
    [selectOffer]: (state, { payload }) => ({
      ...state,
      selectedOffer: payload
    }),

    [fetchingOffers]: state => ({
      ...state,
      error: null,
      isFetching: true
    }),

    [receiveOffers]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      offers: payload
    })
  },
  INITIAL_STATE
);
