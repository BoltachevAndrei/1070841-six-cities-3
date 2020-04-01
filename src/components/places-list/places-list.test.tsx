import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import {SortTypeList} from '../../types';
import {doNothing} from '../../utils';
import PlacesList from './places-list';

const listClass = `cities__places-list places__list tabs__content`;
const cardClass = `cities__place-card place-card`;
const wrapperClass = `cities__image-wrapper place-card__image-wrapper`;

const sortType = SortTypeList.POPULAR;

const offers = [
  {
    id: 111,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    isPremium: true,
    images: [
      `img/amsterdam.jpg`
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
    goodsInside: [
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
  },
  {
    id: 333,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    isPremium: false,
    images: [
      `img/amsterdam@2x.jpg`
    ],
    price: 444,
    isBookmarked: false,
    rating: 5,
    title: `Test title 2`,
    description: `Test description`,
    features: {
      entire: `Test type 2`,
      bedrooms: `33`,
      adults: `55`
    },
    goodsInside: [
      `MiniBar`
    ],
    host: {
      id: 1,
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    previewImage: `img/amsterdam@2x.jpg`,
    coordinates: [
      52.370216,
      4.895168
    ],
    zoom: 12
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
            sortType={sortType}
            listClass={listClass}
            cardClass={cardClass}
            wrapperClass={wrapperClass}
            imageSizeHeight={imageSizeHeight}
            imageSizeWidth={imageSizeWidth}
            onPlaceCardClick={doNothing}
            onPlaceCardMouseOver={doNothing}
            onPlaceCardMouseLeave={doNothing}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
