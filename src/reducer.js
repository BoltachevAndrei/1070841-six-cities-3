import {extend, getCities, SortTypeList} from './utils.js';
import {OFFERS_MOCK} from './mocks/offers.js';

const initialState = {
  city: getCities(OFFERS_MOCK)[0],
  offers: OFFERS_MOCK,
  offer: 0,
  card: 0,
  isSortListOpened: false,
  sortType: SortTypeList.POPULAR
};

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_OFFER: `CHANGE_OFFER`,
  CHANGE_CARD: `CHANGE_CARD`,
  TOGGLE_SORT_LIST: `TOGGLE_SORT_LIST`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
    payload: OFFERS_MOCK
  }),
  changeOffer: (id) => ({
    type: ActionType.CHANGE_OFFER,
    payload: id
  }),
  changeCard: (id) => ({
    type: ActionType.CHANGE_CARD,
    payload: id
  }),
  toggleSortList: (isSortListOpened) => ({
    type: ActionType.TOGGLE_SORT_LIST,
    payload: isSortListOpened
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});
    case ActionType.GET_OFFERS:
      return extend(state, {offers: action.payload});
    case ActionType.CHANGE_OFFER:
      return extend(state, {offer: action.payload});
    case ActionType.TOGGLE_SORT_LIST:
      return extend(state, {isSortListOpened: !action.payload});
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {sortType: action.payload});
    case ActionType.CHANGE_CARD:
      return extend(state, {card: action.payload});
  }
  return state;
};
