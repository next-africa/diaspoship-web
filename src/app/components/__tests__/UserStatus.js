import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import '../../../test-util/enzyme-configuration';
import createComponentWithIntl from '../../../test-util/create-component-with-intl';
import createConnectedComponent from '../../../test-util/create-connected-component';
import UserStatus from '../UserStatus';
import { Login, User } from '../UserStatus';
jest.mock('../MenuProfile', () => 'MenuProfile');

describe('Login', () => {
  it('should render correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(createComponentWithIntl(<Login onLogin={() => {}} />), div);
  });
});

describe('User', () => {
  it('should render correctly', () => {
    const div = document.createElement('div');
    const userInfos = { name: 'Patrice', picture: 'Path' };
    ReactDOM.render(
      createComponentWithIntl(<User user={userInfos} onLogout={() => {}} />),
      div
    );
  });
});
