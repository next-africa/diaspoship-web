import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import diasposhipApp from '../reducers';

export default function configureStore(initialState) {
  return createStore(diasposhipApp, initialState, applyMiddleware(thunk));
}
