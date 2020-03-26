import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history.js';
import PlacesList from './places-list.jsx';

const listClass = `cities__places-list places__list tabs__content`;
const cardClass = `cities__place-card place-card`;
const wrapperClass = `cities__image-wrapper place-card__image-wrapper`;
const activeCity = `Amsterdam`;
const sortType = `Popular`;

const offers = [
  {
    id: 111,
    city: `Amsterdam`,
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
    },
    previewImage: `img/amsterdam.jpg`
  },
  {
    id: 333,
    city: `Amsterdam`,
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
    },
    previewImage: `img/amsterdam@2x.jpg`
  }
];

const imageSizeHeight = 200;
const imageSizeWidth = 260;

it(`PlacesList renders correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <PlacesList
            offers={offers}
            activeCity={activeCity}
            sortType={sortType}
            listClass={listClass}
            cardClass={cardClass}
            wrapperClass={wrapperClass}
            imageSizeHeight={imageSizeHeight}
            imageSizeWidth={imageSizeWidth}
            onPlaceCardClick={() => {}}
            onPlaceCardMouseOver={() => {}}
            onPlaceCardMouseLeave={() => {}}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
