import {SortTypeList} from './types';

export const capitalizeString = (str) => str[0].toUpperCase() + str.slice(1);

export const extend = (object1, object2) => Object.assign({}, object1, object2);

export const getCities = (data) => Array.from(new Set(data.map((element) => element.city)).values());

export const getOffersByCity = (offers, city) => offers.filter((offer) => offer.city === city);

export const sortOffers = (offers, sortType) => {
  switch (sortType) {
    case SortTypeList.HIGH_TO_LOW:
      return offers.sort((prev, next) => next.price - prev.price);
    case SortTypeList.LOW_TO_HIGH:
      return offers.sort((prev, next) => prev.price - next.price);
    case SortTypeList.TOP_RATED_FIRST:
      return offers.sort((prev, next) => next.rating - prev.rating);
  }
  return offers;
};

export const getCitiesList = (offers) => {
  const citiesNames = Array.from(new Set(offers.map((element) => element.city.name)).values());
  const citiesData = Array.from(offers.values()).map((offer) => offer.city);
  const result = citiesNames.map((name) => citiesData.filter((city) => city.name === name)[0]);
  return result;
};

export const doNothing = () => {
  // do nothing
};
