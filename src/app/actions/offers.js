import { createAction } from 'redux-actions';
import offers from '../../data/offers.json';

export const selectOffer = createAction('SELECT_OFFER');
export const receiveOffers = createAction('RECEIVE_OFFERS');
export const fetchingOffers = createAction('FETCHING_OFFERS');
export const receiveFilteredOffers = createAction('RECEIVE_FILTERED_OFFERS');
export const saveFilters = createAction('SAVE_FILTERS');
export const resetFilters = createAction('RESET_FILTERS');

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
    dispatch(saveFilters({ from: from, to: to }));
    const currentOffers = offers.filter(
      offer => offer.from.indexOf(from) !== -1 || offer.to.indexOf(to) !== -1
    );

    dispatch(receiveFilteredOffers(currentOffers));
  };
}
