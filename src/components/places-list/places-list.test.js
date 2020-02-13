import React from 'react';
import PlacesList from './places-list.jsx';
import renderer from 'react-test-renderer';

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

it(`PlacesList renders correctly`, () => {
  const tree = renderer
    .create(<PlacesList
      offers={offers}
      onPlaceCardClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
