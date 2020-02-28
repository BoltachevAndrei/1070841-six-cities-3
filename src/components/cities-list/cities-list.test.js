import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list.jsx';

const offers = [
  {
    id: 111,
    city: `Test city`,
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
    city: `Test city`,
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

const activeCity = `Test city`;

it(`CitiesList renders correctly`, () => {
  const tree = renderer
    .create(<CitiesList
      offers={offers}
      activeCity={activeCity}
      onCityClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
