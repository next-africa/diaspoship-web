import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  window.google = {
    maps: {
      event: {
        addDomListener: jest.fn()
      }
    }
  };
  const div = window.document.createElement('div');
  ReactDOM.render(<App />, div);
});
