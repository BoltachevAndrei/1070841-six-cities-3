import React from 'react';
import Map from './map.jsx';
import renderer from 'react-test-renderer';

const offers = [
  {coordinates: [52.3709553943508, 4.87309666406198]},
  {coordinates: [52.3709553943508, 4.90309666406198]},
];

const card = 0;

const activeCity = {
  name: `Test city 1`,
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10
  }
};

it(`Map renders correctly`, () => {
  document.body.innerHTML =
    `<div id="map"></div>`;
  const tree = renderer
    .create(<Map
      offers={offers}
      card={card}
      activeCity={activeCity}
    />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
