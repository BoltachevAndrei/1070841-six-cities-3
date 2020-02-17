import React from 'react';
import PlaceCard from './place-card.jsx';
import renderer from 'react-test-renderer';

const offer = {
  id: 111,
  isPremium: true,
  images: [
    `img/amsterdam.jpg`,
  ],
  price: 222,
  isBookmarked: true,
  rating: 1,
  title: `Test title 1`,
  features: {
    entire: `Test type 1`,
  }
};

it(`PlaceCard renders correctly`, () => {
  const tree = renderer
    .create(<PlaceCard
      offer={offer}
      onPlaceCardMouseOver={() => {}}
      onPlaceCardClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
