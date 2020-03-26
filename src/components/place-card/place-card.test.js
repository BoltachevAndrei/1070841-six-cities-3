import React from 'react';
import PlaceCard from './place-card.jsx';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history.js';

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
  },
  previewImage: `img/amsterdam.jpg`
};

const imageSizeHeight = 200;
const imageSizeWidth = 260;

it(`PlaceCard renders correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <PlaceCard
            offer={offer}
            cardClass={cardClass}
            wrapperClass={wrapperClass}
            onPlaceCardClick={() => {}}
            onPlaceCardMouseOver={() => {}}
            onPlaceCardMouseLeave={() => {}}
            imageSizeHeight={imageSizeHeight}
            imageSizeWidth={imageSizeWidth}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
