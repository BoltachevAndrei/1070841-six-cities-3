import React from 'react';
import Main from './main';
import renderer from 'react-test-renderer';

const placesCountTest = 111;

const placesNamesTest = [
  `Small village house`,
  `Studio apartment`,
  `2 stage apartment`
];

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main
      placesCount={placesCountTest}
      placesNames={placesNamesTest}
      onLocationsItemClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
