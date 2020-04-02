import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SignIn from './sign-in';
import {Router} from 'react-router-dom';
import history from '../../history';
import {doNothing} from '../../utils';

it(`SignIn renders correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <SignIn
            onSubmit={doNothing}
            onHomeLinkClick={doNothing}
          />
        </Router>
    )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
