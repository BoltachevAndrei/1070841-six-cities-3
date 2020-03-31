import NameSpace from '../name-space';

export const getUser = (state) => state[NameSpace.USER].user;

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
