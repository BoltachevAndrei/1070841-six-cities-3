import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import {doNothing} from '../../utils';
import Error from './error';

it(`Error renders correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Error
            onHomeLinkClick={doNothing}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
