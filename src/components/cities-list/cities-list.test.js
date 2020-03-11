import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list.jsx';

const citiesList = [`Test city`];

const activeCity = `Test city`;

it(`CitiesList renders correctly`, () => {
  const tree = renderer
    .create(<CitiesList
      citiesList={citiesList}
      activeCity={activeCity}
      onCityClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
