import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Rating from './rating';

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
