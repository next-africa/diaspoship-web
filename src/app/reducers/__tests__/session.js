import session from '../session';

import {
  isUserConnected,
  userIsConnecting,
  setUser,
  resetUser
} from '../../actions/session';
import { INITIAL_STATE } from '../session';

describe('Session reducer', () => {
  it('should return the initial state', () => {
    expect(session(undefined, {})).toEqual(INITIAL_STATE);
  });
  it('should create an action to set the user connexion status', () => {
    const payload = true;
    expect(session(undefined, isUserConnected(payload))).toEqual({
      ...INITIAL_STATE,
      isConnected: payload
    });
  });
  it('should create an action to set the user connecting status', () => {
    const payload = true;
    expect(
      session(
        { ...INITIAL_STATE, isConnecting: false },
        userIsConnecting(payload)
      )
    ).toEqual({
      ...INITIAL_STATE,
      isConnecting: payload
    });
  });
  it('should create an action to set the existing user infos', () => {
    const payload = {
      id: '3141412214124',
      email: 'test@hotmail.fr',
      name: 'Patrice Diouf',
      picture: 'path'
    };

    expect(
      session(
        {
          ...INITIAL_STATE,
          user: {
            id: '2321',
            email: 'toto@hotmail.fr',
            name: 'Didia',
            picture: 'path'
          }
        },
        setUser(payload)
      )
    ).toEqual({
      ...INITIAL_STATE,
      user: payload
    });
  });
  it('should create an action to reset the existing user status', () => {
    expect(session(undefined, resetUser())).toEqual(INITIAL_STATE);
  });
});
