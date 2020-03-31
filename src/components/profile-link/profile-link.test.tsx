import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import ProfileLink from './profile-link';

const user = {
  avatar: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isSuper: false,
  name: `Oliver.conner`
};

it(`ProfileLink renders correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <ProfileLink
            user={user}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
