import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PlaceCard from './place-card';
import {Router} from 'react-router-dom';
import history from '../../history';
import {doNothing} from '../../utils';

const cardClass = `cities__place-card place-card`;
const wrapperClass = `cities__image-wrapper place-card__image-wrapper`;

const offer = {
  id: 111,
  city: {
    name: `Test city 2`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  },
  isPremium: true,
  images: [
    `img/amsterdam.jpg`,
  ],
  price: 222,
  isBookmarked: true,
  rating: 1,
  title: `Test title 1`,
  description: `Test description`,
  features: {
    entire: `Test type 1`,
    bedrooms: `33`,
    adults: `55`
  },
  inside: [
    `MiniBar`
  ],
  host: {
    id: 1,
    name: `Ivan`,
    avatar: `img/avatar.svg`,
    isSuper: true
  },
  previewImage: `img/amsterdam.jpg`,
  coordinates: [
    52.370216,
    4.895168
  ],
  zoom: 12
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
            onPlaceCardClick={doNothing}
            onPlaceCardMouseOver={doNothing}
            onPlaceCardMouseLeave={doNothing}
            imageSizeHeight={imageSizeHeight}
            imageSizeWidth={imageSizeWidth}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
