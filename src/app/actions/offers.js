import { createAction } from 'redux-actions';
import offers from '../../data/offers.json';

export const selectOffer = createAction('SELECT_OFFER');
export const receiveOffers = createAction('RECEIVE_OFFERS');
export const fetchingOffers = createAction('FETCHING_OFFERS');

const fetchOffersFn = dispatch => {
  dispatch(fetchingOffers());
  dispatch(receiveOffers(offers));
};

export const fetchOffers = () => fetchOffersFn;
