import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';

export const getUser = (state) => {
  return state[NameSpace.USER].user;
};

export const getUserInfo = createSelector(
    getUser,
    (user) => user
);
