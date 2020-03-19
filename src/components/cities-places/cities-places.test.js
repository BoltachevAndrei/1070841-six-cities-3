import React from 'react';
import renderer from 'react-test-renderer';
import CitiesPlaces from './cities-places.jsx';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

jest.mock(`../map/map.jsx`);

const offers = [
  {
    id: 111,
    city: {
      name: `Amsterdam`
    },
    isPremium: true,
    images: [
      `img/amsterdam.jpg`
    ],
    price: 222,
    isBookmarked: true,
    rating: 1,
    title: `Test title 1`,
    features: {
      entire: `Test type 1`,
    },
    previewImage: `img/amsterdam.jpg`
  },
  {
    id: 333,
    city: {
      name: `Amsterdam`
    },
    isPremium: false,
    images: [
      `img/amsterdam@2x.jpg`
    ],
    price: 444,
    isBookmarked: false,
    rating: 5,
    title: `Test title 2`,
    features: {
      entire: `Test type 2`,
    },
    previewImage: `img/amsterdam@2x.jpg`
  }
];

const activeCity = {
  name: `Amsterdam`
};

const placesCount = 111;

const card = 0;

const sortType = `Popular`;

it(`CitiesPlaces renders correctly`, () => {
  const store = mockStore({
    APP_STATE: {
      sortType,
      isSortListOpened: false
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <CitiesPlaces
            offers={offers}
            activeCity={activeCity}
            placesCount={placesCount}
            card={card}
            sortType={sortType}
            onPlaceCardClick={() => {}}
            onPlaceCardMouseOver={() => {}}
            onPlaceCardMouseLeave={() => {}}
          />
        </Provider>
    )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
