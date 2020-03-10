import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';

export const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getCity = (state) => {
  return state[NameSpace.APP_STATE].city;
};

export const getCitiesList = createSelector(
    getOffers,
    (offers) => {
      return Array.from(new Set(offers.map((element) => element.city)).values());
    }
);

export const getOffersByCity = createSelector(
    getOffers,
    getCity,
    (offers, city) => {
      return offers.filter((offer) => offer.city === city);
    }
);
