import React from 'react';
import App from './app';
import renderer from 'react-test-renderer';

const placesCountTest = 999;

const offers = [
  {
    id: 111,
    isPremium: true,
    image: `img/amsterdam.jpg`,
    price: 222,
    isBookmarked: true,
    rating: 1,
    title: `Test title 1`,
    type: `Test type 1`,
  },
  {
    id: 333,
    isPremium: false,
    image: `img/amsterdam@2x.jpg`,
    price: 444,
    isBookmarked: false,
    rating: 5,
    title: `Test title 2`,
    type: `Test type 2`,
  }
];

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App
      placesCount={placesCountTest}
      offers={offers}
      onPlaceCardClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
