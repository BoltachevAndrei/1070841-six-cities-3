import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {reducer, ActionType, Operation} from './data';

const api = createAPI(() => {});

const offersFromRequest = [
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
      'id': 201,
      'name': `Test user 2`,
      'avatar_url': `Test avatar 2`,
      'is_pro': true
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 12
    },
    'preview_image': `test image 2`
  }
];

const offersToState = [
  {
    'id': 201,
    'city': {
      'name': `Test city 2`
    },
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
    'host': {
      'id': 201,
      'name': `Test user 2`,
      'avatar': `Test avatar 2`,
      'isSuper': true
    },
    'coordinates': [
      52.3909553943508,
      4.85309666406198
    ],
    'zoom': 12,
    'previewImage': `test image 2`
  }
];

const offerWithFavoritesToState = {
  'id': 201,
  'city': {
    'name': `Test city 2`
  },
  'isPremium': true,
  'images': [
    `test image 2`
  ],
  'price': 120,
  'isBookmarked': true,
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
  'host': {
    'id': 201,
    'name': `Test user 2`,
    'avatar': `Test avatar 2`,
    'isSuper': true
  },
  'coordinates': [
    52.3909553943508,
    4.85309666406198
  ],
  'zoom': 12,
  'previewImage': `test image 2`
};

const offersWithFavoritesToState = [
  {
    'id': 201,
    'city': {
      'name': `Test city 2`
    },
    'isPremium': true,
    'images': [
      `test image 2`
    ],
    'price': 120,
    'isBookmarked': true,
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
    'host': {
      'id': 201,
      'name': `Test user 2`,
      'avatar': `Test avatar 2`,
      'isSuper': true
    },
    'coordinates': [
      52.3909553943508,
      4.85309666406198
    ],
    'zoom': 12,
    'previewImage': `test image 2`
  }
];

const reviewsFromRequest = [
  {
    'id': 203,
    'user': {
      'id': 1,
      'name': `Test User`,
      'avatar_url': `img/avatar.svg`,
      'is_pro': true
    },
    'comment': `Test review text`,
    'rating': 4,
    'date': new Date(`1995-06-24`)
  }
];

const reviewsToState = [
  {
    id: 203,
    user: {
      id: 1,
      name: `Test User`,
      avatar: `img/avatar.svg`,
      isPro: true
    },
    text: `Test review text`,
    rating: 4,
    date: new Date(`1995-06-24`)
  }
];

it(`Reducer should load offers`, () => {
  expect(reducer({
    offers: []
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: offersToState
  })).toEqual({offers: offersToState});
});

it(`Reducer should load offersNearby`, () => {
  expect(reducer({
    offersNearby: []
  }, {
    type: ActionType.LOAD_OFFERS_NEARBY,
    payload: offersToState
  })).toEqual({
    offersNearby: offersToState
  });
});

it(`Reducer should load favorites`, () => {
  expect(reducer({
    offers: offersToState
  }, {
    type: ActionType.LOAD_FAVORITES,
    payload: offersWithFavoritesToState
  })).toEqual({
    offers: offersWithFavoritesToState
  });
});

it(`Reducer should change favorite status`, () => {
  expect(reducer({
    offers: offersToState
  }, {
    type: ActionType.CHANGE_FAVORITE_STATUS,
    payload: offerWithFavoritesToState
  })).toEqual({
    offers: offersWithFavoritesToState
  });
});

it(`Reducer should load comments`, () => {
  expect(reducer({
    comments: []
  }, {
    type: ActionType.LOAD_COMMENTS,
    payload: reviewsToState
  })).toEqual({
    comments: reviewsToState
  });
});

it(`Reducer should post comment`, () => {
  expect(reducer({
    comments: []
  }, {
    type: ActionType.POST_COMMENT,
    payload: reviewsToState
  })).toEqual({
    comments: reviewsToState
  });
});

it(`Reducer should change posting comment status`, () => {
  expect(reducer({
    isPostingComment: true
  }, {
    type: ActionType.CHANGE_POSTING_COMMENT_STATUS,
    payload: false
  })).toEqual({
    isPostingComment: false
  });
});

it(`Operation.loadOffers work correctly`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const offersLoader = Operation.loadOffers();

  apiMock
    .onGet(`/hotels`)
    .reply(200, offersFromRequest);

  return offersLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_OFFERS,
        payload: offersToState
      });
    });
});

it(`Operation.loadOffersNearby work correctly`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const offersLoader = Operation.loadOffersNearby(offersFromRequest[0]);

  apiMock
    .onGet(`/hotels/${offersFromRequest[0]}/nearby`)
    .reply(200, offersFromRequest);

  return offersLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_OFFERS_NEARBY,
        payload: offersToState
      });
    });
});

it(`Operation.loadFavorites work correctly`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const offersLoader = Operation.loadFavorites();

  apiMock
    .onGet(`/favorite`)
    .reply(200, offersFromRequest);

  return offersLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FAVORITES,
        payload: offersToState
      });
    });
});

it(`Operation.changeFavoriteStatus work correctly`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const offersLoader = Operation.changeFavoriteStatus(offersFromRequest[0]);

  apiMock
    .onPost(`/favorite/${offersFromRequest[0].id}/${offersFromRequest[0].isBookmarked}`)
    .reply(200, offersFromRequest[0]);

  return offersLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.CHANGE_FAVORITE_STATUS,
        payload: offersToState[0]
      });
    });
});

it(`Operation.loadComments work correctly`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const offersLoader = Operation.loadComments(offersFromRequest[0].id);

  apiMock
    .onGet(`/comments/${offersFromRequest[0].id}`)
    .reply(200, reviewsFromRequest);

  return offersLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_COMMENTS,
        payload: reviewsToState
      });
    });
});

it(`Operation.postComment work correctly`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const offersLoader = Operation.postComment(reviewsToState[0].id, reviewsToState[0].comment);

  apiMock
    .onPost(`/comments/${reviewsToState[0].id}`, reviewsToState[0].comment)
    .reply(200, reviewsFromRequest);

  return offersLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.POST_COMMENT,
        payload: reviewsToState
      });
    });
});
