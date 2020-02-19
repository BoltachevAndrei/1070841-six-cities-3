import React from 'react';
import Main from './main';
import renderer from 'react-test-renderer';

jest.mock(`../map/map.jsx`);

const placesCountTest = 111;

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
  const tree = renderer
    .create(<Main
      placesCount={placesCountTest}
      offers={offers}
      onPlaceCardClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
