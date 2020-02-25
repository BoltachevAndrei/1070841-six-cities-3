import {ActionType, reducer} from './reducer.js';

const initialCity = `Test city`;

const initialOffers = [
  {
    id: 101,
    city: `Test city`,
    isPremium: true,
    images: [
      `test image`
    ],
    price: 120,
    isBookmarked: false,
    rating: 4,
    title: `Test title`,
    description: `Test description`,
    features: {
      entire: `Test entire`,
      bedrooms: `Test bedrooms`,
      adults: `Test adults`
    },
    inside: [
      `Test inside`
    ],
    user: {
      name: `Test user`,
      avatar: `Test avatar`,
      isSuper: true
    },
    coordinates: [
      52.3909553943508,
      4.85309666406198
    ],
    reviews: [
      {
        id: 201,
        user: {
          name: `Test review user`,
          avatar: `Test review avatar`
        },
        text: `Test review text`,
        rating: 4,
        date: new Date(`2019-04-24`)
      }
    ]
  }
];

const testOffers = [
  {
    id: 201,
    city: `Test city 2`,
    isPremium: true,
    images: [
      `test image 2`
    ],
    price: 120,
    isBookmarked: false,
    rating: 4,
    title: `Test title 2`,
    description: `Test description 2`,
    features: {
      entire: `Test entire 2`,
      bedrooms: `Test bedrooms 2`,
      adults: `Test adults 2`
    },
    inside: [
      `Test inside 2`
    ],
    user: {
      name: `Test user 2`,
      avatar: `Test avatar 2`,
      isSuper: true
    },
    coordinates: [
      52.3909553943508,
      4.85309666406198
    ],
    reviews: [
      {
        id: 201,
        user: {
          name: `Test review user 2`,
          avatar: `Test review avatar 2`
        },
        text: `Test review text 2`,
        rating: 4,
        date: new Date(`2019-04-24`)
      }
    ]
  }
];

const testOffers2 = [`test offers 2`];

it(`Reducer should set city by given value`, () => {
  expect(reducer({
    city: initialCity,
    offers: initialOffers
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Moscow`
  })).toEqual({
    city: `Moscow`,
    offers: initialOffers
  });

  expect(reducer({
    city: initialCity,
    offers: initialOffers
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Tokyo`
  })).toEqual({
    city: `Tokyo`,
    offers: initialOffers
  });
});

it(`Reducer should set offers by given value`, () => {
  expect(reducer({
    city: initialCity,
    offers: initialOffers
  }, {
    type: ActionType.GET_OFFERS,
    payload: testOffers
  })).toEqual({
    city: initialCity,
    offers: testOffers
  });

  expect(reducer({
    city: initialCity,
    offers: initialOffers
  }, {
    type: ActionType.GET_OFFERS,
    payload: testOffers2
  })).toEqual({
    city: initialCity,
    offers: testOffers2
  });
});
