import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import CitiesPlaces from './cities-places';
import {SortTypeList} from '../../types';
import {doNothing} from '../../utils';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

jest.mock(`../map/map.tsx`);

const offers = [
  {
    id: 111,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    isPremium: true,
    images: [
      `img/amsterdam.jpg`
    ],
    price: 222,
    isBookmarked: true,
    rating: 1,
    title: `Test title 1`,
    description: `Test description`,
    features: {
      entire: `Test type 1`,
      bedrooms: `33`,
      adults: `55`
    },
    goodsInside: [
      `MiniBar`
    ],
    host: {
      id: 1,
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    previewImage: `img/amsterdam.jpg`,
    coordinates: [
      52.370216,
      4.895168
    ],
    zoom: 12
  },
  {
    id: 333,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    isPremium: false,
    images: [
      `img/amsterdam@2x.jpg`
    ],
    price: 444,
    isBookmarked: false,
    rating: 5,
    title: `Test title 2`,
    description: `Test description`,
    features: {
      entire: `Test type 2`,
      bedrooms: `33`,
      adults: `55`
    },
    goodsInside: [
      `MiniBar`
    ],
    host: {
      id: 1,
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    previewImage: `img/amsterdam@2x.jpg`,
    coordinates: [
      52.370216,
      4.895168
    ],
    zoom: 12
  }
];

const activeCity = {
  name: `Amsterdam`,
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10
  }
};

const placesCount = 111;

const card = 0;

const sortType = SortTypeList.POPULAR;

it(`CitiesPlaces renders correctly`, () => {
  const store = mockStore({
    APP_STATE: {
      sortType,
      isSortListOpened: false
    }
  });
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <Provider store={store}>
            <CitiesPlaces
              offers={offers}
              activeCity={activeCity}
              placesCount={placesCount}
              card={card}
              sortType={sortType}
              onPlaceCardClick={doNothing}
              onPlaceCardMouseOver={doNothing}
              onPlaceCardMouseLeave={doNothing}
            />
          </Provider>
        </Router>
    )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
