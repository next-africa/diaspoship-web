import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const createConnectedComponent = (
  children,
  props = {
    store: configureStore([])
  }
) => {
  return <Provider {...props}>{children}</Provider>;
};

export default createConnectedComponent;
