import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import '../../../test-util/enzyme-configuration';
import createComponentWithIntl from '../../../test-util/create-component-with-intl';
import renderer from 'react-test-renderer';
import createConnectedComponent from '../../../test-util/create-connected-component';
import thunk from 'redux-thunk';

import { INITIAL_STATE } from '../../reducers/offers';
import OfferListContainer, { OfferList } from '../OfferList';
import { fetchingOffers } from '../../actions/offers';

describe('OfferList component', () => {
  let fetchOffersMock;

  beforeEach(() => {
    fetchOffersMock = jest.fn();
  });

  it('does not crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      createComponentWithIntl(
        <OfferList
          offers={[]}
          isFetching={false}
          onFetchOffers={fetchOffersMock}
        />
      ),
      div
    );
  });

  it('renders correctly when offers are being fetched', () => {
    const tree = renderer
      .create(
        createComponentWithIntl(
          <OfferList
            offers={[]}
            isFetching={true}
            onFetchOffers={fetchOffersMock}
          />
        )
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when offers are not being fetched', () => {
    const tree = renderer
      .create(
        createComponentWithIntl(
          <OfferList
            offers={[]}
            isFetching={false}
            onFetchOffers={fetchOffersMock}
          />
        )
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('fetches offers when it is first rendered and it is not already fetching', () => {
    mount(
      createComponentWithIntl(
        <OfferList
          offers={[]}
          isFetching={false}
          onFetchOffers={fetchOffersMock}
        />
      )
    );

    expect(fetchOffersMock.mock.calls.length).toBe(1);
  });

  it('should not fetch offers when it is first rendered and it is already fetching', () => {
    mount(
      createComponentWithIntl(
        <OfferList
          offers={[]}
          isFetching={true}
          onFetchOffers={fetchOffersMock}
        />
      )
    );

    expect(fetchOffersMock.mock.calls.length).toBe(0);
  });
});

describe('OfferList Container', () => {
  const mockStore = configureStore([thunk])({
    offers: INITIAL_STATE
  });

  const root = mount(
    createConnectedComponent(createComponentWithIntl(<OfferListContainer />), {
      store: mockStore
    })
  );

  const offerList = root.find(OfferList);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      createConnectedComponent(
        createComponentWithIntl(<OfferListContainer />),
        { store: mockStore }
      ),
      div
    );
  });

  it('is connected to the store', () => {
    expect(offerList.prop('error')).toEqual(INITIAL_STATE.error);
    expect(offerList.prop('isFetching')).toEqual(INITIAL_STATE.isFetching);
    expect(offerList.prop('offers')).toEqual(INITIAL_STATE.offers);
    expect(offerList.prop('filters')).toEqual(INITIAL_STATE.filters);
  });

  it('dispatches fetchOffers when onFetchOffers is called', () => {
    offerList.prop('onFetchOffers')();

    expect(mockStore.getActions()[0]).toEqual(fetchingOffers());
  });
});
