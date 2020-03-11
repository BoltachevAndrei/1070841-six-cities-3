import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api.js';
import {reducer, ActionType, Operation} from './data.js';

const api = createAPI(() => {});

const offers = [
  {
    'id': 201,
    'city': {
      'name': `Test city 2`
    },
    'is_premium': true,
    'images': [
      `test image 2`
    ],
    'price': 120,
    'is_favorite': false,
    'rating': 4,
    'title': `Test title 2`,
    'description': `Test description 2`,
    'bedrooms': `2`,
    'max_adults': `2`,
    'type': `Test entire 2`,
    'goods': [
      `Test inside 2`
    ],
    'host': {
      'name': `Test user 2`,
      'avatar_url': `Test avatar 2`,
      'is_pro': true
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198
    },
    'reviews': [
      {
        'id': 201,
        'user': {
          'name': `Test review user 2`,
          'avatar': `Test review avatar 2`
        },
        'text': `Test review text 2`,
        'rating': 4,
        'date': new Date(`2019-04-24`)
      }
    ]
  }
];

const offers2 = [
  {
    'id': 201,
    'city': `Test city 2`,
    'isPremium': true,
    'images': [
      `test image 2`
    ],
    'price': 120,
    'isBookmarked': false,
    'rating': 4,
    'title': `Test title 2`,
    'description': `Test description 2`,
    'features': {
      'entire': `Test entire 2`,
      'bedrooms': `2`,
      'adults': `2`
    },
    'inside': [
      `Test inside 2`
    ],
    'user': {
      'name': `Test user 2`,
      'avatar': `Test avatar 2`,
      'isSuper': true
    },
    'coordinates': [
      52.3909553943508,
      4.85309666406198
    ],
    'reviews': [
      {
        'id': 201,
        'user': {
          'name': `Max`,
          'avatar': `img/avatar-max.jpg`
        },
        'text': `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        'rating': 4,
        'date': new Date(`2019-04-24`)
      }
    ]
  }
];

it(`Reducer should load offers`, () => {
  expect(reducer({
    offers
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: offers
  })).toEqual({offers});
});

it(`Operation work correctly`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const offersLoader = Operation.loadOffers();

  apiMock
    .onGet(`/hotels`)
    .reply(200, offers);

  return offersLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_OFFERS,
        payload: offers2
      });
    });
});
