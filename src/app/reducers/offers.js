//Redux
import { handleActions } from 'redux-actions';

//App Imports
import {
  fetchingOffers,
  receiveOffers,
  selectOffer,
  receiveFilteredOffers,
  saveFilters,
  resetFilters
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
    }),
    [receiveFilteredOffers]: (state, { payload }) => {
      return {
        ...state,
        filteredOffers: payload
      };
    },
    [resetFilters]: state => ({
      ...state,
      filters: {
        from: null,
        to: null
      }
    }),
    [saveFilters]: (state, { payload }) => {
      return {
        ...state,
        filters: {
          from: payload.from,
          to: payload.to
        }
      };
    }
  },
  INITIAL_STATE
);
