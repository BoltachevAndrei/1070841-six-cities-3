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
  image: `img/amsterdam.jpg`,
  price: 222,
  isBookmarked: true,
  rating: 1,
  title: `Test title 1`,
  type: `Test type 1`,
};

it(`Should mouse over card event be registered`, () => {
  const onPlaceCardMouseOver = jest.fn();
  const placeCard = shallow(
      <PlaceCard
        offer={offer}
        onPlaceCardMouseOver={onPlaceCardMouseOver}
      />
  );
  const cardItem = placeCard.find(`.place-card`);
  cardItem.simulate(`mouseover`);
  expect(onPlaceCardMouseOver.mock.calls.length).toBe(1);
});
