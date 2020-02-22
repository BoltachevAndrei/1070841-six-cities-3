import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list.jsx';

const reviews = [
  {
    id: 201,
    user: {
      name: `Test review user 1`,
      avatar: `img/avatar.jpg`
    },
    text: `Test review text 1`,
    rating: 4,
    date: new Date(`2000-04-24`)
  },
  {
    id: 202,
    user: {
      name: `Test review user 2`,
      avatar: `img/avatar.jpg`,
    },
    text: `Test review text 2`,
    rating: 4,
    date: new Date(`1990-05-24`)
  }
];

it(`ReviewsList renders correctly`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews={reviews}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
