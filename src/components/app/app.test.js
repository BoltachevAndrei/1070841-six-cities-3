import React from 'react';
import App from './app';
import renderer from 'react-test-renderer';

const placesCountTest = 999;

const placesNamesTest = [
  `1 room apartment`,
  `2 room apartment`,
  `3 room apartment`
];

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App
      placesCount={placesCountTest}
      placesNames={placesNamesTest}
      onLocationsItemClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
