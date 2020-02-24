export const extend = (object1, object2) => Object.assign({}, object1, object2);

export const getCities = (data) => Array.from(new Set(data.map((element) => element.city)).values()).sort();

export const getOffersByCity = (offers, city) => offers.filter((offer) => offer.city === city);
