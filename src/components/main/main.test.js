import React from 'react';
import Main from './main';
import renderer from 'react-test-renderer';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

jest.mock(`../map/map.jsx`);

const placesCountTest = 111;

const activeCity = `Amsterdam`;

const sortType = `Popular`;

const card = 0;

const citiesList = [`Test city 1`, `Test city 2`];

const offers = [
  {
    id: 111,
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
    }
  },
  {
    id: 333,
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
    }
  }
];

it(`Main renders correctly`, () => {
  const store = mockStore({
    APP_STATE: {
      sortType,
      isSortListOpened: false
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            placesCount={placesCountTest}
            offers={offers}
            activeCity={activeCity}
            citiesList={citiesList}
            sortType={sortType}
            card={card}
            onPlaceCardClick={() => { }}
            onCityClick={() => { }}
            onPlaceCardMouseOver={() => {}}
            onPlaceCardMouseLeave={() => {}}
          />)
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
