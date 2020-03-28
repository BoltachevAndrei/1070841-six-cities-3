import NameSpace from '../name-space.js';

export const getCard = (state) => state[NameSpace.APP_STATE].card;

export const getSortType = (state) => state[NameSpace.APP_STATE].sortType;

export const getRequestStatus = (state) => state[NameSpace.APP_STATE].isRequestSuccess;
