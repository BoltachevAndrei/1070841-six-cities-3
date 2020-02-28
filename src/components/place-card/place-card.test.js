import React from 'react';
import PlaceCard from './place-card.jsx';
import renderer from 'react-test-renderer';

const cardClass = `cities__place-card place-card`;
const wrapperClass = `cities__image-wrapper place-card__image-wrapper`;

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
      cardClass={cardClass}
      wrapperClass={wrapperClass}
      onPlaceCardClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
