import { createAction } from 'redux-actions';
import offers from '../../data/offers.json';

export const selectOffer = createAction('SELECT_OFFER');
export const receiveOffers = createAction('RECEIVE_OFFERS');
export const fetchingOffers = createAction('FETCHING_OFFERS');
export const doSearch = createAction('DO_SEARCH');
export const isUserSearching = createAction('IS_USER_SEARCHING');

const fetchOffersFn = dispatch => {
  dispatch(fetchingOffers());
  dispatch(receiveOffers(offers));
};

export const fetchOffers = () => fetchOffersFn;

export function fetchOffer(id) {
  let offer = offers.find(offer => offer.id === id);
  return dispatch => {
    dispatch(selectOffer(offer));
  };
}

export function handleSearch(from, to) {
  return dispatch => {
    if (from === '' && to === '') {
      dispatch(isUserSearching(false));
    } else {
      dispatch(isUserSearching(true));
      dispatch(doSearch({ from: from, to: to }));
    }
  };
}
