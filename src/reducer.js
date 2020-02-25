import {extend, getCities} from './utils.js';
import {OFFERS_MOCK} from './mocks/offers.js';

const initialState = {
  city: getCities(OFFERS_MOCK)[0],
  offers: OFFERS_MOCK
};

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
    payload: OFFERS_MOCK
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});
    case ActionType.GET_OFFERS:
      return extend(state, {offers: action.payload});
  }
  return state;
};
