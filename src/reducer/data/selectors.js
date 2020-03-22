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
      const citiesNames = Array.from(new Set(offers.map((element) => element.city.name)).values());
      const citiesData = Array.from(offers.values()).map((offer) => offer.city);
      const result = citiesNames.map((name) => citiesData.filter((city) => city.name === name)[0]);
      return result;
    }
);

export const getOffersByCity = createSelector(
    getOffers,
    getCity,
    (offers, city) => {
      return offers.filter((offer) => offer.city.name === city.name);
    }
);
