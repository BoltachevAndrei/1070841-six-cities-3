import React from 'react';
import {Router} from 'react-router-dom';
import history from '../../history.js';
import renderer from 'react-test-renderer';
import ProfileLink from './profile-link.jsx';

const user = {
  'avatar_url': `img/1.png`,
  'email': `Oliver.conner@gmail.com`,
  'id': 1,
  'is_pro': false,
  'name': `Oliver.conner`
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
