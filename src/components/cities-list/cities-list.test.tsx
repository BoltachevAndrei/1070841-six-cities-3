import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CitiesList from './cities-list';
import {doNothing} from '../../utils';

const citiesList = [
  {
    name: `Test city`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  }
];

const activeCity = {
  name: `Test city`,
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10
  }
};

it(`CitiesList renders correctly`, () => {
  const tree = renderer
    .create(<CitiesList
      citiesList={citiesList}
      activeCity={activeCity}
      onCityClick={doNothing}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
