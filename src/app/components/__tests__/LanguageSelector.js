import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import '../../../test-util/enzyme-configuration';
import LanguageSelectorContainer from '../../container/Language';
import LanguageSelector from '../LanguageSelector/index';
import createComponentWithIntl from '../../../test-util/create-component-with-intl';
import createConnectedComponent from '../../../test-util/create-connected-component';

import { setLanguage } from '../../actions/translation';

import IconButton from 'material-ui/IconButton';

describe('LanguageSelector Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      createComponentWithIntl(
        <LanguageSelector selectedLanguage="en" onSelectLanguage={() => {}} />
      ),
      div
    );
  });

  it('calls onSelectLanguage when a language is selected', () => {
    const onSelectLanguage = jest.fn();

    const languageSelector = mount(
      createComponentWithIntl(
        <LanguageSelector
          selectedLanguage="fr"
          onSelectLanguage={onSelectLanguage}
        />
      )
    );

    languageSelector.find(IconButton).simulate('click');

    languageSelector
      .find('li')
      .at(0)
      .simulate('click');

    expect(onSelectLanguage.mock.calls.length).toBe(1);

    expect(onSelectLanguage.mock.calls[0][0]).toBe('en');
  });
});

describe('LanguageSelector Container', () => {
  const mockStore = configureStore([thunk])({
    translation: {
      selectedLanguage: 'fr'
    }
  });

  const root = mount(
    createConnectedComponent(
      createComponentWithIntl(<LanguageSelectorContainer />),
      { store: mockStore }
    )
  );

  const languageSelector = root.find(LanguageSelector);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      createConnectedComponent(
        createComponentWithIntl(<LanguageSelectorContainer />),
        { store: mockStore }
      ),
      div
    );
  });

  it('uses the selectedLanguage from the store', () => {
    expect(languageSelector.prop('selectedLanguage')).toEqual('fr');
  });

  it('dispatches a selectLanguage action when the language is changed', () => {
    const expectedActions = [setLanguage('ar')];

    languageSelector.prop('onSelectLanguage')('ar');

    expect(mockStore.getActions()).toEqual(expectedActions);
  });
});
