import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const offer = {
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
};

it(`Should mouse over card event be registered`, () => {
  const onPlaceCardMouseOver = jest.fn();
  const placeCard = shallow(
      <PlaceCard
        offer={offer}
        onPlaceCardMouseOver={onPlaceCardMouseOver}
        onPlaceCardClick={() => {}}
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
        onPlaceCardMouseOver={() => {}}
        onPlaceCardClick={onPlaceCardMouseClick}
      />
  );
  const cardHeader = placeCard.find(`.place-card__name`);
  cardHeader.simulate(`click`);
  expect(onPlaceCardMouseClick.mock.calls.length).toBe(1);
});
