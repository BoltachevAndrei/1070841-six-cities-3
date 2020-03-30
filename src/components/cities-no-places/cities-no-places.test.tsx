import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CitiesNoPlaces from './cities-no-places';

const activeCity = {
  name: `Moscow`,
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10
  }
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
