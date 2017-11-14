import offers from '../offers';

import { getOffer } from '../../actions/offers';

import { INITIAL_STATE } from '../offers';

describe('offers reduicer', () => {
  it('should return the initial state', () => {
    expect(offers(undefined, {})).toEqual(INITIAL_STATE);
  });
});
