import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { fetchingOffers, fetchOffers, receiveOffers } from '../offers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../../../data/offers.json', () => ({ from: 'Kinshasa' }), {
  virtual: true
});

describe('offers actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  describe('fetch offers', () => {
    it('should dispatch receiveOffers with loaded offers', () => {
      store.dispatch(fetchOffers());
      expect(store.getActions()).toEqual([
        fetchingOffers(),
        receiveOffers({ from: 'Kinshasa' })
      ]);
    });
  });
});
