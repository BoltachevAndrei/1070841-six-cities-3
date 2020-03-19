import React from 'react';
import renderer from 'react-test-renderer';
import CitiesNoPlaces from './cities-no-places.jsx';

const activeCity = {
  name: `Moscow`
};

it(`CititesNoPlaces renders correctly`, () => {
  const tree = renderer
    .create(
        <CitiesNoPlaces
          activeCity={activeCity}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
