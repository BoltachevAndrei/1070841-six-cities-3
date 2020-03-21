import React from 'react';
import Main from './main';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history.js';
const mockStore = configureStore([]);

jest.mock(`../map/map.jsx`);

const placesCountTest = 111;

const activeCity = {
  name: `Amsterdam`
};

const sortType = `Popular`;

const card = 0;

const citiesList = [
  {
    name: `Test city 1`
  },
  {
    name: `Test city 2`
  }
];

const user = {
  'avatar_url': `img/1.png`,
  'email': `Oliver.conner@gmail.com`,
  'id': 1,
  'is_pro': false,
  'name': `Oliver.conner`
};

const offers = [
  {
    id: 111,
    city: {
      name: `Test city 1`
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
      name: `Test city 2`
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
              onPlaceCardClick={() => { }}
              onCityClick={() => { }}
              onPlaceCardMouseOver={() => {}}
              onPlaceCardMouseLeave={() => {}}
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
