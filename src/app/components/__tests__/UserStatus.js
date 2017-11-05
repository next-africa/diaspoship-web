import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import '../../../test-util/enzyme-configuration';
import createComponentWithIntl from '../../../test-util/create-component-with-intl';
import createConnectedComponent from '../../../test-util/create-connected-component';
import UserStatus, { User, LoginComponent } from '../UserStatus';
import Login from '../Login';
import { userIsConnecting, resetUser } from '../../actions/session';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
const middlewares = [thunk];
describe('UserStatus container', () => {
  let mockStore;
  let root;
  let loginComponent;
  let picture = {
    data: {
      url: 'the path'
    }
  };
  beforeEach(() => {
    mockStore = configureMockStore(middlewares)({
      session: {
        isConnected: true,
        isConnecting: false,
        user: {
          id: '3242342343532',
          email: 'test@gmail.com',
          name: 'toto',
          picture: picture
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
    const picture = {
      data: {
        url: 'the path'
      }
    };
    const verify =
      loginComponent.prop('isConnected') === true &&
      loginComponent.prop('isConnecting') == false &&
      loginComponent.prop('user').id === '3242342343532' &&
      loginComponent.prop('user').email === 'test@gmail.com' &&
      loginComponent.prop('user').name === 'toto' &&
      loginComponent.prop('user').picture.data.url === picture.data.url;
    expect(verify).toEqual(true);
  });

  it('should dispatch login action when onLogin is called', () => {
    mockStore.dispatch = jest.fn();
    global.window.FB = {
      login: jest.fn()
    };
    loginComponent.prop('onLogin')();
    const expectedActions = [userIsConnecting(true)];
    expect(mockStore.getActions()).toEqual(expectedActions);
  });
  it('should dispatch logout action when onLogout is called', () => {
    mockStore.dispatch = jest.fn();
    global.window.FB = {
      logout: jest.fn()
    };
    loginComponent.prop('onLogout')();
    const expectedActions = [resetUser()];
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
    const picture = {
      data: {
        url: 'the path'
      }
    };
    const div = document.createElement('div');
    const userInfos = { name: 'Patrice', picture: picture };
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
    const picture = {
      data: {
        url: 'the path'
      }
    };
    const div = document.createElement('div');
    const userInfos = { name: 'Patrice', picture: picture };

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
    const picture = {
      data: {
        url: 'the path'
      }
    };
    const userInfos = { name: 'Patrice', picture: picture };

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
    const picture = {
      data: {
        url: 'the path'
      }
    };
    const userInfos = { name: 'Patrice', picture: picture };

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
