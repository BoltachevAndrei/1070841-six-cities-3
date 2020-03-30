import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Offer from './offer';
import {Router} from 'react-router-dom';
import history from '../../history';
import {SortTypeList} from '../../types';
import {doNothing} from '../../utils';

jest.mock(`../map/map.tsx`);

const card = 101;

const sortType = SortTypeList.POPULAR;

const user = {
  avatar: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isSuper: false,
  name: `Oliver.conner`
};

const id = 777;

const offer = {
  id: 777,
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
  price: 111,
  isBookmarked: false,
  rating: 3,
  title: `Test title`,
  description: `Test description`,
  features: {
    entire: `Palace`,
    bedrooms: `33`,
    adults: `55`
  },
  inside: [
    `MiniBar`
  ],
  host: {
    id: 1,
    name: `Ivan`,
    avatar: `img/avatar.svg`,
    isSuper: true
  },
  previewImage: `img/amsterdam.jpg`,
  coordinates: [52.370216, 4.895168],
  zoom: 12
};

const offers = [
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
    inside: [
      `MiniBar`
    ],
    host: {
      id: 1,
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    previewImage: `img/room.jpg`,
    coordinates: [52.370216, 4.895168],
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
    inside: [
      `MiniBar`
    ],
    host: {
      id: 1,
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    previewImage: `img/apartment-02.jpg`,
    coordinates: [52.370216, 4.895168],
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
    inside: [
      `MiniBar`
    ],
    host: {
      id: 1,
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    previewImage: `img/apartment-03.jpg`,
    coordinates: [52.370216, 4.895168],
    zoom: 12
  },
];

const comments = [
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: new Date(`2019-05-08T14:13:56.569Z`),
    id: 1,
    rating: 4,
    user: {
      avatar: `img/1.png`,
      id: 4,
      isSuper: false,
      name: `Max`
    }
  }
];

it(`Offer renders correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Offer
            id={id}
            offer={offer}
            offersNearby={offers}
            card={card}
            sortType={sortType}
            user={user}
            isPostingComment={true}
            comments={comments}
            onPlaceCardClick={doNothing}
            onCommentSubmit={doNothing}
            toggleIsBookmarked={doNothing}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
