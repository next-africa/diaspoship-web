import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import '../../../test-util/enzyme-configuration';
import createComponentWithIntl from '../../../test-util/create-component-with-intl';
import createConnectedComponent from '../../../test-util/create-connected-component';
import { User, LoginComponent } from '../UserStatus';
import Login from '../Login';

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
      createConnectedComponent(
        <LoginComponent
          isConnected={false}
          isConnecting={true}
          onLogin={() => {}}
          onLogout={() => {}}
        />
      )
    );

    expect(loginComponent.matchesElement(<p>Loading…</p>));
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
