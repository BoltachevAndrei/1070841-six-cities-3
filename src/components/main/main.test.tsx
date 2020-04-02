import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Main from './main';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import {SortTypeList} from '../../types';
import {doNothing} from '../../utils';
const mockStore = configureStore([]);

jest.mock(`../map/map.tsx`);

const placesCountTest = 111;

const activeCity = {
  name: `Amsterdam`,
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10
  }
};

const sortType = SortTypeList.POPULAR;

const card = 0;

const citiesList = [
  {
    name: `Test city 1`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  },
  {
    name: `Test city 2`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  }
];

const user = {
  avatar: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isSuper: false,
  name: `Oliver.conner`
};

const offers = [
  {
    id: 111,
    city: {
      name: `Test city 1`,
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
      name: `Test city 2`,
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
          <Router history={history}>
            <Main
              placesCount={placesCountTest}
              offers={offers}
              activeCity={activeCity}
              citiesList={citiesList}
              sortType={sortType}
              card={card}
              user={user}
              onPlaceCardClick={doNothing}
              onCityClick={doNothing}
              onPlaceCardMouseOver={doNothing}
              onPlaceCardMouseLeave={doNothing}
              onHomeLinkClick={doNothing}
            />)
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
