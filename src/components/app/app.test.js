import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {App} from './app.jsx';

jest.mock(`../map/map.jsx`);

const mockStore = configureStore([]);

const activeCity = `Test city 2`;

const sortType = `Popular`;

const card = 0;

const citiesList = [`Test city 1`, `Test city 2`, `Test city 3`, `Test city 4`];

const offers = [
  {
    id: 778,
    city: `Test city 2`,
    isPremium: false,
    images: [
      `img/room.jpg`
    ],
    price: 80,
    isBookmarked: true,
    rating: 3,
    title: `Wood and stone place`,
    description: `Test description`,
    features: {
      entire: `Private room`,
      bedrooms: `33`,
      adults: `55`
    },
    inside: [
      `MiniBar`
    ],
    user: {
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    reviews: [
      {
        id: 201,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`,
        },
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 3,
        date: new Date(`2019-04-24`)
      }
    ]
  },
  {
    id: 779,
    city: `Test city 3`,
    isPremium: false,
    images: [
      `img/apartment-02.jpg`
    ],
    price: 132,
    isBookmarked: false,
    rating: 3,
    title: `Canal View Prinsengracht`,
    description: `Test description`,
    features: {
      entire: `Apartment`,
      bedrooms: `33`,
      adults: `55`
    },
    inside: [
      `MiniBar`
    ],
    user: {
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    reviews: [
      {
        id: 201,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`,
        },
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 3,
        date: new Date(`2019-04-24`)
      }
    ]
  },
  {
    id: 780,
    city: `Test city 4`,
    isPremium: false,
    images: [
      `img/apartment-03.jpg`
    ],
    price: 180,
    isBookmarked: false,
    rating: 3,
    title: `Nice, cozy, warm big bed apartment`,
    description: `Test description`,
    features: {
      entire: `Apartment`,
      bedrooms: `33`,
      adults: `55`
    },
    inside: [
      `MiniBar`
    ],
    user: {
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    reviews: [
      {
        id: 201,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`,
        },
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 3,
        date: new Date(`2019-04-24`)
      }
    ]
  },
];

describe(`App renders correctly`, () => {
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
            <App
              offers={offers}
              offer={offers[0].id}
              city={activeCity}
              citiesList={citiesList}
              card={card}
              sortType={sortType}
              onPlaceCardClick={() => {}}
              onCityClick={() => {}}
              onPlaceCardMouseOver={() => {}}
              onPlaceCardMouseLeave={() => {}}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Offer renders correctly`, () => {
    const store = mockStore({
      APP_STATE: {
        sortType,
        isSortListOpened: false
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              offers={offers}
              offer={0}
              city={activeCity}
              citiesList={citiesList}
              card={card}
              sortType={sortType}
              onPlaceCardClick={() => {}}
              onCityClick={() => {}}
              onPlaceCardMouseOver={() => {}}
              onPlaceCardMouseLeave={() => {}}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
