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

  //TODO: Fix test when enzyme add support of Portal: https://github.com/airbnb/enzyme/issues/1150
  it.skip('calls onSelectLanguage when a language is selected', () => {
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

    languageSelector.find({ key: 'en' }).simulate('click');

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
    const expectedActions = [selectLanguage('en')];

    languageSelector.prop('onSelectLanguage')('en');

    expect(mockStore.getActions()).toEqual(expectedActions);
  });
});
