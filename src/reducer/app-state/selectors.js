import NameSpace from '../name-space';

export const getCard = (state) => state[NameSpace.APP_STATE].card;

export const getSortType = (state) => state[NameSpace.APP_STATE].sortType;

export const getRequestStatus = (state) => state[NameSpace.APP_STATE].isRequestSuccess;
