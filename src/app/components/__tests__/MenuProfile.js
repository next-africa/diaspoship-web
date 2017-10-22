import React from 'react';
import ReactDOM from 'react-dom';
import '../../../test-util/enzyme-configuration';
import createComponentWithIntl from '../../../test-util/create-component-with-intl';
import MenuProfile from '../MenuProfile';

describe('MenuProfile', () => {
  it('should render correctly', () => {
    const onLogout = jest.fn();
    const user = { name: 'Patrice', picture: 'Path' };
    const div = document.createElement('div');
    ReactDOM.render(
      createComponentWithIntl(
        <MenuProfile
          name={user.name}
          picture={user.picture}
          onLogout={onLogout}
        />
      ),
      div
    );
  });
});
