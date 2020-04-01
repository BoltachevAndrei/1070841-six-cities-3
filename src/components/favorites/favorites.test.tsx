import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import Favorites from './favorites';
import {doNothing} from '../../utils';

const user = {
  avatar: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isSuper: false,
  name: `Oliver.conner`
};

const favorites = [
  {
    id: 778,
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
    goodsInside: [
      `MiniBar`
    ],
    host: {
      id: 1,
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    previewImage: `img/room.jpg`,
    coordinates: [
      52.370216,
      4.895168
    ],
    zoom: 12
  },
  {
    id: 779,
    city: {
      name: `Test city 3`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
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
    goodsInside: [
      `MiniBar`
    ],
    host: {
      id: 1,
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    previewImage: `img/apartment-02.jpg`,
    coordinates: [
      52.370216,
      4.895168
    ],
    zoom: 12
  },
  {
    id: 780,
    city: {
      name: `Test city 4`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
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
    goodsInside: [
      `MiniBar`
    ],
    host: {
      id: 1,
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    previewImage: `img/apartment-03.jpg`,
    coordinates: [
      52.370216,
      4.895168
    ],
    zoom: 12
  },
];

it(`Favorites renders correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <Favorites
            user={user}
            favorites={favorites}
            onPlaceCardClick={doNothing}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
