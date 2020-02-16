import React from 'react';
import Offer from './offer.jsx';
import renderer from 'react-test-renderer';

const offer = {
  id: 777,
  isPremium: true,
  images: [
    `img/amsterdam.jpg`
  ],
  price: 111,
  isBookmarked: false,
  rating: 3,
  title: `Test title`,
  description: `Test description`,
  features: {
    entire: `Palace`,
    bedrooms: `33 Bedrooms`,
    adults: `Max 55 adults`
  },
  inside: [
    `MiniBar`
  ],
  user: {
    name: `Ivan`,
    avatar: `img/avatar.svg`,
    isSuper: true
  }
};

it(`Offer renders correctly`, () => {
  const tree = renderer
    .create(<Offer
      offer={offer}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
