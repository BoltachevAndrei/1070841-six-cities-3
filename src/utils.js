export const SortTypeList = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`
};

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

export const Rating = {
  5: {
    id: `5-stars`,
    title: `perfect`
  },
  4: {
    id: `4-stars`,
    title: `good`
  },
  3: {
    id: `3-stars`,
    title: `not bad`
  },
  2: {
    id: `2-stars`,
    title: `badly`
  },
  1: {
    id: `1-star`,
    title: `terribly`
  }
};

export const ReviewLength = {
  MIN: 30,
  MAX: 150
};
