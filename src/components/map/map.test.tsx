import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Map from './map';

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
  }
];

const card = 0;

const activeCity = {
  name: `Test city 1`,
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10
  }
};

it(`Map renders correctly`, () => {
  document.body.innerHTML =
    `<div id="map"></div>`;
  const tree = renderer
    .create(<Map
      offers={offers}
      card={card}
      activeCity={activeCity}
    />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
