import { createAction } from 'redux-actions';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const loginUser = createAction(LOGIN_USER);
export const logoutUser = createAction(LOGOUT_USER);
