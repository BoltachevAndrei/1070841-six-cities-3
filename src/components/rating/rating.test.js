import React from 'react';
import renderer from 'react-test-renderer';
import Rating from './rating.jsx';

const rating = 3.5;

const type = `property`;

it(`Rating renders correctly`, () => {
  const tree = renderer
    .create(
        <Rating
          rating={rating}
          type={type}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
