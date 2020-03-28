import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history.js';
import NoFavorites from './no-favorites.jsx';

const user = {
  'avatar_url': `img/1.png`,
  'email': `Oliver.conner@gmail.com`,
  'id': 1,
  'is_pro': false,
  'name': `Oliver.conner`
};

it(`NoFavorites renders correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <NoFavorites
            user={user}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
