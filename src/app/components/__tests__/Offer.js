//React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

//enzyme
import { mount } from 'enzyme';

// App imports
import createComponentWithIntl from '../../../test-util/create-component-with-intl';
import createConnectedComponent from '../../../test-util/create-connected-component';
import Offer, { OfferComponent } from '../Offer';

describe('Offer', () => {
  let mockStore;
  let root;
  let offerComponent;
  beforeEach(() => {
    mockStore = configureMockStore([])({
      offers: {
        offersList: [
          {
            id: 1,
            locationFrom: 'Quebec',
            locationTo: 'Montreal',
            kilo: '5',
            address: '2325 rue de la vie etudiante ',
            date: '20170204'
          },
          {
            id: 3,
            locationFrom: 'Senegal',
            locationTo: 'Kinshasa',
            kilo: '5',
            address: '2325 rue de la vie etudiante ',
            date: '20170204'
          }
        ],
        selectedOffer: {
          id: 1,
          locationFrom: 'Quebec',
          locationTo: 'Montreal',
          kilo: '5',
          address: '2325 rue de la vie etudiante ',
          date: '20170204'
        }
      }
    });
    root = mount(
      createConnectedComponent(
        createComponentWithIntl(
          <Router>
            <Offer />
          </Router>
        ),
        {
          store: mockStore
        }
      )
    );

    offerComponent = root.find(OfferComponent);
  });
  it('should render correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      createConnectedComponent(
        createComponentWithIntl(
          <Router>
            <Offer />
          </Router>
        ),
        {
          store: mockStore
        }
      ),
      div
    );
  });
});
