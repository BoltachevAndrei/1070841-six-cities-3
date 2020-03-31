import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Main from './main';
import {SortTypeList} from '../../types';
import {doNothing} from '../../utils';

configure({
  adapter: new Adapter()
});

const placesCountTest = 111;

const activeCity = {
  name: `Amsterdam`,
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10
  }
};

const user = {
  avatar: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isSuper: false,
  name: `Oliver.conner`
};

const sortType = SortTypeList.POPULAR;

const card = 0;

const citiesList = [
  {
    name: `Paris`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  },
  {
    name: `Cologne`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  },
  {
    name: `Brussels`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  },
  {
    name: `Amsterdam`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  },
  {
    name: `Hamburg`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  },
  {
    name: `Dusseldorf`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  }
];

const offers = [
  {
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
    previewImage: `img/room.jpg`,
    coordinates: [
      52.370216,
      4.895168
    ],
    zoom: 12
  },
  {
    id: 333,
    city: {
      name: `Test city 2`,
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
    inside: [
      `MiniBar`
    ],
    host: {
      id: 1,
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    previewImage: `img/room.jpg`,
    coordinates: [
      52.370216,
      4.895168
    ],
    zoom: 12
  }
];

it(`Should locations item be pressed`, () => {
  const onPlaceCardClick = jest.fn();
  const main = shallow(
      <Main
        placesCount={placesCountTest}
        offers={offers}
        activeCity={activeCity}
        citiesList={citiesList}
        sortType={sortType}
        card={card}
        user={user}
        onPlaceCardClick={onPlaceCardClick}
        onCityClick={doNothing}
        onPlaceCardMouseOver={doNothing}
        onPlaceCardMouseLeave={doNothing}
      />
  );
  const locationsItems = main.find(`.place-card__name`);
  locationsItems.forEach((locationsItem) => {
    locationsItem.props().onClick();
  });
  expect(onPlaceCardClick.mock.calls.length).toBe(locationsItems.length);
});
