import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import {doNothing} from '../../utils';
import HomeLink from './home-link';

it(`HomeLink renders correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <HomeLink
            onHomeLinkClick={doNothing}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
