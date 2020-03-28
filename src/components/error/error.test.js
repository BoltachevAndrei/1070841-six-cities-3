import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history.js';
import Error from './error.jsx';

it(`Error renders correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Error />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
