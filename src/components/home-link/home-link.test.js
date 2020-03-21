import React from 'react';
import {Router} from 'react-router-dom';
import history from '../../history.js';
import renderer from 'react-test-renderer';
import HomeLink from './home-link.jsx';

it(`HomeLink renders correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <HomeLink />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
