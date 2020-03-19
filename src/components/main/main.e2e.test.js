import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({
  adapter: new Adapter()
});

const placesCountTest = 111;

const activeCity = {
  name: `Amsterdam`
};

const sortType = `Popular`;

const card = 0;

const citiesList = [
  {
    name: `Paris`
  },
  {
    name: `Cologne`
  },
  {
    name: `Brussels`
  },
  {
    name: `Amsterdam`
  },
  {
    name: `Hamburg`
  },
  {
    name: `Dusseldorf`
  }
];

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
        onPlaceCardClick={onPlaceCardClick}
        onCityClick={() => {}}
      />
  );
  const locationsItems = main.find(`.place-card__name`);
  locationsItems.forEach((locationsItem) => {
    locationsItem.props().onClick();
  });
  expect(onPlaceCardClick.mock.calls.length).toBe(locationsItems.length);
});
