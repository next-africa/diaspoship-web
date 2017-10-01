import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import '../../../test-util/enzyme-configuration';
import LanguageSelectorContainer, {
  LanguageSelector
} from '../LanguageSelector';
import createComponentWithIntl from '../../../test-util/create-component-with-intl';
import createConnectedComponent from '../../../test-util/create-connected-component';

import { selectLanguage } from '../../actions/translation';

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

    languageSelector
      .find('select')
      .simulate('change', { target: { value: 'en' } });

    expect(onSelectLanguage.mock.calls.length).toBe(1);

    expect(onSelectLanguage.mock.calls[0][0]).toBe('en');
  });
});

describe('LanguageSelector Container', () => {
  const mockStore = configureStore([])({
    translation: {
      selectedLanguage: 'fr'
    }
  });

  const languageSelector = mount(
    createConnectedComponent(
      createComponentWithIntl(<LanguageSelectorContainer />),
      { store: mockStore }
    )
  );

  it('uses the selectedLanguage from the store', () => {
    expect(languageSelector.find('select').props().value).toBe('fr');
  });

  it('dispatch a selectLanguage action when the language is changed', () => {
    const expectedActions = [selectLanguage('en')];

    languageSelector
      .find('select')
      .simulate('change', { target: { value: 'en' } });

    expect(mockStore.getActions()).toEqual(expectedActions);
  });
});
