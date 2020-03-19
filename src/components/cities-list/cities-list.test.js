import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list.jsx';

const citiesList = [
  {
    name: `Test city`
  }
];

const activeCity = {
  name: `Test city`
};

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
