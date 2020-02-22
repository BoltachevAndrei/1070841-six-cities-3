import React from 'react';
import PlacesList from './places-list.jsx';
import renderer from 'react-test-renderer';

const listClass = `cities__places-list places__list tabs__content`;
const cardClass = `cities__place-card place-card`;
const wrapperClass = `cities__image-wrapper place-card__image-wrapper`;

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
      entire: `Test type 1`
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
      entire: `Test type 2`
    }
  }
];

it(`PlacesList renders correctly`, () => {
  const tree = renderer
    .create(<PlacesList
      offers={offers}
      listClass={listClass}
      cardClass={cardClass}
      wrapperClass={wrapperClass}
      onPlaceCardClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
