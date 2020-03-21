import React from 'react';
import renderer from 'react-test-renderer';
import Favorites from './favorites.jsx';

const user = {
  'avatar_url': `img/1.png`,
  'email': `Oliver.conner@gmail.com`,
  'id': 1,
  'is_pro': false,
  'name': `Oliver.conner`
};

it(`Favorites renders correctly`, () => {
  const tree = renderer
    .create(
        <Favorites
          user={user}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
