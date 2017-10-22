import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import '../../../test-util/enzyme-configuration';
import createComponentWithIntl from '../../../test-util/create-component-with-intl';
import createConnectedComponent from '../../../test-util/create-connected-component';
import UserStatus, { User, LoginComponent } from '../UserStatus';
import Login from '../Login';
import configureStore from 'redux-mock-store';
import { logout, login } from '../../actions/session';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('UserStatus container', () => {
  let mockStore;
  let root;
  let loginComponent;
  beforeEach(() => {
    mockStore = configureStore(middlewares)({
      session: {
        isConnected: true,
        isConnecting: false,
        user: {
          id: '3242342343532',
          email: 'test@gmail.com',
          name: 'toto',
          picture: 'the path'
        }
      }
    });
    root = mount(
      createConnectedComponent(createComponentWithIntl(<UserStatus />), {
        store: mockStore
      })
    );

    loginComponent = root.find(LoginComponent);
  });

  it('should render correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      createConnectedComponent(createComponentWithIntl(<UserStatus />), {
        store: mockStore
      }),
      div
    );
  });

  it('get props from the store', () => {
    const verify =
      loginComponent.prop('isConnected') === true &&
      loginComponent.prop('isConnecting') == false &&
      loginComponent.prop('user').id === '3242342343532' &&
      loginComponent.prop('user').email === 'test@gmail.com' &&
      loginComponent.prop('user').name === 'toto' &&
      loginComponent.prop('user').picture === 'the path';
    expect(verify).toEqual(true);
  });

  it('should dispatch login action when onLogin is called', () => {
    let response = {
      error: false
    };
    mockStore.dispatch = jest.fn();
    global.window.FB = {
      login: jest.fn()
    };
    loginComponent.prop('onLogin')();
    expectedActions = [userIsConnecting(true)];
    expect(mockStore.getActions()).toEqual(expectedActions);
  });
});
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
    const onSelectLanguage = jest.fn();
    ReactDOM.render(
      createComponentWithIntl(
        <User user={userInfos} onLogout={onSelectLanguage} />
      ),
      div
    );
  });
});

describe('LoginComponent', () => {
  it('should render correctly', () => {
    const div = document.createElement('div');
    const userInfos = { name: 'Patrice', picture: 'Path' };

    ReactDOM.render(
      createComponentWithIntl(
        <LoginComponent
          isConnected={false}
          isConnecting={true}
          user={userInfos}
          onLogin={() => {}}
          onLogout={() => {}}
        />
      ),
      div
    );
  });
  it('should return the loading... component when isConnecting', () => {
    const loginComponent = mount(
      createComponentWithIntl(
        <LoginComponent
          isConnected={false}
          isConnecting={true}
          onLogin={() => {}}
          onLogout={() => {}}
        />
      )
    );

    expect(loginComponent.contains(<p>Loading…</p>)).toBeTruthy();
  });
  it('should return the User component when isConnected', () => {
    const userInfos = { name: 'Patrice', picture: 'Path' };

    const loginComponent = mount(
      createComponentWithIntl(
        <LoginComponent
          isConnected={true}
          isConnecting={false}
          user={userInfos}
          onLogin={() => {}}
          onLogout={() => {}}
        />
      )
    );
    expect(
      loginComponent.matchesElement(
        <User user={userInfos} onLogout={() => {}} />
      )
    );
  });
  it('should return the Login component when isNotConnected', () => {
    const userInfos = { name: 'Patrice', picture: 'Path' };

    const loginComponent = mount(
      createComponentWithIntl(
        <LoginComponent
          isConnected={false}
          isConnecting={false}
          user={userInfos}
          onLogin={() => {}}
          onLogout={() => {}}
        />
      )
    );

    expect(loginComponent.matchesElement('<Logout onLogin={() =>{}} />'));
  });
});
