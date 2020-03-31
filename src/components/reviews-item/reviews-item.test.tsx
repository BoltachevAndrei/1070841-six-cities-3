import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ReviewsItem from './reviews-item';

const review = {
  id: 203,
  user: {
    id: 1,
    name: `Test User`,
    avatar: `img/avatar.svg`,
    isSuper: true
  },
  text: `Test review text`,
  rating: 4,
  date: new Date(`1995-06-24`)
};

it(`ReviewsItem renders correctly`, () => {
  const tree = renderer
    .create(
        <ReviewsItem
          review={review}
        />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
