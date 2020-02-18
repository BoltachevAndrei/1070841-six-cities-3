import React from 'react';
import Map from './map.jsx';
import renderer from 'react-test-renderer';

const offers = [
  {coordinates: [52.3709553943508, 4.87309666406198]},
  {coordinates: [52.3709553943508, 4.90309666406198]},
];

it(`Map renders correctly`, () => {
  document.body.innerHTML =
    `<div id="map"></div>`;
  const tree = renderer
    .create(<Map
      offers={offers}
    />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
