import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';
import {doNothing} from '../../utils';

configure({
  adapter: new Adapter()
});

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

it(`Should mouse over card event be registered`, () => {
  const onPlaceCardMouseOver = jest.fn();
  const placeCard = shallow(
      <PlaceCard
        offer={offer}
        cardClass={cardClass}
        wrapperClass={wrapperClass}
        imageSizeHeight={imageSizeHeight}
        imageSizeWidth={imageSizeWidth}
        onPlaceCardMouseOver={onPlaceCardMouseOver}
        onPlaceCardMouseLeave={doNothing}
        onPlaceCardClick={doNothing}
      />
  );
  const cardItem = placeCard.find(`.place-card`);
  cardItem.simulate(`mouseover`);
  expect(onPlaceCardMouseOver.mock.calls.length).toBe(1);
});

it(`Should mouse click on place-card header be registered`, () => {
  const onPlaceCardMouseClick = jest.fn();
  const placeCard = shallow(
      <PlaceCard
        offer={offer}
        cardClass={cardClass}
        wrapperClass={wrapperClass}
        imageSizeHeight={imageSizeHeight}
        imageSizeWidth={imageSizeWidth}
        onPlaceCardMouseOver={doNothing}
        onPlaceCardMouseLeave={doNothing}
        onPlaceCardClick={onPlaceCardMouseClick}
      />
  );
  const cardHeader = placeCard.find(`.place-card__name`);
  cardHeader.simulate(`click`);
  expect(onPlaceCardMouseClick.mock.calls.length).toBe(1);
});
