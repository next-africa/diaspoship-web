import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import createComponentWithIntl from '../../../test-util/create-component-with-intl';
import SearchForm from '../SearchForm';

describe('SearchFrom', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
    window.google = {
      maps: {
        event: {
          addDomListener: jest.fn()
        }
      }
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(createComponentWithIntl(<SearchForm />), div);
  });

  it('should render ', () => {
    const wrapperComp = shallow(<SearchForm />);
    expect(wrapperComp.find('#origin-input').length == 0).toEqual(true);
  });
});
