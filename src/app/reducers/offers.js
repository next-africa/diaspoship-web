//Redux
import { handleActions } from 'redux-actions';

//App Imports
import {
  fetchingOffers,
  receiveOffers,
  selectOffer,
  doSearch,
  isUserSearching
} from '../actions/offers';

export const INITIAL_STATE = {
  error: null,
  isFetching: false,
  offers: [],
  filters: {
    from: null,
    to: null
  },
  filteredOffers: [],
  selectedOffer: null,
  isSearching: false
};

export default handleActions(
  {
    [selectOffer]: (state, { payload }) => ({
      ...state,
      selectedOffer: payload
    }),
    [isUserSearching]: (state, { payload }) => ({
      ...state,
      isSearching: payload
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
    }),
    [doSearch]: (state, { payload }) => {
      const currentOffers = state.offers;
      return {
        ...state,
        filteredOffers: currentOffers.filter(
          offer =>
            offer.from.indexOf(payload.from) !== -1 ||
            offer.to.indexOf(payload.to) !== -1
        )
      };
    }
  },
  INITIAL_STATE
);
